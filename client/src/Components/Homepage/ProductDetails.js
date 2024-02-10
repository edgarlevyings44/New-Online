import React, { useEffect, useState } from 'react';

const ProductDetailsPage = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://dedanite-online.onrender.com/products/${productId}')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <img src={product.imageurl} alt={product.name} />
      {/* Add other details as needed */}
    </div>
  );
};

export default ProductDetailsPage;