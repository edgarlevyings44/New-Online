import json
from app import app
from flask_bcrypt import Bcrypt
from model import db, Product, TopCategory, FeaturedBrands, Payment, Order

bcrypt = Bcrypt(app)

with app.app_context():

    Product.query.delete()
    TopCategory.query.delete()
    FeaturedBrands.query.delete()
    Payment.query.delete()
    Order.query.delete()
 

    db.session.commit()



    data = [

    { 'id': 1, 'name': 'Apple', 'category': 'Fruits', 'weight': '250g', 'price': '1.99', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_27f437949aa7ff723dcd79d49f33923782d863f53439c2f06ed6acf40188f677.png?w=1024&h=1024' },
    { 'id': 2, 'name': 'Carrot', 'category': 'Fruits','weight': '250g',  'price': '0.99', 'quantity': 15, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_1c53fa7ea665a3ae324e9bf9a2b53744b3d8201d800147b84d2a336561c29548.png?w=1024&h=1024' },
    { 'id': 3, 'name': 'Banana', 'category': 'Fruits', 'weight': '250g', 'price': '0.75', 'quantity': 9, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_cbf23631d5c48d885a437266163f3654474858c647c4b54a11c8b63c95973460.png?w=1024&h=1024' },
    { 'id': 4, 'name': 'Grapes', 'category': 'Fruits', 'weight': '250g', 'price': '2.49', 'quantity': 4, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_da218e2b1d438758b4f64ab4b77da9826c43342d75b6075aa3e9446fa89dd667.png?w=1024&h=1024' },
    { 'id': 5, 'name': 'Strawberry', 'category': 'Fruits', 'weight': '250g', 'price': '1.79', 'quantity': 17, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_523c1556d0274a14d44ca9e70ab8c88b920bfca5ffb78a1f73543a31a650ca3c.png?w=1024&h=1024' },
    { 'id': 6, 'name': 'Cucumber', 'category': 'Fruits', 'weight': '250g', 'price': '0.69', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_da9e584c75ca8dd0ecefef754b36751a0d9b17a93cdfdb370b8746461e80ae5d.png?w=1024&h=1024' },
    { 'id': 7, 'name': 'Pineapple', 'category': 'Fruits', 'weight': '250g', 'price': '2.99', 'quantity': 14, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_01aeaa982b4648323a50e996e27b57fcd9fc626459afaebbd1a4d7721041b54f.png?w=1024&h=1024' },
    { 'id': 8, 'name': 'Tomato', 'category': 'Fruits', 'weight': '250g', 'price': '0.89', 'quantity': 19, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_e723f623853feec4b2f1073cfd08395cfa35460631bfa2981c10d2882d0dc072.png?w=1024&h=1024' },
    { 'id': 9, 'name': 'Mango', 'category': 'Fruits', 'weight': '250g', 'price': '1.99', 'quantity': 12, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_06acb7ca59481e754e20bb0a00afd985ee72de1c6a4fe79ccc6eb4335fe02690.png?w=1024&h=1024' },
    { 'id': 10, 'name': 'Broccoli', 'category': 'Fruits', 'weight': '250g', 'price': '1.49', 'quantity': 4, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_aef2196463e2855ca11ebe2664d85198dc6e5f11696fc2c0bfde6134197b0e57.png?w=1024&h=1024' },
    { 'id': 11, 'name': 'Potato', 'category': 'Fruits', 'weight': '250g', 'price': '0.49', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_a75c1e41b3edfcf8291173100c37bb51a9375fd3f3897fccbb003d9814d300f9.png?w=1024&h=1024' },
    { 'id': 12, 'name': 'Watermelon', 'category': 'Fruits', 'weight': '250g', 'price': '3.99', 'quantity': 8, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_8fcd2ee67aed0f72239189121b54b2b83e984da6c5774737779f56f2cc53cfb7.png?w=1024&h=1024' },
    { 'id': 13, 'name': 'Bell Pepper', 'category': 'Fruits','weight': '250g', 'price': '1.29', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_245f3c90e62f34ff7c326ce580d792539746f3b1b6d42b1cc5871647e8f7a422.png?w=1024&h=1024' },
    { 'id': 14, 'name': 'Blueberries', 'category': 'Fruits', 'weight': '250g', 'price': '2.99', 'quantity': 11, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_5a662f9c1a16a5f0082f60ba0ea65424acda7b77fc124d7da0b2244438fbb408.png?w=1024&h=1024' },
    { 'id': 15, 'name': 'Zucchini', 'category': 'Fruits', 'weight': '250g',  'price': '1.19', 'quantity': 3, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_10bfdba91641bb3c6bb9dfe14b8b8a14e278a3bb7b9ee22148518d71c6c4fd2a.png?w=1024&h=1024' },
    { 'id': 16, 'name': 'Orange', 'category': 'Fruits', 'weight': '250g', 'price': '1.25', 'quantity': 2, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_48dc593109e98207c470d9a9929fe8a3ab9a8172b648f4cc155e51e757286c29.png?w=1024&h=1024' },
    { 'id': 17, 'name': 'Asparagus', 'category': 'Fruits', 'weight': '250g', 'price': '2.49', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_985d9cd75eb658404d96faa47252cde16eeb6a608aafa0ba2fdaaf640e721c35.png?w=1024&h=1024' },
    { 'id': 18, 'name': 'Pear', 'category': 'Fruits', 'weight': '250g', 'price': '1.79', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_3e8cec81d098009281d150897496f9aed81fbe87b013c6a56273e945e34e263c.png?w=1024&h=1024' },
    { 'id': 19, 'name': 'Cabbage', 'category': 'Fruits', 'weight': '250g', 'price': '0.99', 'quantity': 6, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_8a161d392a64f7b9deec8f153abfe453d11d2747c11603ebbcb496ca09d49855.png?w=1024&h=1024' },
    { 'id': 20, 'name': 'Avocado', 'category': 'Fruits', 'weight': '250g', 'price': '2.49', 'quantity': 10, 'imageurl': 'https://qph.cf2.poecdn.net/main-sdxl_2f6ce9d37605eef2dc9d4ed77dd9efca236a065361853e2795e732957fdddc35.png?w=1024&h=1024' },
    { 'id': 21, 'name': 'Del Monte Mixed Berry Juice 1L', 'category': 'Juices', 'weight': '1L', 'price': '1.99', 'quantity': 7, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h55/h2a/17213263544350/38584_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 22, 'name': 'Minute Maid Orange Pulpy Juice 1L', 'category': 'Juices', 'weight': '1L', 'price': '2.99', 'quantity': 21, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hf6/h86/47857493540894/1700Wx1700H_69002_main.jpg?im=Resize=400' },
    { 'id': 23, 'name': 'Pick N Peel White Grape Juice 1L', 'category': 'Juices', 'weight': '1L', 'price': '3.99', 'quantity': 14, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h16/h80/26449917542430/41076_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 24, 'name': 'Del Monte Cranberry Apple Juice 1L', 'category': 'Juices', 'weight': '1L', 'price': '4.99', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h33/h5e/17213097738270/100298_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 25, 'name': 'Highlands Cordial Tropical Juice 3L', 'category': 'Juices', 'weight': '3L', 'price': '5.99', 'quantity': 5, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hf6/h26/49865986768926/1700Wx1700H_106817_main.jpg?im=Resize=400' },
    { 'id': 26, 'name': 'Coca Cola Soda 2L', 'category': 'Juices', 'weight': '2L', 'price': '0.99', 'quantity': 11, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hae/h7c/12462213529630/24181_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 27, 'name': 'Sprite Soda 2L', 'category': 'Juices', 'weight': '2L', 'price': '1.99', 'quantity': 4, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h80/ha5/12462215823390/24185_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 28, 'name': 'Fanta Orange soda 2L', 'category': 'Juices', 'weight': '2L', 'price': '2.99', 'quantity': 2, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h30/h27/17292082774046/24183_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 29, 'name': 'Coca Cola Soda Assorted 2L x Pack Of 4', 'category': 'Juices', 'weight': '2L', 'price': '3.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h2a/h35/12681321807902/134140_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 30, 'name': 'Ribena Blackcurrant Juice 250ml', 'category': 'Juices', 'weight': '250ml', 'price': '0.99', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h5f/12462624735262/37138_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 31, 'name': 'Heineken Premium Quality 0.0 Non Alcoholic Beer 330ml', 'category': 'Juices', 'weight': '330ml', 'price': '1.99', 'quantity': 25, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h2e/h44/27845782503454/148720_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 32, 'name': 'Schweppes Ginger Ale Tonic Water 330Ml', 'category': 'Juices', 'weight': '330ml', 'price': '2.99', 'quantity': 13, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h42/hb6/34849917042718/1700Wx1700H_178181_main.jpg?im=Resize=400' },
    { 'id': 33, 'name': 'Quencher Life Premium Drinking Water 18L', 'category': 'Juices', 'weight': '18L', 'price': '3.99', 'quantity': 7, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h6e/h1c/12462987214878/17397_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 34, 'name': 'Waba Mineral Water 20L', 'category': 'Juices', 'weight': '20L', 'price': '4.99', 'quantity': 7, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h4e/16813704740894/60619_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 35, 'name': 'Aquaclear Drinking Water 300ml', 'category': 'Juices', 'weight': '300ml', 'price': '5.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h9b/h35/16890515947550/16142_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 36, 'name': 'Aquamist Lemon Natural Mineral Water 500ml', 'category': 'Juices', 'weight': '500ml', 'price': '6.99', 'quantity': 20, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h58/had/45019205468190/1700Wx1700H_27888_main.jpg?im=Resize=400' },
    { 'id': 37, 'name': 'Red Bull Energy Drink 250ml x 4 Pieces', 'category': 'Juices', 'weight': '250ml', 'price': '7.99', 'quantity': 2, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h47/hea/51240487682078/1700Wx1700H_43217_main.jpg?im=Resize=400'},
    { 'id': 38, 'name': 'Monster Energy Drink 500ml', 'category': 'Juices', 'weight': '500ml', 'price': '8.99', 'quantity': 11, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hea/h8a/16873019867166/33440_main.jpg_1700Wx1700H?im=Resize=400'},
    { 'id': 39, 'name': 'Tropical Heat Snacks Salted Crisps 50G', 'category': 'Snacks', 'weight': '50G', 'price': '1.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/he8/hf6/28550183551006/32275_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 40, 'name': 'Tropical Heat Snacks Waves Crisps Salted 30G', 'category': 'Snacks', 'weight': '30G', 'price': '2.99', 'quantity':3, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h7e/h2c/45843168657438/1700Wx1700H_32296_Main.jpg?im=Resize=400' },
    { 'id': 41, 'name': 'Norda Urban Stix BBQ Crunchy Corn Snacks 40g', 'category': 'Snacks', 'weight': '40g', 'price': '3.99', 'quantity': 4, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h18/h62/12463226093598/47651_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 42, 'name': 'Wow Sugared Snacks 250g', 'category': 'Snacks', 'weight': '250g', 'price': '4.99', 'quantity': 6, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hd3/h34/12462296432670/27607_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 43, 'name': 'Tropical Heat Snacks Cheese & Onion Crisps 200G', 'category': 'Snacks', 'weight': '200G', 'price': '5.99', 'quantity': 21, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hb0/h34/28550185025566/32281_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 44, 'name': 'Tropical Heat Snacks Chilli Lemon Crisps 400G', 'category': 'Snacks', 'weight': '400G', 'price': '6.99', 'quantity': 8, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h8a/he9/28550188433438/32290_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 45, 'name': 'Wow Sugared Snacks 100g', 'category': 'Snacks', 'weight': '100g', 'price': '7.99', 'quantity': 16, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hd6/h34/12462295449630/27606_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 46, 'name': 'Bitez Crunchy Corn Barbeque Sauce Snack 30g', 'category': 'Snacks', 'weight': '30g', 'price': '8.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h1e/h83/16872247984158/82805_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 47, 'name': 'Kripsii Snack Salted 100G', 'category': 'Snacks', 'weight': '100G', 'price': '9.99', 'quantity': 19, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h70/h80/33471201574942/34732_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 48, 'name': 'Haldirams Indian Snacks Ratlami Sev 150g', 'category': 'Snacks', 'weight': '150g', 'price': '10.99', 'quantity': 3, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h7c/hbe/27846372622366/2041_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 49, 'name': 'Haldirams Indian Snacks Soya Sticks 150g', 'category': 'Snacks', 'weight': '150g', 'price': '11.99', 'quantity': 22, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h9a/hbb/27846364430366/2046_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 50, 'name': 'Haldirams Snacks Khatta Meetha 200G', 'category': 'Snacks', 'weight': '200G', 'price': '12.99', 'quantity': 11, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/he2/h6a/26760646852638/2033_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 51, 'name': 'HALDIRAMS SNACKS ALOO BHUJIA 350G', 'category': 'Snacks', 'weight': '350G', 'price': '13.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h88/h7a/26760652423198/2057_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 52, 'name': 'Wots Bharti Ben Kenyan Indian Mix Bhusu Chevda 350g', 'category': 'Snacks', 'weight': '350g', 'price': '14.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h91/haf/44987225505822/1700Wx1700H_166706_main.jpg?im=Resize=400' },
    { 'id': 53, 'name': 'Krackles Tangy Tomato Potato Chips 30g', 'category': 'Snacks', 'weight': '30g', 'price': '15.99', 'quantity': 3, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h44/he3/17385156476958/34680_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 54, 'name': 'Krackles Tingly Cheese And Onion Potato Chips 30g', 'category': 'Snacks', 'weight': '30g', 'price': '16.99', 'quantity': 5, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h3c/h13/17385153855518/34682_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 55, 'name': 'Krackles Bang Bang Chilli Potato Chips 30g', 'category': 'Snacks', 'weight': '30g', 'price': '17.99', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hf1/h91/17385152217118/34679_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 56, 'name': 'Urban Bites Peri-Peri Potato Chips 120g', 'category': 'Snacks', 'weight': '120g', 'price': '18.99', 'quantity': 15, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h64/h6f/32227152363550/177850_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 57, 'name': 'Peach', 'category': 'FruitsVeg', 'price': '2.29', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/8699980679c95a8f44d29647c72a427c3c2b6e183a4a8150741fc10bddecf56d?w=1024&h=1024&pmaid=30502516' },
    { 'id': 58, 'name': 'Cauliflower', 'category': 'FruitsVeg', 'price': '1.79', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/15ccdcc92cee278bad68e201732b32cbecd1c08c346af4a381bf46de769b1960?w=1024&h=1024&pmaid=30505213' },
    { 'id': 59, 'name': 'Kiwi', 'category': 'FruitsVeg', 'price': '3.49', 'weight': '100g', 'quantity': 10, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/567c22abb39148ede01ba5808224f4a3c316fd983dbf00ce67a1c3a4c122f0cc?w=1024&h=1024&pmaid=30505672' },
    { 'id': 60, 'name': 'Spinach', 'category': 'FruitsVeg', 'price': '2.99', 'weight': '100g', 'quantity': 2, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/0066f708a87c02eaea69ecc5716e1a5ea36d6bc94c5b3b9bd77fd06bf7fa39f6?w=1024&h=1024&pmaid=30506002' },
    { 'id': 61, 'name': 'Cherry', 'category': 'FruitsVeg', 'price': '4.99', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/1ee29bb07aab16b99b08c6dc046475cd11b40501c54c9f096080e71f462d10f4?w=1024&h=1024&pmaid=30506240' },
    { 'id': 62, 'name': 'Artichoke', 'category': 'FruitsVeg', 'price': '2.49', 'weight': '100g', 'quantity': 8, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/ad46b2eb2b23d3e72c4f2beb3d93b693fae00884a7e9d7268d93bc914f8b9973?w=1024&h=1024&pmaid=30506456' },
    { 'id': 63, 'name': 'Plum', 'category': 'FruitsVeg', 'price': '1.99', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/1a8c92bd85c899af98e8370385bb9345780737c05c435a3c17ed42229dc6ee2a?w=1024&h=1024&pmaid=30506702' },
    { 'id': 64, 'name': 'Beetroot', 'category': 'FruitsVeg', 'price': '1.99', 'weight': '100g', 'quantity': 5, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/0fe6d79b5d1f944bc01d58d41cbbf4272ef96173ce5513381e0d99fb772f4c21?w=1024&h=1024&pmaid=30509361' },
    { 'id': 65, 'name': 'Raspberry', 'category': 'FruitsVeg', 'price': '3.99', 'weight': '95', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/56544c7a4927c397b87a5c529853f45eb30122650ffcad1887c7e2664c88929d?w=1024&h=1024&pmaid=30509575' },
    { 'id': 66, 'name': 'Eggplant', 'category': 'FruitsVeg', 'price': '3.29', 'weight': '100g', 'quantity': 4, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/036072d1a326d739f072e1d7efe17ba2561115b9bc4ced969fcbf486883219fb?w=1024&h=1024&pmaid=30509952' },
    { 'id': 67, 'name': 'Blackberry', 'category': 'FruitsVeg', 'price': '4.49', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/4eadc3eb277e85e63e36db65d8ef15d1ddb584f3e85a12f74902a24d0cc402cb?w=1024&h=1024&pmaid=30510023' },
    { 'id': 68, 'name': 'Radish', 'category': 'FruitsVeg', 'price': '2.19', 'weight': '95', 'quantity': 1, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/b3bf73a86e4ef50dcf88bfdb636917c3391c6e9887b60731e9b366d4d2327dcd?w=1024&h=1024&pmaid=30510120' },
    { 'id': 69, 'name': 'Apricot', 'category': 'FruitsVeg', 'price': '3.79', 'weight': '100g', 'quantity': 12, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/8ddc3b130fd27e0510f7516bf8454a2bc1ba7b9c2b4419deca6801a19e38b343?w=1024&h=1024&pmaid=30511175' },
    { 'id': 70, 'name': 'Cabbage (Red)', 'category': 'FruitsVeg', 'price': '2.59', 'weight': '100g', 'quantity': 10, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/60c514ec96cdf317b3febd70b02e1807b38cf428e068299a24a6d9eddd7e1879?w=1024&h=1024&pmaid=30511641' },
    { 'id': 71, 'name': 'Mango (Green)', 'category': 'FruitsVeg', 'price': '4.99', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/5c0f34d00b734c45b61c45565c64c243c00d3c787cba334ac86fd1c08d9f3fd3?w=1024&h=1024&pmaid=30512748' },
    { 'id': 72, 'name': 'Pomegranate', 'category': 'FruitsVeg', 'price': '3.49', 'weight': '100g', 'quantity': 8, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/3fcd00d6213edfc8758dbd31a401ebd684d97ea79963d0a47686f9ed8d532cca?w=1024&h=1024&pmaid=30516467' },
    { 'id': 73, 'name': 'Cranberry', 'category': 'FruitsVeg', 'price': '2.99', 'weight': '110', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/d1906b3e902379840672b7fe9c2970829c65142bfbb47ac1336b0e791511e6ca?w=1024&h=1024&pmaid=30513598' },
    { 'id': 74, 'name': 'Leek', 'category': 'FruitsVeg', 'price': '2.29', 'weight': '100g', 'quantity': 5, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/29397ec118a2a58667a84c5638627d7baab1348fa3523fdd71c8c3073c24aa82?w=1024&h=1024&pmaid=30513671' },
    { 'id': 75, 'name': 'Pear (Asian)', 'category': 'FruitsVeg', 'price': '3.49', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/35ec144973c4aafc23dcf879999568eff46e5aee9751ed3d360e5eb0e3424e32?w=1024&h=1024&pmaid=30515119' },
    { 'id': 76, 'name': 'Squash (Yellow)', 'category': 'FruitsVeg', 'price': '2.79', 'weight': '100g', 'quantity': 4, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/e0be879bfdf01cbdcbc592c99144cd01edf916463013d8217ef0f12f2ddce6ae?w=1024&h=1024&pmaid=30515540' },
    { 'id': 77, 'name': 'Brussels Sprouts', 'category': 'FruitsVeg', 'price': '2.49', 'weight': '110', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/a73dcc911b06173d1729b7a5cf6f4af307fa9ae414646a7f830b2e9a6c1fcaf8?w=1024&h=1024&pmaid=30517695' },
    { 'id': 78, 'name': 'Papaya', 'category': 'FruitsVeg', 'price': '3.99', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/63292a94cdc5881bedd995d62cfa1a82e1233938eb49457081f701c997c9a838?w=1024&h=1024&pmaid=30517400' },
    { 'id': 79, 'name': 'Celery', 'category': 'FruitsVeg', 'price': '1.99', 'weight': '100g', 'quantity': 13, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/2ce1539b2102bfa5c4c24f3aa3137b5a1078f2540d30fc449cd7a87ab74d88bd?w=1024&h=1024&pmaid=30517938' },
    { 'id': 80, 'name': 'Grapefruit', 'category': 'FruitsVeg', 'price': '2.79', 'weight': '90', 'quantity': 10, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/3363ae999eb870905587b9de296e254b6256a5a1f1f3d70d5a2add0cd76030cd?w=1024&h=1024&pmaid=30520188' },
    { 'id': 81, 'name': 'Radish (Black)', 'category': 'FruitsVeg', 'price': '2.19', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/dd4057e011d2fc0732051bd3873096dba99a135beb2a2f765bae0a39a1ea1fb6?w=1024&h=1024&pmaid=30518824' },
    { 'id': 82, 'name': 'Cantaloupe', 'category': 'FruitsVeg', 'price': '4.49', 'weight': '100g', 'quantity': 2, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/423b74fddc1f47cdfd6963513dc93206d16be921736daf7b91b2c5f0d182b9be?w=1024&h=1024&pmaid=30519944' },
    { 'id': 83, 'name': 'Passion Fruit', 'category': 'FruitsVeg', 'price': '4.99', 'weight': '90', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/dc03eeecab3641895fcb7b55a3403e04c468ab9d48e57593bd7372286041f37f?w=1024&h=1024&pmaid=30520873' },
    { 'id': 84, 'name': 'Turnip', 'category': 'FruitsVeg', 'price': '2.29', 'weight': '100g', 'quantity': 4, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/829f19c982f539d2aadcfd80bf7810d5446786ad6e1ee72316ed11e9f3a351ba?w=1024&h=1024&pmaid=30573435' },
    { 'id': 85, 'name': 'Clementine', 'category': 'FruitsVeg', 'price': '3.49', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/829f19c982f539d2aadcfd80bf7810d5446786ad6e1ee72316ed11e9f3a351ba?w=1024&h=1024&pmaid=30573435' },
    { 'id': 86, 'name': 'Fennel', 'category': 'FruitsVeg', 'price': '2.79', 'weight': '90', 'quantity': 10, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/0a68de63be6854c4900a796520f18bf73a6a78f249aeaa0bec80f74f237b6cf6?w=1024&h=1024&pmaid=30573876' },
    { 'id': 87, 'name': 'Guava', 'category': 'FruitsVeg', 'price': '3.79', 'weight': '100g', 'quantity': 3, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/f45d05ef67afad6cacc18bc85e02f799bad96e6fda004c923e0d86bbcef8d29f?w=1024&h=1024&pmaid=30574230' },
    { 'id': 88, 'name': 'Rutabaga', 'category': 'FruitsVeg', 'price': '2.59', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/36c1587b16e82b559fb76512faa46669f9ded0c205dc6069ec79af204a361fa6?w=1024&h=1024&pmaid=30574458' },
    { 'id': 89, 'name': 'Dragon Fruit', 'category': 'FruitsVeg', 'price': '5.99', 'weight': '100g', 'quantity': 2, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/c98b548b57e1af6b044c43826ae33d16a05a453832bea3bfc28ec841582098a8?w=1024&h=1024&pmaid=30574715' },
    { 'id': 90, 'name': 'Nectarine', 'category': 'FruitsVeg', 'price': '2.79', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/2424498dd52176e45f2184f04c7cb30c211798a769ccd916c4ec416cf14f1583?w=1024&h=1024&pmaid=30579174' },
    { 'id': 91, 'name': 'Cabbage (Savoy)', 'category': 'FruitsVeg', 'price': '3.29', 'weight': '90', 'quantity': 5, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/dedca722353e24c456674ded838ea799173fdaba71870c8b128242adbf463f6a?w=1024&h=1024&pmaid=30579313' },
    { 'id': 92, 'name': 'Mandarin Orange', 'category': 'FruitsVeg', 'price': '2.59', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/1340c293eb5e7f7a36d369fc37368b071818687545941dce98617530f0b577dd?w=1024&h=1024&pmaid=30579827' },
    { 'id': 93, 'name': 'Collard Greens', 'category': 'FruitsVeg', 'price': '2.79', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://pfst.cf2.poecdn.net/base/image/d1376a090700ead33189742011ddd11e0b0e17b00fa977fb29def74eb4dfac1e?w=1024&h=1024&pmaid=30580233' },
    { 'id': 94, 'name': 'Tropical Heat Snacks Safari Puffs Tomato 100G', 'category': 'Chips', 'price': '2.29', 'weight': '125g', 'quantity': 8, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h0c/h84/13519277817886/84179_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 95, 'name': 'Tropical Heat Snacks Nyama Choma Crisps 50G', 'category': 'Chips', 'price': '1.29', 'weight': '120g', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hdd/haf/28550121357342/32295_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 96, 'name': 'Tropical Heat Snacks Heroes Crisps Salt Vinegar 110G', 'category': 'Chips', 'price': '2.29', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h19/ha2/28550124961822/165696_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 97, 'name': 'Tropical Heat Snacks Heroes Crisps Fruit Chutney 110G', 'category': 'Chips', 'price': '2.29', 'weight': '95g', 'quantity': 3, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hde/h8f/45843164987422/1700Wx1700H_165695_Main.jpg?im=Resize=400' },
    { 'id': 98, 'name': 'Tropical Heat Snacks Safari Puffs Cheese 100G', 'category': 'Chips', 'price': '2.29', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h57/h2c/26951473922078/84176_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 99, 'name': 'Tropical Heat Snacks Heroes Crisps Salted 40G', 'category': 'Chips', 'price': '1.29', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h1a/h3a/45843167739934/1700Wx1700H_155164_Main.jpg?im=Resize=400' },
    { 'id': 100, 'name': 'Java House Chocolate Chip Cookies 300g', 'category': 'Chips', 'price': '3.29', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h24/h50/29146580353054/175305_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 101, 'name': 'Maryland Chocolate Chips Coconut Cookies 136g', 'category': 'Chips', 'price': '2.29', 'weight': '70g', 'quantity': 4, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h03/h76/27845316018206/110445_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 102, 'name': 'Maryland Double Chocolate Cookies 136g', 'category': 'Chips', 'price': '2.29', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h36/hba/12460919652382/110448_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 103, 'name': 'FAYAZ CHOC CHIP COOKIES 200G', 'category': 'Chips', 'price': '2.99', 'weight': '150g', 'quantity': 11, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h3f/h1d/26759823884318/139417_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 104, 'name': 'JAVA CINNAMON COOKIES 300GR', 'category': 'Chips', 'price': '3.49', 'weight': '130g', 'quantity': 2, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h94/h31/26759983071262/144606_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 105, 'name': 'Tiffany Delights Chocolate Chips Cookies 90g', 'category': 'Chips', 'price': '1.99', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hd2/h7d/49128774369310/1700Wx1700H_140513_main.jpg?im=Resize=400' },
    { 'id': 106, 'name': 'Chips Ahoy Original Chocolate Chips Cookies 85.5g', 'category': 'Chips', 'price': '1.79', 'weight': '100g', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h63/h7a/31146748182558/177856_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 107, 'name': 'Merba Cranberry Cookies 150G', 'category': 'Chips', 'price': '2.49', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hed/h2f/33387918196766/181853_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 108, 'name': 'Oreo Dark And White Chocolate Sandwich Cookies 123.5g', 'category': 'Chips', 'price': '1.99', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hbc/hdc/30982213107742/166829_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 109, 'name': 'Diablo No Added Sugar Hazelnut Cookies 135g', 'category': 'Chips', 'price': '3.99', 'weight': '50g', 'quantity': 6, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h92/h7b/49664933494814/1700Wx1700H_197427_main.jpg?im=Resize=400' },
    { 'id': 110, 'name': 'Merba Patisserie Edition Dark Chocolate And Hazelnut Cookies 200g', 'category': 'Chips', 'price': '4.49', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h19/h70/34018156314654/181860_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 111, 'name': 'CUETARA MINICHOC CHIP COOKIES 120G', 'category': 'Chips', 'price': '1.99', 'weight': '100g', 'quantity': 7, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h39/hea/45568598507550/1700Wx1700H_187118_main.jpg?im=Resize=400' },
    { 'id': 112, 'name': 'Diablo Sugar Free Coated Cream Cookies 128g', 'category': 'Chips', 'price': '3.99', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hf1/h88/49664938377246/1700Wx1700H_197430_main.jpg?im=Resize=400' },
    { 'id': 113, 'name': 'Merba Patisserie Edition White Chocolate And Cranberry Cookies 200g', 'category': 'Chips', 'price': '4.49', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/ha4/h6d/34018154020894/181859_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 114, 'name': 'Merba P.E Apple Pie Cookies 225G', 'category': 'Chips', 'price': '4.99', 'weight': '50g', 'quantity': 11, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h3e/hf3/33387916623902/181861_1.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 115, 'name': 'Achva Chocolate Chip Cookies 400g', 'category': 'Chips', 'price': '5.99', 'weight': '100g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h16/h34/48334095319070/1700Wx1700H_193739_main.jpg?im=Resize=400' },
    { 'id': 116, 'name': 'FOX\'S WHITE CHOC COOKIES 180G', 'category': 'Chips', 'price': '2.99', 'weight': '70g', 'quantity': 5, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/hb5/he7/26760236335134/153836_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 117, 'name': 'Java House Macadamia Nut Cookies 300g', 'category': 'Chips', 'price': '4.49', 'weight': '90g', 'quantity': 9, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h1f/hb4/12464087367710/106806_Main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 118, 'name': 'FAYAZ COCONUT COOKIES 200G', 'category': 'Chips', 'price': '2.99', 'weight': '100g', 'quantity': 10, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h67/he0/26759826833438/139426_main.jpg_1700Wx1700H?im=Resize=400' },
    { 'id': 119, 'name': 'Java House Oats And Raisins Cookies 300g', 'category': 'Chips', 'price': '3.99', 'weight': '100g', 'quantity': 3, 'imageurl': 'https://cdnprod.mafretailproxy.com/sys-master-root/h10/h10/49785032441886/1700Wx1700H_200117_main.jpg?im=Resize=400' },
    {'id': 120, 'name': 'Pure Heaven Celebration Drink (Non-Alcoholic)', 'category': 'Juices', 'price': 2.5, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/pure-heaven-celebration-drink-non-alcoholic.webp', 'weight': '165g', 'quantity': 1},
    {'id': 121, 'name': 'Robertson Winery Natural Sweet White', 'category': 'Cold Drinks', 'price': 1.75, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/robertson-winery-sm.webp', 'weight': '118g', 'quantity': 3},
    {'id': 122, 'name': 'Four Cousins White Sweet', 'category': 'Cold Drinks', 'price': 3.2, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/four-cousins-white-sweet-sm.webp', 'weight': '167g', 'quantity': 8},
    {'id': 123, 'name': '4th Street White Sweet', 'category': 'Cold Drinks', 'price': 2.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/4th-street-white-sweet-sm.webp', 'weight': '100g', 'quantity': 2},
    {'id': 124, 'name': 'Saint Anna White Sweet', 'category': 'Cold Drinks', 'price': 2.8, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/saint-anna-white-sweet-sm.webp', 'weight': '197g', 'quantity': 5},
    {'id': 125, 'name': 'Carmela Sparkling Wine', 'category': 'Cold Drinks', 'price': 1.99, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/carmela-sparkling-wine-sm.webp', 'weight': '128g', 'quantity': 7},
    {'id': 126, 'name': 'Drostdy-Hof White Sweet', 'category': 'Cold Drinks', 'price': 3.5, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-white-sweet-sm.webp', 'weight': '179g', 'quantity': 5},
    {'id': 127, 'name': 'Pierre Marcel Sweet White', 'category': 'Cold Drinks', 'price': 2.25, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/pierre-marcel-sweet-white-sm.webp', 'weight': '148g', 'quantity': 1},
    {'id': 128, 'name': 'Fragolino White Duchessa Lia', 'category': 'Cold Drinks', 'price': 3.75, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/fragolino-white-duchessa-sm.webp', 'weight': '188g', 'quantity': 3},
    {'id': 129, 'name': 'Cellar Cask White', 'category': 'Cold Drinks', 'price': 2.6, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/cellar-cask-white-sm.webp', 'weight': '106g', 'quantity': 5},
    {'id': 130, 'name': 'Bianco Nobile White Sweet', 'category': 'Cold Drinks', 'price': 1.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/bianco-nobile-white-sweet-sm.webp', 'weight': '141g', 'quantity': 3},
    {'id': 131, 'name': 'Royalty White Celebration Drink (Non-Alcoholic)', 'category': 'Cold Drinks', 'price': 3.1, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/royalty-celebration-drink-non-alcoholic-sm.webp', 'weight': '107g', 'quantity': 9},
    {'id': 132, 'name': 'Chamdor White (Non-Alcoholic-Wine)', 'category': 'Cold Drinks', 'price': 2.15, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/chamdor-white-non-alcoholic-wine-sm.webp', 'weight': '105g', 'quantity': 2},
    {'id': 133, 'name': 'Asconi Pastoral', 'category': 'Cold Drinks', 'price': 2.75, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/asconi-pastoral-sm.webp', 'weight': '171g', 'quantity': 6},
    {'id': 134, 'name': 'Nederburg Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 1.85, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-cabernet-sauvignon-sm.webp', 'weight': '119g', 'quantity': 8},
    {'id': 135, 'name': 'Drostdy Hof Claret Select Dry Red', 'category': 'Cold Drinks', 'price': 3.3, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-red-dry-sm.webp', 'weight': '192g', 'quantity': 10},
    {'id': 136, 'name': 'Gato Negro Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/gato-negro-cabernet-sauvignon-sm.webp', 'weight': '177g', 'quantity': 2},
    {'id': 137, 'name': 'Asconi Kiss Me Now Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.8, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/asconi-kiss-me-now-sm.webp', 'weight': '166g', 'quantity': 10},
    {'id': 138, 'name': 'Frontera Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.1, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/frontera-caberbet-sauvignon-sm.webp', 'weight': '162g', 'quantity': 5},
    {'id': 139, 'name': 'Trumpeter Malbec', 'category': 'Cold Drinks', 'price': 3.6, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/trumpeter-malbec-sm.webp', 'weight': '144g', 'quantity': 6},
    {'id': 140, 'name': 'Versus Red Dry', 'category': 'Cold Drinks', 'price': 2.25, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/versus-red-dry-sm.webp', 'weight': '196g', 'quantity': 9},
    {'id': 141, 'name': 'Overmeer Red Dry Cask', 'category': 'Cold Drinks', 'price': 2.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/overmeer-red-dry-sm.webp', 'weight': '145g', 'quantity': 9},
    {'id': 142, 'name': 'Frontera Merlot', 'category': 'Cold Drinks', 'price': 1.99, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/frontera-merlot-sm.webp', 'weight': '191g', 'quantity': 2},
    {'id': 143, 'name': 'Tall Horse Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.5, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/tall-horse-cabernet-sauvignon-sm.webp', 'weight': '141g', 'quantity': 2},
    {'id': 144, 'name': 'Casillero Del Diablo Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 3.56, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/casillero-del-diablo-cabernet-sauvignon-sm.webp', 'weight': '180g', 'quantity': 2},
    {'id': 145, 'name': 'Nederburg Merlot', 'category': 'Cold Drinks', 'price': 4.58, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-merlot-sm.webp', 'weight': '105g', 'quantity': 2},
    {'id': 146, 'name': 'Rietvallei Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 5.72, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/rietvallei-cabernet-sauvignon-sm.webp', 'weight': '154g', 'quantity': 8},
    {'id': 147, 'name': 'Nederburg Shiraz', 'category': 'Cold Drinks', 'price': 6.88, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-shiraz-sm.webp', 'weight': '169g', 'quantity': 5},

    ]


    for item in data:
        new_product = Product(**item)
        db.session.add(new_product)
    db.session.commit()


    featured_brands = [
        {"id":1, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_53905d0537125ce219396f7b5fd6cbee8d8b3b96ebe876b8684aa60dba5b9dee.png?w=1024&h=1024", "name":"Fruits and Vegetables"},
        {"id":2, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_0e846d664a9eea41ec98f7eb4b5ee4334e467ea51448b8cfb5f87f6f30b364bb.png?w=1024&h=1024", "name":"Dairy and Breakfast"},
        {"id":3, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_8af7b42cdf6446211e009ffff9e9b03959caa6aee196d0d89892a4426b56707c.png?w=1024&h=1024", "name":"Eggs, Fish and Meat"},
        {"id":4, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_1c33ae4bb7a623264fcdaa43a117aa3990d2df230b6cef33b678ee3df6235140.png?w=1024&h=1024", "name":"Cold drinks and juices"},
        {"id":5, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_817fe54400afc2221413404a4d0f2a814db2fb22a9e2248f8635646d7a36a00c.png?w=1024&h=1024", "name":"Snacks and Munchies"},
        {"id":6, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_141c9d38cfad939358c40282c29cb5963505b0e2235dda90b1dac3d46abe9374.png?w=1024&h=1024", "name":"Icy Delights"},
        {"id":7, "imageurl":"https://qph.cf2.poecdn.net/main-sdxl_f61ae215d734387e13e129753471671a10119f1657c87ea22d79ef9043705d4f.png?w=1024&h=1024", "name":"Bath and Body"}
    ]

    for data in featured_brands:
        new_data = FeaturedBrands(**data)
        db.session.add(new_data)
    db.session.commit()


    top_category = [
          {"id":1, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_53905d0537125ce219396f7b5fd6cbee8d8b3b96ebe876b8684aa60dba5b9dee.png?w=1024&h=1024", "name":"Fruits and Vegetables"},
          {"id":2, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_0e846d664a9eea41ec98f7eb4b5ee4334e467ea51448b8cfb5f87f6f30b364bb.png?w=1024&h=1024","name":"Dairy and Breakfast"},
          {"id":3, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_525ab1c0b664b740ad054e39f576197240915f38abca7394fc5398c1340341d3.png?w=1024&h=1024","name":"Eggs, Fish and Meat"},
          {"id":4, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_1c33ae4bb7a623264fcdaa43a117aa3990d2df230b6cef33b678ee3df6235140.png?w=1024&h=1024","name":"Cold drinks and juices"},
          {"id":5, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_817fe54400afc2221413404a4d0f2a814db2fb22a9e2248f8635646d7a36a00c.png?w=1024&h=1024","name":"Snacks and Munchies"},
          {"id":6, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_141c9d38cfad939358c40282c29cb5963505b0e2235dda90b1dac3d46abe9374.png?w=1024&h=1024","name":"Icy Delights"},
          {"id":7, "imageurl": "https://qph.cf2.poecdn.net/main-sdxl_f61ae215d734387e13e129753471671a10119f1657c87ea22d79ef9043705d4f.png?w=1024&h=1024","name":"Bath and Body"}
    ]

    for tops in top_category:
        new_tops = TopCategory(**tops)
        db.session.add(new_tops)
    db.session.commit()

    