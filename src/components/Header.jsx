import { useDispatch, useSelector } from "react-redux";
import { totalLiked, getSimpsons } from "../redux/characterSlice";

const Header = () => {
  const simpsons = useSelector(getSimpsons);

  let total = 0;
  simpsons.forEach((character) => {
    if (character.liked) {
      total++;
    }
  });
  return (
    <p>
      {total} liked out of {simpsons.length} Characters
    </p>
  );
};

export default Header;
