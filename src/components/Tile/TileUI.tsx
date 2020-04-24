import React from "react";
import tileBackImage from "../../images/prehistoricageicons/black/PrehistoricIcon_44_b.png";
import { TileProps } from "./Tile";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tileImage: {
    // display: "flex",
    // maxWidth: "100%",
    // maxHeight: "100%",
    width: "100%",
    objectFit: "contain",
  },
}));

export const TileUI: React.FC<TileProps> = props => {
  const classes = useStyles();

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
      className={classes.tileImage}
    />
  );
};

function tileFacingUp(props: TileProps): boolean {
  const isSelected =
    props.phase.type === "matching" &&
    !!props.phase.selectedTiles[props.tile.id];
  return props.tile.facingUp || isSelected;
}
