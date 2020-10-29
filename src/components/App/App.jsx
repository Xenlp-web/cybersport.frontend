import React, {useCallback} from "react";
import {loadAuthUserInfoAction} from "@app/api/requests/authUserInfo";
import {useDispatch} from "react-redux";
import addToken from "@app/actions/authToken";

import './App.scss';

import Layout from "./../Layout/Layout.jsx";

const App = (props) => {
  const token = props.token;
  const dispatch = useDispatch();

  const useAddToken = useCallback( () => {
    dispatch(addToken(token));
  }, [token]);

  useAddToken();

  const authUserInfo = useCallback(() => {
    dispatch(loadAuthUserInfoAction());
  }, []);

  authUserInfo();

  return (
    <Layout />
  );
}

export default App;