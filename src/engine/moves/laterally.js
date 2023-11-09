import GameSettings from "../gameSettings";
import Square from "../square";
import Board from "../board";

export default class Laterally {
  static move(piecePosition, positionArr) {
    for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
      if (i !== piecePosition.col) {
        positionArr.push(Square.at(piecePosition.row, i));
      }
      if (i !== piecePosition.row) {
        positionArr.push(Square.at(i, piecePosition.col));
      }
    }
  }
}
