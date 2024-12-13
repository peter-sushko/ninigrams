import {Devvit} from '@devvit/public-api'

const colors = [
  "#E0E0E0", // light grey
  "#333333", // dark grey (black)
  "#FFFFFF"  // white
];

// Load puzzle data from JSON file
const loadPuzzle = (data: any) => {
  const {
    name,
    clueRowData,
    clueColData,
    maxClueRows,
    maxClueCols,
    solution,
  } = data;
  return {
    name,
    clueRowData,
    clueColData,
    maxClueRows,
    maxClueCols,
    solution,
  };
};

import data from "./giraffe.json" 
const puzzle = loadPuzzle(data)
const clueRows = puzzle.maxClueRows; // maximum rows reserved for clues
const clueCols = puzzle.maxClueCols; // maximum cols reserved for clues
const playableRows = puzzle.clueRowData.length; // standard grid assumes 15
const playableCols = puzzle.clueColData.length; // standard grid assumes 15
const width = clueCols + playableCols;
const height = clueRows + playableRows;
const pixelSize = 22; // Increased from 16 to 24 pixels

const blankCanvas = new Array(width * height).fill(0); // Default to light grey (index 0)
const defaultColor = 0; // Set default color to light grey

// Function to split an array into chunks of a specified size
const splitArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

type PageProps = {
  setPage: (page: 'welcome' | 'game') => void;
};

Devvit.addCustomPostType({
  name: 'Name', 
  height: 'regular',
  render: context => {
    const { useState } = context;
    const [data, setData] = useState(blankCanvas);
    const [submissionResult, setSubmissionResult] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<'welcome' | 'game'>('welcome');

    const WelcomeScreen = ({ setPage }: PageProps) => (
      <vstack
        width="100%"
        height="100%"
        alignment="middle center"
        backgroundColor="Periwinkle-300"
        gap="medium"
      >
        <text size="xlarge">Welcome to Ninigrams!</text>
        <button 
          onPress={() => setPage('game')}
          size="medium"
        >
          Play!
        </button>
      </vstack>
    );

    const checkSolution = () => {
      // Convert the 1D array to 2D array, skipping clue cells
      const currentBoard = [];
      for (let i = clueRows; i < height; i++) {
        const row = [];
        for (let j = clueCols; j < width; j++) {
          const cellValue = data[i * width + j];
          // Map colors to solution values:
          // grey (0) -> -1
          // black (1) -> 1
          // white (2) -> 0
          const mappedValue = cellValue === 0 ? -1 : cellValue === 1 ? 1 : 0;
          row.push(mappedValue);
        }
        currentBoard.push(row);
      }

      // Compare with solution
      const isCorrect = currentBoard.every((row, i) =>
        row.every((cell, j) => {
          // Convert solution 0s and 1s to match our mapping (-1, 1, 0)
          const solutionValue = puzzle.solution[i][j] === 0 ? 0 : 1;
          return cell === solutionValue;
        })
      );

      setSubmissionResult(isCorrect ? 'winner' : 'you have a mistake');
    };

    const Canvas = () => {
      const clearGrid = () => {
        setData([...blankCanvas]);
        setSubmissionResult(''); // Clear the result message when grid is cleared
      }
      const grid = splitArray(data, width).map((row, rowIndex) => {
        const renderedRow = row.map((_, colIndex) => {
          const isClueRow = rowIndex < clueRows; // current row is clue seq
          const isClueCol = colIndex < clueCols; // current col is clue seq

          // Empty subgrid in top lefthand corner
          if (isClueRow && isClueCol) {
            return (
              <hstack
                key={`empty-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
              ></hstack>
            );
          }

          if (isClueRow) {
            const clueIndex = colIndex - clueCols; // index of clue in clueColData
            const clueArray = puzzle.clueColData[clueIndex]; // array of clues in curr col
            // Align clues to the bottom of the column sequences at the top of grid
            const clueValue = clueArray?.[clueArray.length - clueRows + rowIndex] ?? ""; // clue value (default to empty)
            return (
              <hstack
                key={`clueRow-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
                alignment="center"
                border="thin" // Add border to the clue cell
                backgroundColor="PureGray-400"
              >
                <text
                  alignment="center"
                  color="#000000" // Change text color to black
                >
                  {clueValue}
                </text>
              </hstack>
            );
          }

          if (isClueCol) {
            const clueIndex = rowIndex - clueRows; // index of clue in clueRowData
            const clueArray = puzzle.clueRowData[clueIndex]; // array of clues in curr row
            // Align clues to the right of the row sequences to the left of grid
            const clueValue = clueArray?.[clueArray.length - clueCols + colIndex] ?? ""; // clue value (default to empty)
            return (
              <hstack
                key={`clueCol-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
                alignment="center"
                border="thin" // Add border to the clue cell
                backgroundColor="PureGray-400"
              >
                <text
                  alignment="center"
                  color="#000000" // Change text color to black
                >
                  {clueValue}
                </text>
              </hstack>
            );
          }

          // Render a single cell in the grid
          return (
            <hstack
              key={`pixel-${rowIndex}-${colIndex}`}
              onPress={() => { // To execute upon clicking on cell
                const newData = [...data]; // Copy data array
                const index = rowIndex * width + colIndex; 
                // Cycle through colors: grey (0) -> black (1) -> white (2) -> grey (0)
                newData[index] = (newData[index] + 1) % colors.length;
                setData(newData);
              }}
              height={`${pixelSize}px`}
              width={`${pixelSize}px`}
              backgroundColor={colors[data[rowIndex * width + colIndex]]}
              border="thin"
              borderColor="#CCCCCC"
            ></hstack>
          );
        });

        return (
          <hstack key={`row-${rowIndex}`}>
            {renderedRow}
          </hstack>
        );
      });

      return (
        <vstack
          width="100%"
          height="100%"
          alignment="middle center"
          // backgroundColor="Periwinkle-300"
        >
          <image
            url="sakura_test.jpg" // Reference image in the assets folder
            imageWidth={100}
            imageHeight={100}
          />
          {grid}
          <hstack gap="small">
            <button 
              onPress={clearGrid} 
              size="small"
              width="75px"
            >
              CLEAR
            </button>
            <button 
              onPress={checkSolution} 
              size="small"
              width="75px"
            >
              SUBMIT
            </button>
          </hstack>
          {submissionResult && <text>{submissionResult}</text>}
        </vstack>
      );
    };

    return (
      <blocks>
        <vstack gap="small" width="100%" height="100%" alignment="middle center">
          {currentPage === 'welcome' 
            ? <WelcomeScreen setPage={setCurrentPage} />
            : <Canvas />
          }
        </vstack>
      </blocks>
    );
  },
});

export default Devvit