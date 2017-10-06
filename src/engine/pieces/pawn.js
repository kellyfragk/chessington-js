import Piece from "./piece";
import Square from "../../../src/engine/square";
import Player from "../../../src/engine/player";
import Board from "../../../src/engine/board";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const pawnPos = board.findPiece(this);

    let position = [];

    if (this.player === Player.WHITE) {
      if (pawnPos.row === 7) {
        return position;
      }

      position = [Square.at(pawnPos.row + 1, pawnPos.col)];

      if (pawnPos.row === 1) {
        position.push(Square.at(pawnPos.row + 2, pawnPos.col));
      }
    }

    if (this.player === Player.BLACK) {
      if (pawnPos.row === 0) {
        return position;
      }
      if (
        board.getPiece(Square.at(pawnPos.row - 1, pawnPos.col)) !== undefined
      ) {
        return position;
      }

      position = [Square.at(pawnPos.row - 1, pawnPos.col)];

      if (
        pawnPos.row === 6 &&
        board.getPiece(Square.at(pawnPos.row - 2, pawnPos.col)) === undefined
      ) {
        position.push(Square.at(pawnPos.row - 2, pawnPos.col));
      }
    }

    return position;
  }
}
