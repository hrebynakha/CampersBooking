import { createSelector } from "@reduxjs/toolkit";

export const selectCampersItems = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
export const selectCamperReviews = (state) => state.campers.camper.reviews;
export const selectTotalResults = (state) => state.campers.totalResults;
export const selectFilter = (state) => state.campers.filter;
