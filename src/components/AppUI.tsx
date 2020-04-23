import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, Link, Container } from "@material-ui/core";
import "./App.css";
import { AppProps } from "./App";
import { Tile } from "./Tile/Tile";

const useStyles = makeStyles(theme => ({
  root: {},
  gridRow: {
    // overflow: "hidden",
  },
  gridItem: {
    display: "flex",
  },
}));

export const AppUI: React.FC<AppProps> = props => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column" justify="center" spacing={2} xs>
        {props.game.tileY.map((row, rowIndex) => {
          return (
            <Grid
              item
              container
              direction="row"
              key={rowIndex}
              justify="center"
              spacing={2}
              className={classes.gridRow}
              xs
            >
              {row.map(tileId => {
                return (
                  <Grid
                    item
                    key={tileId}
                    className={classes.gridItem}
                    xs
                    justify="center"
                  >
                    <Tile tile={props.game.tiles[tileId]} />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
