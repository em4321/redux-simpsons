import { useDispatch } from "react-redux";
import { deleteCharacter, toggleLikeCharacter } from "../redux/characterSlice";

const Character = ({ simpsons }) => {
  const dispatch = useDispatch();
  return simpsons.map((character, index) => {
    return (
      <>
        <div className="character" key={index}>
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

export default Character;
