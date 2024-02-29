import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearch, getSimpsons } from "./redux/characterSlice";
import { getData } from "./dataController/fetching";
import Characters from "./components/Characters";
import Controls from "./components/Controls";
import "./css/App.css";
import Header from "./components/Header";

const App = () => {
  const simpsons = useSelector(getSimpsons);
  const search = useSelector(getSearch);

  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) return <p>Loading</p>;

  let filtered = [...simpsons];
  if (search) {
    filtered = filtered.filter((character) => {
      return character.character.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <>
      <Header />
      <Controls />
      <Characters />
    </>
  );
};

export default App;
