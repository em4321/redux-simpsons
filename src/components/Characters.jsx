import { useDispatch, useSelector } from "react-redux";
import {
  deleteCharacter,
  getSimpsons,
  toggleLikeCharacter,
} from "../redux/characterSlice";

const Characters = () => {
  const simpsons = useSelector(getSimpsons);
  const dispatch = useDispatch();
  return simpsons.map((character) => {
    return (
      <>
        <div className="character" key={character}>
          <div className="nameAndButtons">
            <h1
              className="characterName"
              style={{
                textAlign: "center",
                backgroundColor: "#efcba4",
              }}
            >
              {character.character.toUpperCase()}
            </h1>
            <button
              className="delete"
              style={{ backgroundColor: "#f5f580" }}
              onClick={() => {
                dispatch(deleteCharacter(character.quote));
              }}
            >
              delete
            </button>
            <button
              className="like"
              style={{
                backgroundColor: character.liked ? "#f66e85" : "#f5f580",
              }}
              onClick={() => {
                dispatch(toggleLikeCharacter(character.quote));
              }}
            >
              like
            </button>{" "}
          </div>

          <img
            className={character.characterDirection}
            src={character.image}
            alt={character.character}
          />

          <h3>..."{character.quote}"</h3>
        </div>
      </>
    );
  });
};

export default Characters;
