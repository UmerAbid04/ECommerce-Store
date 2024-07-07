import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>

      </div>
    </div>
  );
}

export default Product;
