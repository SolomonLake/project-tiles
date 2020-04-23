import { numberUtils } from "./../../../scripts/utils/numberUtils";
import { TileYArray, TileType } from "./gameTypes.d";
import gemIcon from "../../../images/gemsicons/addons/gems_add_136.png";
import pathIcon from "../../../images/strategygameicons/SGI_86.png";

function getLevelConfig() {
  return {
    xCount: 4,
    yCount: 5,
    tileImages: [
      ...Array.from(Array(10), () => gemIcon),
      ...Array.from(Array(10), () => pathIcon),
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
