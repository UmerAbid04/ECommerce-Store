import React from 'react';

function Navbar({ navigateTo, currentPage, filterProducts }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterProducts(searchTerm);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            onClick={() => navigateTo('home')}
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigateTo('cart')}
            className={`nav-link ${currentPage === 'cart' ? 'active' : ''}`}
          >
            Cart
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigateTo('about')}
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigateTo('checkout')}
            className={`nav-link ${currentPage === 'checkout' ? 'active' : ''}`}
          >
            Checkout
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigateTo('contactus')}
            className={`nav-link ${currentPage === 'contactus' ? 'active' : ''}`}
          >
            Contact Us
          </button>
        </li>
        <li>
          <input type="text" className="searchbar" placeholder="Search..." onChange={handleSearch} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
