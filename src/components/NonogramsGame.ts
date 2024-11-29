import { ContextAPIClients, UseStateResult } from '@devvit/public-api';
import { Cell } from './cellType.js';
import { ToolColor } from './toolColor.js';

export class NonogramsGame {
  private readonly _board: UseStateResult<Cell[]>;
  private readonly _boardWidth: UseStateResult<number>;
  private readonly _boardHeight: UseStateResult<number>;
  private readonly _selectedColor: UseStateResult<ToolColor>;

  constructor({ useState }: ContextAPIClients) {
    this._board = useState([] as Cell[]);
    this._boardWidth = useState(0);
    this._boardHeight = useState(0);
    // Fix: Cast the initial value to ToolColor to match the type
    this._selectedColor = useState<ToolColor>(ToolColor.Black);

    this.startGame();
  }

  private get board() {
    return this._board[0];
  }

  private set board(value: Cell[]) {
    this._board[0] = value;
    this._board[1](value);
  }

  get boardWidth() {
    return this._boardWidth[0];
  }

  private set boardWidth(value: number) {
    this._boardWidth[0] = value;
    this._boardWidth[1](value);
  }

  get boardHeight() {
    return this._boardHeight[0];
  }

  private set boardHeight(value: number) {
    this._boardHeight[0] = value;
    this._boardHeight[1](value);
  }

  get selectedColor() {
    return this._selectedColor[0];
  }

  private set selectedColor(value: ToolColor) {
    this._selectedColor[0] = value;
    this._selectedColor[1](value);
  }

  setSelectedColor = (color: ToolColor) => () => {
    this.selectedColor = color;
  };

  startGame() {
    const width = 5;
    const height = 5;
    const board = new Array(width * height).fill(0).map(() => ({
      color: 'lightgray',
    }) as Cell);
    this.board = board;
    this.boardWidth = width;
    this.boardHeight = height;
  }

  getCell(x: number, y: number) {
    const index = y * this.boardWidth + x;
    return this.board[index];
  }

  clickCell(x: number, y: number) {
    const cell = this.getCell(x, y);
    console.log(`Cell at (${x}, ${y}) clicked. Current color: ${cell.color}, Selected color: ${this.selectedColor}`);
    cell.color = this.selectedColor;
    this.board = [...this.board]; // Trigger re-render
    console.log(`Cell color updated to: ${cell.color}`);
  }
}
