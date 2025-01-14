import { createSelector } from "@reduxjs/toolkit";

export const selectCampersItems = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
