import Piece from "./piece";
import Square from "../square";
import GameSettings from "../../../src/engine/gameSettings";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const bishopPos = board.findPiece(this);
    let position = [];

    for (let i = 1; i < GameSettings.BOARD_SIZE - bishopPos.col; i++) {
      position.push(Square.at(bishopPos.row + i, bishopPos.col + i));
    }

    for (let i = 1; i < bishopPos.col + 1; i++) {
      position.push(Square.at(bishopPos.row + i, bishopPos.col - i));
    }

    for (let i = 1; i < bishopPos.row + 1; i++) {
      position.push(Square.at(bishopPos.row - i, bishopPos.col - i));
      position.push(Square.at(bishopPos.row - i, bishopPos.col + i));
    }

    return position;
  }
}
