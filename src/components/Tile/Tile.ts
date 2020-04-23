import { flipTile } from "./../../redux/modules/game/gameActions";
import { TileUI } from "./TileUI";
import { connect } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { TileType } from "../../redux/modules/game/gameTypes";

const mapStateToProps = (state: RootState) => ({
  phase: state.game.phase,
});

const mapDispatchToProps = { flipTile };

type StateProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export type TileProps = { tile: TileType } & StateProps;

export const Tile = connect(mapStateToProps, mapDispatchToProps)(TileUI);
