import { useDispatch } from "react-redux";
import { textInput, sortSelect } from "../redux/characterSlice";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Simpsons character..."
          onInput={(e) => {
            dispatch(textInput(e.target.value));
          }}
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
          onChange={(e) => {
            dispatch(sortSelect(e.target.value));
          }}
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
