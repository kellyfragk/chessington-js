import GameSettings from "../gameSettings";
import Square from "../square";
import Board from "../board";

export default class Diagonally {
  static move(piecePosition, positionArr, board) {
    let pieceRowOrColCopy = piecePosition.row;

    // checks right up
    for (let i = piecePosition.col + 1; i < GameSettings.BOARD_SIZE; i++) {
      pieceRowOrColCopy++;
      if (pieceRowOrColCopy >= GameSettings.BOARD_SIZE) {
        break;
      }
      positionArr.push(Square.at(pieceRowOrColCopy, i));
      if (board.getPiece(Square.at(pieceRowOrColCopy, i)) !== undefined) {
        break;
      }
    }

    // checks left up
    pieceRowOrColCopy = piecePosition.row;
    for (let i = piecePosition.col - 1; i >= 0; i--) {
      pieceRowOrColCopy++;
      if (pieceRowOrColCopy >= GameSettings.BOARD_SIZE) {
        break;
      }
      positionArr.push(Square.at(pieceRowOrColCopy, i));
      if (board.getPiece(Square.at(pieceRowOrColCopy, i)) !== undefined) {
        break;
      }
    }

    // checks right down
    pieceRowOrColCopy = piecePosition.col;
    for (let i = piecePosition.row - 1; i >= 0; i--) {
      pieceRowOrColCopy++;
      if (pieceRowOrColCopy >= GameSettings.BOARD_SIZE) {
        break;
      }
      positionArr.push(Square.at(i, pieceRowOrColCopy));
      if (board.getPiece(Square.at(i, pieceRowOrColCopy)) !== undefined) {
        break;
      }
    }

    // checks left down
    pieceRowOrColCopy = piecePosition.col;
    for (let i = piecePosition.row - 1; i >= 0; i--) {
      pieceRowOrColCopy--;
      if (pieceRowOrColCopy < 0) {
        break;
      }
      positionArr.push(Square.at(i, pieceRowOrColCopy));
      if (board.getPiece(Square.at(i, pieceRowOrColCopy)) !== undefined) {
        break;
      }
    }
  }
}

// Alternative approach - Keep to review in future
// for (let i = 1; i < GameSettings.BOARD_SIZE - piecePosition.col; i++) {
//   positionArr.push(Square.at(piecePosition.row + i, piecePosition.col + i));
//
//   if (
//     board.getPiece(
//       Square.at(piecePosition.row + i, piecePosition.col + i),
//     ) !== undefined
//   ) {
//     break;
//   }
// }
//
// for (let i = 1; i < piecePosition.col + 1; i++) {
//   positionArr.push(Square.at(piecePosition.row + i, piecePosition.col - i));
//
//   if (
//     board.getPiece(
//       Square.at(piecePosition.row + i, piecePosition.col - i),
//     ) !== undefined
//   ) {
//     break;
//   }
// }
//
// for (let i = 1; i < piecePosition.row + 1; i++) {
//   positionArr.push(Square.at(piecePosition.row - i, piecePosition.col - i));
//   if (
//     board.getPiece(
//       Square.at(piecePosition.row - i, piecePosition.col - i),
//     ) !== undefined
//   ) {
//     break;
//   }
// }
// for (let i = 1; i < piecePosition.row + 1; i++) {
//   positionArr.push(Square.at(piecePosition.row - i, piecePosition.col + i));
//
//   if (
//     board.getPiece(
//       Square.at(piecePosition.row - i, piecePosition.col + i),
//     ) !== undefined
//   ) {
//     break;
//   }
// }
//   }
// }
