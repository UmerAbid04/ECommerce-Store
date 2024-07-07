import React from 'react';

function CartItem({ product, removeFromCart }) {
  return (
    <li>
      {product.name} - ${product.price} x {product.quantity}
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
