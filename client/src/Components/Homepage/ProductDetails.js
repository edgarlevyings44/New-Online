import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductsDetails.css"

const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dedanite-online.onrender.com/products/${id}`)
    
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='product-card'>
        <img className='product-image' src={product.imageurl} alt={product.name} />
          <div className='text-details'>
            <h1 className='catchy-heading'>{product.name}</h1>
            <p><strong>Price:</strong><span>${product.price}</span></p>
            <p><strong>Category:</strong><span>{product.category}</span></p>
            <p><strong>Quantity:</strong><span>{product.quantity}</span></p>
            <p><strong>Weight:</strong><span>{product.weight}</span></p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="inactive-star">&#9734;</span>
              ))}
            </div>
            <div className="details">
              <h2>Description:</h2>
              <p>{product.details}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;