import Piece from "./piece";
import Square from "../../../src/engine/square";
import Player from "../../../src/engine/player";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let position;
    if (this.player === Player.WHITE) {
      position = new Array(Square.at(1, 0));
    } else {
      position = new Array(Square.at(6, 7));
    }
    return position;
  }
}
