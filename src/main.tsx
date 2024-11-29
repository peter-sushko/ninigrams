// Learn more at developers.reddit.com/docs
import { Devvit, useState } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
});

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: 'Peters-test-2',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      title: 'Peters devvit post',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading ...</text>
        </vstack>
      ),
    });
    ui.showToast({ text: 'Created post!' });
  },
});

// Add a post type definition
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

    return (
      <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <image
          url="logo.png"
          description="logo"
          imageHeight={256}
          imageWidth={256}
          height="48px"
          width="48px"
        />
        <text size="large">{`Click counter: ${counter}`}</text>
        <button appearance="primary" onPress={() => setCounter((counter) => counter + 1)}>
          sleep sloop2
        </button>
      </vstack>
    );
  },
});

export default Devvit;
