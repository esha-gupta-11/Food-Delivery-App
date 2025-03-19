import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

function Menu({ dishes }) {
  const { addToCart, currency } = useContext(StoreContext);

  return (
    <div className="mt-16 flex flex-wrap justify-center gap-4 relative top-20">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="w-[280px] h-90 border border-gray-300 rounded-lg shadow-md flex flex-col justify-evenly overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-55 relative bottom-7 object-cover"
          />
          <div className="p-3 text-center">
            <div className="text-lg font-semibold text-gray-700">
              {currency} {dish.price}
            </div>
            <h3 className="text-xl font-extralight text-gray-900 my-2">{dish.name}</h3>
            <button
              className="bg-orange-500 text-white px-4 py-2 reletive  rounded-md text-sm w-28 h-9 transition-colors duration-300 hover:bg-orange-700"
              onClick={() => addToCart(dish.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
