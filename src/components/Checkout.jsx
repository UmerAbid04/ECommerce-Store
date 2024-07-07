import React, { useState } from 'react';


function Checkout({ totalAmount, discountedTotal, setPromoCode, applyPromoCode }) {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleProceedToPayment = () => {
    alert("Your items are on the way! Thank you for shopping with us.");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p className="checkout-total">Your total amount is: ${discountedTotal.toFixed(2)}</p>
      <div className="checkout-payment-methods">
        <label className="checkout-payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={() => setPaymentMethod('cash')}
          />
          Cash on Delivery
        </label>
        <label className="checkout-payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          Credit Card
        </label>
      </div>
      <div className="checkout-promo">
        <input
          type="text"
          placeholder="Enter promo code"
          className="checkout-promo-input"
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button className="checkout-promo-button" onClick={applyPromoCode}>Apply Promo</button>
      </div>
      <button className="checkout-proceed-button" onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
