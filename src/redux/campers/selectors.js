import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectCampersItems = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
export const selectVisibleCampers = createSelector(
  [selectCampersItems, selectNameFilter],
  (campers, filter) => {
    return campers.filter((campers) =>
      campers.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
