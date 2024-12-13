// import React from 'react';
import { Cell } from './cellType.js';
import { NonogramsGame } from './NonogramsGame.js';
import { Devvit } from '@devvit/public-api';
// import { useState } from 'react';

const CellView = ({
  game,
  x,
  y,
  cell,
}: {
  game: NonogramsGame;
  x: number;
  y: number;
  cell: Cell;
}) => {
  const bgColor = cell.color;

  return (
    <zstack onPress={() => {
      console.log(`Cell at (${x}, ${y}) pressed.`);
      game.clickCell(x, y);
    }} alignment={'middle center'}>
      <hstack
        border={'thin'}
        backgroundColor={bgColor}
        padding={'medium'}
        cornerRadius={'small'}
      ></hstack>
    </zstack>
  );
};

export default CellView;


