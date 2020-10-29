import {createSelector} from "reselect";
import {authUserInfoResponseSelector} from "@app/api/requests/authUserInfo";

export const userDataSelector = createSelector(
  authUserInfoResponseSelector,
  (response = {
    user: {
      banned: 0,
      coins: 0,
      coins_bonus: 0,
      coins_from_referals: 0,
      confirmed_email: 0,
      created_at: "",
      email: "",
      email_confirmation_code: "",
      id: 0,
      is_admin: 0,
      nickname: "",
      referal_code: "",
      region: 0,
      team_id: 0,
      tickets: 0,
      updated_at: ""
    }
  }) => response.user
);
