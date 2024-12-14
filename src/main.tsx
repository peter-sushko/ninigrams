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
const clueRows = puzzle.maxClueRows;
const clueCols = puzzle.maxClueCols;
const playableRows = puzzle.clueRowData.length; 
const playableCols = puzzle.clueColData.length;
const width = clueCols + playableCols;
const height = clueRows + playableRows;
const pixelSize = 22;
const postTypeHeight = width > 10 ? 'tall' : 'regular'; // Precompute the height

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
  height: postTypeHeight,
  render: context => {
    const { useState } = context;
    const [data, setData] = useState(blankCanvas);
    const [submissionResult, setSubmissionResult] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<'welcome' | 'game'>('welcome');
    const [hintResults, setHintResults] = useState<{ rows: boolean[], cols: boolean[] } | null>(null);

    const WelcomeScreen = ({ setPage }: PageProps) => (
      <vstack
        width="100%"
        height="100%"
        alignment="middle center"
        backgroundColor="rgb(144,220,230)"
        gap="medium"
      >
        <image
        url="reddit_logo.jpg" 
            imageWidth={67}
            imageHeight={67}
        />
        <text color="LightBlue-950" size="xxlarge" weight="bold" alignment="center">Ninigrams</text>
        <text color="LightBlue-950" wrap width="63" alignment="center" size="large">
        Fill the grid by following the number clues! Each number represents how many black tiles to place consecutively in that row or column. Order matters. Leave at least one white tile between sequences of black tiles. No grey tiles should remain.
        </text>
        <button 
          onPress={() => setPage('game')}
          size="medium"
        >
          Start Puzzle
        </button>
      </vstack>
    );

    const checkSolution = () => {
      const currentBoard = [];
      let hasGreyCell = false;

      for (let i = clueRows; i < height; i++) {
        const row = [];
        for (let j = clueCols; j < width; j++) {
          const cellValue = data[i * width + j];
          if (cellValue === 0) { // Grey cell
            hasGreyCell = true;
          }
          const mappedValue = cellValue === 0 ? -1 : cellValue === 1 ? 1 : 0;
          row.push(mappedValue);
        }
        currentBoard.push(row);
      }

      if (hasGreyCell) {
        setSubmissionResult("No grey tiles should remain!");
        return;
      }

      const isCorrect = currentBoard.every((row, i) =>
        row.every((cell, j) => {
          const solutionValue = puzzle.solution[i][j] === 0 ? 0 : 1;
          return cell === solutionValue;
        })
      );

      setSubmissionResult(isCorrect ? 'Congratulations, you solved the puzzle!🎉' : 'Not quite there yet!');
    };

    const Canvas = () => {
      const clearGrid = () => {
        setData([...blankCanvas]);
        setSubmissionResult('');
        setHintResults(null); // Clear hint results on grid clear
      }

      const calculateHints = () => {
        const rowHints = Array(height).fill(false);
        const colHints = Array(width).fill(false);

        for (let rowIndex = clueRows; rowIndex < height; rowIndex++) {
          rowHints[rowIndex] = checkRowMatch(rowIndex);
        }

        for (let colIndex = clueCols; colIndex < width; colIndex++) {
          colHints[colIndex] = checkColMatch(colIndex);
        }

        setHintResults({ rows: rowHints, cols: colHints });
      }

      const checkRowMatch = (rowIndex: number): boolean => {
        for (let colIndex = clueCols; colIndex < width; colIndex++) {
          const cellValue = data[rowIndex * width + colIndex];
          if (cellValue === 0) { // Grey cell
            return false;
          }
          const solutionValue = puzzle.solution[rowIndex - clueRows][colIndex - clueCols];
          if ((cellValue === 1 ? 1 : 0) !== solutionValue) {
            return false;
          }
        }
        return true;
      };

      const checkColMatch = (colIndex: number): boolean => {
        for (let rowIndex = clueRows; rowIndex < height; rowIndex++) {
          const cellValue = data[rowIndex * width + colIndex];
          if (cellValue === 0) { // Grey cell
            return false;
          }
          const solutionValue = puzzle.solution[rowIndex - clueRows][colIndex - clueCols];
          if ((cellValue === 1 ? 1 : 0) !== solutionValue) {
            return false;
          }
        }
        return true;
      };

      // Pre-allocate space for hint row with an extra cell at the start
      const hintRow = (
        <hstack key="hint-row">
          <hstack
            key="hint-empty"
            height={`${pixelSize}px`}
            width={`${pixelSize}px`}
            alignment="center"
          ></hstack>
          {Array.from({ length: width }).map((_, colIndex) => (
            <hstack
              key={`hint-${colIndex}`}
              height={`${pixelSize}px`}
              width={`${pixelSize}px`}
              alignment="center"
            >
              <text
                alignment="center"
                color="#000000"
              >
                {hintResults && colIndex >= clueCols ? (hintResults.cols[colIndex] ? "✅" : "❌") : ""}
              </text>
            </hstack>
          ))}
        </hstack>
      );

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
                backgroundColor="PureGray-350"
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
                backgroundColor="PureGray-350"
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
            <hstack
              key={`hint-left-${rowIndex}`}
              height={`${pixelSize}px`}
              width={`${pixelSize}px`}
              alignment="center"
            >
              <text
                alignment="center"
                color="#000000"
              >
                {hintResults && rowIndex >= clueRows ? (hintResults.rows[rowIndex] ? "✅" : "❌") : ""}
              </text>
            </hstack>
            {renderedRow}
          </hstack>
        );
      });

      return (
        <zstack width="100%" height="100%">
          <image
            url="sakura_river.gif" // Reference image in the assets folder
            imageWidth={350}
            imageHeight={200}
            height="100%"
            width="100%"
            resizeMode="cover"
          />
          <vstack
            width="100%"
            height="100%"
            alignment="middle center"
          >
            {hintRow} {/* Always render hint row */}
            {grid}
            <spacer size="small" />
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
                appearance="success"
              >
                SUBMIT
              </button>
              <button 
                onPress={calculateHints} 
                size="small"
                width="75px"
              >
                HINT
              </button>
            </hstack>
            <vstack height="30px" alignment="middle center">
              {submissionResult && <text color="LightBlue-950" 
          size="large" 
          alignment="center"
          >{submissionResult}</text>}
            </vstack>
          </vstack>
        </zstack>
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