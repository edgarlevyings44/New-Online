from faker import Faker
import random

fake = Faker()


data = [
    { 'id': 120, 'name': 'Pure Heaven Celebration Drink (Non-Alcoholic)', 'category': 'Juices', 'price': 2.50, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/pure-heaven-celebration-drink-non-alcoholic.webp' },
    { 'id': 121, 'name': 'Robertson Winery Natural Sweet White', 'category': 'Cold Drinks', 'price': 1.75, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/robertson-winery-sm.webp' },
    { 'id': 122, 'name': 'Four Cousins White Sweet', 'category': 'Cold Drinks', 'price': 3.20, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/four-cousins-white-sweet-sm.webp' },
    { 'id': 123, 'name': '4th Street White Sweet', 'category': 'Cold Drinks', 'price': 2.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/4th-street-white-sweet-sm.webp' },
    { 'id': 124, 'name': 'Saint Anna White Sweet', 'category': 'Cold Drinks', 'price': 2.80, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/saint-anna-white-sweet-sm.webp' },
    { 'id': 125, 'name': 'Carmela Sparkling Wine', 'category': 'Cold Drinks', 'price': 1.99, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/carmela-sparkling-wine-sm.webp' },
    { 'id': 126, 'name': 'Drostdy-Hof White Sweet', 'category': 'Cold Drinks', 'price': 3.50, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-white-sweet-sm.webp' },
    { 'id': 127, 'name': 'Pierre Marcel Sweet White', 'category': 'Cold Drinks', 'price': 2.25, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/pierre-marcel-sweet-white-sm.webp' },
    { 'id': 128, 'name': 'Fragolino White Duchessa Lia', 'category': 'Cold Drinks', 'price': 3.75, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/fragolino-white-duchessa-sm.webp' },
    { 'id': 129, 'name': 'Cellar Cask White', 'category': 'Cold Drinks', 'price': 2.60, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/cellar-cask-white-sm.webp' },
    { 'id': 130, 'name': 'Bianco Nobile White Sweet', 'category': 'Cold Drinks', 'price': 1.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/bianco-nobile-white-sweet-sm.webp' },
    { 'id': 131, 'name': 'Royalty White Celebration Drink (Non-Alcoholic)', 'category': 'Cold Drinks', 'price': 3.10, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/royalty-celebration-drink-non-alcoholic-sm.webp' },
    { 'id': 132, 'name': 'Chamdor White (Non-Alcoholic-Wine)', 'category': 'Cold Drinks', 'price': 2.15, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/chamdor-white-non-alcoholic-wine-sm.webp' },
    { 'id': 133, 'name': 'Asconi Pastoral', 'category': 'Cold Drinks', 'price': 2.75, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/asconi-pastoral-sm.webp' },
    { 'id': 134, 'name': 'Nederburg Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 1.85, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-cabernet-sauvignon-sm.webp' },
    { 'id': 135, 'name': 'Drostdy Hof Claret Select Dry Red', 'category': 'Cold Drinks', 'price': 3.30, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/drostdy-hof-red-dry-sm.webp' },
    { 'id': 136, 'name': 'Gato Negro Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/gato-negro-cabernet-sauvignon-sm.webp' },
    { 'id': 137, 'name': 'Asconi Kiss Me Now Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.80, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/asconi-kiss-me-now-sm.webp' },
    { 'id': 138, 'name': 'Frontera Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.10, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/frontera-caberbet-sauvignon-sm.webp' },
    { 'id': 139, 'name': 'Trumpeter Malbec', 'category': 'Cold Drinks', 'price': 3.60, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/trumpeter-malbec-sm.webp' },
    { 'id': 140, 'name': 'Versus Red Dry', 'category': 'Cold Drinks', 'price': 2.25, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/versus-red-dry-sm.webp' },
    { 'id': 141, 'name': 'Overmeer Red Dry Cask', 'category': 'Cold Drinks', 'price': 2.95, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/overmeer-red-dry-sm.webp' },
    { 'id': 142, 'name': 'Frontera Merlot', 'category': 'Cold Drinks', 'price': 1.99, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/frontera-merlot-sm.webp' },
    { 'id': 143, 'name': 'Tall Horse Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 2.50, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/tall-horse-cabernet-sauvignon-sm.webp' },
    { 'id': 144, 'name': 'Casillero Del Diablo Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 3.56, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/casillero-del-diablo-cabernet-sauvignon-sm.webp' },
    { 'id': 145, 'name': 'Nederburg Merlot', 'category': 'Cold Drinks', 'price': 4.58, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-merlot-sm.webp' },
    { 'id': 146, 'name': 'Rietvallei Cabernet Sauvignon', 'category': 'Cold Drinks', 'price': 5.72, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/rietvallei-cabernet-sauvignon-sm.webp' },
    { 'id': 147, 'name': 'Nederburg Shiraz', 'category': 'Cold Drinks', 'price': 6.88, 'imageurl': 'https://storage.googleapis.com/drinksvine/products/sm/nederburg-shiraz-sm.webp' },

]

for item in data:
    item['weight'] = f"{fake.random_int(100, 200)}g"
    item['quantity'] = fake.random_int(1,10)

for item in data:
    print(f"{item},")


