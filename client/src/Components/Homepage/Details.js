import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Details.css"

export default function Details(props) {

  const [showNotification, setNotification] = useState(false)

  const handleAddToCart = () => {
    const newproduct ={
      id:props.id,
      name: props.name,
      price:props.price,
      imageurl:props.imageurl

    }
    props.handleAddToCart(newproduct)
    
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, 500)
  }
  return (
    <div>
      <section className="vegetables-fruits">
        <div className="vegetables-fruits-frame"></div>
      </section>
      <div className="card">
        <img className="product--image" src={props.imageurl} alt="" />
        <h4>{props.name}</h4>
        {props.weight && <p>Weight: {props.weight}</p>}
        {props.price && <p className="price">Price: {props.price}</p>}
        <Button className="cta"  onClick={handleAddToCart}>
          ADD
        </Button>
        <p>{props.description}</p>
        <div className="frame-child9" />
        <div className="offer">
          <b className="off">20% OFF</b>
        </div>

        {showNotification ? (
          <div className='notification-center'>
            <div className='notification'>
              <p>Added to cart</p>
            </div>
          </div>
        ): (null)}

      </div>
    </div>
  );
}


export { Details };
