import { Devvit } from '@devvit/public-api'
import { TutorialScreen, PageProps, colors, splitArray, tutorialWidth, tutorialHeight, tutorialClueRows, tutorialClueCols, tutorialPuzzle } from './tutorial.js'
import { getPuzzleNumber, calculateGridLines, calculateVerticalGridLines, getTheme } from './utils.js'

// import data from "../puzzles/seahorse.json"
import tutorial_pig from "../puzzles/tutorial_pig.json" assert { type: "json" }
import airplaneData from "../puzzles/airplane.json" assert { type: "json" }
import puppyData from "../puzzles/puppy.json" assert { type: "json" }
import tractorData from "../puzzles/tractor.json" assert { type: "json" }
import giraffeData from "../puzzles/giraffe.json" assert { type: "json" }
import seahorseData from "../puzzles/seahorse.json" assert { type: "json" }
import sailboatData from "../puzzles/sailboat.json" assert { type: "json" }
import crabData from "../puzzles/crab.json" assert { type: "json" }
import bunnyData from "../puzzles/bunny.json" assert { type: "json" }
import xmasTreeData from "../puzzles/xmas-tree.json" assert { type: "json" }
import musicNoteData from "../puzzles/music_note.json" assert { type: "json" }
import pandaData from "../puzzles/panda.json" assert { type: "json" }
import mushroomData from "../puzzles/mushroom.json" assert { type: "json" }
import chimkinData from "../puzzles/chimkin.json" assert { type: "json" }
import bumblebeeData from "../puzzles/bumblebee.json" assert { type: "json" }
import heartData from "../puzzles/heart.json" assert { type: "json" }
import octopusData from "../puzzles/octopus.json" assert { type: "json" }
import skullData from "../puzzles/skull.json" assert { type: "json" }
import chickData from "../puzzles/chick.json" assert { type: "json" }
import doggyData from "../puzzles/doggy.json" assert { type: "json" }
import crocData from "../puzzles/croc.json" assert { type: "json" }
import appleData from "../puzzles/apple.json" assert { type: "json" }
import bikeData from "../puzzles/bike.json" assert { type: "json" }
import catData from "../puzzles/cat.json" assert { type: "json" }
import checkerData from "../puzzles/checker.json" assert { type: "json" }
import cherryData from "../puzzles/cherry.json" assert { type: "json" }
import chillerData from "../puzzles/chiller.json" assert { type: "json" }
import duckData from "../puzzles/duck.json" assert { type: "json" }
import thunderData from "../puzzles/thunder.json" assert { type: "json" }
import cafeData from "../puzzles/cafe.json" assert { type: "json" }
import squirrelData from "../puzzles/squirrel.json" assert { type: "json" }
import mooseData from "../puzzles/moose.json" assert { type: "json" }
import miffyData from "../puzzles/miffy.json" assert { type: "json" }
import fishData from "../puzzles/fish.json" assert { type: "json" }
import cactusData from "../puzzles/cactus.json" assert { type: "json" }
import icecreamData from "../puzzles/icecream.json" assert { type: "json" }
import lemonadeData from "../puzzles/lemonade.json" assert { type: "json" }
import tulipData from "../puzzles/tulip.json" assert { type: "json" }
import moonData from "../puzzles/moon.json" assert { type: "json" }
import friesData from "../puzzles/fries.json" assert { type: "json" }
import pigData from "../puzzles/pig.json" assert { type: "json" }
import smallTestData from "./small_test.json" assert { type: "json" }
import sheepData from "../puzzles/sheep.json" assert { type: "json" }
import fortuneData from "../puzzles/fortune.json" assert { type: "json" }
import yinyangData from "../puzzles/yinyang.json" assert { type: "json" }
import bottleData from "../puzzles/bottle.json" assert { type: "json" }
import snakeData from "../puzzles/snek.json" assert { type: "json" }
import incenseData from "../puzzles/incense.json" assert { type: "json" }
import mouseData from "../puzzles/mouse.json" assert { type: "json" }
import dragonData from "../puzzles/dragon.json" assert { type: "json" }
import ghostData from "../puzzles/ghost.json" assert { type: "json" }
import wizardData from "../puzzles/wizard.json" assert { type: "json" }
import ringData from "../puzzles/ring.json" assert { type: "json" }
import chocolateData from "../puzzles/chocolate.json" assert { type: "json" }
import presentData from "../puzzles/present.json" assert { type: "json" }
import balloonData from "../puzzles/balloon.json" assert { type: "json" }
import teddyData from "../puzzles/teddy.json" assert { type: "json" }
import valentinesData from "../puzzles/valentines.json" assert { type: "json" }
import flowerData from "../puzzles/flower.json" assert { type: "json" }
import foxData from '../puzzles/fox.json' assert { type: "json" };
import cobraData from '../puzzles/cobra.json' assert { type: "json" };
import crabbyData from '../puzzles/crabby.json' assert { type: "json" };
import jellyfishData from '../puzzles/jellyfish.json' assert { type: "json" };
import lynxData from '../puzzles/lynx.json' assert { type: "json" };
import hareData from '../puzzles/hare.json' assert { type: "json" };
import sparrowData from '../puzzles/sparrow.json' assert { type: "json" };
import terrierData from '../puzzles/terrier.json' assert { type: "json" };
import grootData from '../puzzles/groot.json' assert { type: "json" };
import helmetData from '../puzzles/helmet.json' assert { type: "json" };
import unicornData from '../puzzles/unicorn.json' assert { type: "json" };
import spookyGhostData from '../puzzles/spooky_ghost.json' assert { type: "json" };
import penguinData from '../puzzles/penguin.json' assert { type: "json" };
import snailData from '../puzzles/snail.json' assert { type: "json" };
import keyData from '../puzzles/key.json' assert { type: "json" };
import spiderData from '../puzzles/spider.json' assert { type: "json" };
import snowmanData from '../puzzles/snowman.json' assert { type: "json" };
import ribbonData from '../puzzles/ribbon.json' assert { type: "json" };
import strawberryData from '../puzzles/strawberry.json' assert { type: "json" };
import whaleData from '../puzzles/whale.json' assert { type: "json" };
import rockonData from '../puzzles/rock_on.json' assert { type: "json" };
import planktonData from '../puzzles/plankton.json' assert { type: "json" };
import martiniData from '../puzzles/martini.json' assert { type: "json" };
import robotData from '../puzzles/robot.json' assert { type: "json" };
import mametchiData from '../puzzles/mametchi.json' assert { type: "json" };
import elephantData from '../puzzles/elephant.json' assert { type: "json" };
import dandelionData from '../puzzles/dandelion.json' assert { type: "json" };
import lionData from '../puzzles/lion.json' assert { type: "json" };
import poundData from '../puzzles/pound.json' assert { type: "json" };
import shibaData from '../puzzles/shiba.json' assert { type: "json" };
import applesliceData from '../puzzles/apple_slice.json' assert { type: "json" };
import teapotData from '../puzzles/teapot.json' assert { type: "json" };
import rainyData from '../puzzles/rainy.json' assert { type: "json" };
import branchesData from '../puzzles/branches.json' assert { type: "json" };
import turnipData from '../puzzles/turnip.json' assert { type: "json" };
import froggyData from '../puzzles/froggy.json' assert { type: "json" };
import totoroData from '../puzzles/totoro.json' assert { type: "json" };


Devvit.configure({
  redditAPI: true,
  kvStore: true,
  redis: true,
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
  37: tulipData,
  38: moonData,
  39: friesData,
  40: pigData,
  41: sheepData,
  42: fortuneData, 
  43: yinyangData,
  44: bottleData,
  45: snakeData,
  46: incenseData,
  47: mouseData,
  48: dragonData,
  49: ghostData,
  50: lynxData,
  51: wizardData,
  52: ringData, // valentines day 1,
  53: chocolateData, // valentines day 2,
  54: presentData, //valentines day 3,
  55: balloonData, // valentines day 4,
  56: teddyData, // valentines day 5,
  57: valentinesData, // valentines day 6,
  58: flowerData, // valentines day 7,
  59: foxData, 
  60: helmetData,
  61: penguinData,
  62: snowmanData, 
  63: snailData,
  64: crabbyData,
  65: spiderData,
  66: jellyfishData,
  67: terrierData,
  68: sparrowData,
  69: keyData,
  70: ribbonData,
  71: unicornData,
  72: whaleData, 
  73: rockonData,
  74: planktonData, 
  75: martiniData, 
  76: robotData, 
  77: mametchiData, 
  78: elephantData, 
  79: dandelionData, 
  80: lionData, 
  81: poundData,
  82: cobraData, 
  83: strawberryData,
  84: turnipData,
  85: shibaData, 
  86: applesliceData, 
  87: teapotData,
  88: rainyData,
  89: branchesData,
  // easy puzzle here
  91: froggyData,
  92: totoroData,
  93: hareData, // save for easter theme
  94: spookyGhostData, // did similar one recently
} as const;

Devvit.addMenuItem({
  location: 'subreddit',
  label: 'DM Redis Data',
  forUserType: 'moderator',
  onPress: async (event, context) => {
    const { redis, reddit } = context;
    
    let message = 'Hello! Here is the puzzle completion data:\n\n';
    
    // Get all puzzle completion data
    for (const puzzleNumber in puzzleMap) {
      // Get unique completions count for this puzzle
      const uniqueCompletions = await redis.zCard(`puzzle:${puzzleNumber}:completions`);
      message += `Puzzle #${puzzleNumber}: ${uniqueCompletions || 0} unique completions`
      message += `\n\n`;
    }
    
    // Send DM
    await reddit.sendPrivateMessage({
      to: 'sleepsloop42',
      subject: 'Ninigrams Completion Data',
      text: message
    });

    await reddit.sendPrivateMessage({
      to: 'Nina_gram',
      subject: 'Ninigrams Completion Data',
      text: message
    });
    
    // Notify the user
    await context.ui.showToast('Completion data sent to your DMs');
  },
});

Devvit.addMenuItem({
  location: 'subreddit',
  label: 'Send dm to nini',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit } = context;
    
    // Send a simple "Hello" message to yourself
    await reddit.sendPrivateMessage({
      to: 'Nini_gram',
      subject: 'Sup gurl',
      text: 'Im a beeper im a booper im a peter pooter'
    });
    
    // Notify the user
    await context.ui.showToast('Hello message sent to your DMs');
  },
});

Devvit.addMenuItem({
  label: `Ninigram #0: Small Test`,
  location: 'subreddit',
  forUserType: 'moderator',
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
  label: `Ninigram #42: Good Fortune Awaits (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #42: Good Fortune Awaits (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #42...</text></vstack>)
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
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #43: Balanced Harmony (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #43...</text></vstack>)
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
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #44: Festive Pour (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #44...</text></vstack>)
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
  label: `Ninigram #45: Dangerous Noodle (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #45: Dangerous Noodle (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #45...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(45));
      ui.showToast({ text: `Created Ninigram #45!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #45: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #46: Burning Bright (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #46: Burning Bright (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #46...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(46));
      ui.showToast({ text: `Created Ninigram #46!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #46: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #47: Tiny but Mighty (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #47: Tiny but Mighty (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #47...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(47));
      ui.showToast({ text: `Created Ninigram #47!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #47: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #48: May the Scales be Tipped in Your Favor (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #48: May the Scales be Tipped in Your Favor (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #48...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(48));
      ui.showToast({ text: `Created Ninigram #48!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #48: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #49: Hide and Shriek! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #49: Hide and Shriek! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #49...</text></vstack>)
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
  label: `Ninigram #50: On the Prowl (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #50: On the Prowl (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #50...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(50));
      ui.showToast({ text: `Created Ninigram #50!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #50: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #51: You Shall Not Pass (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #51: You Shall Not Pass (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #51...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(51));
      ui.showToast({ text: `Created Ninigram #51!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #51: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #52: Wrapped Around my Finger (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #52: Wrapped Around my Finger (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #52...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(52));
      ui.showToast({ text: `Created Ninigram #52!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #52: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #53: You Make Me Melt (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #53: You Make Me Melt (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #53...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(53));
      ui.showToast({ text: `Created Ninigram #53!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #53: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #54: Tied up with a Bow (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #54: Tied up with a Bow (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #54...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(54));
      ui.showToast({ text: `Created Ninigram #54!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #54: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #55: Hold Me Tight, Don't Let Go! (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #55: Hold Me Tight, Don't Let Go! (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #55...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(55));
      ui.showToast({ text: `Created Ninigram #55!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #55: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #56: You're Beary Special (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #56: You're Beary Special (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #56...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(56));
      ui.showToast({ text: `Created Ninigram #56!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #56: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #57: It's a Date! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #57: It's a Date! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #57...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(57));
      ui.showToast({ text: `Created Ninigram #57!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #57: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #58: My First Pick (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #58: My First Pick (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #58...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(58));
      ui.showToast({ text: `Created Ninigram #58!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #58: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #59: Tricks of the Trade (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #59: Tricks of the Trade (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #59...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(59));
      ui.showToast({ text: `Created Ninigram #59!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #59: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #60: Safety First (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #60: Safety First (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #60...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(60));
      ui.showToast({ text: `Created Ninigram #60!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #60: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #61: Noot! Noot! (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #61: Noot! Noot! (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #61...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(61));
      ui.showToast({ text: `Created Ninigram #61!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #61: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #62: May Your Troubles Melt Away (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #62: May Your Troubles Melt Away (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #62...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(62));
      ui.showToast({ text: `Created Ninigram #62!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #62: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #63: Shell-abrate Good Times, Come On! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #63: Shell-abrate Good Times, Come On! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #63...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(63));
      ui.showToast({ text: `Created Ninigram #63!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #63: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #64: Crack the Code! (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #64: Crack the Code! (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #64...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(64));
      ui.showToast({ text: `Created Ninigram #64!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #64: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #65: Web Designer (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #65: Web Designer (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #65...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(65));
      ui.showToast({ text: `Created Ninigram #65!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #65: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #66: Sting Operation (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #66: Sting Operation (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #66...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(66));
      ui.showToast({ text: `Created Ninigram #66!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #66: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #67: Barking Up the Right Tree (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #67: Barking Up the Right Tree (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #67...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(67));
      ui.showToast({ text: `Created Ninigram #67!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #67: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #68: Just Wing It (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #68: Just Wing It (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #68...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(68));
      ui.showToast({ text: `Created Ninigram #68!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #68: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #69: Unlock Your Dor-key Side (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #69: Unlock Your Dor-key Side (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #69...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(69));
      ui.showToast({ text: `Created Ninigram #69!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #69: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #70: Let's Wrap it Up! (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #70: Let's Wrap it Up! (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #70...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(70));
      ui.showToast({ text: `Created Ninigram #70!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #70: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #71: A Little Bit of Pixel Dust (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #71: A Little Bit of Pixel Dust (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #71...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(71));
      ui.showToast({ text: `Created Ninigram #71!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #71: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #72: A Splash of Genius (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #72: A Splash of Genius (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #72...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(72));
      ui.showToast({ text: `Created Ninigram #72!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #72: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #73: Rock On! (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #73: Rock On! (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #73...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(73));
      ui.showToast({ text: `Created Ninigram #73!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #73: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #74: Eat at the Chum Bucket or Perish! (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #74: Eat at the Chum Bucket or Perish! (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #74...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(74));
      ui.showToast({ text: `Created Ninigram #74!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #74: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #75: Shaken, Not Stirred (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #75: Shaken, Not Stirred (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #75...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(75));
      ui.showToast({ text: `Created Ninigram #75!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #75: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #76: Beep Boop (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #76: Beep Boop (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #76...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(76));
      ui.showToast({ text: `Created Ninigram #76!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #76: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #77: A Virtual Pet (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #77: A Virtual Pet (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #77...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(77));
      ui.showToast({ text: `Created Ninigram #77!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #77: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #78: A Puzzle Ivory Day?! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #78: A Puzzle Ivory Day?! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #78...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(78));
      ui.showToast({ text: `Created Ninigram #78!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #78: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #79: Fine and Dandy (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #79: Fine and Dandy (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #79...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(79));
      ui.showToast({ text: `Created Ninigram #79!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #79: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #80: The Mane Event (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #80: The Mane Event (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #80...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(80));
      ui.showToast({ text: `Created Ninigram #80!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #80: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #81: Pound It! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #81: Pound It! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #81...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(81));
      ui.showToast({ text: `Created Ninigram #81!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #81: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #82: New Year, New Skin (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #82: New Year, New Skin (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #82...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(82));
      ui.showToast({ text: `Created Ninigram #82!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #82: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #83: In a Jam (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #83: In a Jam (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #83...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(83));
      ui.showToast({ text: `Created Ninigram #83!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #83: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #84: Turnip the Beet! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #84: Turnip the Beet! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #84...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(84));
      ui.showToast({ text: `Created Ninigram #84!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #84: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #85: Just a Doge (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #85: Just a Doge (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #85...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(85));
      ui.showToast({ text: `Created Ninigram #85!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #85: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #86: Sweet to the Core (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #86: Sweet to the Core (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #86...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(86));
      ui.showToast({ text: `Created Ninigram #86!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #86: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #87: Short and Stout (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #87: Short and Stout (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #87...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(87));
      ui.showToast({ text: `Created Ninigram #87!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #87: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #88: I’ve Got You Covered (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #88: I’ve Got You Covered (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #88...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(88));
      ui.showToast({ text: `Created Ninigram #88!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #88: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #89: Branch Out (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #89: Branch Out (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #89...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(89));
      ui.showToast({ text: `Created Ninigram #89!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #89: ${error}` });
    }
  },
});

// Devvit.addMenuItem({
//   label: `Ninigram #90:  (Easy)`,
//   location: 'subreddit',
//   forUserType: 'moderator',
//   onPress: async (_event, context) => {
//     const { reddit, ui, kvStore } = context;
//     const subreddit = await reddit.getCurrentSubreddit();
//     try {
//       const post = await reddit.submitPost({
//         title: `Ninigram #90:  (Easy)`,
//         subredditName: subreddit.name,
//         preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #90...</text></vstack>)
//       });
//       await kvStore.put(`puzzle_${post.id}`, String(90));
//       ui.showToast({ text: `Created Ninigram #90!` });
//       ui.navigateTo(post);
//     } catch (error) {
//       ui.showToast({ text: `Failed to create Ninigram #90: ${error}` });
//     }
//   },
// });

Devvit.addMenuItem({
  label: `Ninigram #91: Don’t Worry, Be Hoppy (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #91: Don’t Worry, Be Hoppy (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #91...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(91));
      ui.showToast({ text: `Created Ninigram #91!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #91: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #92: My Cute Neighbor (Hard)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #92: My Cute Neighbor (Hard)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #92...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(92));
      ui.showToast({ text: `Created Ninigram #92!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #92: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #93: Hop Through the Squares! (Easy)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #93: Hop Through the Squares! (Easy)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #92...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(93));
      ui.showToast({ text: `Created Ninigram #93!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #93: ${error}` });
    }
  },
});

Devvit.addMenuItem({
  label: `Ninigram #94: Working the Graveyard Shift (Medium)`,
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui, kvStore } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    try {
      const post = await reddit.submitPost({
        title: `Ninigram #94: Working the Graveyard Shift (Medium)`,
        subredditName: subreddit.name,
        preview: (<vstack height="100%" width="100%" alignment="middle center"><text size="large">Loading Ninigram #93...</text></vstack>)
      });
      await kvStore.put(`puzzle_${post.id}`, String(94));
      ui.showToast({ text: `Created Ninigram #94!` });
      ui.navigateTo(post);
    } catch (error) {
      ui.showToast({ text: `Failed to create Ninigram #94: ${error}` });
    }
  },
});

// Update getPuzzleNumber with the correct context type
type CustomPostRenderContext = Parameters<Parameters<typeof Devvit.addCustomPostType>[0]['render']>[0];

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
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // const [successText, setSuccessText] = useState("");
    // const [tutorialStep, setTutorialStep] = useState(0);
    // const [showIntroText, setShowIntroText] = useState(true);

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

    const checkSolution = async () => {
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

        try {
          const { redis, userId } = context;
          if (!userId) return;

          // Record completion in Redis
          const timestamp = Date.now();

          // Add to user's completed puzzles
          await redis.zAdd(`user:${userId}:completions`, {
            score: timestamp,
            member: `puzzle:${puzzleNumber}`
          });

          // Add to puzzle's completion list
          await redis.zAdd(`puzzle:${puzzleNumber}:completions`, {
            score: timestamp,
            member: userId
          });

        } catch (error) {
          console.error('Error recording completion:', error);
        }
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

      // Add type for grid rendering
      type GridRow = number[];
      type GridCell = number;

      // Update the grid rendering with proper types
      const grid = splitArray(currentData, effectiveWidth).map((row: GridRow, rowIndex: number) => {
        const renderedRow = row.map((_: GridCell, colIndex: number) => {
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
                color={theme.congratsTextColor}
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
                  .map((row: GridRow, rowIndex: number) => (
                    <hstack key={`row-${rowIndex}`}>
                      {row.slice(clueColsToUse).map((cell: GridCell, colIndex: number) => (
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
            ? <TutorialScreen setPage={setCurrentPage} context={context} />
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