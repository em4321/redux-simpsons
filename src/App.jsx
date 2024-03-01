import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearch, getSimpsons, getSort } from "./redux/characterSlice";
import { getData } from "./dataController/fetching";
import Characters from "./components/Characters";
import Controls from "./components/Controls";
import "./css/App.css";
import Header from "./components/Header";

const App = () => {
  const simpsons = useSelector(getSimpsons);
  const search = useSelector(getSearch);
  const sort = useSelector(getSort);
  console.log(sort);
  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) return <p>Loading</p>;

  let filtered = [...simpsons];
  {
    if (search) {
      filtered = filtered.filter((character) => {
        return character.character.toLowerCase().includes(search.toLowerCase());
      });
    }
    console.log(filtered);
    filtered.sort((a, b) => {
      console.log(a.character, b.character);
      if (a.character > b.character) {
        return 1;
      }
      if (b.character > a.character) {
        return -1;
      }
      return 0;
    });

    if (sort === "Z-A") {
      filtered.reverse();
    }

    return (
      <>
        <Header />
        <Controls />
        {filtered.map((character, index) => {
          return (
            <Characters
              simpsons={filtered}
              key={index}
              {...character}
              index={index}
            />
          );
        })}
      </>
    );
  }
};

export default App;
