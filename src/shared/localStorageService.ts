import { PaletteType } from "@material-ui/core";

type LocalStorageItem = {
  paletteType: PaletteType;
};

type ValueOfLocalStorage = LocalStorageItem[keyof LocalStorageItem];

export const localStorageService = {
  getItem: (itemKey: keyof LocalStorageItem): ValueOfLocalStorage | null => {
    const maybeItemValue = localStorage.getItem(itemKey);
    return maybeItemValue ? JSON.parse(maybeItemValue) : null;
  },
  setItem: (
    itemKey: keyof LocalStorageItem,
    itemValue: ValueOfLocalStorage,
  ) => {
    localStorage.setItem(itemKey, JSON.stringify(itemValue));
  },
};
