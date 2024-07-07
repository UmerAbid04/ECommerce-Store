import React from 'react';
import Product from './Product';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
