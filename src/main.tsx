import {Devvit} from '@devvit/public-api'

const colors = [
  "#FFFFFF", // white
  "#000000", // blacks
  "#B0B0B0"  // darker grey
];

const width = 15;
const height = 11;
const size = 22;
const blankCanvas = new Array(width * height).fill(2); // Default to darker grey (index 2)
const defaultColor = 2; // Set default color to darker grey

Devvit.addCustomPostType({
  name: 'Name', 
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
              height={`${size}px`}
              width={`${size}px`}
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
          height={`${size}px`}
          width={`${size}px`}
          backgroundColor={colors[pixel]}
          border="thin"
        />
      );
    });

    const gridWidth = `${width * size}px`;
    const gridHeight = `${height * size}px`;

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
          <text key={`col-number-${i}`} size="medium" width={`${size}px`} alignment="center">
            {i + 1}
          </text>
        ))}
      </hstack>
    );

    const Canvas = () => (
      <hstack>
        <vstack
          cornerRadius="small"
          border="thin" // Changed to thin for the outside border
          height={gridHeight}
          width={gridWidth}
        >
          <NumberRow length={width} />
          {splitArray(pixels, width).map((row, rowIndex) => (
            <hstack key={`row-${rowIndex}`}>
              {row}
            </hstack>
          ))}
        </vstack>
      </hstack>
    );
  
    return (
      <blocks>
        <vstack gap="small" width="100%" height="100%" alignment="middle center">
          <Canvas />
          <ColorSelector />
        </vstack>
      </blocks>
    )
  }
})

export default Devvit