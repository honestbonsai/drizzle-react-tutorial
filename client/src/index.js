import React from "react";
import ReactDOM from "react-dom";
import { Drizzle, generateStore } from "drizzle";
import { DrizzleProvider, DrizzleContext } from "drizzle-react";
import "./index.css";
import App from "./App";
import AppDrizzleReactContext from "./AppDrizzleReactContext";
import AppDrizzleReactLegacy from "./containers/AppDrizzleReactLegacy";
import * as serviceWorker from "./serviceWorker";
import MyStringStore from "./contracts/MyStringStore.json";

const options = { contracts: [MyStringStore] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

// ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));

// ReactDOM.render(
//   <DrizzleContext.Provider drizzle={drizzle}>
//     <AppDrizzleReactContext />
//   </DrizzleContext.Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <DrizzleProvider options={options}>
    <AppDrizzleReactLegacy />
  </DrizzleProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
