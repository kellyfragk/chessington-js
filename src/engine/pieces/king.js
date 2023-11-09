import Piece from "./piece";
import gameSettings from "../gameSettings";
import Square from "../square";

export default class King extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const kingPos = board.findPiece(this);

    let position = [];

    // move up
    if (kingPos.row <= gameSettings.BOARD_SIZE - 2) {
      position.push(Square.at(kingPos.row + 1, kingPos.col));
    }

    // move down
    if (kingPos.row >= 1) {
      position.push(Square.at(kingPos.row - 1, kingPos.col));
    }

    // move right
    if (kingPos.col <= gameSettings.BOARD_SIZE - 2) {
      position.push(Square.at(kingPos.row, kingPos.col + 1));
    }

    // move left
    if (kingPos.col >= 1) {
      position.push(Square.at(kingPos.row, kingPos.col - 1));
    }

    // move diagonally up & right
    if (
      kingPos.row <= gameSettings.BOARD_SIZE - 2 &&
      kingPos.col <= gameSettings.BOARD_SIZE - 2
    ) {
      position.push(Square.at(kingPos.row + 1, kingPos.col + 1));
    }

    // move diagonally up & left
    if (kingPos.row <= gameSettings.BOARD_SIZE - 2 && kingPos.col >= 1) {
      position.push(Square.at(kingPos.row + 1, kingPos.col - 1));
    }

    // move diagonally down & right
    if (kingPos.row >= 1 && kingPos.col <= gameSettings.BOARD_SIZE - 2) {
      position.push(Square.at(kingPos.row - 1, kingPos.col + 1));
    }

    // move diagonally down & left
    if (kingPos.row >= 1 && kingPos.col >= 1) {
      position.push(Square.at(kingPos.row - 1, kingPos.col - 1));
    }

    return position;
  }
}
