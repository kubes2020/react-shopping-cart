import React from "react";

const Item = (props) => {
  const { title, price, id, image } = props;
  return (
    <div className="shopping-cart_item">
      <img src={image} alt={`${title} book`} />

      <div>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <button onClick={() => props.deleteItem(id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
