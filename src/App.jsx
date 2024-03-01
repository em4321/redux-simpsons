import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearch, getSimpsons, getSort } from "./redux/characterSlice";
import { getData } from "./dataController/fetching";
import Character from "./components/Character";
import Controls from "./components/Controls";
import "./css/App.css";
import Header from "./components/Header";

const App = () => {
  const simpsons = useSelector(getSimpsons);
  const search = useSelector(getSearch);
  const sort = useSelector(getSort);

  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) {
    return (
      <div className="loading">
        <h1>Loading Quotes...</h1>
      </div>
    );
  }

  let filtered = [...simpsons];
  {
    if (search) {
      filtered = filtered.filter((character) => {
        return character.character.toLowerCase().includes(search.toLowerCase());
      });
    }
    console.log(filtered);
    filtered.sort((a, b) => {
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
            <Character
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
