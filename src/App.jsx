import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSimpsons } from "./redux/characterSlice";
import { getData } from "./dataController/fetching";
import Characters from "./components/Characters";
import Controls from "./components/Controls";
import "./css/App.css";

const App = () => {
  const simpsons = useSelector(getSimpsons);

  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) return <p>Loading</p>;
  return (
    <>
      <Controls />
      <Characters />
    </>
  );
};

export default App;
