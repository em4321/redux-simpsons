import { useDispatch, useSelector } from "react-redux";
import { getSimpsons } from "../redux/characterSlice";

const Controls = ({ textInput, sortSelect }) => {
  const simpsons = useSelector(getSimpsons);
  const dispatch = useDispatch();
  return (
    <>
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Simpsons character..."
          onInput={textInput}
          style={{
            borderRadius: "25px",
            textAlign: "center",
            width: "350px",
            height: "40px",
            backgroundColor: "white",
          }}
        ></input>
      </div>
      <div className="sortSelect">
        <select
          onChange={sortSelect}
          style={{
            backgroundColor: "#efcba4",
            borderRadius: "25px",
            textAlign: "center",
            width: "150px",
            height: "40px",
            color: "white",
            border: "1px solid white",
          }}
        >
          <option value="">Please Select</option>
          <option value="A-Z">Character: A-Z</option>
          <option value="Z-A">Character: Z-A</option>
        </select>
      </div>
    </>
  );
};

export default Controls;
