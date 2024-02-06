import React, { useState } from 'react';
import "./ColdDrinksPage.css"

const ColdDrinksPage = ({handleAddToCart}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  // Placeholder product data with image URLs
  const products = [
    { id: 1, name: 'Pure Heaven Celebration Drink (Non-Alcoholic)', category: 'Juices', price: 2.50, imageurl: 'https://storage.googleapis.com/drinksvine/products/pure-heaven-celebration-drink-non-alcoholic.webp' },
    { id: 2, name: 'Robertson Winery Natural Sweet White', category: 'Cold Drinks', price: 1.75, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/robertson-winery-sm.webp' },
    { id: 3, name: 'Four Cousins White Sweet', category: 'Cold Drinks', price: 3.20, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/four-cousins-white-sweet-sm.webp' },
    { id: 4, name: '4th Street White Sweet', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/4th-street-white-sweet-sm.webp' },
    { id: 5, name: 'Saint Anna White Sweet', category: 'Cold Drinks', price: 2.80, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/saint-anna-white-sweet-sm.webp' },
    { id: 6, name: 'Carmela Sparkling Wine', category: 'Cold Drinks', price: 1.99, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/carmela-sparkling-wine-sm.webp' },
    { id: 7, name: 'Drostdy-Hof White Sweet', category: 'Cold Drinks', price: 3.50, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-white-sweet-sm.webp' },
    { id: 8, name: 'Pierre Marcel Sweet White', category: 'Cold Drinks', price: 2.25, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/pierre-marcel-sweet-white-sm.webp' },
    { id: 9, name: 'Fragolino White Duchessa Lia', category: 'Cold Drinks', price: 3.75, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/fragolino-white-duchessa-sm.webp' },
    { id: 10, name: 'Cellar Cask White', category: 'Cold Drinks', price: 2.60, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/cellar-cask-white-sm.webp' },
    { id: 11, name: 'Bianco Nobile White Sweet', category: 'Cold Drinks', price: 1.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/bianco-nobile-white-sweet-sm.webp' },
    { id: 12, name: 'Royalty White Celebration Drink (Non-Alcoholic)', category: 'Cold Drinks', price: 3.10, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/royalty-celebration-drink-non-alcoholic-sm.webp' },
    { id: 13, name: 'Chamdor White (Non-Alcoholic-Wine)', category: 'Cold Drinks', price: 2.15, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/chamdor-white-non-alcoholic-wine-sm.webp' },
    { id: 14, name: 'Asconi Pastoral', category: 'Cold Drinks', price: 2.75, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/asconi-pastoral-sm.webp' },
    { id: 15, name: 'Nederburg Cabernet Sauvignon', category: 'Cold Drinks', price: 1.85, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-cabernet-sauvignon-sm.webp' },
    { id: 16, name: 'Drostdy Hof Claret Select Dry Red', category: 'Cold Drinks', price: 3.30, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-red-dry-sm.webp' },
    { id: 17, name: 'Gato Negro Cabernet Sauvignon', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/gato-negro-cabernet-sauvignon-sm.webp' },
    { id: 18, name: 'Asconi Kiss Me Now Cabernet Sauvignon', category: 'Cold Drinks', price: 2.80, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/asconi-kiss-me-now-sm.webp' },
    { id: 19, name: 'Frontera Cabernet Sauvignon', category: 'Cold Drinks', price: 2.10, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/frontera-caberbet-sauvignon-sm.webp' },
    { id: 20, name: 'Trumpeter Malbec', category: 'Cold Drinks', price: 3.60, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/trumpeter-malbec-sm.webp' },
    { id: 21, name: 'Versus Red Dry', category: 'Cold Drinks', price: 2.25, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/versus-red-dry-sm.webp' },
    { id: 22, name: 'Overmeer Red Dry Cask', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/overmeer-red-dry-sm.webp' },
    { id: 23, name: 'Frontera Merlot', category: 'Cold Drinks', price: 1.99, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/frontera-merlot-sm.webp' },
    { id: 24, name: 'Tall Horse Cabernet Sauvignon', category: 'Cold Drinks', price: 2.50, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/tall-horse-cabernet-sauvignon-sm.webp' },
    { id: 25, name: 'Casillero Del Diablo Cabernet Sauvignon', category: 'Cold Drinks', price: 3.56, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/casillero-del-diablo-cabernet-sauvignon-sm.webp' },
    { id: 26, name: 'Nederburg Merlot', category: 'Cold Drinks', price: 4.58, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-merlot-sm.webp' },
    { id: 27, name: 'Rietvallei Cabernet Sauvignon', category: 'Cold Drinks', price: 5.72, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/rietvallei-cabernet-sauvignon-sm.webp' },
    { id: 28, name: 'Nederburg Shiraz', category: 'Cold Drinks', price: 6.88, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-shiraz-sm.webp' },

     
    //add more
  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  return (
    <div className="container">
      <h1>Cold Drinks & Juices</h1>

      <div className="content">
        {/* Filter Card */}
        <div className="card filter-card">
          <div className="filter-section">
            <h2>Filters</h2>
            <div>
              <label>Category:</label>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Cold Drinks">Cold Drinks</option>
                <option value="Juices">Juices</option>
              </select>
            </div>
            <div>
              <label>Price Range:</label>
              <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="card-container">
          {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <img src={product.imageurl} alt={product.name} />
              <label>{product.name}</label>
              <div className="card-details">
                <p>Category: {product.category}</p>
                <p>Price: Kshs.{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColdDrinksPage;