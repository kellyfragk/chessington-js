import GameSettings from "../gameSettings";
import Square from "../square";

export default class MoveInDirection {
  static isOutOfBounds(square) {
    return (
      square.row >= GameSettings.BOARD_SIZE ||
      square.col >= GameSettings.BOARD_SIZE ||
      square.row < 0 ||
      square.col < 0
    );
  }

  static move(board, positionArr, currentSquare, rowDiff, colDiff) {
    for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
      const newSquare = Square.at(
        currentSquare.row + rowDiff * i,
        currentSquare.col + colDiff * i,
      );

      if (this.isOutOfBounds(newSquare)) {
        break;
      }
      positionArr.push(newSquare);
      if (board.getPiece(newSquare) !== undefined) {
        break;
      }
    }
  }
}
