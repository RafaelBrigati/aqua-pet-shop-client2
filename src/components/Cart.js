import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

function Cart({ cart, removeFromCart }) {
  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };
  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

  return (   <>
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
 
          <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
</>
  );
}

export default Cart;
