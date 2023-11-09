import Piece from "./piece";
import Square from "../square";
import GameSettings from "../../../src/engine/gameSettings";
import Laterally from "../moves/laterally";
import Diagonally from "../moves/diagonally";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const rookPos = board.findPiece(this);

    let position = [];

    Laterally.move(rookPos, position, board);
    return position;
  }
}
