import {Devvit} from '@devvit/public-api'

import data from "./man-in-hat.json"
import umbrellaData from "./umbrella.json"

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

const puzzle = loadPuzzle(data)
const umbrellaPuzzle = loadPuzzle(umbrellaData)

// Calculate tutorial dimensions correctly from umbrellaPuzzle data
const tutorialClueRows = umbrellaPuzzle.maxClueRows; //make this a variable
const tutorialClueCols = umbrellaPuzzle.maxClueCols;
const tutorialPlayableRows = 5; 
const tutorialPlayableCols = 5;
const tutorialWidth = tutorialClueCols + tutorialPlayableCols;
const tutorialHeight = tutorialClueRows + tutorialPlayableRows;
const blankTutorialCanvas = new Array(tutorialWidth * tutorialHeight).fill(0);

const clueRows = puzzle.maxClueRows;
const clueCols = puzzle.maxClueCols;
const playableRows = puzzle.clueRowData.length; 
const playableCols = puzzle.clueColData.length;
const width = clueCols + playableCols;
const height = clueRows + playableRows;
const postTypeHeight = width > 10 ? 'tall' : 'regular'; // Precompute the height

const blankCanvas = new Array(width * height).fill(0);

const splitArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

type PageProps = {
  setPage: (page: 'welcome' | 'game' | 'tutorial') => void;
};

// Add this type definition
type TutorialStep = {
  instruction: string;
  highlightCells?: number[];  // Array of cell indices to highlight
  expectedState?: number[];   // Expected grid state after this step
};

const tutorialSteps: TutorialStep[] = [
  {
    instruction: "Let's solve this simple umbrella puzzle together! First, look at row 2 - it has a '3'. This means there must be exactly 3 connected black squares in this row.",
  },
  {
    instruction: "Since row 2 has a width of 3, all squares must be filled in black. Click each square to make them black.",
    highlightCells: [/* indices for row 2 */],
    expectedState: [/* expected grid state */],
  },
  {
    instruction: "Great! Now look at column 2. It has a '3', and we already filled one square from the previous step. The other two must connect to it.",
    highlightCells: [/* indices for column 2 */],
    expectedState: [/* expected grid state */],
  },
  // Add more steps as needed
];

Devvit.addCustomPostType({
  name: 'Name', 
  height: postTypeHeight,
  render: context => {
    const { useState } = context;
    const [data, setData] = useState(blankCanvas);
    const [submissionResult, setSubmissionResult] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<'welcome' | 'game' | 'tutorial'>('welcome');
    const [hintResults, setHintResults] = useState<{ rows: boolean[], cols: boolean[] } | null>(null);
    const [showOverlay, setShowOverlay] = useState(false); // State to control solved screen
    const toggleOverlay = () => setShowOverlay(!showOverlay); // Function to toggle overlay

    const WelcomeScreen = ({ setPage }: PageProps) => (
      <zstack
        width="100%"
        height="100%"
      >
        <image
          url="sakura_river.jpg"
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
          gap="medium"
        >
          <vstack
            backgroundColor="rgba(220, 220, 220, 0.92)"
            padding="large"
            cornerRadius="medium"
            gap="medium"
            borderWidth = "thick"
            borderColor = "rgba(128, 128, 128, 1)"
            height="180px"
          >
            <text color="LightBlue-950" size="xxlarge" weight="bold" alignment="center">Ninigrams</text>
            <text color="LightBlue-950" wrap width="100%" alignment="center" size="large">
              Fill the grid by following number clues!
            </text>
            <hstack gap="medium" alignment="middle center">
              <button 
                onPress={() => setPage('tutorial')}
                size="medium"
              >
                How to Play
              </button>
              <button 
                onPress={() => setPage('game')}
                size="medium"
              >
                Start Puzzle
              </button>
            </hstack>
          </vstack>
        </vstack>
      </zstack>
    );

    const TutorialScreen = ({ setPage }: PageProps) => {
      const [showIntroText, setShowIntroText] = useState(true);
      const [tutorialStep, setTutorialStep] = useState(0);
      
      // Create a simplified grid component just for the tutorial
      const TutorialGrid = () => {
        const [tutorialGridState, setTutorialGridState] = useState(blankTutorialCanvas);

        // Function to disable specified cell
        const disableCell = (index: number, gridState: number[], setGridState: (newState: number[]) => void) => {
          const updatedState = [...gridState];
          updatedState[index] = 0; // Mark cell as disabled
          setGridState(updatedState);
        };
        
        const grid = splitArray(tutorialGridState, tutorialWidth).map((row, rowIndex) => {
          const renderedRow = row.map((_, colIndex) => {
            const isClueRow = rowIndex < tutorialClueRows;
            const isClueCol = colIndex < tutorialClueCols;

            if (isClueRow && isClueCol) {
              return (
                <hstack
                  key={`empty-${rowIndex}-${colIndex}`}
                  height="22px"
                  width="22px"
                ></hstack>
              );
            }

            if (isClueRow) {
              const clueIndex = colIndex - tutorialClueCols;
              const clueArray = umbrellaPuzzle.clueColData[clueIndex];
              const clueValue = clueArray?.[clueArray.length - tutorialClueRows + rowIndex] ?? "";
              return (
                <hstack
                  key={`clueRow-${rowIndex}-${colIndex}`}
                  height="22px"
                  width="22px"
                  alignment="center"
                  border="thin"
                  backgroundColor="PureGray-350"
                >
                  <text alignment="center" color="#000000">{clueValue}</text>
                </hstack>
              );
            }

            if (isClueCol) {
              const clueIndex = rowIndex - tutorialClueRows;
              const clueArray = umbrellaPuzzle.clueRowData[clueIndex];
              const clueValue = clueArray?.[clueArray.length - tutorialClueCols + colIndex] ?? "";
              return (
                <hstack
                  key={`clueCol-${rowIndex}-${colIndex}`}
                  height="22px"
                  width="22px"
                  alignment="center"
                  border="thin"
                  backgroundColor="PureGray-350"
                >
                  <text alignment="center" color="#000000">{clueValue}</text>
                </hstack>
              );
            }

            const index = rowIndex * tutorialWidth + colIndex;
            const isHighlighted = tutorialSteps[tutorialStep].highlightCells?.includes(index) ?? false;
            const isDisabled = tutorialGridState[index] === -1;

            return (
              <hstack
                key={`pixel-${rowIndex}-${colIndex}`}
                onPress={() => {
                  if (!isDisabled) {
                    const newData = [...tutorialGridState];
                    newData[index] = (newData[index] + 1) % colors.length;
                    setTutorialGridState(newData);
                  }
                }}
                height="22px"
                width="22px"
                backgroundColor={colors[tutorialGridState[index]]}
                border={isHighlighted ? "thick" : "thin"}
                borderColor={isHighlighted ? "#FF0000" : "#CCCCCC"}
              ></hstack>
            );
          });

          // Disable the bottom-right cell (for testing purposes)
          const bottomRightIndex = tutorialWidth * tutorialHeight - 1;
          disableCell(bottomRightIndex, tutorialGridState, setTutorialGridState);

          return (
            <hstack key={`row-${rowIndex}`}>
              {renderedRow}
            </hstack>
          );
        });

        return (
          <vstack gap="medium">
            <text color="LightBlue-950" wrap width="350px" alignment="center" size="medium">
              {tutorialSteps[tutorialStep].instruction}
            </text>
            <vstack alignment="middle center">
              {grid}
            </vstack>
          </vstack>
        );
      };

      return (
        <zstack width="100%" height="100%">
          <image
            url="sakura_river.jpg"
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
            gap="medium"
          >
            <vstack
              backgroundColor="rgba(220, 220, 220, 0.92)"
              padding="medium"
              paddingTop="small"
              cornerRadius="medium"
              gap="small"
              height="90%"
              width="400px"
            >
              <text color="LightBlue-950" size="xxlarge" weight="bold" alignment="center">
                Tutorial
              </text>
              
              {showIntroText ? (
                <vstack gap="small">
                  <text color="LightBlue-950" wrap width="350px" alignment="center" size="medium">
                    1. Each row and column has numbers that tell you how many consecutive black squares should be in that line{"\n"}
                    2. Click a square to cycle through colors: grey → black → white{"\n"}
                    3. Use the numbers as clues to complete the picture!{"\n"}
                    4. Use HINT to check your progress{"\n"}
                    5. Use CLEAR to reset the grid
                  </text>
                </vstack>
              ) : (
                <TutorialGrid />
              )}
              
              <hstack gap="medium" alignment="middle center">
                <button 
                  onPress={() => {
                    if (showIntroText) {
                      setShowIntroText(false);
                    } else if (tutorialStep < tutorialSteps.length - 1) {
                      setTutorialStep(tutorialStep + 1);
                    } else {
                      setPage('welcome');
                    }
                  }}
                  size="medium"
                >
                  Continue
                </button>
                <button 
                  onPress={() => setPage('welcome')}
                  size="medium"
                >
                  Back to Menu
                </button>
              </hstack>
            </vstack>
          </vstack>
        </zstack>
      );
    };

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

      if (isCorrect) {
        setShowOverlay(true); // Show overlay when solved
      } else {
        setSubmissionResult('Not quite there yet!');
      }    
    };

    type CanvasProps = {
      puzzle: {
        maxClueCols: number;
        maxClueRows: number;
        clueColData: number[][];
        clueRowData: number[][];
        solution: number[][];
      };
      width?: number;
      height?: number;
      highlightCells?: number[];
      onGridUpdate?: (newData: number[]) => void;
      gridState?: number[] | null;
    };

    const Canvas = ({ 
      puzzle,
      width,
      height,
      highlightCells = [], 
      onGridUpdate = () => {}, 
      gridState = null
    }: CanvasProps) => {
      // Calculate dimensions based on whether we're in tutorial mode or main puzzle
      const isTutorial = Boolean(gridState);
      const effectiveWidth = isTutorial ? tutorialWidth : (width || puzzle.maxClueCols + puzzle.clueColData.length);
      const effectiveHeight = isTutorial ? tutorialHeight : (height || puzzle.maxClueRows + puzzle.clueRowData.length);
      const clueRowsToUse = isTutorial ? tutorialClueRows : puzzle.maxClueRows;
      const clueColsToUse = isTutorial ? tutorialClueCols : puzzle.maxClueCols;
      const currentData = gridState || data;
      const puzzleToUse = isTutorial ? umbrellaPuzzle : puzzle;

      const clearGrid = () => {
        const newData = isTutorial ? new Array(tutorialWidth * tutorialHeight).fill(0) : blankCanvas;
        if (gridState) {
          onGridUpdate(newData);
        } else {
          setData(newData);
        }
        setSubmissionResult('');
        setHintResults(null);
      }

      const calculateHints = () => {
        const rowHints = Array(effectiveHeight).fill(false);
        const colHints = Array(effectiveWidth).fill(false);

        for (let rowIndex = clueRowsToUse; rowIndex < effectiveHeight; rowIndex++) {
          rowHints[rowIndex] = checkRowMatch(rowIndex);
        }

        for (let colIndex = clueColsToUse; colIndex < effectiveWidth; colIndex++) {
          colHints[colIndex] = checkColMatch(colIndex);
        }

        setHintResults({ rows: rowHints, cols: colHints });
      }

      const checkRowMatch = (rowIndex: number): boolean => {
        for (let colIndex = clueColsToUse; colIndex < effectiveWidth; colIndex++) {
          const cellValue = currentData[rowIndex * effectiveWidth + colIndex];
          if (cellValue === 0) { // Grey cell
            return false;
          }
          const solutionValue = puzzleToUse.solution[rowIndex - clueRowsToUse][colIndex - clueColsToUse];
          if ((cellValue === 1 ? 1 : 0) !== solutionValue) {
            return false;
          }
        }
        return true;
      };

      const checkColMatch = (colIndex: number): boolean => {
        for (let rowIndex = clueRowsToUse; rowIndex < effectiveHeight; rowIndex++) {
          const cellValue = currentData[rowIndex * effectiveWidth + colIndex];
          if (cellValue === 0) { // Grey cell
            return false;
          }
          const solutionValue = puzzleToUse.solution[rowIndex - clueRowsToUse][colIndex - clueColsToUse];
          if ((cellValue === 1 ? 1 : 0) !== solutionValue) {
            return false;
          }
        }
        return true;
      };

      const grid = splitArray(currentData, effectiveWidth).map((row, rowIndex) => {
        const renderedRow = row.map((_, colIndex) => {
          const isClueRow = rowIndex < clueRowsToUse;
          const isClueCol = colIndex < clueColsToUse;

          if (isClueRow && isClueCol) {
            return (
              <hstack
                key={`empty-${rowIndex}-${colIndex}`}
                height="22px"
                width="22px"
              ></hstack>
            );
          }

          if (isClueRow) {
            const clueIndex = colIndex - clueColsToUse;
            const clueArray = puzzleToUse.clueColData[clueIndex];
            const clueValue = clueArray?.[clueArray.length - clueRowsToUse + rowIndex] ?? "";
            return (
              <hstack
                key={`clueRow-${rowIndex}-${colIndex}`}
                height="22px"
                width="22px"
                alignment="center"
                border="thin"
                backgroundColor="PureGray-350"
              >
                <text alignment="center" color="#000000">{clueValue}</text>
              </hstack>
            );
          }

          if (isClueCol) {
            const clueIndex = rowIndex - clueRowsToUse;
            const clueArray = puzzleToUse.clueRowData[clueIndex];
            const clueValue = clueArray?.[clueArray.length - clueColsToUse + colIndex] ?? "";
            return (
              <hstack
                key={`clueCol-${rowIndex}-${colIndex}`}
                height="22px"
                width="22px"
                alignment="center"
                border="thin"
                backgroundColor="PureGray-350"
              >
                <text alignment="center" color="#000000">{clueValue}</text>
              </hstack>
            );
          }

          const index = rowIndex * effectiveWidth + colIndex;
          return (
            <hstack
              key={`pixel-${rowIndex}-${colIndex}`}
              onPress={() => {
                const newData = [...currentData];
                newData[index] = (newData[index] + 1) % colors.length;
                if (gridState) {
                  onGridUpdate(newData);
                } else {
                  setData(newData);
                }
              }}
              height="22px"
              width="22px"
              backgroundColor={colors[currentData[index]]}
              border="thin"
              borderColor="#CCCCCC"
            ></hstack>
          );
        });

        return (
          <hstack key={`row-${rowIndex}`}>
            <hstack
              key={`hint-left-${rowIndex}`}
              height="22px"
              width="22px"
              alignment="center"
            >
              <text
                alignment="center"
                color="#000000"
              >
                {hintResults && rowIndex >= clueRowsToUse ? (hintResults.rows[rowIndex] ? "✅" : "❌") : ""}
              </text>
            </hstack>
            {renderedRow}
          </hstack>
        );
      });

      return (
        <zstack width="100%" height="100%">
          <image
            url="sakura_river.gif"
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
            <hstack key="hint-row">
              <hstack
                key="hint-empty"
                height="22px"
                width="22px"
                alignment="center"
              ></hstack>
              {Array.from({ length: effectiveWidth }).map((_, colIndex) => (
                <hstack
                  key={`hint-${colIndex}`}
                  height="22px"
                  width="22px"
                  alignment="center"
                >
                  <text
                    alignment="center"
                    color="#000000"
                  >
                    {hintResults && colIndex >= clueColsToUse ? (hintResults.cols[colIndex] ? "✅" : "❌") : ""}
                  </text>
                </hstack>
              ))}
            </hstack>
            {grid}
            <spacer size="small" />
            <hstack gap="small">
              <button 
                icon="home"
                onPress={() => setCurrentPage('welcome')}
                size="small"
                width="35px"
              >
                {/* HOME */}
              </button>
              <button 
                icon="help"
                onPress={() => setCurrentPage('tutorial')}
                size="small"
                width="35px"
              >
                {/* HELP */}
              </button>
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

          {showOverlay && (
            <zstack alignment="top end" width="100%" height="100%">
              <vstack
                alignment="middle center"
                width="100%" 
                height="100%" 
                backgroundColor="rgba(128, 128, 128, 0.8)" // Transparent grey background
              >
                <text color="White" size="xxlarge" weight="bold" alignment="center">
                  Congratulations, you solved the puzzle 🌸 
                </text>
              </vstack>
          
              <hstack padding="medium">
                <button
                  icon="close"
                  onPress={toggleOverlay}
                  size="small"
                />
              </hstack>
            </zstack>
          )} 
        </zstack>
      );
    };

    return (
      <blocks>
        <vstack gap="small" width="100%" height="100%" alignment="middle center">
          {currentPage === 'welcome' 
            ? <WelcomeScreen setPage={setCurrentPage} />
            : currentPage === 'tutorial'
            ? <TutorialScreen setPage={setCurrentPage} />
            : <Canvas 
                puzzle={puzzle}
                width={width}
                height={height}
              />
          }
        </vstack>
      </blocks>
    );
  },
});

export default Devvit