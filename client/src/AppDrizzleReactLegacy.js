import React from "react";
import "./App.css";
import Issue from "./containers/Issue";

export default ({ drizzleStatus }) =>
  drizzleStatus.initialized ? (
    <div className="App">
      <Issue />
    </div>
  ) : (
    "Loading..."
  );
