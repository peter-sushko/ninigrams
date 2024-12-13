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

import data from "./seahorse.json"
const puzzle = loadPuzzle(data)
const clueRows = puzzle.maxClueRows;
const clueCols = puzzle.maxClueCols;
const playableRows = puzzle.clueRowData.length;
const playableCols = puzzle.clueColData.length;
const width = clueCols + playableCols;
const height = clueRows + playableRows;
const pixelSize = 22;

const blankCanvas = new Array(width * height).fill(0);
const defaultColor = 0;

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
      const currentBoard = [];
      for (let i = clueRows; i < height; i++) {
        const row = [];
        for (let j = clueCols; j < width; j++) {
          const cellValue = data[i * width + j];
          const mappedValue = cellValue === 0 ? -1 : cellValue === 1 ? 1 : 0;
          row.push(mappedValue);
        }
        currentBoard.push(row);
      }

      const isCorrect = currentBoard.every((row, i) =>
        row.every((cell, j) => {
          const solutionValue = puzzle.solution[i][j] === 0 ? 0 : 1;
          return cell === solutionValue;
        })
      );

      setSubmissionResult(isCorrect ? 'winner' : 'you have a mistake');
    };

    const Canvas = () => {
      const clearGrid = () => {
        setData([...blankCanvas]);
        setSubmissionResult('');
      }

      const grid = splitArray(data, width).map((row, rowIndex) => {
        const renderedRow = row.map((_, colIndex) => {
          const isClueRow = rowIndex < clueRows;
          const isClueCol = colIndex < clueCols;

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
            const clueIndex = colIndex - clueCols;
            const clueArray = puzzle.clueColData[clueIndex];
            const clueValue = clueArray?.[clueArray.length - clueRows + rowIndex] ?? "";
            return (
              <hstack
                key={`clueRow-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
                alignment="center"
                border="thin"
                backgroundColor="PureGray-400"
              >
                <text
                  alignment="center"
                  color="#000000"
                >
                  {clueValue}
                </text>
              </hstack>
            );
          }

          if (isClueCol) {
            const clueIndex = rowIndex - clueRows;
            const clueArray = puzzle.clueRowData[clueIndex];
            const clueValue = clueArray?.[clueArray.length - clueCols + colIndex] ?? "";
            return (
              <hstack
                key={`clueCol-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
                alignment="center"
                border="thin"
                backgroundColor="PureGray-400"
              >
                <text
                  alignment="center"
                  color="#000000"
                >
                  {clueValue}
                </text>
              </hstack>
            );
          }

          return (
            <hstack
              key={`pixel-${rowIndex}-${colIndex}`}
              onPress={() => {
                const newData = [...data];
                const index = rowIndex * width + colIndex;
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
        >
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