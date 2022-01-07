import React, { useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(true)
  const appClass = addItem ? "" : "in-cart"
  
  const [changeText, setChangeText] = useState(true)
  const buttonText = changeText ? "Add to Cart" : "Remove From Cart"

  function handleAddItem() {
    setAddItem((addItem) => !addItem)
    setChangeText((changeText) => !changeText)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItem} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
