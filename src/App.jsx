import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimpsons } from "./redux/characterSlice";
import { getData } from "./dataController/fetching";
import Characters from "./components/Characters";

const App = () => {
  const simpsons = useSelector(getSimpsons);
  const dispatch = useDispatch(console.log(simpsons));

  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) return <p>Loading</p>;
  return (
    <>
      <Characters />
    </>
  );
};

export default App;
