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
  },
});

export const { addData, deleteCharacter, toggleLikeCharacter } =
  characterSlice.actions;

export const getSimpsons = (state) => state.character.simpsons;

export default characterSlice.reducer;
