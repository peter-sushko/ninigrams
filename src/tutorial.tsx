import { Devvit } from '@devvit/public-api';
import tutorial_pig from "../puzzles/tutorial_pig.json";

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

// First, load the tutorial puzzle data
export const tutorialPuzzle = loadPuzzle(tutorial_pig);

// Add these type definitions
export type TutorialStep = {
  instruction: string;
  highlightCells?: number[];  // Array of cell indices to highlight
  disabledList?: number[];   // Array of cell indices to disable
};

export type PageProps = {
  setPage: (page: 'welcome' | 'game' | 'tutorial') => void;
  context?: any; // Make context optional
};

// Theme types
export type Theme = {
  welcomeLogo: string;
  welcomeBackground: string;
  gameplayBackground: string;
  congratsLogo: string;
  congratsBackground: string;
  congratsOverlay: string;
  congratsTextColor: string;
};

export const defaultTheme: Theme = {
  welcomeLogo: "flower_logo_no_bg.png",
  welcomeBackground: "sakura_river.jpg",
  gameplayBackground: "sakura_river.gif",
  congratsLogo: "flower_logo_no_bg.png",
  congratsBackground: "rgb(170, 230, 240)",
  congratsOverlay: "sakura-leaves.gif",
  congratsTextColor: "#333333"
};

export const cnyTheme: Theme = {
  welcomeLogo: "red_flower.gif",
  welcomeBackground: "cny_background.jpg",
  gameplayBackground: "cny_background.gif",
  congratsLogo: "red_flower.gif",
  congratsBackground: "AlienBlue-700",
  congratsOverlay: "lantern.gif",
  congratsTextColor: "#d9d9d9"
};

// Add a function to get the appropriate theme based on puzzle number
export const getTheme = (puzzleNumber: number): Theme => {
  if (puzzleNumber == 0 || (puzzleNumber >= 42 && puzzleNumber <= 48)) {
    return cnyTheme;
  }
  return defaultTheme;
};

// Constants for tutorial dimensions
export const tutorialClueRows = 2;
export const tutorialClueCols = 4;
export const tutorialPlayableRows = 7; 
export const tutorialPlayableCols = 9;
export const tutorialWidth = tutorialClueCols + tutorialPlayableCols;
export const tutorialHeight = tutorialClueRows + tutorialPlayableRows;

// Colors used in the game
export const colors = [
  "#d9d9d9", // light grey
  "#333333", // dark grey (black)
  "#FFFFFF"  // white
];

// Tutorial steps
export const tutorialSteps: TutorialStep[] = [
  {
    instruction: "This tutorial will take you through this puzzle step by step. Hit Continue!\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => 
      (Math.floor(i / tutorialPlayableCols) + tutorialClueRows) * tutorialWidth + 
      (i % tutorialPlayableCols) + tutorialClueCols
    ),
    highlightCells: [],
  },
  {
    instruction: "According to the clue, this column should have 7 black cells. Click each cell once to make it black. Fill the column.\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable column 5 (index 4)
      return col !== 4 ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: Array.from({ length: tutorialPlayableRows }, (_, i) => 
      (i + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols)
    ),
  },
  {
    instruction: "A 4,2 clue means 4 black cells, then at least one white cell (double-click), followed by 2 black cells, in that order.\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable column 3 (index 2)
      return col !== 2 ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: Array.from({ length: tutorialPlayableRows }, (_, i) => 
      (i + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols)
    ),
  },
  {
    instruction: "Take a look at the first row. Since we've already fulfilled the clue, fill the remaining tiles white.\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable first row (index 0)
      return row !== 0 ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: Array.from({ length: tutorialPlayableCols }, (_, i) => 
      tutorialClueRows * tutorialWidth + (i + tutorialClueCols)
    ),
  },
  {
    instruction: "The clue is 8 and the puzzle is 9 wide. This guarantees that the middle 7 cells must be black. Place them!\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable second row (index 1)
      return row !== 1 ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: Array.from({ length: tutorialPlayableCols - 2 }, (_, i) => 
      (tutorialClueRows + 1) * tutorialWidth + (i + 1 + tutorialClueCols)
    ),
  },
  {
    instruction: "These rows both show 9, which means all their cells must be black. Fill them in!\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable rows 4 and 6 (index 3 and 5)
      return (row !== 3 && row !== 5) ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: [
      ...Array.from({ length: tutorialPlayableCols }, (_, i) => 
        (tutorialClueRows + 3) * tutorialWidth + (i + tutorialClueCols)
      ),
      ...Array.from({ length: tutorialPlayableCols }, (_, i) => 
        (tutorialClueRows + 5) * tutorialWidth + (i + tutorialClueCols)
      )
    ],
  },
  {
    instruction: "The 6 black cells in this row could only go to the right of the white tile.\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable row 5 (index 4)
      return row !== 4 ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: Array.from({ length: 6 }, (_, i) => 
      (tutorialClueRows + 4) * tutorialWidth + (i + 3 + tutorialClueCols)
    ),
  },
  {
    instruction: "The top row is already white, and each column clue shows 6, so the rest must be black.\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable columns 7 and 9 (indices 6 and 8)
      return (col !== 6 && col !== 8) ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: [
      ...Array.from({ length: tutorialPlayableRows }, (_, row) => 
        (row + tutorialClueRows) * tutorialWidth + (6 + tutorialClueCols)
      ),
      ...Array.from({ length: tutorialPlayableRows }, (_, row) => 
        (row + tutorialClueRows) * tutorialWidth + (8 + tutorialClueCols)
      )
    ],
  },
  {
    instruction: "Use autofill to turn grey cells white since all black cells are already correctly placed!\n",
    disabledList: Array.from({ length: tutorialPlayableRows * tutorialPlayableCols }, (_, i) => {
      const row = Math.floor(i / tutorialPlayableCols);
      const col = i % tutorialPlayableCols;
      const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
      // Only enable column 1 and last row (index 0 and row 6)
      return (col !== 0 && row !== 6) ? index : -1;
    }).filter(index => index !== -1),
    highlightCells: [
      ...Array.from({ length: tutorialPlayableRows }, (_, i) => 
        (i + tutorialClueRows) * tutorialWidth + tutorialClueCols
      ),
      ...Array.from({ length: tutorialPlayableCols }, (_, i) => 
        (tutorialClueRows + 6) * tutorialWidth + (i + tutorialClueCols)
      )
    ],
  },
  {
    instruction: "Now finish the puzzle on your own, then hit submit!\n",
    disabledList: [],  // Enable all cells
    highlightCells: [] // No highlights
  }
];

// Precomputed grid states for each tutorial step
export const tutorialGridStates = [
  new Array(tutorialWidth * tutorialHeight).fill(0), // Step 0: Empty grid
  new Array(tutorialWidth * tutorialHeight).fill(0), // Step 1: Empty grid (before filling column 5)
  (() => {
    // Step 2: Column 5 filled with black cells
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1; // Black cells in column 5
    }
    return grid;
  })(),
  (() => {
    // Step 3: Column 3 filled with 4-2 pattern
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Keep previous step's progress
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1; // Black cells in column 5
    }
    // Add column 3's pattern (4 black, 1 white, 2 black)
    for (let row = 0; row < 4; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    const whiteIndex = (4 + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
    grid[whiteIndex] = 2;
    for (let row = 5; row < 7; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    return grid;
  })(),
  (() => {
    // Step 4: First row filled with 1-1 pattern
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Keep previous steps' progress
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let row = 0; row < 4; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(4 + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols)] = 2;
    for (let row = 5; row < 7; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    // Add first row pattern (white-white-black-white-black-white-white-white-white)
    for (let col = 0; col < tutorialPlayableCols; col++) {
      const index = tutorialClueRows * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 2; // Set all to white first
    }
    grid[tutorialClueRows * tutorialWidth + (2 + tutorialClueCols)] = 1; // Third cell black
    grid[tutorialClueRows * tutorialWidth + (4 + tutorialClueCols)] = 1; // Fifth cell black
    return grid;
  })(),
  (() => {
    // Step 5: Second row filled with middle 7 black cells
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Keep previous steps' progress
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let row = 0; row < 4; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(4 + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols)] = 2;
    for (let row = 5; row < 7; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let col = 0; col < tutorialPlayableCols; col++) {
      const index = tutorialClueRows * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 2;
    }
    grid[tutorialClueRows * tutorialWidth + (2 + tutorialClueCols)] = 1;
    grid[tutorialClueRows * tutorialWidth + (4 + tutorialClueCols)] = 1;
    // Add second row pattern (white-black-black-black-black-black-black-black-white)
    for (let col = 1; col < 8; col++) {
      const index = (tutorialClueRows + 1) * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(tutorialClueRows + 1) * tutorialWidth + tutorialClueCols] = 0; // First cell GREY
    grid[(tutorialClueRows + 1) * tutorialWidth + (8 + tutorialClueCols)] = 0; // Last cell GREY
    return grid;
  })(),
  (() => {
    // Step 6: Rows 4 and 6 filled with all black
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Keep previous steps' progress
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let row = 0; row < 4; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(4 + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols)] = 2;
    for (let row = 5; row < 7; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let col = 0; col < tutorialPlayableCols; col++) {
      const index = tutorialClueRows * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 2;
    }
    grid[tutorialClueRows * tutorialWidth + (2 + tutorialClueCols)] = 1;
    grid[tutorialClueRows * tutorialWidth + (4 + tutorialClueCols)] = 1;
    for (let col = 1; col < 8; col++) {
      const index = (tutorialClueRows + 1) * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(tutorialClueRows + 1) * tutorialWidth + tutorialClueCols] = 2;
    grid[(tutorialClueRows + 1) * tutorialWidth + (8 + tutorialClueCols)] = 2;
    // Fill rows 4 and 6 with black
    for (let col = 0; col < tutorialPlayableCols; col++) {
      grid[(tutorialClueRows + 3) * tutorialWidth + (col + tutorialClueCols)] = 1;
      grid[(tutorialClueRows + 5) * tutorialWidth + (col + tutorialClueCols)] = 1;
    }
    return grid;
  })(),
  (() => {
    // Step 7: Row 5 filled with pattern
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Keep all previous progress
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let row = 0; row < 4; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(4 + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols)] = 2;
    for (let row = 5; row < 7; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let col = 0; col < tutorialPlayableCols; col++) {
      const index = tutorialClueRows * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 2;
    }
    grid[tutorialClueRows * tutorialWidth + (2 + tutorialClueCols)] = 1;
    grid[tutorialClueRows * tutorialWidth + (4 + tutorialClueCols)] = 1;
    for (let col = 1; col < 8; col++) {
      const index = (tutorialClueRows + 1) * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(tutorialClueRows + 1) * tutorialWidth + tutorialClueCols] = 2;
    grid[(tutorialClueRows + 1) * tutorialWidth + (8 + tutorialClueCols)] = 2;
    for (let col = 0; col < tutorialPlayableCols; col++) {
      grid[(tutorialClueRows + 3) * tutorialWidth + (col + tutorialClueCols)] = 1;
      grid[(tutorialClueRows + 5) * tutorialWidth + (col + tutorialClueCols)] = 1;
    }
    // Add row 5 pattern (grey-grey-white-black-black-black-black-black-black)
    grid[(tutorialClueRows + 4) * tutorialWidth + (2 + tutorialClueCols)] = 2; // Third cell white
    for (let col = 3; col < tutorialPlayableCols; col++) {
      grid[(tutorialClueRows + 4) * tutorialWidth + (col + tutorialClueCols)] = 1;
    }
    return grid;
  })(),
  (() => {
    // Step 8: Columns 7 and 9 filled
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Keep all previous progress
    for (let row = 0; row < tutorialPlayableRows; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let row = 0; row < 4; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(4 + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols)] = 2;
    for (let row = 5; row < 7; row++) {
      const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
      grid[index] = 1;
    }
    for (let col = 0; col < tutorialPlayableCols; col++) {
      const index = tutorialClueRows * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 2;
    }
    grid[tutorialClueRows * tutorialWidth + (2 + tutorialClueCols)] = 1;
    grid[tutorialClueRows * tutorialWidth + (4 + tutorialClueCols)] = 1;
    for (let col = 1; col < 8; col++) {
      const index = (tutorialClueRows + 1) * tutorialWidth + (col + tutorialClueCols);
      grid[index] = 1;
    }
    grid[(tutorialClueRows + 1) * tutorialWidth + tutorialClueCols] = 2;
    grid[(tutorialClueRows + 1) * tutorialWidth + (8 + tutorialClueCols)] = 2;
    for (let col = 0; col < tutorialPlayableCols; col++) {
      grid[(tutorialClueRows + 3) * tutorialWidth + (col + tutorialClueCols)] = 1;
      grid[(tutorialClueRows + 5) * tutorialWidth + (col + tutorialClueCols)] = 1;
    }
    grid[(tutorialClueRows + 4) * tutorialWidth + (2 + tutorialClueCols)] = 2;
    for (let col = 3; col < tutorialPlayableCols; col++) {
      grid[(tutorialClueRows + 4) * tutorialWidth + (col + tutorialClueCols)] = 1;
    }
    // Add columns 7 and 9 pattern (first white, rest black)
    for (let col of [6, 8]) { // Columns 7 and 9
      grid[tutorialClueRows * tutorialWidth + (col + tutorialClueCols)] = 2; // First cell white
      for (let row = 1; row < tutorialPlayableRows; row++) {
        grid[(row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols)] = 1;
      }
    }
    return grid;
  })(),
  (() => {
    // Step 9: Final state before submission
    const grid = new Array(tutorialWidth * tutorialHeight).fill(0);
    // Fill in the complete solution
    for (let row = 0; row < tutorialPlayableRows; row++) {
      for (let col = 0; col < tutorialPlayableCols; col++) {
        const index = (row + tutorialClueRows) * tutorialWidth + (col + tutorialClueCols);
        grid[index] = tutorialPuzzle.solution[row][col] === 1 ? 1 : 2;
      }
    }
    return grid;
  })(),
];

// Utility function to split arrays
export const splitArray = <T,>(array: T[], width: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += width) {
    result.push(array.slice(i, i + width));
  }
  return result;
};

// Export the TutorialScreen component
export const TutorialScreen = ({ setPage, context }: PageProps) => {
  if (!context) {
    console.error('Context is required for TutorialScreen');
    return null;
  }
  
  const { useState } = context;
  const [showIntroText, setShowIntroText] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [submissionResult, setSubmissionResult] = useState("");
  const [tutorialGridState, setTutorialGridState] = useState(tutorialGridStates[0]);
  const theme = getTheme(0); // Tutorial is always puzzle #0

  // Create a simplified grid component just for the tutorial
  const TutorialGrid = () => {
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
          const clueArray = tutorialPuzzle.clueColData[clueIndex];
          const clueValue = clueArray?.[clueArray.length - tutorialClueRows + rowIndex] ?? "";
          return (
            <hstack
              key={`clueRow-${rowIndex}-${colIndex}`}
              height="22px"
              width="22px"
              alignment="middle center"
              border="thin"
              backgroundColor="PureGray-350"
            >
              <text alignment="center" color="#000000">{clueValue}</text>
            </hstack>
          );
        }

        if (isClueCol) {
          const clueIndex = rowIndex - tutorialClueRows;
          const clueArray = tutorialPuzzle.clueRowData[clueIndex];
          const clueValue = clueArray?.[clueArray.length - tutorialClueCols + colIndex] ?? "";
          return (
            <hstack
              key={`clueCol-${rowIndex}-${colIndex}`}
              height="22px"
              width="22px"
              alignment="middle center"
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
                checkStepCompletion(newData);
              }
            }}
            height="22px"
            width="22px"
            backgroundColor={colors[tutorialGridState[index]]}
            border={isHighlighted ? "thick" : "thin"}
            borderColor={isHighlighted ? "#FFFF00" : "#CCCCCC"}
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
        <hstack alignment="center">
          <zstack alignment="center">
            <vstack maxHeight="100%" maxWidth="100%" alignment="center">
              {grid}
            </vstack>
          </zstack>
        </hstack>
        <hstack gap="small" alignment="middle center">
          {tutorialStep > 0 && tutorialStep <= 8 && (
            <button 
              onPress={() => {
                setTutorialStep(tutorialStep - 1);
                setTutorialGridState(tutorialGridStates[tutorialStep - 1]);
              }}
              size="medium"
              icon="reverse"
              width="35px"
            />
          )}
          {tutorialStep === 0 && (
            <button 
              onPress={() => setTutorialStep(tutorialStep + 1)}
              size="medium"
            >
              Continue
            </button>
          )}
          {tutorialStep <= 8 && (
            <button 
              onPress={() => {
                setSubmissionResult('');
                setPage('welcome');
              }}
              size="medium"
            >
              Main Menu
            </button>
          )}
          {tutorialStep === 8 && (
            <button
              onPress={() => {
                const newData = [...tutorialGridState];
                // Fill first column's grey cells with white
                for (let row = 0; row < tutorialPlayableRows; row++) {
                  const index = (row + tutorialClueRows) * tutorialWidth + tutorialClueCols;
                  if (newData[index] === 0) { // if grey
                    newData[index] = 2; // make white
                  }
                }
                // Fill last row's grey cells with white
                for (let col = 0; col < tutorialPlayableCols; col++) {
                  const index = (tutorialClueRows + 6) * tutorialWidth + (col + tutorialClueCols);
                  if (newData[index] === 0) { // if grey
                    newData[index] = 2; // make white
                  }
                }
                setTutorialGridState(newData);
                setTutorialStep(9); // Move to step 9 after autofill
              }}
              size="medium"
              appearance="primary"
            >
              Autofill
            </button>
          )}
        </hstack>
        {tutorialStep === 9 && (
          <vstack gap="small" alignment="middle center">
            <hstack gap="medium" alignment="middle center">
              <button 
                onPress={() => {
                  setTutorialStep(tutorialStep - 1);
                  setTutorialGridState(tutorialGridStates[tutorialStep - 1]);
                }}
                size="medium"
                icon="reverse"
                width="35px"
              />
              <button 
                onPress={() => setPage('welcome')}
                size="medium"
              >
                Main Menu
              </button>
              <button
                onPress={() => {
                  // Clear previous submission result
                  setSubmissionResult('');
                  
                  // Convert grid state to solution format (only checking playable area)
                  const currentBoard = [];
                  for (let i = tutorialClueRows; i < tutorialHeight; i++) {
                    const row = [];
                    for (let j = tutorialClueCols; j < tutorialWidth; j++) {
                      const cellValue = tutorialGridState[i * tutorialWidth + j];
                      // Only care about black cells (1) vs non-black cells (0 or 2)
                      row.push(cellValue === 1 ? 1 : 0);
                    }
                    currentBoard.push(row);
                  }

                  // Compare with tutorial puzzle solution
                  const isCorrect = currentBoard.every((row, i) =>
                    row.every((cell, j) => {
                      return (tutorialPuzzle.solution[i][j] === 1 && cell === 1) || 
                             (tutorialPuzzle.solution[i][j] === 0 && cell === 0);
                    })
                  );

                  if (isCorrect) {
                    setSubmissionResult("You've revealed a hippo!");
                    setSuccessText("Congratulations on finishing the tutorial!");
                    setShowSuccessMessage(true);
                  } else {
                    setSubmissionResult("Not quite there yet!");
                  }
                }}
                size="medium"
                appearance="success"
              >
                Submit
              </button>
            </hstack>
            {submissionResult && (
              <vstack 
                height="40px" 
                alignment="middle center"
                backgroundColor="rgba(220, 220, 220, 0.8)"
                cornerRadius="small"
                padding="small"
              >
                <text 
                  color="LightBlue-950" 
                  size="large" 
                  wrap
                  width="288px"
                  maxWidth="350px"
                  alignment="center"
                >
                  {submissionResult}
                </text>
              </vstack>
            )}
          </vstack>
        )}
      </vstack>
    );
  };

  const checkStepCompletion = (newState: number[]) => {
    if (tutorialStep === 1) {
      // Check if all cells in column 5 (index 4) are black
      const isComplete = Array.from({ length: tutorialPlayableRows }).every((_, row) => {
        const index = (row + tutorialClueRows) * tutorialWidth + (4 + tutorialClueCols);
        return newState[index] === 1;
      });

      if (isComplete) {
        setSuccessText("Great job! You've completed the first step.");
        setShowSuccessMessage(true);
      }
    } else if (tutorialStep === 2) {
      // Check for correct pattern in column 3 (4-2 with gap)
      const col3Values = Array.from({ length: tutorialPlayableRows }, (_, row) => {
        const index = (row + tutorialClueRows) * tutorialWidth + (2 + tutorialClueCols);
        return newState[index];
      });
      
      // Check for 4 black cells, 1 white cell, 2 black cells pattern
      const isCorrect = 
        col3Values.slice(0, 4).every(v => v === 1) && // First 4 black
        col3Values[4] === 2 && // White gap
        col3Values.slice(5, 7).every(v => v === 1); // Last 2 black

      if (isCorrect) {
        setSuccessText("Excellent! You've learned how to place separated sequences.");
        setShowSuccessMessage(true);
      }
    } else if (tutorialStep === 3) {
      // Check first row pattern (1 1 with rest white)
      const firstRowValues = Array.from({ length: tutorialPlayableCols }, (_, col) => {
        const index = tutorialClueRows * tutorialWidth + (col + tutorialClueCols);
        return newState[index];
      });
      
      // Check for black cells in positions 3 and 5 (index 2 and 4), rest white
      const isCorrect = 
        firstRowValues[2] === 1 && // Third cell black
        firstRowValues[4] === 1 && // Fifth cell black
        firstRowValues.slice(0, 2).every(v => v === 2) && // First two cells white
        firstRowValues.slice(3, 4).every(v => v === 2) && // Fourth cell white
        firstRowValues.slice(5).every(v => v === 2); // Rest white

      if (isCorrect) {
        setTutorialStep(tutorialStep + 1); // Automatically advance to next step
      }
    } else if (tutorialStep === 4) {
      // Check second row pattern (middle 7 cells black, edges grey or white)
      const secondRowValues = Array.from({ length: tutorialPlayableCols }, (_, col) => {
        const index = (tutorialClueRows + 1) * tutorialWidth + (col + tutorialClueCols);
        return newState[index];
      });
      
      // Check for edges being grey or white (0 or 2) and middle 7 cells being black
      const isCorrect = 
        (secondRowValues[0] === 2 || secondRowValues[0] === 0) && // First cell grey or white
        (secondRowValues[8] === 2 || secondRowValues[8] === 0) && // Last cell grey or white
        secondRowValues.slice(1, 8).every(v => v === 1); // Middle 7 cells black

      if (isCorrect) {
        setTutorialStep(tutorialStep + 1); // Automatically advance to next step
      }
    } else if (tutorialStep === 5) {
      // Check rows 4 and 6 (all black)
      const row4Values = Array.from({ length: tutorialPlayableCols }, (_, col) => {
        const index = (tutorialClueRows + 3) * tutorialWidth + (col + tutorialClueCols);
        return newState[index];
      });
      
      const row6Values = Array.from({ length: tutorialPlayableCols }, (_, col) => {
        const index = (tutorialClueRows + 5) * tutorialWidth + (col + tutorialClueCols);
        return newState[index];
      });
      
      const isCorrect = 
        row4Values.every(v => v === 1) && // All cells in row 4 black
        row6Values.every(v => v === 1); // All cells in row 6 black

      if (isCorrect) {
        setSuccessText("You're doing great! Keep going!");
        setShowSuccessMessage(true);
      }
    } else if (tutorialStep === 6) {
      // Check row 5 pattern (first two grey, third white, rest black)
      const row5Values = Array.from({ length: tutorialPlayableCols }, (_, col) => {
        const index = (tutorialClueRows + 4) * tutorialWidth + (col + tutorialClueCols);
        return newState[index];
      });
      
      const isCorrect = 
        row5Values[0] === 0 && // First cell grey
        row5Values[1] === 0 && // Second cell grey
        row5Values[2] === 2 && // Third cell white
        row5Values.slice(3).every(v => v === 1); // Rest black

      if (isCorrect) {
        setSuccessText("Great! Now let's get back to the columns.");
        setShowSuccessMessage(true);
      }
    } else if (tutorialStep === 7) {
      // Check if columns 7 and 9 are correct (first row white, rest black)
      const col7Values = Array.from({ length: tutorialPlayableRows }, (_, row) => {
        const index = (row + tutorialClueRows) * tutorialWidth + (6 + tutorialClueCols);
        return newState[index];
      });
      
      const col9Values = Array.from({ length: tutorialPlayableRows }, (_, row) => {
        const index = (row + tutorialClueRows) * tutorialWidth + (8 + tutorialClueCols);
        return newState[index];
      });
      
      const isCol7Correct = 
        col7Values[0] === 2 && // First row white
        col7Values.slice(1).every(v => v === 1); // Rest black
      
      const isCol9Correct =
        col9Values[0] === 2 && // First row white
        col9Values.slice(1).every(v => v === 1); // Rest black
      
      if (isCol7Correct && isCol9Correct) {
        setSuccessText("Next you'll learn how to use autofill to speed things up.");
        setShowSuccessMessage(true);
      }
    } else if (tutorialStep === 8) {
      // Check column 1 and last row (index 0 and row 6)
      const col1Values = Array.from({ length: tutorialPlayableRows }, (_, row) => {
        const index = (row + tutorialClueRows) * tutorialWidth + tutorialClueCols;
        return newState[index];
      });
      
      const row6Values = Array.from({ length: tutorialPlayableCols }, (_, col) => {
        const index = (tutorialClueRows + 6) * tutorialWidth + (col + tutorialClueCols);
        return newState[index];
      });
      
      const isCol1Correct = 
        col1Values[0] === 2 && // First row white
        col1Values.slice(1).every(v => v === 1); // Rest black
      
      const isRow6Correct =
        row6Values.every(v => v === 1); // All cells in row 6 black

      if (isCol1Correct && isRow6Correct) {
        setSuccessText("Congratulations! You've completed the tutorial!");
        setShowSuccessMessage(true);
      }
    }
  };
  
  return (
    <zstack width="100%" height="100%" alignment="middle center">
      <image
        url={theme.welcomeBackground}
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
          height="85%"
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
                  1. Solve the puzzle to reveal the hidden image!{"\n"}
                  2. The puzzle is a grid of squares, which can be filled (black) or empty (white/grey).{"\n"}
                  3. Number clues show how many consecutive black tiles go in each row or column.{"\n"}
                  4. Click a cell to cycle its color.{"\n"}
                  5. Leave at least one white cell between separate black tile groups.
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
            width="320px"
            height="120px"
            cornerRadius="medium"
            backgroundColor="rgba(220, 220, 220, 1)"
          >
            <vstack
              backgroundColor="rgba(220, 220, 220, 1)"
              padding="medium"
              cornerRadius="medium"
              gap="medium"
              width="320px"
              height="120px"
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
                alignment="top center"
              >
                {successText}
              </text>
              <button
                onPress={() => {
                  setShowSuccessMessage(false);
                  if (tutorialStep < 8) {  // Only advance step if we're not in the final step
                    setTutorialStep(tutorialStep + 1);
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