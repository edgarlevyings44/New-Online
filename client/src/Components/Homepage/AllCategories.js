import React, { useState } from 'react';
import "./AllCategories.css"
import Details from './Details';


const AllCategoriesPage = ({handleAddToCart}) => {
 const [selectedCategory, setSelectedCategory] = useState('All');
 const [selectedPriceRange, setSelectedPriceRange] = useState('All');



 // Placeholder product data with image URLs

    const products = [
      { id: 1, name: 'Exe Unga All Purpose Fortified Wheat Flour 2Kg', category: 'Other', price: 2.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/he9/hf1/12462951825438/43636_Main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 2, name: 'Jogoo Maize Meal Fortified With Vitamins And Minerals 2kg', category: 'Other', price: 3.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h1a/h58/17328606904350/43630_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 3, name: 'MUMIAS SUGAR WHITE 2KG', category: 'Other', price: 5.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h08/h87/49893140758558/1700Wx1700H_201292_main.jpg?im=Resize=400' },
      { id: 4, name: 'Blue Band Roots3 Medium Margarine Fat Spread 500g', category: 'Other', price: 4.59, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h40/h09/12461898170398/13866_Main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 5, name: 'Hisense Smart Tv 43" Vidaa FHD 43A4K', category: 'Other', price: 2.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h82/h72/52107576836126/1700Wx1700H_211772_main.jpg?im=Resize=400' },
      { id: 6, name: 'Golden Fry Vegetable Cooking Oil 3L', category: 'Other', price: 3.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h72/h6d/17588425392158/34102_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 7, name: 'Moet & Chandon Imperial Brut', category: 'Cold Drinks', price: 5.99, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/moet-&-chandon-imperial-brut-sm.webp' },
      { id: 8, name: 'KASUKU EX. BOOK SINGLE LINE 120P A4', category: 'Other', price: 4.59, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h04/hfe/17384575041566/2424_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 9, name: 'BIC Cristal Original Medium Point Pen 5 Pieces', category: 'Other', price: 2.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h62/hfd/17384635826206/40612_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 10, name: 'Von VART27NHS Double Door Refrigerator 216L', category: 'Other', price: 3.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h0e/he9/49930274471966/1700Wx1700H_167705_1.jpg?im=Resize=400' },
      { id: 11, name: 'Tusker Lager', category: 'Cold Drinks', price: 5.99, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/tusker-lager-sm.webp' },
      { id: 12, name: 'Jack Daniel\'s Old No. 7', category: 'Cold Drinks', price: 4.59, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/jack-daniels-sour-mash-sm.webp' },
      { id: 13, name: 'Samsung Galaxy A54 8GB 128GB 5G Dual SIM Smartphone 6.6 Inch Graphite', category: 'Other', price: 2.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h00/h88/49229182173214/1700Wx1700H_199052_main.jpg?im=Resize=400' },
      { id: 14, name: 'Fay White Toilet Rolls Pack Of 4', category: 'Other', price: 3.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hd5/h75/17292009078814/19436_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 15, name: 'Nivea Shea Smooth Body Lotion 400Ml', category: 'Other', price: 5.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h01/h29/17588751433758/17063_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 16, name: 'Dettol Bar Soap Original 90Gx3', category: 'Other', price: 4.59, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h56/he3/49431958847518/1700Wx1700H_13268_main.jpg?im=Resize=400' },
      { id: 17, name: 'Downy Fabric Softener Valley Dew 1 lt', category: 'Other', price: 2.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h5d/h43/17292672532510/91959_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 18, name: 'Sunlight 2 in 1 Hand Washing Powder Lavender Sensations 1kg', category: 'Other', price: 3.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/he9/h98/49590003335198/1700Wx1700H_93536_main.jpg?im=Resize=400' },
      { id: 19, name: 'Persil Machine Wash Detergent Gel With Floral 3L', category: 'Other', price: 5.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hae/h10/27845273452574/165245_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 20, name: 'Tuzo Esl Milk 450Ml - Long Life', category: 'Other', price: 4.59, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2e/h07/15788454248478/89655_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 21, name: 'Cadbury Dairy Milk Top Deck Chocolate 80g', category: 'Other', price: 2.50, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h6e/h94/16975767142430/23679_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 22, name: 'Tuzo Esl Milk 450Ml - Long Life', category: 'Other', imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2e/h07/15788454248478/89655_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 23, name: 'Cadbury Dairy Milk Top Deck Chocolate 80g', category: 'Other', imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h6e/h94/16975767142430/23679_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 24, name: 'Peach', category: 'Fruits', price: 2.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/8699980679c95a8f44d29647c72a427c3c2b6e183a4a8150741fc10bddecf56d?w=1024&h=1024&pmaid=30502516' },
      { id: 25, name: 'Cauliflower', category: 'Vegetables', price: 1.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/15ccdcc92cee278bad68e201732b32cbecd1c08c346af4a381bf46de769b1960?w=1024&h=1024&pmaid=30505213' },
      { id: 26, name: 'Kiwi', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/567c22abb39148ede01ba5808224f4a3c316fd983dbf00ce67a1c3a4c122f0cc?w=1024&h=1024&pmaid=30505672' },
      { id: 27, name: 'Spinach', category: 'Vegetables', price: 2.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/0066f708a87c02eaea69ecc5716e1a5ea36d6bc94c5b3b9bd77fd06bf7fa39f6?w=1024&h=1024&pmaid=30506002' },
      { id: 28, name: 'Cherry', category: 'Fruits', price: 4.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/1ee29bb07aab16b99b08c6dc046475cd11b40501c54c9f096080e71f462d10f4?w=1024&h=1024&pmaid=30506240' },
      { id: 29, name: 'Artichoke', category: 'Vegetables', price: 2.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/ad46b2eb2b23d3e72c4f2beb3d93b693fae00884a7e9d7268d93bc914f8b9973?w=1024&h=1024&pmaid=30506456' },
      { id: 30, name: 'Plum', category: 'Fruits', price: 1.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/1a8c92bd85c899af98e8370385bb9345780737c05c435a3c17ed42229dc6ee2a?w=1024&h=1024&pmaid=30506702' },
      { id: 31, name: 'Beetroot', category: 'Vegetables', price: 1.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/0fe6d79b5d1f944bc01d58d41cbbf4272ef96173ce5513381e0d99fb772f4c21?w=1024&h=1024&pmaid=30509361' },
      { id: 32, name: 'Raspberry', category: 'Fruits', price: 3.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/56544c7a4927c397b87a5c529853f45eb30122650ffcad1887c7e2664c88929d?w=1024&h=1024&pmaid=30509575' },
      { id: 33, name: 'Eggplant', category: 'Vegetables', price: 3.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/036072d1a326d739f072e1d7efe17ba2561115b9bc4ced969fcbf486883219fb?w=1024&h=1024&pmaid=30509952' },
      { id: 34, name: 'Blackberry', category: 'Fruits', price: 4.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/4eadc3eb277e85e63e36db65d8ef15d1ddb584f3e85a12f74902a24d0cc402cb?w=1024&h=1024&pmaid=30510023' },
      { id: 35, name: 'Radish', category: 'Vegetables', price: 2.19, imageurl: 'https://pfst.cf2.poecdn.net/base/image/b3bf73a86e4ef50dcf88bfdb636917c3391c6e9887b60731e9b366d4d2327dcd?w=1024&h=1024&pmaid=30510120' },
      { id: 36, name: 'Apricot', category: 'Fruits', price: 3.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/8ddc3b130fd27e0510f7516bf8454a2bc1ba7b9c2b4419deca6801a19e38b343?w=1024&h=1024&pmaid=30511175' },
      { id: 37, name: 'Cabbage (Red)', category: 'Vegetables', price: 2.59, imageurl: 'https://pfst.cf2.poecdn.net/base/image/60c514ec96cdf317b3febd70b02e1807b38cf428e068299a24a6d9eddd7e1879?w=1024&h=1024&pmaid=30511641' },
      { id: 38, name: 'Mango (Green)', category: 'Fruits', price: 4.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/5c0f34d00b734c45b61c45565c64c243c00d3c787cba334ac86fd1c08d9f3fd3?w=1024&h=1024&pmaid=30512748' },
      { id: 39, name: 'Pomegranate', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/3fcd00d6213edfc8758dbd31a401ebd684d97ea79963d0a47686f9ed8d532cca?w=1024&h=1024&pmaid=30516467' },
      { id: 40, name: 'Cranberry', category: 'Fruits', price: 2.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/d1906b3e902379840672b7fe9c2970829c65142bfbb47ac1336b0e791511e6ca?w=1024&h=1024&pmaid=30513598' },
      { id: 41, name: 'Leek', category: 'Vegetables', price: 2.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/29397ec118a2a58667a84c5638627d7baab1348fa3523fdd71c8c3073c24aa82?w=1024&h=1024&pmaid=30513671' },
      { id: 42, name: 'Pear (Asian)', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/35ec144973c4aafc23dcf879999568eff46e5aee9751ed3d360e5eb0e3424e32?w=1024&h=1024&pmaid=30515119' },
      { id: 43, name: 'Squash (Yellow)', category: 'Vegetables', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/e0be879bfdf01cbdcbc592c99144cd01edf916463013d8217ef0f12f2ddce6ae?w=1024&h=1024&pmaid=30515540' },
      { id: 44, name: 'Brussels Sprouts', category: 'Vegetables', price: 2.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/a73dcc911b06173d1729b7a5cf6f4af307fa9ae414646a7f830b2e9a6c1fcaf8?w=1024&h=1024&pmaid=30517695' },
      { id: 45, name: 'Papaya', category: 'Fruits', price: 3.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/63292a94cdc5881bedd995d62cfa1a82e1233938eb49457081f701c997c9a838?w=1024&h=1024&pmaid=30517400' },
      { id: 46, name: 'Celery', category: 'Vegetables', price: 1.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/2ce1539b2102bfa5c4c24f3aa3137b5a1078f2540d30fc449cd7a87ab74d88bd?w=1024&h=1024&pmaid=30517938' },
      { id: 47, name: 'Grapefruit', category: 'Fruits', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/3363ae999eb870905587b9de296e254b6256a5a1f1f3d70d5a2add0cd76030cd?w=1024&h=1024&pmaid=30520188' },
      { id: 48, name: 'Radish (Black)', category: 'Vegetables', price: 2.19, imageurl: 'https://pfst.cf2.poecdn.net/base/image/dd4057e011d2fc0732051bd3873096dba99a135beb2a2f765bae0a39a1ea1fb6?w=1024&h=1024&pmaid=30518824' },
      { id: 49, name: 'Cantaloupe', category: 'Fruits', price: 4.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/423b74fddc1f47cdfd6963513dc93206d16be921736daf7b91b2c5f0d182b9be?w=1024&h=1024&pmaid=30519944' },
      { id: 50, name: 'Passion Fruit', category: 'Fruits', price: 4.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/dc03eeecab3641895fcb7b55a3403e04c468ab9d48e57593bd7372286041f37f?w=1024&h=1024&pmaid=30520873' },
      { id: 51, name: 'Turnip', category: 'Vegetables', price: 2.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/829f19c982f539d2aadcfd80bf7810d5446786ad6e1ee72316ed11e9f3a351ba?w=1024&h=1024&pmaid=30573435' },
      { id: 52, name: 'Clementine', category: 'Fruits', price: 3.49, imageurl: 'https://pfst.cf2.poecdn.net/base/image/829f19c982f539d2aadcfd80bf7810d5446786ad6e1ee72316ed11e9f3a351ba?w=1024&h=1024&pmaid=30573435' },
      { id: 53, name: 'Fennel', category: 'Vegetables', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/0a68de63be6854c4900a796520f18bf73a6a78f249aeaa0bec80f74f237b6cf6?w=1024&h=1024&pmaid=30573876' },
      { id: 54, name: 'Guava', category: 'Fruits', price: 3.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/f45d05ef67afad6cacc18bc85e02f799bad96e6fda004c923e0d86bbcef8d29f?w=1024&h=1024&pmaid=30574230' },
      { id: 55, name: 'Rutabaga', category: 'Vegetables', price: 2.59, imageurl: 'https://pfst.cf2.poecdn.net/base/image/36c1587b16e82b559fb76512faa46669f9ded0c205dc6069ec79af204a361fa6?w=1024&h=1024&pmaid=30574458' },
      { id: 56, name: 'Dragon Fruit', category: 'Fruits', price: 5.99, imageurl: 'https://pfst.cf2.poecdn.net/base/image/c98b548b57e1af6b044c43826ae33d16a05a453832bea3bfc28ec841582098a8?w=1024&h=1024&pmaid=30574715' },
      { id: 57, name: 'Nectarine', category: 'Fruits', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/2424498dd52176e45f2184f04c7cb30c211798a769ccd916c4ec416cf14f1583?w=1024&h=1024&pmaid=30579174' },
      { id: 58, name: 'Cabbage (Savoy)', category: 'Vegetables', price: 3.29, imageurl: 'https://pfst.cf2.poecdn.net/base/image/dedca722353e24c456674ded838ea799173fdaba71870c8b128242adbf463f6a?w=1024&h=1024&pmaid=30579313' },,
      { id: 59, name: 'Mandarin Orange', category: 'Fruits', price: 2.59, imageurl: 'https://pfst.cf2.poecdn.net/base/image/1340c293eb5e7f7a36d369fc37368b071818687545941dce98617530f0b577dd?w=1024&h=1024&pmaid=30579827' },
      { id: 60, name: 'Collard Greens', category: 'Vegetables', price: 2.79, imageurl: 'https://pfst.cf2.poecdn.net/base/image/d1376a090700ead33189742011ddd11e0b0e17b00fa977fb29def74eb4dfac1e?w=1024&h=1024&pmaid=30580233' },
      { id: 61, name: 'Tropical Heat Snacks Safari Puffs Tomato 100G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h0c/h84/13519277817886/84179_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 62, name: 'Tropical Heat Snacks Nyama Choma Crisps 50G', category: 'Snacks', price: 1.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hdd/haf/28550121357342/32295_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 63, name: 'Tropical Heat Snacks Heroes Crisps Salt Vinegar 110G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h19/ha2/28550124961822/165696_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 64, name: 'Tropical Heat Snacks Heroes Crisps Fruit Chutney 110G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hde/h8f/45843164987422/1700Wx1700H_165695_Main.jpg?im=Resize=400' },
      { id: 65, name: 'Tropical Heat Snacks Safari Puffs Cheese 100G', category: 'Snacks', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h57/h2c/26951473922078/84176_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 66, name: 'Tropical Heat Snacks Heroes Crisps Salted 40G', category: 'Snacks', price: 1.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h1a/h3a/45843167739934/1700Wx1700H_155164_Main.jpg?im=Resize=400' },
      { id: 67, name: 'Java House Chocolate Chip Cookies 300g', category: 'Chips', price: 3.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h24/h50/29146580353054/175305_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 68, name: 'Maryland Chocolate Chips Coconut Cookies 136g', category: 'Chips', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h03/h76/27845316018206/110445_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 69, name: 'Maryland Double Chocolate Cookies 136g', category: 'Chips', price: 2.29, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h36/hba/12460919652382/110448_Main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 70, name: 'FAYAZ CHOC CHIP COOKIES 200G', category: 'Snacks', price: 2.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h3f/h1d/26759823884318/139417_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 71, name: 'JAVA CINNAMON COOKIES 300GR', category: 'Snacks', price: 3.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h94/h31/26759983071262/144606_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 72, name: 'Tiffany Delights Chocolate Chips Cookies 90g', category: 'Chips', price: 1.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hd2/h7d/49128774369310/1700Wx1700H_140513_main.jpg?im=Resize=400' },
      { id: 73, name: 'Chips Ahoy Original Chocolate Chips Cookies 85.5g', category: 'Chips', price: 1.79, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h63/h7a/31146748182558/177856_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 74, name: 'Merba Cranberry Cookies 150G', category: 'Chips', price: 2.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hed/h2f/33387918196766/181853_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 75, name: 'Oreo Dark And White Chocolate Sandwich Cookies 123.5g', category: 'Chips', price: 1.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hbc/hdc/30982213107742/166829_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 76, name: 'Diablo No Added Sugar Hazelnut Cookies 135g', category: 'Chips', price: 3.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h92/h7b/49664933494814/1700Wx1700H_197427_main.jpg?im=Resize=400' },
      { id: 77, name: 'Merba Patisserie Edition Dark Chocolate And Hazelnut Cookies 200g', category: 'Chips', price: 4.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h19/h70/34018156314654/181860_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 78, name: 'CUETARA MINICHOC CHIP COOKIES 120G', category: 'Snacks', price: 1.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h39/hea/45568598507550/1700Wx1700H_187118_main.jpg?im=Resize=400' },
      { id: 79, name: 'Diablo Sugar Free Coated Cream Cookies 128g', category: 'Chips', price: 3.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hf1/h88/49664938377246/1700Wx1700H_197430_main.jpg?im=Resize=400' },
      { id: 80, name: 'Merba Patisserie Edition White Chocolate And Cranberry Cookies 200g', category: 'Chips', price: 4.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/ha4/h6d/34018154020894/181859_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 81, name: 'Merba P.E Apple Pie Cookies 225G', category: 'Chips', price: 4.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h3e/hf3/33387916623902/181861_1.jpg_1700Wx1700H?im=Resize=400' },
      { id: 82, name: 'Achva Chocolate Chip Cookies 400g', category: 'Chips', price: 5.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h16/h34/48334095319070/1700Wx1700H_193739_main.jpg?im=Resize=400' },
      { id: 83, name: 'FOX\'S WHITE CHOC COOKIES 180G', category: 'Chips', price: 2.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/hb5/he7/26760236335134/153836_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 84, name: 'Java House Macadamia Nut Cookies 300g', category: 'Chips', price: 4.49, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h1f/hb4/12464087367710/106806_Main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 85, name: 'FAYAZ COCONUT COOKIES 200G', category: 'Snacks', price: 2.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h67/he0/26759826833438/139426_main.jpg_1700Wx1700H?im=Resize=400' },
      { id: 86, name: 'Java House Oats And Raisins Cookies 300g', category: 'Chips', price: 3.99, imageurl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h10/h10/49785032441886/1700Wx1700H_200117_main.jpg?im=Resize=400' },
      { id: 87, name: 'Pure Heaven Celebration Drink (Non-Alcoholic)', category: 'Juices', price: 2.50, imageurl: 'https://storage.googleapis.com/drinksvine/products/pure-heaven-celebration-drink-non-alcoholic.webp' },
      { id: 88, name: 'Robertson Winery Natural Sweet White', category: 'Cold Drinks', price: 1.75, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/robertson-winery-sm.webp' },
      { id: 89, name: 'Four Cousins White Sweet', category: 'Cold Drinks', price: 3.20, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/four-cousins-white-sweet-sm.webp' },
      { id: 90, name: '4th Street White Sweet', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/4th-street-white-sweet-sm.webp' },
      { id: 91, name: 'Saint Anna White Sweet', category: 'Cold Drinks', price: 2.80, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/saint-anna-white-sweet-sm.webp' },
      { id: 92, name: 'Carmela Sparkling Wine', category: 'Cold Drinks', price: 1.99, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/carmela-sparkling-wine-sm.webp' },
      { id: 93, name: 'Drostdy-Hof White Sweet', category: 'Cold Drinks', price: 3.50, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-white-sweet-sm.webp' },
      { id: 94, name: 'Pierre Marcel Sweet White', category: 'Cold Drinks', price: 2.25, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/pierre-marcel-sweet-white-sm.webp' },
      { id: 95, name: 'Fragolino White Duchessa Lia', category: 'Cold Drinks', price: 3.75, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/fragolino-white-duchessa-sm.webp' },
      { id: 96, name: 'Cellar Cask White', category: 'Cold Drinks', price: 2.60, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/cellar-cask-white-sm.webp' },
      { id: 97, name: 'Bianco Nobile White Sweet', category: 'Cold Drinks', price: 1.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/bianco-nobile-white-sweet-sm.webp' },
      { id: 98, name: 'Royalty White Celebration Drink (Non-Alcoholic)', category: 'Cold Drinks', price: 3.10, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/royalty-celebration-drink-non-alcoholic-sm.webp' },
      { id: 99, name: 'Chamdor White (Non-Alcoholic-Wine)', category: 'Cold Drinks', price: 2.15, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/chamdor-white-non-alcoholic-wine-sm.webp' },
      { id: 100, name: 'Asconi Pastoral', category: 'Cold Drinks', price: 2.75, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/asconi-pastoral-sm.webp' },
      { id: 101, name: 'Nederburg Cabernet Sauvignon', category: 'Cold Drinks', price: 1.85, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-cabernet-sauvignon-sm.webp' },
      { id: 102, name: 'Drostdy Hof Claret Select Dry Red', category: 'Cold Drinks', price: 3.30, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-red-dry-sm.webp' },
      { id: 103, name: 'Gato Negro Cabernet Sauvignon', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/gato-negro-cabernet-sauvignon-sm.webp' },
      { id: 104, name: 'Gato Negro Cabernet Sauvignon', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/gato-negro-cabernet-sauvignon-sm.webp' },
      { id: 105, name: 'Asconi Kiss Me Now Cabernet Sauvignon', category: 'Cold Drinks', price: 2.80, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/asconi-kiss-me-now-sm.webp' },
      { id: 106, name: 'Frontera Cabernet Sauvignon', category: 'Cold Drinks', price: 2.10, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/frontera-caberbet-sauvignon-sm.webp' },
      { id: 107, name: 'Trumpeter Malbec', category: 'Cold Drinks', price: 3.60, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/trumpeter-malbec-sm.webp' },
      { id: 108, name: 'Versus Red Dry', category: 'Cold Drinks', price: 2.25, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/versus-red-dry-sm.webp' },
      { id: 109, name: 'Overmeer Red Dry Cask', category: 'Cold Drinks', price: 2.95, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/overmeer-red-dry-sm.webp' },
      { id: 110, name: 'Frontera Merlot', category: 'Cold Drinks', price: 1.99, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/frontera-merlot-sm.webp' },
      { id: 111, name: 'Tall Horse Cabernet Sauvignon', category: 'Cold Drinks', price: 2.50, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/tall-horse-cabernet-sauvignon-sm.webp' },
      { id: 112, name: 'Casillero Del Diablo Cabernet Sauvignon', category: 'Cold Drinks', price: 3.56, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/casillero-del-diablo-cabernet-sauvignon-sm.webp' },
      { id: 113, name: 'Nederburg Merlot', category: 'Cold Drinks', price: 4.58, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-merlot-sm.webp' },
      { id: 114, name: 'Rietvallei Cabernet Sauvignon', category: 'Cold Drinks', price: 5.72, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/rietvallei-cabernet-sauvignon-sm.webp' },
      { id: 115, name: 'Nederburg Shiraz', category: 'Cold Drinks', price: 6.88, imageurl: 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-shiraz-sm.webp' },
  
    
    ];
  

 const filteredProducts = products
   .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
   .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  
   const details = filteredProducts.map((product) => (
    <Details
      key={product.id}
      id={product.id}
      name={product.name}
      imageurl={product.imageurl}
      price={product.price}
      description={product.description}
      weight={product.weight}
      handleAddToCart={handleAddToCart}
    />
  ));


 return (
   <div className="container">
     <h1>All Products</h1>


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
               <option value="Snacks">Snacks</option>
               <option value="Munchies">Munchies</option>
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


export default AllCategoriesPage;

