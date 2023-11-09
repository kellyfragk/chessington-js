import GameSettings from "../gameSettings";
import Square from "../square";
import Board from "../board";

export default class Diagonally {
  static move(piecePosition, positionArr) {
    for (let i = 1; i < GameSettings.BOARD_SIZE - piecePosition.col; i++) {
      positionArr.push(Square.at(piecePosition.row + i, piecePosition.col + i));
    }

    for (let i = 1; i < piecePosition.col + 1; i++) {
      positionArr.push(Square.at(piecePosition.row + i, piecePosition.col - i));
    }

    for (let i = 1; i < piecePosition.row + 1; i++) {
      positionArr.push(Square.at(piecePosition.row - i, piecePosition.col - i));
      positionArr.push(Square.at(piecePosition.row - i, piecePosition.col + i));
    }
  }
}
