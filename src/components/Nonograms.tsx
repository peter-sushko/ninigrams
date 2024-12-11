// import React from 'react';
import { NonogramsGame } from './NonogramsGame.js';
import { Board } from './Board.js';
import { ToolSelector } from './toolSelector.js'; // Changed casing to match actual filename
import { Devvit } from '@devvit/public-api';

export const Nonograms = (context: any): JSX.Element => {
  const game = new NonogramsGame(context);

  return (
    <vstack grow>
      <Board game={game} />

      <spacer size={'xsmall'} />

      <ToolSelector game={game} />
    </vstack>
  );
};
