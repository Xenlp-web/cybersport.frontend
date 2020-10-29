import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";

import App from "./components/App/App.jsx";
import store from "./store/store";
import history from "@app/history";

const token = localStorage.getItem('Authorization');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App token={token} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);