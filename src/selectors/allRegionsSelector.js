import {createSelector} from "reselect";
import {getAllRegionsResponseSelector} from "@app/api/requests/regions";

export const allRegionsSelector = createSelector(
  getAllRegionsResponseSelector,
  (response = {
    regions: {
      0: {
        id: 1,
        region: "ru"
      },
      1: {
        id: 2,
        region: "eu"
      },
      2: {
        id: 3,
        region: "us"
      }
    }
  }) => response.regions
);
