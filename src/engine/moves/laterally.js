import MoveInDirection from "./moveInDirection";

export default class Laterally {
  static move(piecePosition, positionArr, board) {
    MoveInDirection.move(board, positionArr, piecePosition, 0, 1);
    MoveInDirection.move(board, positionArr, piecePosition, 0, -1);
    MoveInDirection.move(board, positionArr, piecePosition, 1, 0);
    MoveInDirection.move(board, positionArr, piecePosition, -1, 0);
  }
}
