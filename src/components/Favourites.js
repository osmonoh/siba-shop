import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Favourites = () => {
  const { inFav, setInFav } = useContext(MyContext);

  const renderFavItems = () => {
    return inFav.map((item) => {
      return (
        <div key={item.itemId}>
          <p>{item.displayName}</p>
          <button
            onClick={() =>
              setInFav(inFav.filter((el) => el.itemId !== item.itemId))
            }
          >
            Remove from favourites
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      <p>Favourites</p>
      {inFav.length ? renderFavItems() : <p>No products here</p>}
    </div>
  );
};

export default Favourites;
