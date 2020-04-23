import { combineReducers } from "redux";
import { appReducer } from "./modules/appReducer";
import { gameReducer } from "./modules/game/gameReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
