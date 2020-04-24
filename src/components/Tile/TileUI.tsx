import React from "react";
import tileBackImage from "../../images/prehistoricageicons/black/PrehistoricIcon_44_b.png";
import { TileProps } from "./Tile";
import { makeStyles } from "@material-ui/core";

type StyleProps = {
  facingUp: boolean;
};
const useStyles = makeStyles(theme => ({
  tileImage: (props: StyleProps) => ({
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "auto",
    borderRadius: "20px",
    border: "3px solid",
    borderColor: props.facingUp ? "gold" : "black",
    outline: "none",
  }),
}));

export const TileUI: React.FC<TileProps> = props => {
  const tile = props.tile;
  const facingUp = tileFacingUp(props);
  const image = facingUp ? tile.image : tileBackImage;

  const classes = useStyles({ facingUp: tile.facingUp });
  return (
    <input
      type="image"
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
