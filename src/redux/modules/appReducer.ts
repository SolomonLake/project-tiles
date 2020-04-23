import { localStorageService } from "../../scripts/localStorageService";
import { PaletteType } from "@material-ui/core";

type AppView = "matching" | "replacing" | "gameOver";

type AppState = {
  paletteType: PaletteType;
};
const initialState: AppState = {
  paletteType: localStorageService.getItem("paletteType") || "dark",
};

export const updatePaletteType = (
  paletteType: PaletteType,
): UpdatePaletteTypeAction => ({
  type: "app_updatePaletteType",
  paletteType,
});
type UpdatePaletteTypeAction = {
  type: "app_updatePaletteType";
  paletteType: PaletteType;
};

type AppAction = { type: "app_unit" } | UpdatePaletteTypeAction;

export function appReducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case "app_unit":
      return state;
    case "app_updatePaletteType":
      return { ...state, paletteType: action.paletteType };
    default:
      const _: never = action;
      return state;
  }
}
