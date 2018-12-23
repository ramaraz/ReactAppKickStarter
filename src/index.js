import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(logger));
const AppWithReduxAccess = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithReduxAccess />, document.getElementById("root"));
