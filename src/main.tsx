import {Devvit} from '@devvit/public-api'

// Delete data below & import from .json file instead (used for playground)
const data = {
  name: "Man in Hat",
  clueRowData: [
    [2, 5],
    [2, 7],
    [2, 7],
    [10],
    [14],
    [2, 1],
    [2, 2, 3],
    [1, 1, 1, 1],
    [1, 1],
    [1, 2, 1],
    [1, 2, 1],
    [1, 1, 3],
    [2, 1, 1, 1, 1],
    [4, 3, 1, 1],
    [6, 2, 1],
  ],
  clueColData: [
    [1, 1],
    [1, 2],
    [8, 3],
    [7, 2, 3],
    [1, 2, 1, 2],
    [4, 1, 1, 1],
    [5, 2, 1],
    [5, 2, 1],
    [5, 2, 1],
    [5, 2, 1, 1],
    [5, 1, 1, 2],
    [9],
    [1, 4],
    [1, 2],
    [2],
  ],
  maxClueRows: 4,
  maxClueCols: 5,
  solution: [
    [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0],
  ],
};

const colors = [
  "#FFFFFF", // white
  "#000000", // blacks
  "#B0B0B0"  // darker grey
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

// import data from "./man-in-hat.json" // uncomment out :P
const puzzle = loadPuzzle(data)
const clueRows = puzzle.maxClueRows; // maximum rows reserved for clues
const clueCols = puzzle.maxClueCols; // maximum cols reserved for clues
const playableRows = puzzle.clueRowData.length; // standard grid assumes 15
const playableCols = puzzle.clueColData.length; // standard grid assumes 15
const width = clueCols + playableCols;
const height = clueRows + playableRows;
const pixelSize = 22; // Increased from 16 to 24 pixels

const blankCanvas = new Array(width * height).fill(2); // Default to darker grey (index 2)
const defaultColor = 2; // Set default color to darker grey

Devvit.addCustomPostType({
  name: 'Name', 
  height: 'tall',
  render: context => {
    const { useState } = context;
    const [activeColor, setActiveColor] = useState(defaultColor);
    const [data, setData] = useState(blankCanvas);

    const ColorSelector = () => (
      <hstack width="100%" alignment="center">
        <hstack border="thin" borderColor="blue" grow={false} cornerRadius="small">
          {colors.map((color, index) => (
            <hstack
              key={`color-${index}`}
              height={`${pixelSize}px`}
              width={`${pixelSize}px`}
              backgroundColor={color}
              onPress={() => setActiveColor(index)}
              alignment="middle center"
            >
              {activeColor === index && (
                <text
                  color={index === 1 ? "white" : "black"}
                  weight="bold"
                  size="xxlarge"
                >
                  ✓
                </text>
              )}
            </hstack>
          ))}
        </hstack>
      </hstack>
    );

    const pixels = data.map((pixel, index) => {
      return (
        <hstack
          key={`pixel-${index}`}
          onPress={() => {
            if (data[index] !== activeColor) {
              const newData = [...data];
              newData[index] = activeColor;
              setData(newData);
            }
          }}
          height={`${pixelSize}px`}
          width={`${pixelSize}px`}
          backgroundColor={colors[pixel]}
          border="thin"
        />
      );
    });

    const gridWidth = `${width * pixelSize}px`;
    const gridHeight = `${height * pixelSize}px`;

    function splitArray<T>(array: T[], segmentLength: number): T[][] {
      const result: T[][] = [];
      for (let i = 0; i < array.length; i += segmentLength) {
        result.push(array.slice(i, i + segmentLength));
      }
      return result;
    }
    
    const NumberRow = ({ length }: { length: number }) => (
      <hstack>
        {Array.from({ length }, (_, i) => (
          <text key={`col-number-${i}`} size="medium" width={`${pixelSize}px`} alignment="center">
            {i + 1}
          </text>
        ))}
      </hstack>
    );

    const Canvas = () => {
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
            const clueValue = clueArray?.[rowIndex] ?? ""; // clue value (default to empty)
            return (
              <text
                key={`clueRow-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
                alignment="center"
              >
                {clueValue}
              </text>
            );
          }

          if (isClueCol) {
            const clueIndex = rowIndex - clueRows; // index of clue in clueRowData
            const clueArray = puzzle.clueRowData[clueIndex]; // array of clues in curr row
            const clueValue = clueArray?.[colIndex] ?? ""; // clue value (default to empty)
            return (
              <text
                key={`clueCol-${rowIndex}-${colIndex}`}
                height={`${pixelSize}px`}
                width={`${pixelSize}px`}
                alignment="center"
              >
                {clueValue}
              </text>
            );
          }

          // Render a single cell in the grid
          return (
            <hstack
              key={`pixel-${rowIndex}-${colIndex}`}
              onPress={() => { // To execute upon clicking on cell
                const newData = [...data]; // Copy data array
                const index = rowIndex * width + colIndex; 
                newData[index] = activeColor; // Update color
                setData(newData);
              }}
              height={`${pixelSize}px`}
              width={`${pixelSize}px`}
              backgroundColor={colors[data[rowIndex * width + colIndex]]}
              border="thin"
            ></hstack>
          );
        });

        return (
          <hstack key={`row-${rowIndex}`}>
            {renderedRow}
          </hstack>
        );
      });
        
      return <vstack>{grid}</vstack>;
    };
  
    return (
      <blocks>
        <vstack gap="small" width="100%" height="100%" alignment="middle center">
          <Canvas />
          <ColorSelector />
        </vstack>
      </blocks>
    );
  },
});

export default Devvit