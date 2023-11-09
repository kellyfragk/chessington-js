import Piece from "./piece";
import GameSettings from "../gameSettings";
import Square from "../square";
import Laterally from "../moves/laterally";
import Diagonally from "../moves/diagonally";

export default class Queen extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const queenPos = board.findPiece(this);

    let position = [];

    Laterally.move(queenPos, position);

    Diagonally.move(queenPos, position);

    return position;
  }
}
