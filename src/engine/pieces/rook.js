import Piece from "./piece";
import Square from "../square";
import GameSettings from "../../../src/engine/gameSettings";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const rookPos = board.findPiece(this);

    let position = [];

    for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
      if (i !== rookPos.col) {
        position.push(Square.at(rookPos.row, i));
      }
      if (i !== rookPos.row) {
        position.push(Square.at(i, rookPos.col));
      }
    }
    return position;
  }
}
