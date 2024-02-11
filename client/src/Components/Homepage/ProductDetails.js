import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductsDetails.css"

const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(~`https://dedanite-online.onrender.com/products/${id}`)
    
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <img src={product.imageurl} alt={product.name} />
      <p>Category: {product.category}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Weight: {product.weight}</p>
    </div>
  );
};

export default ProductDetails;

