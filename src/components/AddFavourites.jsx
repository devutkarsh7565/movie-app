import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const AddFavourites = (props) => {
  const [colors, setColors] = useState("red");
  const click = () => {
    setColors("green");
  };
  return (
    <>
      <div onClick={click}>
        <span>
          {props.addfavourite}
          <span style={{ color: colors }} className="sm:text-2xl text-sm">
            <AiFillHeart />
          </span>
        </span>
      </div>
    </>
  );
};

export default AddFavourites;
