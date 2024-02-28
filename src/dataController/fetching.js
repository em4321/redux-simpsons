import axios from "axios";
import { store } from "../redux/store";
import { addData } from "../redux/characterSlice";

export const getData = async () => {
  const { data } = await axios.get(
    `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
  );
  //   console.log(data);
  store.dispatch(addData(data));
};
