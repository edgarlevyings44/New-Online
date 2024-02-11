import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./ProductsDetails.css"

const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    // Add logic to add product to cart
    // For example: props.handleAddToCart(product)
    // Assuming the handleAddToCart function is passed as a prop to ProductDetails
  }

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
            <p><strong>Price:</strong><span>KES {product.price}</span></p>
            <p><strong>Category:</strong><span>{product.category}</span></p>
            <p><strong>Weight:</strong><span>{product.weight}</span></p>
            
            <div className="details">
              <h2>Description:</h2>
              <p>{product.details}</p>
            </div>
            <Link to={'/cart'}>
              <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;