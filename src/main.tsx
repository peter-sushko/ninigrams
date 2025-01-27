import { Devvit } from '@devvit/public-api'

// import data from "../puzzles/seahorse.json"
import umbrellaData from "./umbrella.json"
import tutorial_pig from "../puzzles/tutorial_pig.json"
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
import crocData from "../puzzles/croc.json"
import appleData from "../puzzles/apple.json"
import bikeData from "../puzzles/bike.json"
import catData from "../puzzles/cat.json"
import checkerData from "../puzzles/checker.json"
import cherryData from "../puzzles/cherry.json"
import chillerData from "../puzzles/chiller.json"
import duckData from "../puzzles/duck.json"
import thunderData from "../puzzles/thunder.json"
import cafeData from "../puzzles/cafe.json"
import squirrelData from "../puzzles/squirrel.json"
import mooseData from "../puzzles/moose.json"
import miffyData from "../puzzles/miffy.json"
import fishData from "../puzzles/fish.json"
import cactusData from "../puzzles/cactus.json"
import icecreamData from "../puzzles/icecream.json"
import lemonadeData from "../puzzles/lemonade.json"
import flowerData from "../puzzles/flower.json"
import moonData from "../puzzles/moon.json"
import friesData from "../puzzles/fries.json"
import pigData from "../puzzles/pig.json"
import smallTestData from "./small_test.json"
import sheepData from "../puzzles/sheep.json"
import fortuneData from "../puzzles/fortune.json"
import yinyangData from "../puzzles/yinyang.json"
import bottleData from "../puzzles/bottle.json"

import mouseData from "../puzzles/mouse.json"
import incenseData from "../puzzles/incense.json"

import wizardData from "../puzzles/wizard.json"
import ghostData from "../puzzles/ghost.json"

Devvit.configure({
  redditAPI: true,
  kvStore: true,
});

// First, create a mapping of puzzle numbers to their data
const puzzleMap = {
  "-1": tutorial_pig,  // Tutorial puzzle
  0: smallTestData,  // Adding small_test as puzzle #0
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
  19: doggyData,
  20: crocData,
  21: appleData,
  22: bikeData,
  23: catData,
  24: checkerData,
  25: cherryData,
  26: chillerData,
  27: duckData,
  28: thunderData,
  29: cafeData, 
  30: squirrelData,
  31: mooseData, 
  32: miffyData,
  33: icecreamData,
  34: fishData,
  35: cactusData,
  36: lemonadeData,
  37: flowerData,
  38: moonData,
  39: friesData,
  40: pigData,
  41: sheepData,
  42: fortuneData, 
  43: yinyangData,
  44: bottleData,
  45: yinyangData,
  46: mouseData,
  47: incenseData,
  48: yinyangData,
  49: wizardData,
  50: ghostData, 
} as const;

Devvit.addMenuItem({
  label: `Ninigram #0: Small Test`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #0: Small Test`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #0...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(0));
      ui.showToast({ text: `Created Ninigram #0!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #0: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #36: Pulp Fiction (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #36: Pulp Fiction (Hard)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #36...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(36));
      ui.showToast({ text: `Created Ninigram #36!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #36: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #37: My Best Bud (Medium)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #37: My Best Bud (Medium)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #37...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(37));
      ui.showToast({ text: `Created Ninigram #37!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #37: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #38: Just a Phase (Easy)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #38: Just a Phase (Easy)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #38...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(38));
      ui.showToast({ text: `Created Ninigram #38!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #38: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #39: I'm Lovin' It (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();

    try {
      const post = await reddit.submitPost({
        title: `Ninigram #39: I'm Lovin' It (Hard)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #39...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(39));
      ui.showToast({ text: `Created Ninigram #39!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #39: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #40: Muddy with a Chance of Meatballs (Easy)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #40: Muddy with a Chance of Meatballs (Easy)`,
        subredditName: subreddit.name,
        preview: (
          <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading Ninigram #40...</text>
          </vstack>
        )
      });

      await kvStore.put(`puzzle_${post.id}`, String(40));
      ui.showToast({ text: `Created Ninigram #40!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #40: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #41: Ewe Got This (Medium)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #41: Ewe Got This (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #41...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(41));
      ui.showToast({ text: `Created Ninigram #41!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #41: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #42: Good Fortune Awaits (Easy)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #42: Good Fortune Awaits (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #41...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(42));
      ui.showToast({ text: `Created Ninigram #42!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #42: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #43: Balanced Harmony (Medium)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #43: Balanced Harmony (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #41...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(43));
      ui.showToast({ text: `Created Ninigram #43!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #43: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #44: Festive Pour (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #44: Festive Pour (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #41...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(44));
      ui.showToast({ text: `Created Ninigram #44!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #44: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #49: You Shall Not Pass (Hard)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #49: You Shall Not Pass (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #42...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(49));
      ui.showToast({ text: `Created Ninigram #49!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #49: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #50: Hide and Shriek! (Easy)`,
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #50: Hide and Shriek! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #43...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(50));
      ui.showToast({ text: `Created Ninigram #50!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #50: ${error}` });
    }
  },
});

const colors = [
  "#d9d9d9", // light grey
  "#333333", // dark grey (black)
  "#FFFFFF"  // white
];

// Add this constant to control autofill behavior
const AUTOFILL_ENABLED = true;  // Set to false to disable autofill for all puzzles

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
const tutorialPuzzle = loadPuzzle(tutorial_pig);

// Calculate tutorial dimensions using tutorialPuzzle data
const tutorialClueRows = tutorialPuzzle.maxClueRows;
const tutorialClueCols = tutorialPuzzle.maxClueCols;
const tutorialPlayableRows = 7; 
const tutorialPlayableCols = 9;
const tutorialWidth = tutorialClueCols + tutorialPlayableCols;
const tutorialHeight = tutorialClueRows + tutorialPlayableRows;
const blankTutorialCanvas = new Array(tutorialWidth * tutorialHeight).fill(0);

// Add this type definition
type TutorialStep = {
  instruction: string;
  highlightCells?: number[];  // Array of cell indices to highlight
  disabledList?: number[];   // Array of cell indices to disable
};

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
    instruction: "This column has 7 black cells. Click the cells to fill them in!\n",
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
    instruction: "This column shows a 4 and a 2, which means there must be one white cell between them. Place them correctly!\n",
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
    instruction: "Now let's fill some rows. Start with the first one - it shows 1 and 1, meaning all the rest must be white. Fill them!\n",
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
    instruction: "This clue shows 8 and the puzzle is 9 wide. This guarantees that the middle 7 cells will be black. Place them!\n",
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
    instruction: "Rows 4 and 6 both show 9, which means all cells must be black. Fill them in!\n",
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
    instruction: "The 6 clue in row 5 can only fit in one way. Place that clue!\n",
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
    instruction: "Now let's fill out columns 7 and 9. The first cell in each column should be white, and the rest black!\n",
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
    instruction: "This column and row are only missing the white cells. You can place them using the autofill feature!\n",
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
    instruction: "Now finish the puzzle on your own and click submit when you are done.\n",
    disabledList: [],  // Enable all cells
    highlightCells: [] // No highlights
  }
];

// Precomputed grid states for each tutorial step
const tutorialGridStates = [
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
    // If you want the same "-2 px on subsequent lines" logic:
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
type Theme = {
  welcomeLogo: string;
  welcomeBackground: string;
  gameplayBackground: string;
  congratsLogo: string;
  congratsBackground: string;
  congratsOverlay: string;
  congratsTextColor: string;
};

const defaultTheme: Theme = {
  welcomeLogo: "flower_logo_no_bg.png",
  welcomeBackground: "sakura_river.jpg",
  gameplayBackground: "sakura_river.gif",
  congratsLogo: "flower_logo_no_bg.png",
  congratsBackground: "rgb(170, 230, 240)",
  congratsOverlay: "sakura-leaves.gif",
  congratsTextColor: "#333333"
};

const cnyTheme: Theme = {
  welcomeLogo: "red_flower.gif",
  welcomeBackground: "cny_background.jpg",
  gameplayBackground: "cny_background.gif",
  congratsLogo: "red_flower.gif",
  congratsBackground: "AlienBlue-700",
  congratsOverlay: "lantern.gif",
  congratsTextColor: "#d9d9d9"
};

// Add a function to get the appropriate theme based on puzzle number
const getTheme = (puzzleNumber: number): Theme => {
  if (puzzleNumber == 0 || (puzzleNumber >= 42 && puzzleNumber <= 48)) {
    return cnyTheme;
  }
  return defaultTheme;
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

    const WelcomeScreen = ({ setPage }: PageProps) => {
      const theme = getTheme(puzzleNumber);
      return (
        <zstack
          width="100%"
          height="100%"
        >
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
              padding="large"
              cornerRadius="medium"
              gap="medium"
              borderColor="rgba(128, 128, 128, 1)"
              height="180px"
            >
              <hstack alignment="middle center" gap="small">
                <image
                  url={theme.welcomeLogo}
                  imageWidth={40}
                  imageHeight={40}
                />
                <text color="LightBlue-950" size="xxlarge" weight="bold" alignment="center">Ninigrams</text>
                <image
                  url={theme.welcomeLogo}
                  imageWidth={40}
                  imageHeight={40}
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
                  onPress={() => {
                    setSubmissionResult('');
                    setPage('game');
                  }}
                  size="medium"
                >
                  Start Puzzle
                </button>
              </hstack>
            </vstack>
          </vstack>
        </zstack>
      );
    };

    const TutorialScreen = ({ setPage }: PageProps) => {
      const [showIntroText, setShowIntroText] = useState(true);
      const [tutorialStep, setTutorialStep] = useState(0);
      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
      const [successText, setSuccessText] = useState("");
      const theme = getTheme(puzzleNumber);
      
      // Create a simplified grid component just for the tutorial
      const TutorialGrid = () => {
        const [tutorialGridState, setTutorialGridState] = useState(tutorialGridStates[tutorialStep]);

        // Update checkStep1Completion to handle all steps
        const checkStep1Completion = (newState: number[]) => {
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
              setSuccessText("Excellent! You've learned how to handle separated numbers.");
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
              setSuccessText("Great! Now let's learn about the autofill feature.");
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
                    checkStep1Completion(newData);
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
                  Back to Menu
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
                    Back to Menu
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
                        setSubmissionResult("It's a hippo!");
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
              height="80%"
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


    const checkSolution = () => {
      const currentBoard = [];
      
      for (let i = clueRows; i < height; i++) {
        const row = [];
        for (let j = clueCols; j < width; j++) {
          const cellValue = data[i * width + j];
          // Only care about black cells (1) vs non-black cells (0 or 2)
          const mappedValue = cellValue === 1 ? 1 : 0;
          row.push(mappedValue);
        }
        currentBoard.push(row);
      }

      const isCorrect = currentBoard.every((row, i) =>
        row.every((cell, j) => {
          // Only check if black cells in solution match black cells in answer
          return (puzzleData.solution[i][j] === 1 && cell === 1) || 
                 (puzzleData.solution[i][j] === 0 && cell === 0);
        })
      );

      if (isCorrect) {
        // Convert all grey cells to white before showing overlay
        const newData = [...data];
        for (let i = clueRows; i < height; i++) {
          for (let j = clueCols; j < width; j++) {
            const index = i * width + j;
            if (newData[index] === 0) { // if grey
              newData[index] = 2; // make white
            }
          }
        }
        setData(newData);
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
      const { useState } = context;
      // Add state for tracking if hints are enabled
      const [hintsEnabled, setHintsEnabled] = useState(false);
      const [showClearConfirm, setShowClearConfirm] = useState(false);
      const [autofillEnabled, setAutofillEnabled] = useState(false);
      
      // Calculate dimensions based on whether we're in tutorial mode or main puzzle
      const isTutorial = Boolean(gridState);
      const effectiveWidth = isTutorial ? tutorialWidth : (width || puzzle.maxClueCols + puzzle.clueColData.length);
      const effectiveHeight = isTutorial ? tutorialHeight : (height || puzzle.maxClueRows + puzzle.clueRowData.length);
      const clueRowsToUse = isTutorial ? tutorialClueRows : puzzle.maxClueRows;
      const clueColsToUse = isTutorial ? tutorialClueCols : puzzle.maxClueCols;
      const currentData = gridState || data;
      const puzzleToUse = isTutorial ? tutorialPuzzle : puzzle;
      const theme = getTheme(puzzleNumber);

      const toggleAutofill = () => {
        const newEnabled = !autofillEnabled;
        setAutofillEnabled(newEnabled);
        
        // If turning on autofill, check all rows and columns
        if (newEnabled) {
          let newData = [...currentData];
          // Check all rows
          for (let rowIndex = clueRowsToUse; rowIndex < effectiveHeight; rowIndex++) {
            let rowCorrect = true;
            // First verify if row is correct
            for (let col = clueColsToUse; col < effectiveWidth; col++) {
              const gridIndex = rowIndex * effectiveWidth + col;
              const solutionValue = puzzle.solution[rowIndex - clueRowsToUse][col - clueColsToUse];
              if (solutionValue === 1 && newData[gridIndex] !== 1) {
                rowCorrect = false;
                break;
              }
              if (solutionValue === 0 && newData[gridIndex] === 1) {
                rowCorrect = false;
                break;
              }
            }
            // If row is correct, fill remaining grey cells with white
            if (rowCorrect) {
              for (let col = clueColsToUse; col < effectiveWidth; col++) {
                const gridIndex = rowIndex * effectiveWidth + col;
                if (newData[gridIndex] === 0) { // if grey
                  newData[gridIndex] = 2; // make white
                }
              }
            }
          }
          
          // Check all columns
          for (let colIndex = clueColsToUse; colIndex < effectiveWidth; colIndex++) {
            let colCorrect = true;
            // First verify if column is correct
            for (let row = clueRowsToUse; row < effectiveHeight; row++) {
              const gridIndex = row * effectiveWidth + colIndex;
              const solutionValue = puzzle.solution[row - clueRowsToUse][colIndex - clueColsToUse];
              if (solutionValue === 1 && newData[gridIndex] !== 1) {
                colCorrect = false;
                break;
              }
              if (solutionValue === 0 && newData[gridIndex] === 1) {
                colCorrect = false;
                break;
              }
            }
            // If column is correct, fill remaining grey cells with white
            if (colCorrect) {
              for (let row = clueRowsToUse; row < effectiveHeight; row++) {
                const gridIndex = row * effectiveWidth + colIndex;
                if (newData[gridIndex] === 0) { // if grey
                  newData[gridIndex] = 2; // make white
                }
              }
            }
          }
          
          // Update the grid if changes were made
          if (gridState) {
            onGridUpdate(newData);
          } else {
            setData(newData);
          }
          if (hintsEnabled) {
            updateHints(newData);
          }
        }
      }

      const autofillIfCorrect = (newData: number[], rowIndex: number, colIndex: number): number[] => {
        if (!autofillEnabled) return newData;

        const updatedData = [...newData];
        
        // Check if black cells in row are correct
        let rowCorrect = true;
        for (let col = clueColsToUse; col < effectiveWidth; col++) {
          const gridIndex = rowIndex * effectiveWidth + col;
          const solutionValue = puzzle.solution[rowIndex - clueRowsToUse][col - clueColsToUse];
          if (solutionValue === 1 && updatedData[gridIndex] !== 1) {
            rowCorrect = false;
            break;
          }
          if (solutionValue === 0 && updatedData[gridIndex] === 1) {
            rowCorrect = false;
            break;
          }
        }

        // Check if black cells in column are correct
        let colCorrect = true;
        for (let row = clueRowsToUse; row < effectiveHeight; row++) {
          const gridIndex = row * effectiveWidth + colIndex;
          const solutionValue = puzzle.solution[row - clueRowsToUse][colIndex - clueColsToUse];
          if (solutionValue === 1 && updatedData[gridIndex] !== 1) {
            colCorrect = false;
            break;
          }
          if (solutionValue === 0 && updatedData[gridIndex] === 1) {
            colCorrect = false;
            break;
          }
        }

        // If row is correct, fill remaining grey cells with white
        if (rowCorrect) {
          for (let col = clueColsToUse; col < effectiveWidth; col++) {
            const gridIndex = rowIndex * effectiveWidth + col;
            if (updatedData[gridIndex] === 0) { // if grey
              updatedData[gridIndex] = 2; // make white
            }
          }
        }

        // If column is correct, fill remaining grey cells with white
        if (colCorrect) {
          for (let row = clueRowsToUse; row < effectiveHeight; row++) {
            const gridIndex = row * effectiveWidth + colIndex;
            if (updatedData[gridIndex] === 0) { // if grey
              updatedData[gridIndex] = 2; // make white
            }
          }
        }

        return updatedData;
      }

      const clearGrid = () => {
        setShowClearConfirm(true);
      }

      const confirmClear = () => {
        const newData = isTutorial ? new Array(tutorialWidth * tutorialHeight).fill(0) : blankCanvas;
        if (gridState) {
          onGridUpdate(newData);
        } else {
          setData(newData);
        }
        setSubmissionResult('');
        setHintResults(null);
        setHintsEnabled(false);
        setShowClearConfirm(false);
      }

      const calculateHints = () => {
        // Toggle hints instead of just calculating them
        if (hintsEnabled) {
          setHintsEnabled(false);
          setHintResults(null);
          return;
        }

        setHintsEnabled(true);
        updateHints();
      }

      const updateHints = (gridData = currentData) => {
        const rowHints = Array(effectiveHeight).fill(false);
        const colHints = Array(effectiveWidth).fill(false);

        for (let rowIndex = clueRowsToUse; rowIndex < effectiveHeight; rowIndex++) {
          rowHints[rowIndex] = checkRowMatch(rowIndex, gridData);
        }

        for (let colIndex = clueColsToUse; colIndex < effectiveWidth; colIndex++) {
          colHints[colIndex] = checkColMatch(colIndex, gridData);
        }

        setHintResults({ rows: rowHints, cols: colHints });
      }

      const checkRowMatch = (rowIndex: number, gridData = currentData): boolean => {
        for (let colIndex = clueColsToUse; colIndex < effectiveWidth; colIndex++) {
          const cellValue = gridData[rowIndex * effectiveWidth + colIndex];
          const solutionValue = puzzleToUse.solution[rowIndex - clueRowsToUse][colIndex - clueColsToUse];
          // Only check if black cells match
          if (solutionValue === 1 && cellValue !== 1) return false;
          if (solutionValue === 0 && cellValue === 1) return false;
        }
        return true;
      };

      const checkColMatch = (colIndex: number, gridData = currentData): boolean => {
        for (let rowIndex = clueRowsToUse; rowIndex < effectiveHeight; rowIndex++) {
          const cellValue = gridData[rowIndex * effectiveWidth + colIndex];
          const solutionValue = puzzleToUse.solution[rowIndex - clueRowsToUse][colIndex - clueColsToUse];
          // Only check if black cells match
          if (solutionValue === 1 && cellValue !== 1) return false;
          if (solutionValue === 0 && cellValue === 1) return false;
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
                alignment="middle center"
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
                alignment="middle center"
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
                let newData = [...currentData];
                newData[index] = (newData[index] + 1) % colors.length;
                
                // Apply autofill if enabled
                newData = autofillIfCorrect(newData, rowIndex, colIndex);

                if (gridState) {
                  onGridUpdate(newData);
                } else {
                  setData(newData);
                }
                // Update hints if they're enabled
                if (hintsEnabled) {
                  updateHints(newData);
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
                {hintsEnabled && rowIndex >= clueRowsToUse ? (hintResults?.rows[rowIndex] ? "☑️" : "❌") : ""}
              </text>
            </hstack>
            {renderedRow}
          </hstack>
        );
      });

      return (
        <zstack width="100%" height="100%">
          <image
            url={theme.gameplayBackground}
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
                    {hintsEnabled && colIndex >= clueColsToUse ? (hintResults?.cols[colIndex] ? "☑️" : "❌") : ""}
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
              />
              <button 
                icon="delete"
                onPress={clearGrid} 
                size="small"
                width="35px"
              />
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
                appearance={hintsEnabled ? "primary" : "secondary"}
              >
                HINT
              </button>
              <button 
                onPress={toggleAutofill}
                size="small"
                width="80px"
                appearance={autofillEnabled ? "primary" : "secondary"}
              >
                AUTOFILL
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
              alignment="middle center"
            >
              <vstack
                width="100%"
                height="100%"
                backgroundColor={theme.congratsBackground}
              />
              
              <vstack 
                width="100%" 
                height="100%" 
                alignment="top center"
              >
                <spacer size="large" />
                <hstack alignment="middle center" gap="small">
                  <image
                    url={theme.congratsLogo}
                    imageWidth={40}
                    imageHeight={40}
                  />
                  <text 
                    color={theme.congratsTextColor}
                    size="xxlarge" 
                    weight="bold" 
                    alignment="center"
                    wrap
                  >
                    Congratulations
                  </text>
                  <image
                    url={theme.congratsLogo}
                    imageWidth={40}
                    imageHeight={40}
                  />
                </hstack>
              </vstack>

              <vstack alignment="middle center">
                {splitArray(data, effectiveWidth)
                  .slice(clueRowsToUse)
                  .map((row, rowIndex) => (
                    <hstack key={`row-${rowIndex}`}>
                      {row.slice(clueColsToUse).map((cell, colIndex) => (
                        <hstack
                          key={`pixel-${rowIndex}-${colIndex}`}
                          height="23px"
                          width="23px"
                          backgroundColor={colors[cell]}
                          border="thin"
                          borderColor="#CCCCCC"
                        />
                      ))}
                    </hstack>
                  ))}
              </vstack>

              {/* <vstack 
                width="100%" 
                height="100%" 
                alignment="bottom center"
              >
                <text 
                  color={theme.congratsTextColor}
                  size="xlarge"
                  alignment="center"
                  wrap
                  width="288px"
                  maxWidth="350px"
                >
                  You solved the puzzle!
                </text>
                <spacer size="large" />
              </vstack> */}

              <image 
                url={theme.congratsOverlay}
                imageWidth={512} 
                imageHeight={512}
                width="100%"
                height="100%"
                resizeMode="scale-down"
              />

              <hstack 
                padding="medium" 
                width="100%" 
                height="100%" 
                alignment="top end"
              >
                <button
                  icon="close"
                  onPress={toggleOverlay}
                  size="small"
                />
              </hstack>
            </zstack>
          )} 

          {showClearConfirm && (
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
                    Reset the grid?
                  </text>
                  <hstack gap="medium">
                    <button
                      onPress={confirmClear}
                      size="medium"
                      appearance="success"
                    >
                      Yes
                    </button>
                    <button
                      onPress={() => setShowClearConfirm(false)}
                      size="medium"
                      appearance="destructive"
                    >
                      No
                    </button>
                  </hstack>
                </vstack>
              </vstack>
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