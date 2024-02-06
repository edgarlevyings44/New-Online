import React, { useState } from 'react';
import './Mpesa.css';
import { useNavigate } from 'react-router-dom';

const Mpesa = ({ totalAmount }) => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(totalAmount);
  const [name, setName] = useState('');
  const [county, setCounty] = useState('');
  const [street, setStreet] = useState('');
  const [status, setStatus] = useState(true)
  const [additionalSpecifications, setAdditionalSpecifications] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleNumber = (event) => {
    setPhone(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCounty = (event) => {
    setCounty(event.target.value);
  };

  const handleStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleAdditionalSpecifications = (event) => {
    setAdditionalSpecifications(event.target.value);
  };

  const createOrder = (statusValue) => {

    const user_id = sessionStorage.getItem('user_id');
    console.log('User ID:', user_id);

    fetch('https://dedanite-online.onrender.com/orders', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({user_id, name,amount, county, street, status:statusValue})
    })
    .then((response) => response.json())
  }

  const submitForm = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch('https://dedanite-online.onrender.com/make_payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, amount }),
    })
      .then((response) => {
        setLoading(false);

        if (response.ok) {
          window.alert('Payment made');
          navigate('/myorders')
        } else {
          window.alert('Payment failed');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log('This is the error: ', error);
      });
  };

  const paylater = () => {
    createOrder(false)
    navigate('/myorders')
  }

  return (
    <div className='mpesaPage'>
      <div className='mpesacard'>
        <h1 className="shipping-header">SHIPPING DETAILS</h1>
        <form className="shippingForm" onSubmit={(event) => {createOrder(true); submitForm(event)}}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={handleName}
            />
          </label>
          <label>
            County:
            <input
              type="text"
              placeholder="Enter county"
              name="county"
              value={county}
              onChange={handleCounty}
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              placeholder="Enter street"
              name="street"
              value={street}
              onChange={handleStreet}
            />
          </label>

          <h1 className='header'>PAYMENT INFORMATION</h1>

          <input
            type='number'
            placeholder='Enter number'
            name='phone'
            value={phone}
            onChange={handleNumber}
          />
          <input
            type='number'
            placeholder='Enter amount'
            name='amount'
            value={amount.toFixed(2)}
            onChange={handleAmount}
          />
          <button type='submit'>{loading ? 'Processing...' : 'Pay Now'}</button>
          

        </form>
        <button className='paylater' onClick={paylater}>PayLater</button>
      </div>
    </div>
  );
};

export default Mpesa;