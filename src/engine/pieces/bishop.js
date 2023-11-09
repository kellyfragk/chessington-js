import Piece from "./piece";
import Square from "../square";
import GameSettings from "../../../src/engine/gameSettings";
import Diagonally from "../moves/diagonally";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const bishopPos = board.findPiece(this);
    let position = [];

    Diagonally.move(bishopPos, position);

    return position;
  }
}
