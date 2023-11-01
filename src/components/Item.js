import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleCartClick() {
    setIsInCart(isInCart => !isInCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} 
      onClick={handleCartClick}>
        {isInCart ? "Remove From" : "Add to"} 
        Cart
        </button>
    </li>
  );
}

export default Item;
