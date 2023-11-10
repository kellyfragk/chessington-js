import MoveInDirection from "./moveInDirection";

export default class Diagonally {
  static move(piecePosition, positionArr, board) {
    // col + 1, row + 1
    MoveInDirection.move(board, positionArr, piecePosition, 1, 1);
    MoveInDirection.move(board, positionArr, piecePosition, 1, -1);
    MoveInDirection.move(board, positionArr, piecePosition, -1, +1);
    MoveInDirection.move(board, positionArr, piecePosition, -1, -1);
  }
}
