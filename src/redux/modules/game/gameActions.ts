type FlipTileAction = {
  type: "game_flipTile";
  tileId: string;
};
export const flipTile = (tileId: string): FlipTileAction => ({
  type: "game_flipTile",
  tileId,
});

export type GameAction = { type: "game_unit" } | FlipTileAction;
