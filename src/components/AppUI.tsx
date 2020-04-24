import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, Link, Container } from "@material-ui/core";
import "./App.css";
import { AppProps } from "./App";
import { Tile } from "./Tile/Tile";

const useStyles = makeStyles(theme =>
  createStyles({
    rootContainer: {
      height: "100vh",
      paddingBottom: "50px",
    },
    gridY: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "15px 0 15px 0",
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
      // display: "flex",
      width: "100%",
      // maxHeight: "100%",
      // overflow: "auto",
      display: "flex",
      padding: "5px",
      justifyContent: "center",
    },
  }),
);

export const AppUI: React.FC<AppProps> = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.rootContainer}>
      <div className={classes.gridY}>
        {props.game.tileY.map((row, rowIndex) => {
          return (
            <div className={classes.gridX}>
              {row.map(tileId => {
                return (
                  <div className={classes.gridItem}>
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
