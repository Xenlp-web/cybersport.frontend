import {createSelector} from "reselect";
import {signInErrorSelector} from "@app/api/requests/sign-in";

export const signInSelector = createSelector(
  signInErrorSelector,
  (error = {message: 'произошла неизвестная ошибка'}) => error.message
);