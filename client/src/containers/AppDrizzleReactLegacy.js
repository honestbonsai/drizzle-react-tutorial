import { drizzleConnect } from "drizzle-react";
import AppDrizzleReactLegacy from "../AppDrizzleReactLegacy";

const mapStateToProps = state => {
  return state;
};

export default drizzleConnect(AppDrizzleReactLegacy, mapStateToProps);
