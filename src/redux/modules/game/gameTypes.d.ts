export type TileType = {
  id: string;
  image: string;
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

export type GameState = {
  phase: MatchingPhase | ReplacingPhase | GameOverPhase;
  tileY: TileYArray;
  tiles: { [id: string]: TileType };
};
