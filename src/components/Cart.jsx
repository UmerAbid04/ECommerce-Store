import React from 'react';


function Cart({ cart, removeFromCart, removeAllFromCart, navigateTo }) {
  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-list">
        {cart.map((product, index) => (
          <li key={index} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-item-image" />
            <span className="cart-item-details">
              {product.name} - ${product.price} x {product.quantity}
            </span>
            <button className="cart-item-remove" onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
      <div className="cart-buttons">
        <button className="cart-remove-all" onClick={removeAllFromCart}>Remove All</button>
        <button className="cart-checkout" onClick={() => navigateTo('checkout')}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
