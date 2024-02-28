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
    // totalLiked: (state) => {
    //   let total = 0;
    //   state.simpsons.forEach((character) => {
    //     if (character.liked) {
    //       total++;
    //     }
    //   });
    // },
  },
});

export const { addData, deleteCharacter, toggleLikeCharacter, totalLiked } =
  characterSlice.actions;

export const getSimpsons = (state) => state.character.simpsons;

export default characterSlice.reducer;
