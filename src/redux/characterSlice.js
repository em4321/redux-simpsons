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

export const {
  addData,
  deleteCharacter,
  toggleLikeCharacter,
  totalLiked,
  textInput,
  sortSelect,
} = characterSlice.actions;

export const getSimpsons = (state) => state.character.simpsons;
export const getSearch = (state) => state.character.search;
export const getSort = (state) => state.character.sort;

export default characterSlice.reducer;
