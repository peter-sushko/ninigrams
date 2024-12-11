// import React from 'react';
import { NonogramsGame } from './NonogramsGame.js';
import { ToolColor } from './toolColor.js';
import { Devvit } from '@devvit/public-api';

export const ToolSelector = ({ game }: { game: NonogramsGame }) => {
  const isBlackSelected = game.selectedColor === ToolColor.Black;

  return (
    <hstack alignment={'middle center'} gap={'small'}>
      <text selectable={false}>Color:</text>
      <button
        appearance={isBlackSelected ? 'primary' : 'secondary'}
        onPress={game.setSelectedColor(ToolColor.Black)}
      >
        Black
      </button>
      <button
        appearance={!isBlackSelected ? 'primary' : 'secondary'}
        onPress={game.setSelectedColor(ToolColor.White)}
      >
        White
      </button>
    </hstack>
  );
};
