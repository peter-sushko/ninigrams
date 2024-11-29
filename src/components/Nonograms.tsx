import React from 'react';
import { NonogramsGame } from './NonogramsGame';
import { Board } from './Board';
import { ToolSelector } from './ToolSelector';
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
