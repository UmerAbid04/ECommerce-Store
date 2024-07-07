import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function ECommerceStore() {
  const [products] = useState([
    { id: 1, className: 'images', name: 'Camera', price: 70, image: '/images/camera.jpg' },
    { id: 2, className: 'images', name: 'Ear Phones', price: 5, image: 'images/earphones.jfif' },
    { id: 3, className: 'images', name: 'Fitness Tracker', price: 30, image: 'images/fitnesstracker.jfif' },
    { id: 4, className: 'images', name: 'Head Phones', price: 10, image: 'images/headphones.jfif' },
    { id: 5, className: 'images', name: 'IPhone', price: 100, image: 'images/iphone.jfif' },
    { id: 6, className: 'images', name: 'Laptop', price: 200, image: 'images/laptop.jfif' },
    { id: 7, className: 'images', name: 'Monitor Screen', price: 75, image: 'images/monitor.jfif' },
    { id: 8, className: 'images', name: 'Smart Phone', price: 100, image: 'images/phone.jfif' },
    { id: 9, className: 'images', name: 'Security Camera', price: 50, image: 'images/scamera.jfif' },
    { id: 10, className: 'images', name: 'Smart Watch', price: 35, image: 'images/smartwatch.jfif' },
    { id: 11, className: 'images', name: 'Speaker', price: 40, image: 'images/speaker.jfif' },
    { id: 12, className: 'images', name: 'Tablets', price: 50, image: 'images/tablet.jfif' },
  ]);

  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(product => product.id === productToAdd.id);
      if (productExists) {
        return prevCart.map(product =>
          product.id === productToAdd.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });

    // Show confirmation message
    setConfirmationMessage(`${productToAdd.name} has been added to the cart.`);
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(product => product.id === productId);
      if (productExists.quantity === 1) {
        return prevCart.filter(product => product.id !== productId);
      } else {
        return prevCart.map(product =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
    });
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'cart') {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10' || 'SUPERSAVE') {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const totalAmount = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const discountedTotal = totalAmount - (totalAmount * discount / 100);

  const filterProducts = (searchTerm) => {
    setFilteredProducts(products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    ));
  };

  return (
    <div className="container">
      <h1 className="main-title"><strong>The Cool Store</strong></h1>
      <Navbar navigateTo={navigateTo} currentPage={currentPage} filterProducts={filterProducts} />
      <div className="page-content">
        {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
        {currentPage === 'home' && (
          <>
            <h2>Home Page</h2>
            <button onClick={toggleCart} className="toggle-cart-button">
              {showCart ? 'Show Products' : 'Show Cart'}
            </button>
            {showCart ? (
              <Cart cart={cart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} navigateTo={navigateTo} />
            ) : (
              <ProductList products={filteredProducts} addToCart={addToCart} />
            )}
          </>
        )}
        {currentPage === 'about' && (
          <>
            <h2>About Page</h2>
            <p>Our journey at The Cool Store began with a passion for delivering quality products and exceptional service to our customers worldwide.</p>
          </>
        )}
        {currentPage === 'contactus' && (
          <>
            <h2>Contact Us</h2>
            <p>If you have any questions, please feel free to contact us through the form below or reach out to us via email or Instagram. We are always here to help!</p>
            <br />
            <h3>Contact Form</h3>
            <form className="contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
            <br />
            <p>You can also reach us at:</p>
            <p>Email: thecoolstore@gmail.com</p>
            <p>Instagram: @thecoolstore</p>
          </>
        )}
        {currentPage === 'checkout' && (
          <Checkout totalAmount={totalAmount} discountedTotal={discountedTotal} setPromoCode={setPromoCode} applyPromoCode={applyPromoCode} />
        )}
        {currentPage === 'cart' && (
          <Cart cart={cart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} navigateTo={navigateTo} />
        )}
      </div>
      <footer className="footer">
        <p>&copy; 2024 The Cool Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ECommerceStore;
