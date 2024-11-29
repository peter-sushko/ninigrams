import {Devvit} from '@devvit/public-api'

const colors = [
  "#FFFFFF",
  "#000000",
  "#EB5757",
  "#F2994A",
  "#F2C94C",
  "#27AE60",
  "#2F80ED",
  "#9B51E0"
];

const resolution = 8;
const size = 32;
const blankCanvas = new Array(resolution * resolution).fill(0);
const defaultColor = 1;

Devvit.addCustomPostType({
  name: 'Name',
  render: context => {
    const { useState } = context;
    const [activeColor, setActiveColor] = useState(defaultColor);
    const [data, setData] = useState(blankCanvas);

    const ColorSelector = () => (
      <hstack width="100%" alignment="center">
        {/* nested hstack to negate grow */}
        <hstack border="thin" grow={false} cornerRadius="small">
          {colors.map((color, index) => (
            <hstack
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

    const pixels = data.map((pixel, index) => (
      <hstack
        onPress={() => {
          const newData = data;
          newData[index] = activeColor;
          setData(newData);
        }}
        height={`${size}px`}
        width={`${size}px`}
        backgroundColor={colors[pixel]}
      />
    ));

    const gridSize = `${resolution * size}px`;

    function splitArray<T>(array: T[], segmentLength: number): T[][] {
      const result: T[][] = [];
      for (let i = 0; i < array.length; i += segmentLength) {
        result.push(array.slice(i, i + segmentLength));
      }
      return result;
    }
    
    const Canvas = () => (
      <vstack
        cornerRadius="small"
        border="thin"
        height={gridSize}
        width={gridSize}
      >
        {splitArray(pixels, resolution).map((row) => (
          <hstack>{row}</hstack>
        ))}
      </vstack>
    );
    
    return (
      <blocks>
        <vstack gap="small" width="100%" height="100%" alignment="center middle">
          <Canvas />
          <ColorSelector />
        </vstack>
      </blocks>
    )
  }
})

export default Devvit