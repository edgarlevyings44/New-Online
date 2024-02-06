import React, { useState } from 'react';
import "./FruitsPageVegetables.css"


const FruitsVegetablesPage = ({handleAddToCart}) => {
 const [selectedCategory, setSelectedCategory] = useState('All');
 const [selectedPriceRange, setSelectedPriceRange] = useState('All');


 // Placeholder product data with image URLs

    const products = [
      { id: 1, name: 'Peach', category: 'Fruits', price: 2.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/8699980679c95a8f44d29647c72a427c3c2b6e183a4a8150741fc10bddecf56d?w=1024&h=1024&pmaid=30502516' },
      { id: 2, name: 'Cauliflower', category: 'Vegetables', price: 1.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/15ccdcc92cee278bad68e201732b32cbecd1c08c346af4a381bf46de769b1960?w=1024&h=1024&pmaid=30505213' },
      { id: 3, name: 'Kiwi', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/567c22abb39148ede01ba5808224f4a3c316fd983dbf00ce67a1c3a4c122f0cc?w=1024&h=1024&pmaid=30505672' },
      { id: 4, name: 'Spinach', category: 'Vegetables', price: 2.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/0066f708a87c02eaea69ecc5716e1a5ea36d6bc94c5b3b9bd77fd06bf7fa39f6?w=1024&h=1024&pmaid=30506002' },
    { id: 5, name: 'Cherry', category: 'Fruits', price: 4.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/1ee29bb07aab16b99b08c6dc046475cd11b40501c54c9f096080e71f462d10f4?w=1024&h=1024&pmaid=30506240' },
    { id: 6, name: 'Artichoke', category: 'Vegetables', price: 2.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/ad46b2eb2b23d3e72c4f2beb3d93b693fae00884a7e9d7268d93bc914f8b9973?w=1024&h=1024&pmaid=30506456' },
    { id: 7, name: 'Plum', category: 'Fruits', price: 1.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/1a8c92bd85c899af98e8370385bb9345780737c05c435a3c17ed42229dc6ee2a?w=1024&h=1024&pmaid=30506702' },
    { id: 8, name: 'Beetroot', category: 'Vegetables', price: 1.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/0fe6d79b5d1f944bc01d58d41cbbf4272ef96173ce5513381e0d99fb772f4c21?w=1024&h=1024&pmaid=30509361' },
    { id: 9, name: 'Raspberry', category: 'Fruits', price: 3.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/56544c7a4927c397b87a5c529853f45eb30122650ffcad1887c7e2664c88929d?w=1024&h=1024&pmaid=30509575' },
    { id: 10, name: 'Eggplant', category: 'Vegetables', price: 3.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/036072d1a326d739f072e1d7efe17ba2561115b9bc4ced969fcbf486883219fb?w=1024&h=1024&pmaid=30509952' },
    { id: 11, name: 'Blackberry', category: 'Fruits', price: 4.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/4eadc3eb277e85e63e36db65d8ef15d1ddb584f3e85a12f74902a24d0cc402cb?w=1024&h=1024&pmaid=30510023' },
    { id: 12, name: 'Radish', category: 'Vegetables', price: 2.19, imageurl: 'https://pfst.cf2.poecdn.net/base/image/b3bf73a86e4ef50dcf88bfdb636917c3391c6e9887b60731e9b366d4d2327dcd?w=1024&h=1024&pmaid=30510120' },
    { id: 13, name: 'Apricot', category: 'Fruits', price: 3.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/8ddc3b130fd27e0510f7516bf8454a2bc1ba7b9c2b4419deca6801a19e38b343?w=1024&h=1024&pmaid=30511175' },
    { id: 14, name: 'Cabbage (Red)', category: 'Vegetables', price: 2.59, imageurl: 'https://pfst.cf2.poecdn.net/base/image/60c514ec96cdf317b3febd70b02e1807b38cf428e068299a24a6d9eddd7e1879?w=1024&h=1024&pmaid=30511641' },
    { id: 15, name: 'Mango (Green)', category: 'Fruits', price: 4.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/5c0f34d00b734c45b61c45565c64c243c00d3c787cba334ac86fd1c08d9f3fd3?w=1024&h=1024&pmaid=30512748' },
    { id: 16, name: 'Pomegranate', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/3fcd00d6213edfc8758dbd31a401ebd684d97ea79963d0a47686f9ed8d532cca?w=1024&h=1024&pmaid=30516467' },
    { id: 17, name: 'Cranberry', category: 'Fruits', price: 2.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/d1906b3e902379840672b7fe9c2970829c65142bfbb47ac1336b0e791511e6ca?w=1024&h=1024&pmaid=30513598' },
    { id: 18, name: 'Leek', category: 'Vegetables', price: 2.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/29397ec118a2a58667a84c5638627d7baab1348fa3523fdd71c8c3073c24aa82?w=1024&h=1024&pmaid=30513671' },
    { id: 19, name: 'Pear (Asian)', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/35ec144973c4aafc23dcf879999568eff46e5aee9751ed3d360e5eb0e3424e32?w=1024&h=1024&pmaid=30515119' },
    { id: 20, name: 'Squash (Yellow)', category: 'Vegetables', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/e0be879bfdf01cbdcbc592c99144cd01edf916463013d8217ef0f12f2ddce6ae?w=1024&h=1024&pmaid=30515540' },
    { id: 22, name: 'Brussels Sprouts', category: 'Vegetables', price: 2.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/a73dcc911b06173d1729b7a5cf6f4af307fa9ae414646a7f830b2e9a6c1fcaf8?w=1024&h=1024&pmaid=30517695' },
    { id: 23, name: 'Papaya', category: 'Fruits', price: 3.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/63292a94cdc5881bedd995d62cfa1a82e1233938eb49457081f701c997c9a838?w=1024&h=1024&pmaid=30517400' },
    { id: 24, name: 'Celery', category: 'Vegetables', price: 1.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/2ce1539b2102bfa5c4c24f3aa3137b5a1078f2540d30fc449cd7a87ab74d88bd?w=1024&h=1024&pmaid=30517938' },
    { id: 25, name: 'Grapefruit', category: 'Fruits', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/3363ae999eb870905587b9de296e254b6256a5a1f1f3d70d5a2add0cd76030cd?w=1024&h=1024&pmaid=30520188' },
    { id: 26, name: 'Radish (Black)', category: 'Vegetables', price: 2.19, imageurl: 'https://pfst.cf2.poecdn.net/base/image/dd4057e011d2fc0732051bd3873096dba99a135beb2a2f765bae0a39a1ea1fb6?w=1024&h=1024&pmaid=30518824' },
    { id: 27, name: 'Cantaloupe', category: 'Fruits', price: 4.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/423b74fddc1f47cdfd6963513dc93206d16be921736daf7b91b2c5f0d182b9be?w=1024&h=1024&pmaid=30519944' },
    { id: 28, name: 'Passion Fruit', category: 'Fruits', price: 4.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/dc03eeecab3641895fcb7b55a3403e04c468ab9d48e57593bd7372286041f37f?w=1024&h=1024&pmaid=30520873' },
    { id: 29, name: 'Turnip', category: 'Vegetables', price: 2.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/829f19c982f539d2aadcfd80bf7810d5446786ad6e1ee72316ed11e9f3a351ba?w=1024&h=1024&pmaid=30573435' },
    { id: 30, name: 'Clementine', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/829f19c982f539d2aadcfd80bf7810d5446786ad6e1ee72316ed11e9f3a351ba?w=1024&h=1024&pmaid=30573435' },
    { id: 31, name: 'Fennel', category: 'Vegetables', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/0a68de63be6854c4900a796520f18bf73a6a78f249aeaa0bec80f74f237b6cf6?w=1024&h=1024&pmaid=30573876' },
    { id: 32, name: 'Guava', category: 'Fruits', price: 3.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/f45d05ef67afad6cacc18bc85e02f799bad96e6fda004c923e0d86bbcef8d29f?w=1024&h=1024&pmaid=30574230' },
    { id: 33, name: 'Rutabaga', category: 'Vegetables', price: 2.59, imageurl: 'https://pfst.cf2.poecdn.net/base/image/36c1587b16e82b559fb76512faa46669f9ded0c205dc6069ec79af204a361fa6?w=1024&h=1024&pmaid=30574458' },
    { id: 34, name: 'Dragon Fruit', category: 'Fruits', price: 5.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/c98b548b57e1af6b044c43826ae33d16a05a453832bea3bfc28ec841582098a8?w=1024&h=1024&pmaid=30574715' },
    { id: 35, name: 'Nectarine', category: 'Fruits', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/2424498dd52176e45f2184f04c7cb30c211798a769ccd916c4ec416cf14f1583?w=1024&h=1024&pmaid=30579174' },
    { id: 36, name: 'Cabbage (Savoy)', category: 'Vegetables', price: 3.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/dedca722353e24c456674ded838ea799173fdaba71870c8b128242adbf463f6a?w=1024&h=1024&pmaid=30579313' },,
    { id: 37, name: 'Mandarin Orange', category: 'Fruits', price: 2.59, imageurl: 'https://pfst.cf2.poecdn.net/base/image/1340c293eb5e7f7a36d369fc37368b071818687545941dce98617530f0b577dd?w=1024&h=1024&pmaid=30579827' },
      { id: 38, name: 'Collard Greens', category: 'Vegetables', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/d1376a090700ead33189742011ddd11e0b0e17b00fa977fb29def74eb4dfac1e?w=1024&h=1024&pmaid=30580233' }
    ];

 const filteredProducts = products
   .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
   .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));


 return (
   <div className="container">
     <h1>Fruits & Vegetables</h1>


     <div className="content">
       {/* Filter Card */}
       <div className="card filter-card">
         <div className="filter-section">
           <h2>Filters</h2>
           <div>
             <label>Category:</label>
             <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
               <option value="All">All</option>
               <option value="Fruits">Fruits</option>
               <option value="Vegetables">Vegetables</option>
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


export default FruitsVegetablesPage;

