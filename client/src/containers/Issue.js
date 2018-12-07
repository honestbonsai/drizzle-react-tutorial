import { drizzleConnect } from "drizzle-react";
import Issue from "../components/Issue";

const mapStateToProps = state => {
  return { drizzleState: state };
};

export default drizzleConnect(Issue, mapStateToProps);
