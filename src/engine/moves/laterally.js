import GameSettings from "../gameSettings";
import Square from "../square";
import Board from "../board";

export default class Laterally {
  static move(piecePosition, positionArr, board) {
    // checks right
    for (let i = piecePosition.col + 1; i < GameSettings.BOARD_SIZE; i++) {
      positionArr.push(Square.at(piecePosition.row, i));
      if (board.getPiece(Square.at(piecePosition.row, i)) !== undefined) {
        break;
      }
    }

    // checks left
    for (let i = piecePosition.col - 1; i >= 0; i--) {
      positionArr.push(Square.at(piecePosition.row, i));
      if (board.getPiece(Square.at(piecePosition.row, i)) !== undefined) {
        break;
      }
    }

    // checks up
    for (let i = piecePosition.row + 1; i < GameSettings.BOARD_SIZE; i++) {
      positionArr.push(Square.at(i, piecePosition.col));
      if (board.getPiece(Square.at(i, piecePosition.col)) !== undefined) {
        break;
      }
    }

    // checks down
    for (let i = piecePosition.row - 1; i >= 0; i--) {
      positionArr.push(Square.at(i, piecePosition.col));
      if (board.getPiece(Square.at(i, piecePosition.col)) !== undefined) {
        break;
      }
    }
  }
}
