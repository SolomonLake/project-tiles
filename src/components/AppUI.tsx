import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, Link, Container } from "@material-ui/core";
import "./App.css";
import { AppProps } from "./App";
import { Tile } from "./Tile/Tile";

type StyleTypes = {
  xyRatio: number;
};
const useStyles = makeStyles(theme =>
  createStyles({
    rootContainer: (props: StyleTypes) => ({
      height: "100vh",
      width: `${props.xyRatio}vh`,
      maxWidth: "100%",
      paddingBottom: "50px",
    }),
    gridY: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "10px 0 15px 0",
    },
    gridX: {
      maxHeight: "100%",
      overflow: "auto",
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    gridItem: {
      display: "flex",
      width: "100%",
      padding: "8px",
      justifyContent: "center",
    },
  }),
);

export const AppUI: React.FC<AppProps> = props => {
  const classes = useStyles({
    xyRatio: (props.game.tileY[0].length / props.game.tileY.length) * 100,
  });

  return (
    <Container maxWidth="lg" className={classes.rootContainer}>
      <div className={classes.gridY}>
        {props.game.tileY.map((row, rowIndex) => {
          return (
            <div className={classes.gridX} key={rowIndex}>
              {row.map(tileId => {
                return (
                  <div className={classes.gridItem} key={tileId}>
                    <Tile tile={props.game.tiles[tileId]} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
