import React from "react";
import { Grid, Button, Divider, Link, Icon } from "@material-ui/core";
import "./App.css";
import { AppProps } from "./App";
import { Tile } from "./Tile/Tile";

export const AppUI: React.FC<AppProps> = props => {
  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      {props.game.tileY.map((row, rowIndex) => {
        return (
          <Grid item key={rowIndex}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              {row.map(tileId => {
                return (
                  <Grid item key={tileId}>
                    <Icon>
                      <Tile tile={props.game.tiles[tileId]} />
                    </Icon>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
