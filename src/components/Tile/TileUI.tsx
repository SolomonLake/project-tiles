import React from "react";
import tileBackImage from "../../images/prehistoricageicons/black/PrehistoricIcon_44_b.png";
import { TileProps } from "./Tile";

export const TileUI: React.FC<TileProps> = props => {
  const tile = props.tile;
  const facingUp = tileFacingUp(props);
  const image = facingUp ? tile.image : tileBackImage;
  return (
    <img
      src={image}
      alt="tile"
      onClick={() => {
        if (!tile.facingUp) {
          props.flipTile(tile.id);
        }
      }}
    />
  );
};

function tileFacingUp(props: TileProps): boolean {
  const isSelected =
    props.phase.type === "matching" &&
    !!props.phase.selectedTiles[props.tile.id];
  return props.tile.facingUp || isSelected;
}
