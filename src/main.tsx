import {Devvit} from '@devvit/public-api'

import data from "./giraffe.json"
import umbrellaData from "./umbrella.json"

Devvit.configure({
  redditAPI: true,
});

// Adds a new menu item to the subreddit allowing to create a new post
Devvit.addMenuItem({
  label: '4 Mobile version text wrap size 100%',
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: '4 100% Mobile version text wrap size',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading ...</text>
        </vstack>
      ),
    });
    ui.showToast({ text: 'Created post!' });
    ui.navigateTo(post);
  },
});

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
  // expectedState?: number[];   // Expected grid state after this step
  disabledList?: number[];   // Array of cell indices to disable
};

// Calculate the indices for all cells except row 1
const calculateDisabledCells = () => {
  const disabled: number[] = [];
  for (let row = 0; row < tutorialPlayableRows; row++) {
    if (row !== 1) { // Skip row 1 (second row)
      for (let col = 0; col < tutorialPlayableCols; col++) {
        const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
        disabled.push(index);
      }
    }
  }
  return disabled;
};

// Add this new function near the other calculate functions
const calculateDisabledCellsExceptHighlighted = (highlightedCells: number[]) => {
  const disabled: number[] = [];
  for (let row = 0; row < tutorialPlayableRows; row++) {
    for (let col = 0; col < tutorialPlayableCols; col++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      if (!highlightedCells.includes(index)) {
        disabled.push(index);
      }
    }
  }
  return disabled;
};

// First, let's create a helper function to calculate cell indices
const calculateCellIndex = (row: number, col: number) => 
  (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);

// Then modify the tutorial step
const column3Highlights = [
  calculateCellIndex(0, 2), // Row 0
  calculateCellIndex(2, 2), // Row 2
  calculateCellIndex(3, 2), // Row 3
  calculateCellIndex(4, 2), // Row 4
];

// First create constants for the remaining cells highlights
const remainingRowsHighlights = [
  calculateCellIndex(0, 1),
  calculateCellIndex(0, 3),
  calculateCellIndex(2, 1),
  calculateCellIndex(2, 3),
  calculateCellIndex(3, 1),
  calculateCellIndex(3, 3)
];

const tutorialSteps: TutorialStep[] = [
  {
    instruction: "Let's solve this puzzle together. Hit Continue!\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => 
      (Math.floor(i / tutorialPlayableCols) + tutorialClueRows) * tutorialWidth + 
      (i % tutorialPlayableCols) + tutorialClueCols
    ),
    highlightCells: [],
  },
  {
    instruction: "Let's begin with the second row. The clue for this row is 5: place five black cells in this row.",
    disabledList: calculateDisabledCells(),
    highlightCells: [
      ((tutorialClueRows + 1) * tutorialWidth) + tutorialClueCols,
      ((tutorialClueRows + 1) * tutorialWidth) + tutorialClueCols + 1,
      ((tutorialClueRows + 1) * tutorialWidth) + tutorialClueCols + 2,
      ((tutorialClueRows + 1) * tutorialWidth) + tutorialClueCols + 3,
      ((tutorialClueRows + 1) * tutorialWidth) + tutorialClueCols + 4,
    ],
  },
  {
    instruction: "Next, let's look at the middle column. This line should also have 5 black cells.",
    highlightCells: column3Highlights,
    disabledList: function() {
      return calculateDisabledCellsExceptHighlighted(column3Highlights);
    }(),
  },
  {
    instruction: "The first column's clue is 1: ensure there’s only one black cell and the rest are white.",
    highlightCells: [
      // First column (col 0) for all rows
      (tutorialClueRows * tutorialWidth) + tutorialClueCols, // Row 0
      ((tutorialClueRows + 2) * tutorialWidth) + tutorialClueCols, // Row 2
      ((tutorialClueRows + 3) * tutorialWidth) + tutorialClueCols, // Row 3
      ((tutorialClueRows + 4) * tutorialWidth) + tutorialClueCols, // Row 4
    ],
    disabledList: function() {
      const highlights = [
        (tutorialClueRows * tutorialWidth) + tutorialClueCols,
        ((tutorialClueRows + 2) * tutorialWidth) + tutorialClueCols,
        ((tutorialClueRows + 3) * tutorialWidth) + tutorialClueCols,
        ((tutorialClueRows + 4) * tutorialWidth) + tutorialClueCols,
      ];
      return calculateDisabledCellsExceptHighlighted(highlights);
    }(),
  },
  {
    instruction: "The same applies for the last column too: add white cells to follow the clue.",
    highlightCells: [
      // Last column (col 4) for all rows
      (tutorialClueRows * tutorialWidth) + tutorialClueCols + 4, // Row 0
      // ((tutorialClueRows + 1) * tutorialWidth) + tutorialClueCols + 4, // Row 1
      ((tutorialClueRows + 2) * tutorialWidth) + tutorialClueCols + 4, // Row 2
      ((tutorialClueRows + 3) * tutorialWidth) + tutorialClueCols + 4, // Row 3
      ((tutorialClueRows + 4) * tutorialWidth) + tutorialClueCols + 4, // Row 4
    ],
    disabledList: function() {
      const highlights = [
        (tutorialClueRows * tutorialWidth) + tutorialClueCols + 4,
        ((tutorialClueRows + 2) * tutorialWidth) + tutorialClueCols + 4,
        ((tutorialClueRows + 3) * tutorialWidth) + tutorialClueCols + 4,
        ((tutorialClueRows + 4) * tutorialWidth) + tutorialClueCols + 4,
      ];
      return calculateDisabledCellsExceptHighlighted(highlights);
    }(),
  },
  {
    instruction: "Fill in remaining cells in rows 1, 3 and 4 using the row clues.",
    highlightCells: remainingRowsHighlights,
    disabledList: function() {
      return calculateDisabledCellsExceptHighlighted(remainingRowsHighlights);
    }(),
  },
  {
    instruction: "Almost there! Now finish the puzzle on your own by placing the remaining cells.",
    highlightCells: [],
    disabledList: [], // Enable all cells for final step
  },
];

Devvit.addCustomPostType({
  name: 'Ninigram #1', 
  height: 'tall',
  // height: 'regular',
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
            // borderWidth="thick"
            borderColor="rgba(128, 128, 128, 1)"
            height="180px"
          >
            <hstack alignment="middle center" gap="small">
              <image
                url="flower_logo_no_bg.png"
                imageWidth={40} // Adjust width as needed
                imageHeight={40} // Adjust height as needed
                // alignment="center"
              />
              <text color="LightBlue-950" size="xxlarge" weight="bold" alignment="center">Ninigrams</text>
              <image
                url="flower_logo_no_bg.png"
                imageWidth={40} // Adjust width as needed
                imageHeight={40} // Adjust height as needed
                // alignment="center"
              />
            </hstack>
            <text 
              color="LightBlue-950" 
              wrap 
              width="100%" 
              maxWidth="350px" 
              alignment="center" 
              size="large"
            >
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
      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
      const [successText, setSuccessText] = useState("");
      
      // Create a simplified grid component just for the tutorial
      const TutorialGrid = () => {
        const [tutorialGridState, setTutorialGridState] = useState(blankTutorialCanvas);

        // Check if the current state matches the expected state for step 1
        const checkStep1Completion = (newState: number[]) => {
          if (tutorialStep === 0) {
            // No completion check for step 0
            return;
          } else if (tutorialStep === 1) {
            // Check for 5 black cells in row 1 (second row)
            let isCorrect = true;
            const row = 1; // Second row (index 1)
            
            for (let col = 0; col < tutorialPlayableCols; col++) {
              const gridIndex = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
              if (newState[gridIndex] !== 1) { // Check if cell is black (1)
                isCorrect = false;
                break;
              }
            }
            
            if (isCorrect) {
              setSuccessText("Good job! Large numbers are a good start.");
              setShowSuccessMessage(true);
            }
          } else if (tutorialStep === 2) {
            // Check for the specific pattern in step 2
            const expectedPattern = [
              [-1,-1,1,-1,-1],  // Row 0
              [1,1,1,1,1],      // Row 1 (from previous step)
              [-1,-1,1,-1,-1],  // Row 2
              [-1,-1,1,-1,-1],  // Row 3
              [-1,-1,1,-1,-1]   // Row 4
            ];
            
            let isCorrect = true;
            for (let row = 0; row < tutorialPlayableRows; row++) {
              for (let col = 0; col < tutorialPlayableCols; col++) {
                const gridIndex = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
                const expectedValue = expectedPattern[row][col];
                const actualValue = newState[gridIndex];
                
                if ((expectedValue === -1 && actualValue !== 0) || 
                    (expectedValue === 1 && actualValue !== 1)) {
                  isCorrect = false;
                  break;
                }
              }
              if (!isCorrect) break;
            }
            
            if (isCorrect) {
              setSuccessText("Well done!");
              setShowSuccessMessage(true);
            }
          } else if (tutorialStep === 3) {
            // Only check first column in step 3
            const expectedPattern = [
              [0,-1,1,-1,0],  // Row 0
              [1,1,1,1,1],    // Row 1
              [0,-1,1,-1,0],  // Row 2
              [0,-1,1,-1,0],  // Row 3
              [0,-1,1,-1,0]   // Row 4
            ];
            
            let isCorrect = true;
            for (let row = 0; row < tutorialPlayableRows; row++) {
              const gridIndex = (row + tutorialClueRows) * tutorialWidth + tutorialClueCols;
              const expectedValue = expectedPattern[row][0]; // First column
              const actualValue = newState[gridIndex];
              
              if ((expectedValue === 0 && actualValue !== 2) || 
                  (expectedValue === 1 && actualValue !== 1)) {
                isCorrect = false;
                break;
              }
            }
            
            if (isCorrect) {
              setTutorialStep(tutorialStep + 1); // Advance to next step without message
            }
          } else if (tutorialStep === 4) {
            // Check full pattern in step 4
            const expectedPattern = [
              [0,-1,1,-1,0],  // Row 0
              [1,1,1,1,1],    // Row 1
              [0,-1,1,-1,0],  // Row 2
              [0,-1,1,-1,0],  // Row 3
              [0,-1,1,-1,0]   // Row 4
            ];
            
            let isCorrect = true;
            for (let row = 0; row < tutorialPlayableRows; row++) {
              for (let col = 0; col < tutorialPlayableCols; col++) {
                const gridIndex = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
                const expectedValue = expectedPattern[row][col];
                const actualValue = newState[gridIndex];
                
                if ((expectedValue === -1 && actualValue !== 0) || 
                    (expectedValue === 1 && actualValue !== 1) ||
                    (expectedValue === 0 && actualValue !== 2)) {
                  isCorrect = false;
                  break;
                }
              }
              if (!isCorrect) break;
            }
            
            if (isCorrect) {
              setSuccessText("Great! White cells are key in ninigrams.");
              setShowSuccessMessage(true);
            }
          } else if (tutorialStep === 5) {
            // Check for the pattern after filling remaining cells
            const expectedPattern = [
              [0,1,1,1,0],    // Row 0
              [1,1,1,1,1],    // Row 1
              [0,0,1,0,0],    // Row 2
              [0,0,1,0,0],    // Row 3
              [0,-1,1,-1,0]   // Row 4 (still incomplete)
            ];
            
            let isCorrect = true;
            for (let row = 0; row < tutorialPlayableRows; row++) {
              for (let col = 0; col < tutorialPlayableCols; col++) {
                const gridIndex = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
                const expectedValue = expectedPattern[row][col];
                const actualValue = newState[gridIndex];
                
                if ((expectedValue === -1 && actualValue !== 0) || 
                    (expectedValue === 1 && actualValue !== 1) ||
                    (expectedValue === 0 && actualValue !== 2)) {
                  isCorrect = false;
                  break;
                }
              }
              if (!isCorrect) break;
            }
            
            if (isCorrect) {
              setTutorialStep(tutorialStep + 1); // Move to final step without message
            }
          } else if (tutorialStep === 6) {
            // Check for final complete pattern
            const expectedPattern = [
              [0,1,1,1,0],    // Row 0
              [1,1,1,1,1],    // Row 1
              [0,0,1,0,0],    // Row 2
              [0,0,1,0,0],    // Row 3
              [0,1,1,0,0]     // Row 4 (complete)
            ];
            
            let isCorrect = true;
            for (let row = 0; row < tutorialPlayableRows; row++) {
              for (let col = 0; col < tutorialPlayableCols; col++) {
                const gridIndex = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
                const expectedValue = expectedPattern[row][col];
                const actualValue = newState[gridIndex];
                
                if ((expectedValue === 1 && actualValue !== 1) ||
                    (expectedValue === 0 && actualValue !== 2)) {
                  isCorrect = false;
                  break;
                }
              }
              if (!isCorrect) break;
            }
            
            if (isCorrect) {
              setSuccessText("Congratulations! You finished the tutorial!");
              setShowSuccessMessage(true);
            }
          }
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
            const isDisabled = tutorialSteps[tutorialStep].disabledList?.includes(index) ?? false;
            const isHighlighted = tutorialSteps[tutorialStep].highlightCells?.includes(index) ?? false;

            return (
              <hstack
                key={`pixel-${rowIndex}-${colIndex}`}
                onPress={() => {
                  if (!isDisabled && !showSuccessMessage) {
                    const newData = [...tutorialGridState];
                    newData[index] = (newData[index] + 1) % colors.length;
                    setTutorialGridState(newData);
                    checkStep1Completion(newData);
                  }
                }}
                height="22px"
                width="22px"
                backgroundColor={colors[tutorialGridState[index]]}
                border={isHighlighted ? "thick" : "thin"}
                borderColor={isHighlighted ? "#FFFF00" : "#CCCCCC"}
                // style={{ opacity: isDisabled || showSuccessMessage ? 0.5 : 1 }} // this one game the error.
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
          <vstack gap="small">
            <hstack>
              <spacer width="20px" />
              <text 
                color="LightBlue-950" 
                wrap 
                width="288px"
                maxWidth="350px"
                alignment="center middle" 
                size="medium"
              >
                {tutorialSteps[tutorialStep].instruction}
              </text>
            </hstack>
            <vstack alignment="middle center">
              {grid}
            </vstack>
            <hstack gap="medium" alignment="middle center">
              {tutorialStep === 0 && (
                <button 
                  onPress={() => setTutorialStep(tutorialStep + 1)}
                  size="medium"
                >
                  Continue
                </button>
              )}
              <button 
                onPress={() => setPage('welcome')}
                size="medium"
              >
                Back to Menu
              </button>
            </hstack>
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
              padding="small"
              cornerRadius="medium"
              gap="small"
              height="95%"
              width="100%"
              maxWidth="350px"
            >
              <text color="LightBlue-950" size="xxlarge" weight="bold" alignment="center middle">
                Tutorial
              </text>
              
              {showIntroText ? (
                <vstack gap="small">
                  <hstack>
                    <text 
                      color="LightBlue-950" 
                      wrap 
                      width="320px"
                      maxWidth="350px"
                      alignment="start middle" 
                      size="medium"
                    >
                      1. Solve the puzzle to reveal the hidden pattern!{"\n"}
                      2. The solution contains only black and white cells.{"\n"}
                      3. Click a cell to change its color.{"\n"}
                      4. Number clues show how many consecutive black tiles go in each row and column.{"\n"}
                      5. Separate black tile sequences with at least one white cell.
                    </text>
                  </hstack>
                  <hstack gap="medium" alignment="middle center">
                    <button 
                      onPress={() => {
                        if (!showSuccessMessage) {
                          setShowIntroText(false);
                        }
                      }}
                      size="medium"
                    >
                      Continue
                    </button>
                  </hstack>
                </vstack>
              ) : (
                <TutorialGrid />
              )}
            </vstack>
          </vstack>
          {showSuccessMessage && (
            <zstack
              width="100%"
              height="100%"
              alignment="middle center"
            >
              <vstack
                alignment="middle center"
                width="360px"
                height="100px"
                backgroundColor="rgba(220, 220, 220, 1)"
              >
                <vstack
                  backgroundColor="rgba(220, 220, 220, 1)"
                  padding="medium"
                  cornerRadius="medium"
                  gap="medium"
                  width="360px"
                  height="100px"
                  alignment="middle center"
                  border="thick"
                  borderColor="rgba(180, 180, 180, 1)"
                >
                  <text 
                    color="LightBlue-950" 
                    size="large" 
                    wrap
                    width="288px"
                    maxWidth="350px"
                    alignment="center middle"
                  >
                    {successText}
                  </text>
                  <button
                    onPress={() => {
                      setShowSuccessMessage(false);
                      if (tutorialStep < tutorialSteps.length - 1) {
                        setTutorialStep(tutorialStep + 1);
                      } else {
                        setPage('welcome');
                      }
                    }}
                    size="medium"
                  >
                    Continue
                  </button>
                </vstack>
              </vstack>
            </zstack>
          )}
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
                {hintResults && rowIndex >= clueRowsToUse ? (hintResults.rows[rowIndex] ? "☑️" : "❌") : ""}
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
                    {hintResults && colIndex >= clueColsToUse ? (hintResults.cols[colIndex] ? "☑️" : "❌") : ""}
                  </text>
                </hstack>
              ))}
            </hstack>
            // grid generation is here
            <vstack maxHeight="100%" maxWidth="100%" alignment="middle center">
              {grid}
            </vstack>
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
                onPress={clearGrid} 
                size="small"
                width="60px"
              >
                CLEAR
              </button>
              <button 
                onPress={checkSolution} 
                size="small"
                width="69px"
                appearance="success"
              >
                SUBMIT
              </button>
              <button 
                onPress={calculateHints} 
                size="small"
                width="50px"
              >
                HINT
              </button>
            </hstack>
            <vstack height="30px" alignment="middle center">
              {submissionResult && <text 
                color="LightBlue-950" 
                size="large" 
                wrap
                width="288px"
                maxWidth="350px"
                alignment="center"
              >
                {submissionResult}
              </text>}
            </vstack>
          </vstack>

          {showOverlay && (
            <zstack
              width="100%"
              height="100%"
              alignment="top end"
            >
              <vstack
                alignment="middle center"
                width="100%" 
                height="100%" 
                backgroundColor="rgba(128, 128, 128, 0.8)"
              >
                <text 
                  color="White" 
                  size="xxlarge" 
                  weight="bold" 
                  alignment="center"
                  wrap
                  width="288px"
                  maxWidth="350px"
                >
                  🌸 Congratulations! You solved the puzzle 🌸 
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