import { Devvit } from '@devvit/public-api'

// import data from "../puzzles/seahorse.json"
import umbrellaData from "./umbrella.json"
import airplaneData from "../puzzles/airplane.json"
import puppyData from "../puzzles/puppy.json"
import tractorData from "../puzzles/tractor.json"
import giraffeData from "../puzzles/giraffe.json"
import seahorseData from "../puzzles/seahorse.json"
import sailboatData from "../puzzles/sailboat.json"
import crabData from "../puzzles/crab.json"
import bunnyData from "../puzzles/bunny.json"
import xmasTreeData from "../puzzles/xmas-tree.json"
import musicNoteData from "../puzzles/music_note.json"
import pandaData from "../puzzles/panda.json"
import mushroomData from "../puzzles/mushroom.json"
import chimkinData from "../puzzles/chimkin.json"
import bumblebeeData from "../puzzles/bumblebee.json"
import heartData from "../puzzles/heart.json"
import octopusData from "../puzzles/octopus.json"
import skullData from "../puzzles/skull.json"
import chickData from "../puzzles/chick.json"
import doggyData from "../puzzles/doggy.json"

Devvit.configure({
  redditAPI: true,
  kvStore: true,
});

// // First, define a type for our puzzle data
// type PuzzleData = {
//   name: string;
//   clueRowData: number[][];
//   clueColData: number[][];
//   maxClueRows: number;
//   maxClueCols: number;
//   solution: number[][];
// };

// First, create a mapping of puzzle numbers to their data
const puzzleMap = {
  1: airplaneData,
  2: puppyData,
  3: tractorData,
  4: giraffeData,
  5: seahorseData,
  6: sailboatData,
  7: crabData,
  8: bunnyData,
  9: xmasTreeData,
  10: musicNoteData,
  11: pandaData,
  12: mushroomData,
  13: chimkinData,
  14: bumblebeeData,
  15: heartData,
  16: octopusData,
  17: skullData,
  18: chickData,
  19: doggyData
} as const;


Devvit.addMenuItem({
  label: `Ninigram #13: Cluck Norris (Medium)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #13: Cluck Norris (Medium)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #13...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(13));
      ui.showToast({ text: `Created Ninigram #13!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #13: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #14: Oh Honey! (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #14: Oh Honey! (Hard)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #14...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(14));
      ui.showToast({ text: `Created Ninigram #14!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #14: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #6: Land ahoy!`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #6: Land ahoy!`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #6...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(6));
      ui.showToast({ text: `Created Ninigram #6!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #6: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #3: Field Duty`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #3: Field Duty`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #3...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(3));
      ui.showToast({ text: `Created Ninigram #3!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #3: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #4: Neckflix and Chill`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #4: Neckflix and Chill`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #4...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(4));
      ui.showToast({ text: `Created Ninigram #4!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #4: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #1: Above the Clouds`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #1: Above the Clouds`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #1...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(1));
      ui.showToast({ text: `Created Ninigram #1!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #1: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #2: Man’s Best Friend`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #2: Man’s Best Friend`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #2...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(2));
      ui.showToast({ text: `Created Ninigram #2!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #2: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #5: "I'm H2O intolerant"`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #5: I'm H2O intolerant`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #5...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(5));
      ui.showToast({ text: `Created Ninigram #5!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #5: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #7: Claw enforcement`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #7: Claw enforcement`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #7...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(7));
      ui.showToast({ text: `Created Ninigram #7!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #7: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #8: Hoppenheimer`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #8: Hoppenheimer`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #8...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(8));
      ui.showToast({ text: `Created Ninigram #8!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #8: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #9: Tis the season`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #9: Tis the season`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #9...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(9));
      ui.showToast({ text: `Created Ninigram #9!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #9: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #10: All that Jazz!`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #10: All that Jazz!`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #10...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(10));
      ui.showToast({ text: `Created Ninigram #10!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #10: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #11: Black & White & Cute (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #11: Black & White & Cute (Hard)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #11...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(11));
      ui.showToast({ text: `Created Ninigram #11!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #11: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #12: Its a Me!`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #12: Its a Me!`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #12...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(12));
      ui.showToast({ text: `Created Ninigram #12!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #12: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #15: Less than 3 (Easy)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #15: Less than 3 (Easy)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #15...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(15));
      ui.showToast({ text: `Created Ninigram #15!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #15: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #16: Ocean's Eight (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #16: Ocean's Eight (Hard)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #16...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(16));
      ui.showToast({ text: `Created Ninigram #16!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #16: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #17: Bad to the Bone (Easy)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #17: Bad to the Bone (Easy)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #17...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(17));
      ui.showToast({ text: `Created Ninigram #17!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #17: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #18: Spring Chicken (Medium)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #18: Spring Chicken (Medium)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #18...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(18));
      ui.showToast({ text: `Created Ninigram #18!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #18: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #19: There goes my homework again... (Medium)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #19: There goes my homework again...  (Medium)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #19...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(19));
      ui.showToast({ text: `Created Ninigram #19!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #19: ${error}` });
    }
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

// First, load the umbrella puzzle data separately for tutorial
const umbrellaPuzzle = loadPuzzle(umbrellaData);

// Calculate tutorial dimensions using umbrellaPuzzle data
const tutorialClueRows = umbrellaPuzzle.maxClueRows;
const tutorialClueCols = umbrellaPuzzle.maxClueCols;
const tutorialPlayableRows = 5; 
const tutorialPlayableCols = 5;
const tutorialWidth = tutorialClueCols + tutorialPlayableCols;
const tutorialHeight = tutorialClueRows + tutorialPlayableRows;
const blankTutorialCanvas = new Array(tutorialWidth * tutorialHeight).fill(0);

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

// Then define the column3Highlights
const column3Highlights = [
  calculateCellIndex(0, 2), // Row 0
  calculateCellIndex(2, 2), // Row 2
  calculateCellIndex(3, 2), // Row 3
  calculateCellIndex(4, 2), // Row 4
];

// Define remainingRowsHighlights
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
    instruction: "Let's begin with the second row. The clue is 5: place five black cells in this row.",
    disabledList: calculateDisabledCells(),
    highlightCells: [
      calculateCellIndex(1, 0),
      calculateCellIndex(1, 1),
      calculateCellIndex(1, 2),
      calculateCellIndex(1, 3),
      calculateCellIndex(1, 4),
    ],
  },
  {
    instruction: "Next, let's look at the middle column. This line should also have five black cells.",
    highlightCells: column3Highlights,
    disabledList: function() {
      return calculateDisabledCellsExceptHighlighted(column3Highlights);
    }(),
  },
  {
    instruction: "The first column's clue is 1: ensure there's only one black cell, and the rest are white.",
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
    instruction: "The same applies for the last column: add white cells to follow the clue.",
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
    instruction: "Fill in the remaining cells in rows one, three and four using the row clues.",
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

// Add these type definitions at the top of the file
type PageProps = {
  setPage: (page: 'welcome' | 'game' | 'tutorial') => void;
};

// Add this utility function near the top of the file
const splitArray = <T,>(array: T[], width: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += width) {
    result.push(array.slice(i, i + width));
  }
  return result;
};

// Define the context type using type inference
type CustomPostRenderContext = Parameters<Parameters<typeof Devvit.addCustomPostType>[0]['render']>[0];

// Update getPuzzleNumber with the correct context type
const getPuzzleNumber = async (context: CustomPostRenderContext) => {
  try {
    const postId = context.postId;
    if (!postId) return 3;

    const puzzleNumber = await context.kvStore.get(`puzzle_${postId}`);
    return puzzleNumber ? parseInt(String(puzzleNumber)) : 3;
  } catch (error) {
    console.error('Error getting puzzle number:', error);
    return 3;
  }
};


const calculateGridLines = (clueRows: number, playableRows: number, effectiveWidth: number) => {
  const lines = [];

  // Border after clue rows
  lines.push({
    spacerHeight: (clueRows * 22 - 1) + "px",
    width: effectiveWidth * 22 + "px"
  });
  
  // Lines every 5 cells in playable area
  const numberOfDividers = Math.floor((playableRows - 1) / 5);
  for (let i = 0; i < numberOfDividers; i++) {
    const spacerHeight = i === 0 
      ? (5 * 22 - 2) + "px"  // First line
      : (5 * 22 - i * 2) + "px";  // Subsequent lines
      
    lines.push({
      spacerHeight,
      width: effectiveWidth * 22 + "px"
    });
  }
  
  // Bottom border (using grow spacer, so no height needed)
  lines.push({
    spacerHeight: "grow",
    width: effectiveWidth * 22 + "px"
  });
  
  return lines;
};

const calculateVerticalGridLines = (clueCols: number, playableCols: number, effectiveHeight: number) => {
  const lines = [];
  
  // Border after clue columns
  lines.push({
    spacerWidth: (clueCols * 22 - 1) + "px",
    height: effectiveHeight * 22 + "px"
  });
  
  // Lines every 5 cells in playable area
  const numberOfDividers = Math.floor((playableCols - 1) / 5);
  for (let i = 0; i < numberOfDividers; i++) {
    // If you want the same “-2 px on subsequent lines” logic:
    const spacerWidth = i === 0
      ? (5 * 22 - 2) + "px" // first line
      : (5 * 22 - i * 2) + "px"; // subsequent lines

    lines.push({
      spacerWidth,
      height: effectiveHeight * 22 + "px"
    });
  }
  
  // Right border (using grow spacer, so no width needed)
  lines.push({
    spacerWidth: "grow",
    height: effectiveHeight * 22 + "px"
  });
  
  return lines;
};



Devvit.addCustomPostType({
  name: 'Ninigram', 
  height: 'tall',
  render: (context) => {
    const { useState } = context;
    
    const [puzzleNumber, setPuzzleNumber] = useState(3);
    
    useState(async () => {
      try {
        const number = await getPuzzleNumber(context);
        setPuzzleNumber(number);
      } catch (error) {
        console.error('Error fetching puzzle number:', error);
      }
    });

    const puzzleData = puzzleMap[puzzleNumber as keyof typeof puzzleMap];

    const clueRows = puzzleData.maxClueRows;
    const clueCols = puzzleData.maxClueCols;
    const playableRows = puzzleData.clueRowData.length; 
    const playableCols = puzzleData.clueColData.length;
    const width = clueCols + playableCols;
    const height = clueRows + playableRows;
    
    // Create blank canvas with current puzzle dimensions
    const blankCanvas = new Array(width * height).fill(0);
    
    // Now declare all state after dimensions are calculated
    const [data, setData] = useState(blankCanvas);
    const [submissionResult, setSubmissionResult] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<'welcome' | 'game' | 'tutorial'>('welcome');
    const [hintResults, setHintResults] = useState<{ rows: boolean[], cols: boolean[] } | null>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [successText, setSuccessText] = useState("");
    const [tutorialStep, setTutorialStep] = useState(0);
    const [showIntroText, setShowIntroText] = useState(true);

    const toggleOverlay = () => setShowOverlay(!showOverlay);

    const WelcomeScreen = ({ setPage }: PageProps) => (
      <zstack
        width="100%"
        height="100%"
      >
        <image
          url="sakura_river.jpg"
          // url="test_background.webp" // for testing
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
              setSuccessText("Great! White cells are key in Ninigrams.");
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
              height="65%"
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
                  {/* <spacer size="xsmall" /> */}
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
          const solutionValue = puzzleData.solution[i][j] === 0 ? 0 : 1;
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

      const grid = splitArray(currentData, effectiveWidth).map((row: number[], rowIndex: number) => {
        const renderedRow = row.map((_: number, colIndex: number) => {
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
            // url="test_background.webp"
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
            <hstack alignment="center">
              <zstack alignment="center">
                <vstack maxHeight="100%" maxWidth="100%" alignment="center">
                  {grid}
                </vstack>
                <hstack alignment="center">
                  <spacer width="22px" minWidth="22px"/>
                  <zstack>
                    <vstack 
                      width={`${effectiveWidth * 22}px`}
                      height={`${effectiveHeight * 22}px`}
                      alignment="center"
                    >
                      {calculateGridLines(clueRows, playableRows, effectiveWidth).map((line, index) => (
                        <>
                          {line.spacerHeight !== "grow" ? (
                            <spacer height={line.spacerHeight as any} />
                          ) : (
                            <spacer grow />
                          )}
                          <hstack alignment="center">
                            <hstack 
                              width={`${effectiveWidth * 22}px`}
                              height="2px"
                              backgroundColor="rgba(178, 178, 178, 1)"
                            >
                              <spacer />
                            </hstack>
                          </hstack>
                        </>
                      ))}
                    </vstack>
                    <hstack
                        width={`${effectiveWidth * 22}px`}
                        height={`${effectiveHeight * 22}px`}
                      >
                        {calculateVerticalGridLines(clueCols, playableCols, effectiveHeight).map((line, index) => (
                          <>
                            {line.spacerWidth !== "grow" ? (
                              <spacer width={line.spacerWidth as any} 
                              height="1px"
                              />
                            ) : (
                              <spacer grow 
                              height="1px"/>
                            )}
                            <vstack
                              width="2px"
                              height={`${effectiveHeight * 22}px`}
                              backgroundColor="rgba(178, 178, 178, 1)"
                            >
                            </vstack>
                          </>
                        ))}
                      </hstack>
                  </zstack>
                </hstack>
              </zstack>
            </hstack>

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
                puzzle={puzzleData}
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