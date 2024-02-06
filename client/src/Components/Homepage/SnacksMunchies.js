import React, { useState } from 'react';import "./FruitsPageVegetables.css"
import "./SnacksMunchiesPage.css"


const SnacksMunchiesPage = ({handleAddToCart}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const products = [
  { id: 1, name: 'Tropical Heat Snacks Safari Puffs Tomato 100G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h0c/h84/13519277817886/84179_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 2, name: 'Tropical Heat Snacks Nyama Choma Crisps 50G', category: 'Snacks', price: 1.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hdd/haf/28550121357342/32295_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 3, name: 'Tropical Heat Snacks Heroes Crisps Salt Vinegar 110G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h19/ha2/28550124961822/165696_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 4, name: 'Tropical Heat Snacks Heroes Crisps Fruit Chutney 110G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hde/h8f/45843164987422/1700Wx1700H_165695_Main.jpg?im=Resize=400' },
  { id: 5, name: 'Tropical Heat Snacks Safari Puffs Cheese 100G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h57/h2c/26951473922078/84176_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 6, name: 'Tropical Heat Snacks Heroes Crisps Salted 40G', category: 'Snacks', price: 1.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h1a/h3a/45843167739934/1700Wx1700H_155164_Main.jpg?im=Resize=400' },
  { id: 7, name: 'Java House Chocolate Chip Cookies 300g', category: 'Chips', price: 3.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h24/h50/29146580353054/175305_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 8, name: 'Maryland Chocolate Chips Coconut Cookies 136g', category: 'Chips', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h03/h76/27845316018206/110445_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 9, name: 'Maryland Double Chocolate Cookies 136g', category: 'Chips', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h36/hba/12460919652382/110448_Main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 10, name: 'FAYAZ CHOC CHIP COOKIES 200G', category: 'Snacks', price: 2.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h3f/h1d/26759823884318/139417_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 11, name: 'JAVA CINNAMON COOKIES 300GR', category: 'Snacks', price: 3.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h94/h31/26759983071262/144606_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 12, name: 'Tiffany Delights Chocolate Chips Cookies 90g', category: 'Chips', price: 1.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hd2/h7d/49128774369310/1700Wx1700H_140513_main.jpg?im=Resize=400' },
  { id: 13, name: 'Chips Ahoy Original Chocolate Chips Cookies 85.5g', category: 'Chips', price: 1.79, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h63/h7a/31146748182558/177856_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 14, name: 'Merba Cranberry Cookies 150G', category: 'Chips', price: 2.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hed/h2f/33387918196766/181853_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 15, name: 'Oreo Dark And White Chocolate Sandwich Cookies 123.5g', category: 'Chips', price: 1.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hbc/hdc/30982213107742/166829_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 16, name: 'Diablo No Added Sugar Hazelnut Cookies 135g', category: 'Chips', price: 3.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h92/h7b/49664933494814/1700Wx1700H_197427_main.jpg?im=Resize=400' },
  { id: 17, name: 'Merba Patisserie Edition Dark Chocolate And Hazelnut Cookies 200g', category: 'Chips', price: 4.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h19/h70/34018156314654/181860_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 18, name: 'CUETARA MINICHOC CHIP COOKIES 120G', category: 'Snacks', price: 1.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h39/hea/45568598507550/1700Wx1700H_187118_main.jpg?im=Resize=400' },
  { id: 19, name: 'Diablo Sugar Free Coated Cream Cookies 128g', category: 'Chips', price: 3.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf1/h88/49664938377246/1700Wx1700H_197430_main.jpg?im=Resize=400' },
  { id: 20, name: 'Merba Patisserie Edition White Chocolate And Cranberry Cookies 200g', category: 'Chips', price: 4.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/ha4/h6d/34018154020894/181859_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 21, name: 'Merba P.E Apple Pie Cookies 225G', category: 'Chips', price: 4.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h3e/hf3/33387916623902/181861_1.jpg_1700Wx1700H?im=Resize=400' },
  { id: 22, name: 'Achva Chocolate Chip Cookies 400g', category: 'Chips', price: 5.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h16/h34/48334095319070/1700Wx1700H_193739_main.jpg?im=Resize=400' },
  { id: 23, name: 'FOX\'S WHITE CHOC COOKIES 180G', category: 'Chips', price: 2.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hb5/he7/26760236335134/153836_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 24, name: 'Java House Macadamia Nut Cookies 300g', category: 'Chips', price: 4.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h1f/hb4/12464087367710/106806_Main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 25, name: 'FAYAZ COCONUT COOKIES 200G', category: 'Snacks', price: 2.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h67/he0/26759826833438/139426_main.jpg_1700Wx1700H?im=Resize=400' },
  { id: 26, name: 'Java House Oats And Raisins Cookies 300g', category: 'Chips', price: 3.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h10/h10/49785032441886/1700Wx1700H_200117_main.jpg?im=Resize=400' }

  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  return (
    <div className="container">
      <h1>Snacks & Munchies</h1>

      <div className="content">
        {/* Filter Card */}
        <div className="card filter-card">
          <div className="filter-section">
            <h2>Filters</h2>
            <div>
              <label>Category:</label>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Snacks">Snacks</option>
                <option value="Munchies">Munchies</option>
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

export default  SnacksMunchiesPage;