// import React from 'react';
import { Cell } from './cellType.js';
import { NonogramsGame } from './NonogramsGame.js';
import { Devvit } from '@devvit/public-api';
import { useState } from 'react';

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
  const [showWinner, setShowWinner] = useState(false);

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
      <button 
        onClick={() => setShowWinner(true)}
        style={{
          padding: '8px 16px',
          margin: '4px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Winner
      </button>
      {showWinner && (
        <div style={{ 
          marginTop: '10px',
          fontSize: '18px',
          color: '#4CAF50',
          fontWeight: 'bold'
        }}>
          You Won!
        </div>
      )}
    </zstack>
  );
};

export default CellView;


