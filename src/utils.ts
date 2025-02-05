import type { CustomPostRenderContext } from './types.js';

// Helper function to get puzzle number from context
export const getPuzzleNumber = async (context: CustomPostRenderContext) => {
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

// Helper function to calculate horizontal grid lines
export const calculateGridLines = (clueRows: number, playableRows: number, effectiveWidth: number) => {
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

// Helper function to calculate vertical grid lines
export const calculateVerticalGridLines = (clueCols: number, playableCols: number, effectiveHeight: number) => {
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

// Theme type definition
export type Theme = {
  welcomeLogo: string;
  welcomeBackground: string;
  gameplayBackground: string;
  congratsLogo: string;
  congratsBackground: string;
  congratsOverlay: string;
  congratsTextColor: string;
};

// Default theme configuration
export const defaultTheme: Theme = {
  welcomeLogo: "flower_logo_no_bg.png",
  welcomeBackground: "sakura_river.jpg",
  gameplayBackground: "sakura_river.gif",
  congratsLogo: "flower_logo_no_bg.png",
  congratsBackground: "rgb(170, 230, 240)",
  congratsOverlay: "sakura-leaves.gif",
  congratsTextColor: "#333333"
};

// Chinese New Year theme configuration
export const cnyTheme: Theme = {
  welcomeLogo: "red_flower.gif",
  welcomeBackground: "cny_background.jpg",
  gameplayBackground: "cny_background.gif",
  congratsLogo: "red_flower.gif",
  congratsBackground: "AlienBlue-700",
  congratsOverlay: "lantern.gif",
  congratsTextColor: "#d9d9d9"
};

// Valentine's theme configuration
export const valentinesTheme: Theme = {
  welcomeLogo: "heart_logo.gif",
  welcomeBackground: "valentines_background.jpg",
  gameplayBackground: "valentines_background.gif",
  congratsLogo: "heart_logo.gif",
  congratsBackground: "rgb(220,155,175)",
  congratsOverlay: "falling_hearts.gif",
  congratsTextColor: "#d9d9d9"
};

// Helper function to get theme based on puzzle number
export const getTheme = (puzzleNumber: number): Theme => {
  if (puzzleNumber == 0 || (puzzleNumber >= 42 && puzzleNumber <= 48)) {
    return cnyTheme;
  }
  else if (puzzleNumber >= 52 && puzzleNumber <= 58) {
    return valentinesTheme;
  }
  return defaultTheme;
}; 