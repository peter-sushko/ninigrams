import React from 'react';
import { NonogramsGame } from './NonogramsGame';
import CellView from './Cell';
import { Devvit } from '@devvit/public-api';

export const Board = ({ game }: { game: NonogramsGame }) => {
  const rows = [];

  for (let row = 0; row < game.boardHeight; ++row) {
    const cells = [];
    for (let col = 0; col < game.boardWidth; ++col) {
      const cell = game.getCell(col, row);
      cells.push(
        <CellView key={`${col}-${row}`} game={game} x={col} y={row} cell={cell} />
      );
    }
    rows.push(
      <hstack key={row.toString()}>
        {cells}
      </hstack>
    );
  }

  return <vstack alignment={'middle center'}>{rows}</vstack>;
};
