import Piece from "./piece";
import GameSettings from "../gameSettings";
import Square from "../square";

export default class Knight extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const knightPos = board.findPiece(this);

    let position = [];

    // moving up
    if (
      knightPos.row <= GameSettings.BOARD_SIZE - 3 &&
      knightPos.col <= GameSettings.BOARD_SIZE - 2 &&
      knightPos.col >= 1
    ) {
      position.push(Square.at(knightPos.row + 2, knightPos.col + 1));
      position.push(Square.at(knightPos.row + 2, knightPos.col - 1));
    }

    // moving down
    if (
      knightPos.row >= 2 &&
      knightPos.col <= GameSettings.BOARD_SIZE - 2 &&
      knightPos.col >= 1
    ) {
      position.push(Square.at(knightPos.row - 2, knightPos.col + 1));
      position.push(Square.at(knightPos.row - 2, knightPos.col - 1));
    }

    // moving right
    if (
      knightPos.row <= GameSettings.BOARD_SIZE - 2 &&
      knightPos.row >= 1 &&
      knightPos.col <= GameSettings.BOARD_SIZE
    ) {
      position.push(Square.at(knightPos.row + 1, knightPos.col + 2));
      position.push(Square.at(knightPos.row - 1, knightPos.col + 2));
    }

    // moving left
    if (
      knightPos.row <= GameSettings.BOARD_SIZE - 2 &&
      knightPos.row >= 1 &&
      knightPos.col >= 2
    ) {
      position.push(Square.at(knightPos.row + 1, knightPos.col - 2));
      position.push(Square.at(knightPos.row - 1, knightPos.col - 2));
    }

    return position;
  }
}
