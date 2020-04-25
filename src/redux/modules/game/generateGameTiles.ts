import { numberUtils } from "./../../../shared/utils/numberUtils";
import { TileYArray, TileType } from "./gameTypes.d";
import gemIcon from "../../../images/gemsicons/addons/gems_add_152_b.PNG";
import pathIcon from "../../../images/strategygameicons/SGI_86.png";

function getLevelConfig() {
  return {
    xCount: 3,
    yCount: 4,
    tileImages: [
      ...arrayOfAnyNumber(gemIcon, 12),
      ...arrayOfAnyNumber(pathIcon, 12),
    ],
  };
}

export function generateGameTiles(): {
  tileY: TileYArray;
  tiles: { [id: string]: TileType };
} {
  let levelConfig = getLevelConfig();
  let tiles = {};
  const tileY = Array.from(Array(levelConfig.yCount)).map((_, yIndex) => {
    return Array.from(Array(levelConfig.xCount)).map((__, xIndex) => {
      const imageIndex = numberUtils.getRandomInt(
        0,
        levelConfig.tileImages.length,
      );
      const image = levelConfig.tileImages[imageIndex];

      levelConfig.tileImages.splice(imageIndex, 1);

      const tile = {
        id: `${xIndex}/${yIndex}`,
        image,
        facingUp: false,
      };
      tiles = { ...tiles, [tile.id]: tile };
      return tile.id;
    });
  });
  return {
    tileY,
    tiles,
  };
}

function arrayOfAnyNumber<T>(value: T, n: number) {
  return Array.from(Array(n), () => value);
}
