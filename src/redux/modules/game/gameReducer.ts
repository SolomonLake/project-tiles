import { SelectedTiles } from "./gameTypes.d";
import { GameAction } from "./gameActions";
import gemIcon from "../../../images/gemsicons/addons/gems_add_136.png";
import pathIcon from "../../../images/strategygameicons/SGI_86.png";
import { GameState, GamePhaseType } from "./gameTypes";
import { generateGameTiles } from "./generateGameTiles";
import __ from "underscore";

const initialState: GameState = {
  phase: { type: "matching", selectedTiles: {} },
  ...generateGameTiles(),
};

export function gameReducer(
  state = initialState,
  action: GameAction,
): GameState {
  console.log("gameReducer: previous state", state);
  switch (action.type) {
    case "game_unit":
      return state;
    case "game_flipTile":
      const matchingPhase = ensureMatchingPhase(state, action.type);

      const newSelectedTiles: SelectedTiles =
        __.size(matchingPhase.selectedTiles) < 2
          ? { ...matchingPhase.selectedTiles, [action.tileId]: true }
          : { [action.tileId]: true };
      // if (newSelectedTiles.length === 2){
      //   if (state.tiles[newSelectedTiles[0]].image === state.tiles[newSelectedTiles[1]].image){

      //   }
      // }
      const newSelectedTilesArray = __.keys(newSelectedTiles);
      const isMatch =
        !!newSelectedTilesArray[0] &&
        !!newSelectedTilesArray[1] &&
        state.tiles[newSelectedTilesArray[0]].image ===
          state.tiles[newSelectedTilesArray[1]].image;
      return {
        ...state,
        tiles: {
          ...state.tiles,
          [newSelectedTilesArray[0]]: {
            ...state.tiles[newSelectedTilesArray[0]],
            facingUp: isMatch,
          },
          [newSelectedTilesArray[1]]: {
            ...state.tiles[newSelectedTilesArray[1]],
            facingUp: isMatch,
          },
        },
        phase: {
          ...matchingPhase,
          selectedTiles: newSelectedTiles,
        },
      };

    default:
      const _: never = action;
      return state;
  }
}

function ensureMatchingPhase(state: GameState, actionType: string) {
  if (state.phase.type !== "matching")
    throw new WrongPhaseError(actionType, state.phase.type);
  return state.phase;
}

class WrongPhaseError extends Error {
  constructor(actionType: string, currentPhase: GamePhaseType) {
    super(`Incorrect phase of ${currentPhase} for ${actionType}`);
  }
}
