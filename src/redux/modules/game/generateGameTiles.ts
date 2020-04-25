import { numberUtils } from "./../../../shared/utils/numberUtils";
import { TileYArray, TileType, TilesMap } from "./gameTypes.d";
import gemIcon from "../../../images/gemsicons/addons/gems_add_152_b.PNG";
import pathIcon from "../../../images/strategygameicons/SGI_86.png";

function getLevelConfig() {
  return {
    xCount: 4,
    yCount: 5,
    tileConfigs: [
      ...arrayOfAnyNumber({ type: "gem", image: gemIcon }, 10),
      ...arrayOfAnyNumber({ type: "path", image: pathIcon }, 10),
    ],
  };
}

export function _generateGameTiles(): {
  tileY: TileYArray;
  tiles: { [id: string]: TileType };
} {
  const levelConfig = getLevelConfig();
  let tiles = {};
  const tileY = Array.from(Array(levelConfig.yCount)).map((_, yIndex) => {
    return Array.from(Array(levelConfig.xCount)).map((__, xIndex) => {
      const configIndex = numberUtils.getRandomInt(
        0,
        levelConfig.tileConfigs.length,
      );
      const tileConfig = levelConfig.tileConfigs[configIndex];

      levelConfig.tileConfigs.splice(configIndex, 1);

      const tile: TileType = {
        ...tileConfig,
        id: `${xIndex}/${yIndex}`,
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

export function generateGameTiles(): {
  tileY: TileYArray;
  tiles: TilesMap;
} {
  const levelConfig = getLevelConfig();
  let tiles: TilesMap = {};
  const tileY = arrayOfAnyNumber(null, levelConfig.yCount).map((_, yIndex) => {
    return arrayOfAnyNumber(null, levelConfig.xCount).map((_, xIndex) => {
      const tile: TileType = {
        type: "gem",
        image: gemIcon,
        id: `${xIndex}/${yIndex}`,
        facingUp: false,
      };
      tiles = { ...tiles, [tile.id]: tile };
      return tile.id;
    });
  });

  function generatePath({ x, y }: { x: number; y: number }, pathCount: number) {
    const nextArray = ["left", "right", "down", "down"];
    const next = nextArray[numberUtils.getRandomInt(0, nextArray.length)];
    const leftCoords = { x: x - 1, y };
    const rightCoords = { x: x + 1, y };
    const downCoords = { x: x, y: y + 1 };
    const leftTile = tiles[tileIdByPos(tileY, leftCoords.x, leftCoords.y)];
    const rightTile = tiles[tileIdByPos(tileY, rightCoords.x, rightCoords.y)];
    const downTile = tiles[tileIdByPos(tileY, downCoords.x, downCoords.y)];
    if (next === "left" && leftTile && leftTile.type !== "path") {
      tiles[leftTile.id] = {
        ...leftTile,
        type: "path",
        image: pathIcon,
      };
      generatePath(leftCoords, pathCount + 1);
    } else if (next === "right" && rightTile && rightTile.type !== "path") {
      tiles[rightTile.id] = {
        ...rightTile,
        type: "path",
        image: pathIcon,
      };
      generatePath(rightCoords, pathCount + 1);
    } else if (downTile) {
      tiles[downTile.id] = {
        ...downTile,
        type: "path",
        image: pathIcon,
      };
      generatePath(downCoords, pathCount + 1);
    } else if (!numberUtils.isEven(pathCount)) {
      const nonPathTile = randomNonPathTile(tiles, tileY);
      tiles[nonPathTile.id] = {
        ...nonPathTile,
        type: "path",
        image: pathIcon,
      };
    } else {
      return;
    }
  }

  const startPathIndex = numberUtils.getRandomInt(0, levelConfig.xCount);
  const startPathTile = tiles[defTileIdByPos(tileY, startPathIndex, 0)];
  tiles[startPathTile.id] = {
    ...startPathTile,
    type: "path",
    image: pathIcon,
  };

  generatePath({ x: startPathIndex, y: 0 }, 1);

  return {
    tileY,
    tiles,
  };
}

function arrayOfAnyNumber<T>(value: T, n: number) {
  return Array.from(Array(n), () => value);
}

function tileIdByPos(tileY: TileYArray, x: number, y: number): string {
  const yRow = tileY[y];
  if (yRow) return tileY[y][x];
  else return "";
}
function defTileIdByPos(tileY: TileYArray, x: number, y: number): string {
  return tileY[y][x];
}
function randomNonPathTile(tiles: TilesMap, tileY: TileYArray): TileType {
  const id = randomTileId(tileY);
  if (tiles[id].type === "path") {
    return randomNonPathTile(tiles, tileY);
  } else {
    return tiles[id];
  }
}
function randomTileId(tileY: TileYArray): string {
  const x = numberUtils.getRandomInt(0, tileY[0].length);
  const y = numberUtils.getRandomInt(0, tileY.length);
  return tileY[y][x];
}
