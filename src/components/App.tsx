import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { AppUI } from "./AppUI";

const mapStateToProps = (state: RootState) => state;

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export type AppProps = StateProps;

export const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);
