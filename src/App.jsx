import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSimpsons } from "./redux/characterSlice";
import { getData } from "./dataController/fetching";
import Characters from "./components/Characters";
import Controls from "./components/Controls";
import "./css/App.css";
import Header from "./components/Header";

const App = () => {
  const simpsons = useSelector(getSimpsons);

  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) return <p>Loading</p>;
  return (
    <>
      <Header />
      <Controls />

      <Characters />
    </>
  );
};

export default App;
