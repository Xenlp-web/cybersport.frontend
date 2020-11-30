import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import ReactNotification from 'react-notifications-component'

import App from "./components/App/App.jsx";
import store from "./store/store";
import history from "@app/history";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReactNotification />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);