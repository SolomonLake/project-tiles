export type TileConfig = {
  image: string;
  type: string;
};

export type TileType = TileConfig & {
  id: string;
  facingUp: boolean;
};

export type TileXArray = Array<string>;

export type TileYArray = Array<TileXArray>;

export type SelectedTiles = { [id: string]: true };
export type MatchingPhase = {
  type: "matching";
  selectedTiles: { [id: string]: true };
};

export type ReplacingPhase = {
  type: "replacing";
};

export type GameOverPhase = {
  type: "gameOver";
};

export type GamePhaseType = "matching" | "replacing" | "gameOver";

export type TilesMap = { [id: string]: TileType };
export type GameState = {
  phase: MatchingPhase | ReplacingPhase | GameOverPhase;
  tileY: TileYArray;
  tiles: TilesMap;
};
