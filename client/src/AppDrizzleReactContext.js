import React, { Component } from "react";
import { DrizzleContext } from "drizzle-react";
import logo from "./logo.svg";
import "./App.css";
import ReadString from "./components/ReadString";
import SetString from "./components/SetString";

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      return (
        <div className="App">
          <ReadString drizzle={drizzle} drizzleState={drizzleState} />
          <SetString drizzle={drizzle} drizzleState={drizzleState} />
        </div>
      );
    }}
  </DrizzleContext.Consumer>
);
