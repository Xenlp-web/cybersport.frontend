import {createSelector} from "reselect";
import {getAllRegionsResponseSelector} from "@app/api/requests/regions";

export const allRegionsSelector = createSelector(
  getAllRegionsResponseSelector,
  (response = {
    regions: {}
  }) => response.regions
);
