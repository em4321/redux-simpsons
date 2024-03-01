import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.simpsons = action.payload;
    },
    deleteCharacter: (state, action) => {
      const index = state.simpsons.findIndex((character) => {
        return character.quote === action.payload;
      });
      state.simpsons.splice(index, 1);
    },
    toggleLikeCharacter: (state, action) => {
      const index = state.simpsons.findIndex((character) => {
        return character.quote === action.payload;
      });
      state.simpsons[index].liked = !state.simpsons[index].liked;
    },
    textInput: (state, action) => {
      state.search = action.payload;
    },
    sortSelect: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  addData,
  deleteCharacter,
  toggleLikeCharacter,
  textInput,
  sortSelect,
} = characterSlice.actions;

export const getSimpsons = (state) => state.character.simpsons;
export const getSearch = (state) => state.character.search;
export const getSort = (state) => state.character.sort;

export default characterSlice.reducer;
