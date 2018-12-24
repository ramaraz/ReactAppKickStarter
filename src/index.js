import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { ajax } from "rxjs/observable/dom/ajax";

import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics/index";

import reducer from "./reducers";

const epicMiddleware = new createEpicMiddleware({
  dependencies: { getJSON: ajax.getJSON }
});
const store = createStore(reducer, applyMiddleware(logger, epicMiddleware));
epicMiddleware.run(rootEpic);

const AppWithReduxAccess = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithReduxAccess />, document.getElementById("root"));
