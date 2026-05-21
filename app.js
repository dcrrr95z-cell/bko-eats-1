const restaurants = [
  {
    id: "burger-and-co-bamako",
    name: "Burger & Co Bamako",
    category: "Burger",
    rating: 4.2,
    reviewCount: 0,
    time: "25-35 min",
    address: "Hamdallaye ACI 2000, Bamako, Mali",
    location: { lat: 12.6306, lng: -8.0272 },
    phone: "+223 82 63 63 63",
    hours: [
      ["Lundi", "10:30 - 00:00"],
      ["Mardi", "10:30 - 00:00"],
      ["Mercredi", "10:30 - 00:00"],
      ["Jeudi", "10:30 - 00:00"],
      ["Vendredi", "10:30 - 01:00"],
      ["Samedi", "10:30 - 01:00"],
      ["Dimanche", "10:30 - 01:00"],
    ],
    website: "https://burgerandcomali.com/",
    description: "Fast-food specialise dans les burgers, wings et sandwiches a Bamako.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    reviews: [
      "Restaurant fast-food specialise dans le burger, wings et sandwiches.",
      "Adresse publique: Hamdallaye ACI 2000, Bamako.",
      "Numero public: +223 82 63 63 63.",
    ],
    brooklynMenu: [
      { id: "brooklyn-double-cheese", section: "Burgers", name: "Double Cheese", description: "Burger double cheese", price: 4000 },
      { id: "brooklyn-cheese-burger", section: "Burgers", name: "Cheese Burger", description: "Burger cheese", price: 3000 },
      { id: "brooklyn-big-tasty", section: "Burgers", name: "Big Tasty", description: "Burger Big Tasty", price: 5000 },
      { id: "brooklyn-bbq-western", section: "Burgers", name: "BBQ Western", description: "Burger BBQ Western", price: 5000 },
      { id: "brooklyn-bbq-western-chicken", section: "Burgers", name: "BBQ Western Chicken", description: "Burger BBQ Western au poulet", price: 5000 },
      { id: "brooklyn-big-broski", section: "Burgers", name: "Big Broski", description: "Burger Big Broski", price: 4500 },
      { id: "brooklyn-supreme-mythic", section: "Burgers", name: "Brooklyn Supreme Mythic", description: "Burger premium Brooklyn", price: 6500 },
      { id: "brooklyn-mythic", section: "Burgers", name: "Brooklyn Mythic", description: "Burger Brooklyn Mythic", price: 6000 },
      { id: "brooklyn-american-dream", section: "Burgers", name: "American Dream", description: "Burger American Dream", price: 6500 },
      { id: "brooklyn-fish-burger", section: "Burgers", name: "Fish Burger", description: "Burger poisson", price: 3000 },
      { id: "brooklyn-menu-burger", section: "Supplements", name: "Menu burger", description: "Ajout menu avec frites et boisson", price: 1000 },
      { id: "brooklyn-american-buffalo", section: "Sandwichs & Wraps", name: "L'American Buffalo", description: "Pain normal ou tortilla", price: 5000 },
      { id: "brooklyn-indien", section: "Sandwichs & Wraps", name: "L'Indien", description: "Pain normal ou tortilla", price: 4000 },
      { id: "brooklyn-bombino-wrap", section: "Sandwichs & Wraps", name: "Bombino Wrap", description: "Wrap Bombino", price: 4000 },
      { id: "brooklyn-wonder-wrap", section: "Sandwichs & Wraps", name: "Wonder Wrap", description: "Wrap Wonder", price: 3500 },
      { id: "brooklyn-chicken-boursin", section: "Sandwichs & Wraps", name: "Chicken Boursin", description: "Sandwich chicken boursin", price: 4000 },
      { id: "brooklyn-brazier-wrap", section: "Sandwichs & Wraps", name: "Brazier Wrap", description: "Wrap Brazier", price: 5000 },
      { id: "brooklyn-mexicano-wrap", section: "Sandwichs & Wraps", name: "Mexicano Wrap", description: "Wrap Mexicano", price: 5000 },
      { id: "brooklyn-kebab", section: "Sandwichs & Wraps", name: "Kebab", description: "Pain normal ou tortilla", price: 6000 },
      { id: "brooklyn-menu-sandwich", section: "Supplements", name: "Menu sandwich / wrap", description: "Ajout menu avec frites et boisson", price: 1000 },
      { id: "brooklyn-hummer-3x2", section: "Hummers", name: "Hummer 3x2", description: "3 steaks, 2 bacon, cheddar", price: 7000 },
      { id: "brooklyn-hummer-3x1", section: "Hummers", name: "Hummer 3x1", description: "3 steaks", price: 5000 },
      { id: "brooklyn-hummer-2x1", section: "Hummers", name: "Hummer 2x1", description: "2 steaks", price: 4500 },
      { id: "brooklyn-menu-kids", section: "Kids", name: "Menu Kids", description: "2 tenders ou cheeseburger, petite frite, boisson et surprise", price: 4000 },
      { id: "brooklyn-stick-mozza-8", section: "Sides", name: "Stick Mozza 8 pieces", description: "Batonnets de mozzarella panes", price: 3000 },
      { id: "brooklyn-stick-mozza-12", section: "Sides", name: "Stick Mozza 12 pieces", description: "Batonnets de mozzarella panes", price: 5000 },
      { id: "brooklyn-south-chicken", section: "Sides", name: "South Chicken", description: "Chili, cheese, fries", price: 5000 },
      { id: "brooklyn-frites-ou-potatoes", section: "Frites & Papatoes", name: "Frites ou Potatoes", description: "Portion de frites ou potatoes", price: 1000 },
      { id: "brooklyn-frites-cheddar", section: "Frites & Papatoes", name: "Frites Cheddar", description: "Frites avec cheddar", price: 2500 },
      { id: "brooklyn-frites-cheddar-bacon", section: "Frites & Papatoes", name: "Frites Cheddar + Bacon", description: "Frites avec cheddar et bacon", price: 3500 },
      { id: "brooklyn-supplement-cheddar", section: "Supplements", name: "Supplement cheddar", description: "Cheddar en supplement", price: 1500 },
      { id: "brooklyn-supplement-bacon", section: "Supplements", name: "Supplement bacon", description: "Bacon en supplement", price: 2000 },
      { id: "brooklyn-crazy-box", section: "Box", name: "Crazy Box", description: "Double cheese junior, wings crispy, frites, boisson 33cl", price: 7000 },
      { id: "brooklyn-nuggets-6", section: "Chicken", name: "Chicken Nuggets 6 pieces", description: "Nuggets de poulet", price: 4000 },
      { id: "brooklyn-nuggets-12", section: "Chicken", name: "Chicken Nuggets 12 pieces", description: "Nuggets de poulet", price: 7000 },
      { id: "brooklyn-tenders-3", section: "Chicken", name: "Chicken Tenders 3 pieces", description: "Tenders de poulet", price: 3300 },
      { id: "brooklyn-tenders-5", section: "Chicken", name: "Chicken Tenders 5 pieces", description: "Tenders de poulet", price: 5000 },
      { id: "brooklyn-wings-4", section: "Chicken", name: "Chicken Wings 4 pieces", description: "Wings de poulet", price: 4000 },
      { id: "brooklyn-wings-6", section: "Chicken", name: "Chicken Wings 6 pieces", description: "Wings de poulet", price: 6000 },
      { id: "brooklyn-pieces-4", section: "Chicken", name: "Chicken Pieces 4 pieces", description: "Pieces de poulet", price: 4000 },
      { id: "brooklyn-pieces-6", section: "Chicken", name: "Chicken Pieces 6 pieces", description: "Pieces de poulet", price: 6000 },
      { id: "brooklyn-menu-chicken", section: "Supplements", name: "Menu chicken", description: "Ajout menu avec frites et boisson", price: 1000 },
      { id: "brooklyn-chicken-family", section: "Chicken Family", name: "Chicken Family", description: "Wings, pieces, frites et bouteille", price: 22000 },
      { id: "brooklyn-tacos-solo", section: "Tacos", name: "Solo 1 viande", description: "Viandes: merguez, chipolata, nuggets, steak hache, chicken", price: 6000 },
      { id: "brooklyn-tacos-mix", section: "Tacos", name: "Mix 2 viandes", description: "Tacos avec 2 viandes", price: 7500 },
      { id: "brooklyn-supplement-tacos", section: "Tacos", name: "Supplement tacos", description: "Bacon, cheddar, boursin, kiri ou oeuf", price: 1000 },
      { id: "brooklyn-torsade-daim", section: "Desserts", name: "Torsade Daim", description: "Dessert Daim", price: 3000 },
      { id: "brooklyn-tiramisu", section: "Desserts", name: "Tiramisu", description: "Oreo, Kinder, caramel, Speculoos, black & white, eclats caramel", price: 2500 },
      { id: "brooklyn-boisson", section: "Boissons", name: "Boisson", description: "Soda", price: 1000 },
      { id: "brooklyn-expresso", section: "Boissons Chaudes", name: "Expresso", description: "Cafe expresso", price: 1000 },
      { id: "brooklyn-cafe-allonge", section: "Boissons Chaudes", name: "Cafe allonge", description: "Cafe allonge", price: 2000 },
      { id: "brooklyn-cafe-noisette", section: "Boissons Chaudes", name: "Cafe noisette", description: "Cafe noisette", price: 1500 },
      { id: "brooklyn-infusion", section: "Boissons Chaudes", name: "Infusion", description: "Infusion chaude", price: 1000 },
    ],
    menu: [
      { id: "maestro-combo", section: "Chicken Tenders", name: "Maestro Combo", description: "Tenders, sauce, frites et boisson", price: 7000 },
      { id: "friends-combo", section: "Chicken Tenders", name: "Friends Combo", description: "Combo a partager avec tenders, frites et sauces", price: 15000 },
      { id: "hamburger-bco", section: "Fun Burgers", name: "Hamburger", description: "Burger simple", price: 2500 },
      { id: "cheese-burger-bco", section: "Fun Burgers", name: "Cheese Burger", description: "Burger avec fromage", price: 3000 },
      { id: "chicken-burger-bco", section: "Fun Burgers", name: "Chicken Burger", description: "Burger au poulet", price: 3000 },
      { id: "double-cheese-burger-bco", section: "Fun Burgers", name: "Double Cheese Burger", description: "Double steak, fromage", price: 4000 },
      { id: "double-chicken-burger-bco", section: "Fun Burgers", name: "Double Chicken Burger", description: "Double poulet", price: 4000 },
      { id: "salade-poulet-bco", section: "Salads", name: "Salade Poulet", description: "Salade avec poulet", price: 2500 },
      { id: "salade-quinoa-chicken-bco", section: "Salads", name: "Salade Quinoa Chicken", description: "Quinoa, poulet et salade", price: 3000 },
      { id: "menu-extra-bco", section: "Options", name: "Menu", description: "Ajout menu", price: 1500 },
      { id: "bacon-halal-bco", section: "Options", name: "Bacon Halal", description: "Supplement bacon halal", price: 1000 },
      { id: "classic-cheese-bco", section: "Classic Burgers", name: "Classic Cheese", description: "Steak, fromage, salade, tomate, cornichons et sauce", price: 5000 },
      { id: "diner-mite-bco", section: "Classic Burgers", name: "Diner-Mite", description: "Burger signature Burger & Co", price: 6000 },
      { id: "oklahoma-bco", section: "Classic Burgers", name: "Oklahoma", description: "Burger Oklahoma avec oignons grilles", price: 5500 },
      { id: "mushroom-swiss-bco", section: "Classic Burgers", name: "Mushroom & Swiss", description: "Champignons, fromage suisse et sauce", price: 6000 },
      { id: "chicken-filet-bco", section: "Classic Burgers", name: "Chicken Filet", description: "Filet de poulet, salade et sauce", price: 5000 },
      { id: "say-cheese-bco", section: "Classic Burgers", name: "Say Cheese", description: "Burger fromage", price: 4000 },
      { id: "chicken-wizard-bco", section: "Classic Burgers", name: "Chicken Wizard", description: "Poulet crispy et sauce maison", price: 5000 },
      { id: "mighty-chicken-bco", section: "Classic Burgers", name: "Mighty Chicken", description: "Burger poulet genereux", price: 6000 },
      { id: "smashed-authentic-burger-bco", section: "Classic Burgers", name: "Smashed Authentic Burger", description: "Smashed burger authentique", price: 6000 },
      { id: "chicken-deluxe-burger-bco", section: "Classic Burgers", name: "Chicken Deluxe Burger", description: "Chicken burger deluxe", price: 5000 },
      { id: "fish-burger-bco", section: "Classic Burgers", name: "Fish Burger", description: "Burger poisson", price: 5500 },
      { id: "falafel-burger-bco", section: "Classic Burgers", name: "Falafel Burger", description: "Burger falafel", price: 4000 },
      { id: "kids-chicken-nuggets-bco", section: "Kids Meals", name: "Chicken Nuggets", description: "Menu enfant nuggets", price: 5000 },
      { id: "kids-hamburger-bco", section: "Kids Meals", name: "Hamburger", description: "Menu enfant hamburger", price: 5000 },
      { id: "kids-chicken-burger-bco", section: "Kids Meals", name: "Chicken Burger", description: "Menu enfant chicken burger", price: 5000 },
      { id: "french-fries-small-bco", section: "Side Items", name: "French Fries - Petit", description: "Frites", price: 1500 },
      { id: "french-fries-medium-bco", section: "Side Items", name: "French Fries - Moyen", description: "Frites", price: 2500 },
      { id: "french-fries-large-bco", section: "Side Items", name: "French Fries - Grand", description: "Frites", price: 4000 },
      { id: "potato-wedges-small-bco", section: "Side Items", name: "Potato Wedges - Petit", description: "Potato wedges", price: 2000 },
      { id: "potato-wedges-medium-bco", section: "Side Items", name: "Potato Wedges - Moyen", description: "Potato wedges", price: 3000 },
      { id: "potato-wedges-large-bco", section: "Side Items", name: "Potato Wedges - Grand", description: "Potato wedges", price: 4500 },
      { id: "animal-fries-small-bco", section: "Side Items", name: "Animal Fries - Petit", description: "Frites garnies", price: 4000 },
      { id: "animal-fries-medium-bco", section: "Side Items", name: "Animal Fries - Moyen", description: "Frites garnies", price: 6500 },
      { id: "animal-fries-large-bco", section: "Side Items", name: "Animal Fries - Grand", description: "Frites garnies", price: 10000 },
      { id: "messy-chicken-small-bco", section: "Side Items", name: "Messy Chicken - Petit", description: "Poulet garni", price: 4500 },
      { id: "messy-chicken-medium-bco", section: "Side Items", name: "Messy Chicken - Moyen", description: "Poulet garni", price: 7500 },
      { id: "messy-chicken-large-bco", section: "Side Items", name: "Messy Chicken - Grand", description: "Poulet garni", price: 11000 },
      { id: "classic-wings-bco", section: "Chicken Wings", name: "Classic Wings", description: "Ailes de poulet classiques", price: 4000 },
      { id: "buffalo-wings-bco", section: "Chicken Wings", name: "Buffalo Wings", description: "Ailes de poulet sauce buffalo", price: 4000 },
      { id: "bbq-wings-bco", section: "Chicken Wings", name: "BBQ Wings", description: "Ailes de poulet sauce BBQ", price: 4000 },
      { id: "wings-box-bco", section: "Chicken Wings", name: "Wings Box", description: "Box wings", price: 14500 },
      { id: "bbq-sauce-bco", section: "Sauces", name: "BBQ", description: "Sauce BBQ", price: 500 },
      { id: "garlic-mayo-sauce-bco", section: "Sauces", name: "Garlic Mayo", description: "Sauce garlic mayo", price: 500 },
      { id: "cheese-wizz-sauce-bco", section: "Sauces", name: "Cheese Wizz", description: "Sauce cheese wizz", price: 500 },
      { id: "buffalo-sauce-bco", section: "Sauces", name: "Buffalo", description: "Sauce buffalo", price: 500 },
    ],
  },
  {
    id: "brooklyn-burger-bamako",
    name: "Brooklyn Burger",
    category: "Burger",
    rating: 4.1,
    reviewCount: 868,
    time: "25-35 min",
    address: "ACI 2000 rond-point La Bougie / Bougie Ba, Bamako",
    location: { lat: 12.6314, lng: -8.0276 },
    phone: "+223 95 95 16 16",
    hours: [
      ["Lundi", "12:00 - 00:00"],
      ["Mardi", "12:00 - 00:00"],
      ["Mercredi", "12:00 - 00:00"],
      ["Jeudi", "12:00 - 00:00"],
      ["Vendredi", "15:00 - 01:00"],
      ["Samedi", "12:00 - 01:00"],
      ["Dimanche", "12:00 - 00:00"],
    ],
    website: "",
    description: "Restaurant connu a Bamako pour ses burgers halal, poulet frit et tacos.",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
    reviews: [
      "Good burgers and fried chicken.",
      "Great place to eat delicious halal burgers.",
      "Nice place and the food tastes pretty good.",
    ],
    menu: [
      { id: "brooklyn-hummer-3x2-simple", section: "Hummers", name: "Hummer 3x2 - Simple", description: "3 steaks, 2 bacon, cheddar", price: 7000 },
      { id: "brooklyn-hummer-3x2-menu", section: "Hummers", name: "Hummer 3x2 - Menu", description: "Avec frites et boisson", price: 8000 },
      { id: "brooklyn-hummer-3x2-tacos", section: "Hummers", name: "Hummer 3x2 - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-hummer-3x1-simple", section: "Hummers", name: "Hummer 3x1 - Simple", description: "3 steaks", price: 5000 },
      { id: "brooklyn-hummer-3x1-menu", section: "Hummers", name: "Hummer 3x1 - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "brooklyn-hummer-3x1-tacos", section: "Hummers", name: "Hummer 3x1 - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-hummer-2x1-simple", section: "Hummers", name: "Hummer 2x1 - Simple", description: "2 steaks", price: 4500 },
      { id: "brooklyn-hummer-2x1-menu", section: "Hummers", name: "Hummer 2x1 - Menu", description: "Avec frites et boisson", price: 5500 },
      { id: "brooklyn-kids-meal", section: "Kids", name: "Menu Kids", description: "2 tenders ou cheeseburger, 1 petite frite, 1 boisson, 1 surprise", price: 4000 },
      { id: "brooklyn-stick-mozza-8", section: "Sides", name: "Stick Mozza 8 pieces", description: "Batonnets de mozzarella panes", price: 3000 },
      { id: "brooklyn-stick-mozza-12", section: "Sides", name: "Stick Mozza 12 pieces", description: "Batonnets de mozzarella panes", price: 5000 },
      { id: "brooklyn-south-chicken", section: "Sides", name: "South Chicken", description: "Chili, cheese, fries", price: 5000 },
      { id: "brooklyn-torsade-daim", section: "Desserts", name: "Torsade Daim", description: "Dessert Daim", price: 3000 },
      { id: "brooklyn-tiramisu", section: "Desserts", name: "Tiramisu", description: "Oreo, Kinder, caramel, Speculoos, black & white, eclats caramel", price: 2500 },
      { id: "brooklyn-personnalise-cheddar-bacon", section: "Frites & Papatoes", name: "Frites Cheddar + Bacon", description: "Base 3500 FCFA + supplement bacon", price: 5500 },
      { id: "brooklyn-personnalise-cheddar", section: "Frites & Papatoes", name: "Frites Cheddar", description: "Base 2500 FCFA + supplement cheddar", price: 4000 },
      { id: "brooklyn-personnalise-frites-potatoes", section: "Frites & Papatoes", name: "Frites ou Potatoes", description: "Petite portion", price: 1000 },
      { id: "brooklyn-crazy-box", section: "Box", name: "Crazy Box", description: "Double cheese junior, wings crispy, frites, boisson 33cl", price: 7000 },
      { id: "brooklyn-boisson", section: "Boissons", name: "Boisson", description: "Soda", price: 1000 },
      { id: "brooklyn-expresso", section: "Boissons Chaudes", name: "Expresso", description: "Cafe expresso", price: 1000 },
      { id: "brooklyn-cafe-allonge", section: "Boissons Chaudes", name: "Cafe Allonge", description: "Cafe allonge", price: 2000 },
      { id: "brooklyn-cafe-noisette", section: "Boissons Chaudes", name: "Cafe Noisette", description: "Cafe noisette", price: 1500 },
      { id: "brooklyn-infusion", section: "Boissons Chaudes", name: "Infusion", description: "Infusion chaude", price: 1000 },
      { id: "brooklyn-double-cheese-simple", section: "Burgers", name: "Double Cheese - Simple", description: "Double cheese burger", price: 4000 },
      { id: "brooklyn-double-cheese-menu", section: "Burgers", name: "Double Cheese - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "brooklyn-double-cheese-tacos", section: "Burgers", name: "Double Cheese - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-cheese-simple", section: "Burgers", name: "Cheese Burger - Simple", description: "Cheese burger", price: 3000 },
      { id: "brooklyn-cheese-menu", section: "Burgers", name: "Cheese Burger - Menu", description: "Avec frites et boisson", price: 4000 },
      { id: "brooklyn-cheese-tacos", section: "Burgers", name: "Cheese Burger - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-big-cheese-simple", section: "Burgers", name: "Big Cheese - Simple", description: "Big cheese burger", price: 5000 },
      { id: "brooklyn-big-cheese-tacos", section: "Burgers", name: "Big Cheese - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-bbq-cheese-simple", section: "Burgers", name: "BBQ Cheese - Simple", description: "BBQ cheese burger", price: 5000 },
      { id: "brooklyn-bbq-cheese-tacos", section: "Burgers", name: "BBQ Cheese - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-bbq-chicken-simple", section: "Burgers", name: "BBQ Chicken - Simple", description: "BBQ chicken burger", price: 5000 },
      { id: "brooklyn-bbq-chicken-tacos", section: "Burgers", name: "BBQ Chicken - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-big-broski-simple", section: "Burgers", name: "Big Broski - Simple", description: "Big broski burger", price: 4500 },
      { id: "brooklyn-big-broski-menu", section: "Burgers", name: "Big Broski - Menu", description: "Avec frites et boisson", price: 5500 },
      { id: "brooklyn-big-broski-tacos", section: "Burgers", name: "Big Broski - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-hurricane-mythic-simple", section: "Burgers", name: "Brooklyn Hurricane Mythic - Simple", description: "Burger hurricane mythic", price: 6500 },
      { id: "brooklyn-hurricane-mythic-tacos", section: "Burgers", name: "Brooklyn Hurricane Mythic - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-mythic-simple", section: "Burgers", name: "Brooklyn Mythic - Simple", description: "Brooklyn mythic burger", price: 6500 },
      { id: "brooklyn-mythic-tacos", section: "Burgers", name: "Brooklyn Mythic - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-american-dream-simple", section: "Burgers", name: "American Dream - Simple", description: "American dream burger", price: 6500 },
      { id: "brooklyn-american-dream-menu", section: "Burgers", name: "American Dream - Menu", description: "Avec frites et boisson", price: 7000 },
      { id: "brooklyn-american-dream-tacos", section: "Burgers", name: "American Dream - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-fish-burger-simple", section: "Burgers", name: "Fish Burger - Simple", description: "Fish burger", price: 3000 },
      { id: "brooklyn-american-buffalo-simple", section: "Sandwichs & Wraps", name: "L'American Buffalo - Simple", description: "Pain normal ou tortilla", price: 5000 },
      { id: "brooklyn-american-buffalo-tacos", section: "Sandwichs & Wraps", name: "L'American Buffalo - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-indien-simple", section: "Sandwichs & Wraps", name: "L'Indien - Simple", description: "Pain normal ou tortilla", price: 4000 },
      { id: "brooklyn-indien-menu", section: "Sandwichs & Wraps", name: "L'Indien - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "brooklyn-indien-tacos", section: "Sandwichs & Wraps", name: "L'Indien - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-bombino-wrap-simple", section: "Sandwichs & Wraps", name: "Bombino Wrap - Simple", description: "Wrap bombino", price: 4000 },
      { id: "brooklyn-bombino-wrap-menu", section: "Sandwichs & Wraps", name: "Bombino Wrap - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "brooklyn-bombino-wrap-tacos", section: "Sandwichs & Wraps", name: "Bombino Wrap - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-wonder-wrap-simple", section: "Sandwichs & Wraps", name: "Wonder Wrap - Simple", description: "Wrap wonder", price: 3500 },
      { id: "brooklyn-wonder-wrap-tacos", section: "Sandwichs & Wraps", name: "Wonder Wrap - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-chicken-boursin-simple", section: "Sandwichs & Wraps", name: "Chicken Boursin - Simple", description: "Chicken boursin", price: 4000 },
      { id: "brooklyn-chicken-boursin-tacos", section: "Sandwichs & Wraps", name: "Chicken Boursin - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-brazier-wrap-simple", section: "Sandwichs & Wraps", name: "Brazier Wrap - Simple", description: "Wrap brazier", price: 5000 },
      { id: "brooklyn-brazier-wrap-tacos", section: "Sandwichs & Wraps", name: "Brazier Wrap - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-mexicano-wrap-simple", section: "Sandwichs & Wraps", name: "Mexicano Wrap - Simple", description: "Wrap mexicano", price: 5000 },
      { id: "brooklyn-mexicano-wrap-menu", section: "Sandwichs & Wraps", name: "Mexicano Wrap - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "brooklyn-mexicano-wrap-tacos", section: "Sandwichs & Wraps", name: "Mexicano Wrap - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-kebab-simple", section: "Sandwichs & Wraps", name: "Kebab - Simple", description: "Pain normal ou tortilla", price: 6000 },
      { id: "brooklyn-kebab-tacos", section: "Sandwichs & Wraps", name: "Kebab - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-chicken-nuggets-6", section: "Chicken", name: "Chicken Nuggets 6 pieces", description: "Nuggets", price: 4000 },
      { id: "brooklyn-chicken-nuggets-7", section: "Chicken", name: "Chicken Nuggets 7 pieces", description: "Nuggets", price: 7000 },
      { id: "brooklyn-chicken-nuggets-tacos", section: "Chicken", name: "Chicken Nuggets - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-chicken-tenders-3", section: "Chicken", name: "Chicken Tenders 3 pieces", description: "Tenders", price: 3300 },
      { id: "brooklyn-chicken-tenders-5", section: "Chicken", name: "Chicken Tenders 5 pieces", description: "Tenders", price: 5000 },
      { id: "brooklyn-chicken-tenders-tacos", section: "Chicken", name: "Chicken Tenders - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-chicken-wings-4", section: "Chicken", name: "Chicken Wings 4 pieces", description: "Wings", price: 4000 },
      { id: "brooklyn-chicken-wings-6", section: "Chicken", name: "Chicken Wings 6 pieces", description: "Wings", price: 6000 },
      { id: "brooklyn-chicken-wings-tacos", section: "Chicken", name: "Chicken Wings - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-chicken-pieces-4", section: "Chicken", name: "Chicken Pieces 4 pieces", description: "Pieces de poulet", price: 4000 },
      { id: "brooklyn-chicken-pieces-6", section: "Chicken", name: "Chicken Pieces 6 pieces", description: "Pieces de poulet", price: 6000 },
      { id: "brooklyn-chicken-pieces-tacos", section: "Chicken", name: "Chicken Pieces - Tacos", description: "Version tacos", price: 1000 },
      { id: "brooklyn-jumby-22-pieces", section: "Chicken Jumby", name: "Jumby 22 pieces", description: "Wings x4, pieces x15, pieces x10, wings x10, frites x4, bouteille x1", price: 22000 },
      { id: "brooklyn-tacos-viandes", section: "Tacos", name: "Les Viandes", description: "Merguez, chipolata, nuggets, steak hache, chicken", price: 5000 },
      { id: "brooklyn-tacos-solo", section: "Tacos", name: "Solo 1 viande", description: "Tacos solo", price: 6000 },
      { id: "brooklyn-tacos-mix-2", section: "Tacos", name: "Mix 2 viandes", description: "Tacos mix", price: 7500 },
      { id: "brooklyn-tacos-sauces", section: "Tacos", name: "Les Sauces", description: "Sauce algerienne, chili, poivre, blanche, andalouse", price: 0 },
      { id: "brooklyn-tacos-supplement", section: "Tacos", name: "Supplement tacos", description: "Bacon, cheddar, boursin, kiri, oeuf", price: 1000 },
    ],
  },
  {
    id: "sigma-burgers-bamako",
    name: "Sigma Burgers",
    category: "Burger",
    rating: 5.0,
    reviewCount: 0,
    time: "20-40 min",
    address: "ACI 2000, a cote de l'hotel Radisson, Bamako",
    location: { lat: 12.6322, lng: -8.0294 },
    phone: "+223 76 54 31 31",
    hours: [
      ["Lundi", "12:30 - 00:00"],
      ["Mardi", "12:30 - 00:00"],
      ["Mercredi", "12:30 - 00:00"],
      ["Jeudi", "12:30 - 00:00"],
      ["Vendredi", "13:30 - 02:00"],
      ["Samedi", "13:30 - 02:00"],
      ["Dimanche", "16:30 - 23:00"],
    ],
    website: "",
    description: "Burgers, tacos et wings avec menus rapides pour livraison a Bamako.",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
    reviews: [
      "Menus burgers, tacos et chicken wings.",
      "Restaurant ajoute depuis les resultats publics disponibles.",
    ],
    menu: [
      { id: "sigma-double-smash-simple", section: "Smash Burgers", name: "Double Smash - Simple", description: "2 steaks 80g, 2 tranches de cheddar, cornichon, salade, tomate, oignon", price: 5000 },
      { id: "sigma-double-smash-menu", section: "Smash Burgers", name: "Double Smash - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-crispy-chicken-simple", section: "Smash Burgers", name: "Crispy Chicken - Simple", description: "Poulet croustillant, cheddar, salade", price: 4500 },
      { id: "sigma-crispy-chicken-menu", section: "Smash Burgers", name: "Crispy Chicken - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-farmer-chicken-simple", section: "Smash Burgers", name: "Farmer Chicken - Simple", description: "Tenders, cheddar, bacon, salade", price: 5500 },
      { id: "sigma-farmer-chicken-menu", section: "Smash Burgers", name: "Farmer Chicken - Menu", description: "Avec frites et boisson", price: 7000 },
      { id: "sigma-farmer-beef-simple", section: "Smash Burgers", name: "Farmer Beef - Simple", description: "2 steaks 80g, 2 tranches de cheddar, bacon, oignon, cornichon", price: 5500 },
      { id: "sigma-farmer-beef-menu", section: "Smash Burgers", name: "Farmer Beef - Menu", description: "Avec frites et boisson", price: 7000 },
      { id: "sigma-supreme-smash-simple", section: "Smash Burgers", name: "Supreme Smash - Simple", description: "2 steaks 80g, 2 tranches de cheddar, salade et oignon", price: 4500 },
      { id: "sigma-supreme-smash-menu", section: "Smash Burgers", name: "Supreme Smash - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-geant-simple", section: "Naan Burgers", name: "Geant - Simple", description: "2 steaks 90g, 2 tranches de cheddar, salade", price: 6500 },
      { id: "sigma-geant-menu", section: "Naan Burgers", name: "Geant - Menu", description: "Avec frites et boisson", price: 8000 },
      { id: "sigma-big-pepper-simple", section: "Naan Burgers", name: "Big Pepper - Simple", description: "2 steaks 90g, oeuf, bacon, cheddar", price: 5500 },
      { id: "sigma-big-pepper-menu", section: "Naan Burgers", name: "Big Pepper - Menu", description: "Avec frites et boisson", price: 7000 },
      { id: "sigma-cbo-simple", section: "Naan Burgers", name: "CBO - Simple", description: "1 steak 90g, poulet, bacon, oignon frits, cheddar", price: 5500 },
      { id: "sigma-cbo-menu", section: "Naan Burgers", name: "CBO - Menu", description: "Avec frites et boisson", price: 7000 },
      { id: "sigma-double-cheese-simple", section: "Nos Classics", name: "Double Cheese - Simple", description: "Burger double cheese", price: 4000 },
      { id: "sigma-double-cheese-menu", section: "Nos Classics", name: "Double Cheese - Menu", description: "Avec frites et boisson", price: 5500 },
      { id: "sigma-chicken-burger-simple", section: "Nos Classics", name: "Chicken Burger - Simple", description: "Burger chicken", price: 4000 },
      { id: "sigma-chicken-burger-menu", section: "Nos Classics", name: "Chicken Burger - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "sigma-royal-simple", section: "Nos Classics", name: "Sigma Royal - Simple", description: "Burger royal", price: 4500 },
      { id: "sigma-royal-menu", section: "Nos Classics", name: "Sigma Royal - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-naan-sandwich-tandoori-simple", section: "Naan Sandwich", name: "Tandoori - Simple", description: "Naan sandwich tandoori", price: 4500 },
      { id: "sigma-naan-sandwich-tandoori-menu", section: "Naan Sandwich", name: "Tandoori - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-naan-sandwich-tikka-simple", section: "Naan Sandwich", name: "Tikka Curry - Simple", description: "Naan sandwich tikka curry", price: 4500 },
      { id: "sigma-naan-sandwich-tikka-menu", section: "Naan Sandwich", name: "Tikka Curry - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-naan-sandwich-mixte-simple", section: "Naan Sandwich", name: "Mixte - Simple", description: "Naan sandwich mixte", price: 4500 },
      { id: "sigma-naan-sandwich-mixte-menu", section: "Naan Sandwich", name: "Mixte - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-naan-sandwich-tornado-simple", section: "Naan Sandwich", name: "Tornado - Simple", description: "Naan sandwich tornado", price: 4500 },
      { id: "sigma-naan-sandwich-tornado-menu", section: "Naan Sandwich", name: "Tornado - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-naan-sandwich-tenders-simple", section: "Naan Sandwich", name: "Tenders - Simple", description: "Naan sandwich tenders", price: 4500 },
      { id: "sigma-naan-sandwich-tenders-menu", section: "Naan Sandwich", name: "Tenders - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-naan-sandwich-triple-steak-simple", section: "Naan Sandwich", name: "Triple Steak - Simple", description: "Naan sandwich triple steak", price: 4500 },
      { id: "sigma-naan-sandwich-triple-steak-menu", section: "Naan Sandwich", name: "Triple Steak - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-wings-6-simple", section: "Nos Poulets", name: "Wings 6 pieces - Simple", description: "6 wings", price: 3000 },
      { id: "sigma-wings-6-menu", section: "Nos Poulets", name: "Wings 6 pieces - Menu", description: "Avec frites et boisson", price: 4500 },
      { id: "sigma-pieces-3-simple", section: "Nos Poulets", name: "Pieces 3 pieces - Simple", description: "3 pieces de poulet", price: 3500 },
      { id: "sigma-pieces-3-menu", section: "Nos Poulets", name: "Pieces 3 pieces - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "sigma-tenders-5-simple", section: "Nos Poulets", name: "Tenders 5 pieces - Simple", description: "5 tenders", price: 4000 },
      { id: "sigma-tenders-5-menu", section: "Nos Poulets", name: "Tenders 5 pieces - Menu", description: "Avec frites et boisson", price: 5500 },
      { id: "sigma-fingers-5-simple", section: "Nos Poulets", name: "Fingers 5 pieces - Simple", description: "5 fingers", price: 3000 },
      { id: "sigma-fingers-5-menu", section: "Nos Poulets", name: "Fingers 5 pieces - Menu", description: "Avec frites et boisson", price: 4500 },
      { id: "sigma-fingers-10-simple", section: "Nos Poulets", name: "Fingers 10 pieces - Simple", description: "10 fingers", price: 5000 },
      { id: "sigma-fingers-10-menu", section: "Nos Poulets", name: "Fingers 10 pieces - Menu", description: "Avec frites et boisson", price: 6500 },
      { id: "sigma-menu-mix-simple", section: "Menu Mix", name: "3 Wings + 3 Tenders - Simple", description: "Menu mix 3 wings et 3 tenders", price: 3500 },
      { id: "sigma-menu-mix-menu", section: "Menu Mix", name: "3 Wings + 3 Tenders - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "sigma-familial-25-wings", section: "Menus Familiales", name: "25 Wings", description: "Avec 4 frites et 4 boissons", price: 18000 },
      { id: "sigma-familial-12-pieces", section: "Menus Familiales", name: "12 Pieces", description: "Avec 4 frites et 4 boissons", price: 18000 },
      { id: "sigma-familial-20-tenders", section: "Menus Familiales", name: "20 Tenders", description: "Avec 4 frites et 4 boissons", price: 18000 },
      { id: "sigma-familial-15-wings-10-tenders", section: "Menus Familiales", name: "15 Wings + 10 Tenders", description: "Avec 4 frites et 4 boissons", price: 18000 },
      { id: "sigma-bao-chicken-simple", section: "Bao Buns", name: "Chicken Bao - Simple", description: "Bao bun chicken", price: 6000 },
      { id: "sigma-bao-chicken-menu", section: "Bao Buns", name: "Chicken Bao - Menu", description: "Avec frites et boisson", price: 6500 },
      { id: "sigma-bao-beef-simple", section: "Bao Buns", name: "Beef Bao - Simple", description: "Bao bun beef", price: 6000 },
      { id: "sigma-bao-beef-menu", section: "Bao Buns", name: "Beef Bao - Menu", description: "Avec frites et boisson", price: 6500 },
      { id: "sigma-bao-fish-simple", section: "Bao Buns", name: "Fish Bao - Simple", description: "Bao bun fish", price: 6000 },
      { id: "sigma-bao-fish-menu", section: "Bao Buns", name: "Fish Bao - Menu", description: "Avec frites et boisson", price: 6500 },
      { id: "sigma-pasta-poulet-curry-simple", section: "Pasta", name: "Penne Poulet Curry - Simple", description: "Pasta penne poulet curry", price: 5500 },
      { id: "sigma-pasta-poulet-curry-menu", section: "Pasta", name: "Penne Poulet Curry - Menu", description: "Avec boisson, sans frites", price: 6000 },
      { id: "sigma-pasta-creme-champignon-simple", section: "Pasta", name: "Penne Poulet Creme Champignon - Simple", description: "Pasta creme champignon", price: 5500 },
      { id: "sigma-pasta-creme-champignon-menu", section: "Pasta", name: "Penne Poulet Creme Champignon - Menu", description: "Avec boisson, sans frites", price: 6000 },
      { id: "sigma-pasta-poulet-tomate-simple", section: "Pasta", name: "Penne Poulet Tomate - Simple", description: "Pasta poulet tomate", price: 5500 },
      { id: "sigma-pasta-poulet-tomate-menu", section: "Pasta", name: "Penne Poulet Tomate - Menu", description: "Avec boisson, sans frites", price: 6000 },
      { id: "sigma-pasta-bolognese-simple", section: "Pasta", name: "Bolognese - Simple", description: "Pasta bolognese", price: 5500 },
      { id: "sigma-pasta-bolognese-menu", section: "Pasta", name: "Bolognese - Menu", description: "Avec boisson, sans frites", price: 6000 },
      { id: "sigma-escalope-gratinee", section: "Nos Brasseries", name: "Escalope Gratinee", description: "1 accompagnement au choix", price: 8000 },
      { id: "sigma-escalope-forestiere", section: "Nos Brasseries", name: "Escalope Forestiere", description: "1 accompagnement au choix", price: 7000 },
      { id: "sigma-filet-boeuf", section: "Nos Brasseries", name: "Filet de Boeuf", description: "1 accompagnement au choix", price: 7500 },
      { id: "sigma-cordon-bleu", section: "Nos Brasseries", name: "Cordon Bleu Fait Maison", description: "1 accompagnement au choix", price: 8500 },
      { id: "sigma-lemon-pepper-6-simple", section: "Wings", name: "Lemon Pepper 6x - Simple", description: "Wings lemon pepper", price: 4000 },
      { id: "sigma-lemon-pepper-6-menu", section: "Wings", name: "Lemon Pepper 6x - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "sigma-lemon-pepper-12-simple", section: "Wings", name: "Lemon Pepper 12x - Simple", description: "Wings lemon pepper", price: 7000 },
      { id: "sigma-lemon-pepper-12-menu", section: "Wings", name: "Lemon Pepper 12x - Menu", description: "Avec frites et boisson", price: 9000 },
      { id: "sigma-bbq-wings-6-simple", section: "Wings", name: "BBQ 6x - Simple", description: "Wings BBQ", price: 4000 },
      { id: "sigma-bbq-wings-6-menu", section: "Wings", name: "BBQ 6x - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "sigma-bbq-wings-12-simple", section: "Wings", name: "BBQ 12x - Simple", description: "Wings BBQ", price: 7000 },
      { id: "sigma-bbq-wings-12-menu", section: "Wings", name: "BBQ 12x - Menu", description: "Avec frites et boisson", price: 9000 },
      { id: "sigma-frites-normal", section: "Frites", name: "Frites Normal", description: "Portion de frites", price: 1500 },
      { id: "sigma-frites-cheddar", section: "Frites", name: "Frites Cheddar", description: "Frites cheddar", price: 2500 },
      { id: "sigma-frites-cheddar-bacon", section: "Frites", name: "Frites Cheddar Bacon", description: "Frites cheddar bacon", price: 3500 },
      { id: "sigma-sandwich-triple-steak-simple", section: "Nos Sandwichs", name: "Triple Steak - Simple", description: "Sandwich triple steak", price: 4000 },
      { id: "sigma-sandwich-triple-steak-menu", section: "Nos Sandwichs", name: "Triple Steak - Menu", description: "Avec frites et boisson", price: 5000 },
      { id: "sigma-sandwich-chicken-curry-simple", section: "Nos Sandwichs", name: "Chicken Curry - Simple", description: "Sandwich chicken curry", price: 4500 },
      { id: "sigma-sandwich-chicken-curry-menu", section: "Nos Sandwichs", name: "Chicken Curry - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-sandwich-philly-cheese-simple", section: "Nos Sandwichs", name: "Philly Cheese - Simple", description: "Sandwich philly cheese", price: 4500 },
      { id: "sigma-sandwich-philly-cheese-menu", section: "Nos Sandwichs", name: "Philly Cheese - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-tacos-beef-simple", section: "Nos Tacos", name: "Tacos Beef - Simple", description: "Tacos boeuf", price: 4500 },
      { id: "sigma-tacos-beef-menu", section: "Nos Tacos", name: "Tacos Beef - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-tacos-chicken-simple", section: "Nos Tacos", name: "Tacos Chicken - Simple", description: "Tacos poulet", price: 4500 },
      { id: "sigma-tacos-chicken-menu", section: "Nos Tacos", name: "Tacos Chicken - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-tacos-mix-simple", section: "Nos Tacos", name: "Tacos Mix - Simple", description: "Tacos mix", price: 4500 },
      { id: "sigma-tacos-mix-menu", section: "Nos Tacos", name: "Tacos Mix - Menu", description: "Avec frites et boisson", price: 6000 },
      { id: "sigma-crepe-suzette", section: "Nos Desserts", name: "Crepe Suzette", description: "Dessert crepe suzette", price: 3000 },
      { id: "sigma-pain-perdu", section: "Nos Desserts", name: "Pain Perdu", description: "Dessert pain perdu", price: 3000 },
      { id: "sigma-fondant-chocolat", section: "Nos Desserts", name: "Fondant au Chocolat", description: "Fondant au chocolat", price: 4000 },
      { id: "sigma-cocktail-pina-colada", section: "Cocktails", name: "Pina Colada", description: "Cocktail", price: 2000 },
      { id: "sigma-cocktail-passion-mix", section: "Cocktails", name: "Passion Mix", description: "Cocktail", price: 2000 },
      { id: "sigma-cocktail-mojito-fraise", section: "Cocktails", name: "Mojito Fraise", description: "Cocktail", price: 2000 },
      { id: "sigma-cocktail-mojito-passion", section: "Cocktails", name: "Mojito Passion", description: "Cocktail", price: 2000 },
      { id: "sigma-cocktail-iced-tea", section: "Cocktails", name: "Iced Tea", description: "Cocktail", price: 2000 },
      { id: "sigma-cocktail-menu-supplement", section: "Cocktails", name: "Cocktail en menu - Supplement", description: "Supplement cocktail dans un menu", price: 1000 },
    ],
  },
  {
    id: "nice-cream-bamako",
    name: "N'ice Cream",
    category: "Glace",
    rating: 4.0,
    reviewCount: 0,
    time: "15-25 min",
    address: "Rue Bla-Bla, Quartier Hippodrome, Bamako",
    location: { lat: 12.6631, lng: -7.9711 },
    phone: "+223 94 60 60 60",
    hours: [
      ["Lundi", "07:00 - 23:30"],
      ["Mardi", "07:00 - 23:30"],
      ["Mercredi", "07:00 - 23:30"],
      ["Jeudi", "07:00 - 23:30"],
      ["Vendredi", "07:00 - 00:30"],
      ["Samedi", "07:00 - 01:30"],
      ["Dimanche", "08:00 - 23:30"],
    ],
    website: "https://linktr.ee/ACI2000NICECREAM",
    description: "Adresse dessert et glace a Bamako, ideale pour coupes, milkshakes et gaufres.",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=80",
    reviews: [
      "Glaces et desserts froids.",
      "Parfait pour une commande sucree.",
    ],
    menu: [
      { id: "nice-cornet-1-parfum", section: "Les Cornets", name: "Cornet 1 parfum", description: "Cornet glace 1 parfum", price: 1500 },
      { id: "nice-cornet-2-parfums", section: "Les Cornets", name: "Cornet 2 parfums", description: "Cornet glace 2 parfums", price: 2000 },
      { id: "nice-cornet-americain-2", section: "Les Cornets", name: "Cornet americain 2 parfums", description: "Cornet americain", price: 2500 },
      { id: "nice-cornet-americain-3", section: "Les Cornets", name: "Cornet americain 3 parfums", description: "Cornet americain", price: 3000 },
      { id: "nice-california-dream", section: "Les Cornets", name: "California Dream", description: "Specialite glacee en cornet", price: 2700 },
      { id: "nice-supplement-chantilly", section: "Supplements", name: "Chantilly", description: "Supplement chantilly", price: 500 },
      { id: "nice-supplement-nappage", section: "Supplements", name: "Nappage", description: "Supplement nappage", price: 500 },
      { id: "nice-milkshake", section: "Boissons Glacees", name: "Milk-Shake", description: "Milk-shake glace", price: 2000 },
      { id: "nice-pot-1-parfum", section: "Les Pots", name: "Pot 1 parfum", description: "Pot de glace 1 parfum", price: 1500 },
      { id: "nice-pot-2-parfums", section: "Les Pots", name: "Pot 2 parfums", description: "Pot de glace 2 parfums", price: 2000 },
      { id: "nice-pot-3-parfums", section: "Les Pots", name: "Pot 3 parfums", description: "Pot de glace 3 parfums", price: 2500 },
      { id: "nice-pot-chantilly", section: "Les Pots", name: "Chantilly", description: "Chantilly en pot", price: 700 },
      { id: "nice-barquette-demi-litre", section: "Les Barquettes", name: "Barquette 1/2 litre", description: "Barquette de glace", price: 3700 },
      { id: "nice-barquette-1-litre", section: "Les Barquettes", name: "Barquette 1 litre", description: "Barquette de glace", price: 7000 },
      { id: "nice-barquette-demi-litre-light", section: "Les Barquettes", name: "Barquette 1/2 litre light", description: "Glace light", price: 3700 },
      { id: "nice-barquette-1-litre-light", section: "Les Barquettes", name: "Barquette 1 litre light", description: "Glace light", price: 7000 },
      { id: "nice-barquette-chantilly-demi", section: "Les Barquettes", name: "Chantilly 1/2 litre", description: "Chantilly", price: 2000 },
      { id: "nice-barquette-chantilly-1l", section: "Les Barquettes", name: "Chantilly 1 litre", description: "Chantilly", price: 3500 },
      { id: "nice-esquimaux-petit", section: "Les Biscuits Glaces", name: "Esquimaux petit", description: "Petit format", price: 500 },
      { id: "nice-esquimaux-grand", section: "Les Biscuits Glaces", name: "Esquimaux grand", description: "Grand format", price: 1000 },
      { id: "nice-esquimaux-nice", section: "Les Biscuits Glaces", name: "N'Ice Esquimaux", description: "Esquimau N'ice Cream", price: 1500 },
      { id: "nice-minous", section: "Les Biscuits Glaces", name: "Minous", description: "Biscuit glace minous", price: 1000 },
      { id: "nice-bricelet-petit", section: "Les Biscuits Glaces", name: "Bricelets petit", description: "Petit format", price: 600 },
      { id: "nice-bricelet-moyen", section: "Les Biscuits Glaces", name: "Bricelets moyen", description: "Moyen format", price: 1000 },
      { id: "nice-bricelet-grand", section: "Les Biscuits Glaces", name: "Bricelets grand", description: "Grand format", price: 1500 },
      { id: "nice-gavottes", section: "Les Biscuits Glaces", name: "Gavottes", description: "Gavottes glacees", price: 1500 },
      { id: "nice-tulipe-1-parfum", section: "Les Tulipes", name: "Tulipe 1 parfum", description: "Tulipe glacee", price: 1500 },
      { id: "nice-tulipe-1-chantilly-nappage", section: "Les Tulipes", name: "Tulipe 1 parfum + chantilly & nappage", description: "Tulipe avec chantilly et nappage", price: 2000 },
      { id: "nice-tulipe-2-parfums", section: "Les Tulipes", name: "Tulipe 2 parfums", description: "Tulipe glacee", price: 2000 },
      { id: "nice-tulipe-2-chantilly-nappage", section: "Les Tulipes", name: "Tulipe 2 parfums + chantilly & nappage", description: "Tulipe avec chantilly et nappage", price: 2500 },
      { id: "nice-croque-monsieur-seul", section: "Nos Croques", name: "Croque-Monsieur - Seul", description: "Pain de mie, preparation fromagere, jambon de boeuf", price: 3000 },
      { id: "nice-croque-monsieur-menu", section: "Nos Croques", name: "Croque-Monsieur - Menu", description: "Avec accompagnement", price: 4500 },
      { id: "nice-grilled-cheese-seul", section: "Nos Croques", name: "Grilled-Cheese - Seul", description: "Pain de mie, cheddar, mozzarella, mayonnaise", price: 3000 },
      { id: "nice-grilled-cheese-menu", section: "Nos Croques", name: "Grilled-Cheese - Menu", description: "Avec accompagnement", price: 4500 },
      { id: "nice-croque-italien-seul", section: "Nos Croques", name: "Croque-Italien - Seul", description: "Pain de mie, pesto, legumes, mozzarella", price: 3000 },
      { id: "nice-croque-italien-menu", section: "Nos Croques", name: "Croque-Italien - Menu", description: "Avec accompagnement", price: 4500 },
      { id: "nice-croque-indien-seul", section: "Nos Croques", name: "Croque-Indien - Seul", description: "Pain de mie, bechamel au curry, poulet, brunoise de legumes, emmental", price: 3000 },
      { id: "nice-croque-indien-menu", section: "Nos Croques", name: "Croque-Indien - Menu", description: "Avec accompagnement", price: 4500 },
      { id: "nice-croque-poulet-seul", section: "Nos Croques", name: "Croque-Poulet - Seul", description: "Pain de mie, bechamel, poulet, champignons, emmental", price: 3000 },
      { id: "nice-croque-poulet-menu", section: "Nos Croques", name: "Croque-Poulet - Menu", description: "Avec accompagnement", price: 4500 },
      { id: "nice-sweet-croque", section: "Croque Sucre", name: "Sweet-Croque", description: "Pain de mie, Nutella, compotee de banane", price: 2000 },
    ],
  },
  {
    id: "da-guido-pizza-bamako",
    name: "Pizzeria Da Guido",
    category: "Pizza",
    rating: 4.0,
    reviewCount: 0,
    time: "30-45 min",
    address: "Pres de l'avenue Nelson Mandela, Bamako",
    location: { lat: 12.6427, lng: -7.9994 },
    phone: "+223 73 48 94 94",
    hours: [
      ["Lundi", "08:00 - 21:00"],
      ["Mardi", "08:00 - 21:00"],
      ["Mercredi", "08:00 - 21:00"],
      ["Jeudi", "08:00 - 21:00"],
      ["Vendredi", "08:00 - 21:00"],
      ["Samedi", "08:00 - 21:00"],
      ["Dimanche", "08:00 - 21:00"],
    ],
    website: "",
    description: "Pizzeria italienne a Bamako avec pizzas et plats classiques.",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    reviews: [
      "Pizzeria connue a Bamako.",
      "Cuisine italienne, pizzas et pates.",
    ],
    menu: [
      { id: "guido-margherita", name: "Pizza Margherita", description: "Tomate, mozzarella, basilic", price: 4500 },
      { id: "guido-vegetarienne", name: "Pizza Vegetarienne", description: "Legumes, mozzarella, sauce tomate", price: 6000 },
      { id: "guido-carbonara", name: "Spaghetti Carbonara", description: "Pates italiennes, creme, fromage", price: 7000 },
    ],
  },
];

const burgerAndCo = restaurants.find((restaurant) => restaurant.id === "burger-and-co-bamako");
const brooklynBurger = restaurants.find((restaurant) => restaurant.id === "brooklyn-burger-bamako");

if (burgerAndCo?.brooklynMenu && brooklynBurger) {
  brooklynBurger.menu = burgerAndCo.brooklynMenu;
  delete burgerAndCo.brooklynMenu;
}

const PRODUCT_DESCRIPTION_RULES = [
  {
    test: (item) => /menu/i.test(item.name) && !/familial|family|kids|mix/i.test(item.name),
    text: (restaurant, item, detail) =>
      `Formule ${cleanProductName(item.name).toLowerCase()} avec frites et boisson, preparee par ${restaurant.name}.${detail}`,
  },
  {
    test: (item) => /tacos/i.test(item.name) && Number(item.price || 0) <= 1500,
    text: (restaurant, item, detail) =>
      `Option tacos pour transformer le plat en version plus gourmande chez ${restaurant.name}.${detail}`,
  },
  {
    test: (item) => /supplement|bacon|cheddar|chantilly|nappage|sauce/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Supplement pour personnaliser ta commande ${restaurant.name} selon tes envies.${detail}`,
  },
  {
    test: (item) => /boisson|cocktail|expresso|cafe|infusion|milk/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Boisson selectionnee pour accompagner ton repas ou ton dessert chez ${restaurant.name}.${detail}`,
  },
  {
    test: (item) => /burger|smash|classic|hummer|naan/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Burger genereux de ${restaurant.name}, servi chaud avec une base moelleuse, une garniture savoureuse et une sauce maison.${detail}`,
  },
  {
    test: (item) => /wings|tenders|nuggets|pieces|poulet|chicken|fingers/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Specialite poulet de ${restaurant.name}, croustillante et bien assaisonnee, ideale seule ou avec un accompagnement.${detail}`,
  },
  {
    test: (item) => /sandwich|wrap|kebab|bao|tacos/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Recette street-food de ${restaurant.name}, garnie et facile a manger, parfaite pour une commande rapide.${detail}`,
  },
  {
    test: (item) => /frites|fries|potatoes|papatoes|side|mozza/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Accompagnement gourmand de ${restaurant.name}, a ajouter au panier pour completer ton repas.${detail}`,
  },
  {
    test: (item) => /pizza|spaghetti|pasta|penne|carbonara|margherita/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Specialite italienne de ${restaurant.name}, preparee avec une base simple et des ingredients savoureux.${detail}`,
  },
  {
    test: (item) => /glace|cornet|pot|barquette|tulipe|esquimaux|bricelet|gavotte|cream|chantilly/i.test(
      `${item.section || ""} ${item.name}`,
    ),
    text: (restaurant, item, detail) =>
      `Dessert glace de ${restaurant.name}, frais et doux, parfait pour terminer la commande sur une note sucree.${detail}`,
  },
  {
    test: (item) => /croque|grilled/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Croque chaud de ${restaurant.name}, grille et fondant, pense pour un repas simple et reconfortant.${detail}`,
  },
  {
    test: (item) => /dessert|tiramisu|torsade|crepe|pain perdu|fondant|sweet/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Dessert de ${restaurant.name}, gourmand et pratique a commander apres le repas.${detail}`,
  },
  {
    test: (item) => /salade|quinoa/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Option fraiche de ${restaurant.name}, composee pour une commande plus legere et equilibree.${detail}`,
  },
  {
    test: (item) => /brasserie|escalope|filet|cordon/i.test(`${item.section || ""} ${item.name}`),
    text: (restaurant, item, detail) =>
      `Plat complet de ${restaurant.name}, servi avec un accompagnement au choix selon la disponibilite du restaurant.${detail}`,
  },
  {
    test: () => true,
    text: (restaurant, item, detail) =>
      `Produit ${cleanProductName(item.name).toLowerCase()} propose par ${restaurant.name}, disponible a la commande sur Bko Eats.${detail}`,
  },
];

function cleanProductName(name) {
  return String(name || "produit")
    .replace(/\s+-\s+(Simple|Menu|Tacos)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanOriginalDescription(description) {
  const value = String(description || "").replace(/\s+/g, " ").trim();
  if (!value) return "";

  const genericPatterns = [
    /^avec frites et boisson$/i,
    /^version tacos$/i,
    /^burger( .*)?$/i,
    /^wrap( .*)?$/i,
    /^tacos( .*)?$/i,
    /^cocktail$/i,
    /^dessert( .*)?$/i,
    /^frites$/i,
    /^wings$/i,
    /^tenders$/i,
    /^nuggets$/i,
    /^chantilly$/i,
    /^petit format$/i,
    /^grand format$/i,
  ];

  if (genericPatterns.some((pattern) => pattern.test(value))) return "";
  return value.endsWith(".") ? ` Details: ${value}` : ` Details: ${value}.`;
}

function enhanceMenuDescriptions() {
  restaurants.forEach((restaurant) => {
    restaurant.menu.forEach((item) => {
      const detail = cleanOriginalDescription(item.description);
      const rule = PRODUCT_DESCRIPTION_RULES.find((candidate) => candidate.test(item));
      item.description = rule.text(restaurant, item, detail);
    });
  });
}

enhanceMenuDescriptions();

const state = {
  category: "Tous",
  query: "",
  selectedRestaurantId: "",
  cart: {},
  userReviews: {},
  currentUser: null,
  userProfile: null,
  orders: [],
  activeOrder: null,
  userLocation: null,
  onboardingDismissed: false,
  loginIntent: "client",
  restaurantMode: false,
  restaurantTab: "orders",
  restaurantProfile: null,
  restaurantOrders: [],
  restaurantMenuItems: [],
  editingMenuItemId: "",
  adminMode: false,
  adminUser: null,
  adminOrders: [],
  adminRestaurants: [],
  adminDataLoaded: false,
  favorites: {
    restaurants: [],
    items: [],
  },
  payment: {
    method: "cash",
    address: "",
    phone: "",
  },
};

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "XOF",
  maximumFractionDigits: 0,
});

const ORDER_STEPS = [
  { label: "Commande reçue", minutes: 0 },
  { label: "En préparation", minutes: 5 },
  { label: "En route", minutes: 18 },
  { label: "Livrée", minutes: 28 },
];

const ORDER_TRACKING_STEPS = [
  { status: "pending", label: "Commande recue" },
  { status: "accepted", label: "Acceptee" },
  { status: "preparing", label: "En preparation" },
  { status: "ready", label: "Prete" },
  { status: "delivering", label: "Livreur en route" },
  { status: "completed", label: "Livree" },
];

const PREP_MINUTES_BY_CATEGORY = {
  Burger: 15,
  Glace: 8,
  Pizza: 22,
};

const DEFAULT_DELIVERY_FEE = 1000;
const FIREBASE_SDK_VERSION = "12.13.0";
let firebaseAuthClient = null;
let remoteSaveTimer = null;
let remoteLocationTimer = null;
let locationLabelRequestId = 0;
let isApplyingRemoteUserData = false;
let clientOrderUnsubscribe = null;
let clientKnownOrderStatuses = new Map();
let clientNotificationToast = null;
let clientNotificationTimer = null;
let clientAudioContext = null;
let userLocationWatchId = null;
let restaurantOrderUnsubscribe = null;
let restaurantKnownOrderIds = new Set();
let restaurantPendingAlertedKeys = new Set();
let restaurantNotificationToast = null;
let restaurantNotificationTimer = null;
let restaurantAudioContext = null;
const RESTAURANT_ORDER_STATUSES = [
  ["pending", "Nouvelle commande"],
  ["accepted", "Acceptee"],
  ["preparing", "En preparation"],
  ["ready", "Prete"],
  ["delivering", "Livreur en route"],
  ["completed", "Terminee"],
  ["cancelled", "Annulee"],
  ["refused", "Refusee"],
];
const CLIENT_STATUS_NOTIFICATIONS = {
  pending: ["Commande recue", "Ta commande a bien ete envoyee au restaurant."],
  accepted: ["Commande en cours de traitement", "Le restaurant a accepte ta commande."],
  preparing: ["Commande en preparation", "Le restaurant prepare ta commande."],
  ready: ["Commande prete", "Ta commande est prete pour le livreur."],
  delivering: ["Livreur en route", "Le livreur est en route vers toi."],
  completed: ["Commande livree", "Ta commande est marquee comme livree."],
  cancelled: ["Commande annulee", "La commande a ete annulee."],
  refused: ["Commande refusee", "Le restaurant a refuse la commande."],
};
const RESTAURANT_CREDENTIALS = [
  {
    login: "burgerco",
    password: "burger2026",
    restaurantId: "burger-and-co-bamako",
    label: "Burger & Co Bamako",
  },
  {
    login: "brooklyn",
    password: "brooklyn2026",
    restaurantId: "brooklyn-burger-bamako",
    label: "Brooklyn Burger",
  },
  {
    login: "sigma",
    password: "sigma2026",
    restaurantId: "sigma-burgers-bamako",
    label: "Sigma Burgers",
  },
  {
    login: "nicecream",
    password: "nice2026",
    restaurantId: "nice-cream-bamako",
    label: "N'ice Cream",
  },
  {
    login: "daguido",
    password: "guido2026",
    restaurantId: "da-guido-pizza-bamako",
    label: "Pizzeria Da Guido",
  },
];
const INTEGRATION_MODULES = [
  {
    name: "Supabase",
    status: "Pret a connecter",
    use: "Base de donnees, comptes clients/restaurants/livreurs, stockage des infos.",
  },
  {
    name: "Stripe",
    status: "Paiement carte",
    use: "Paiements reels par carte, Apple Pay, Google Pay et commissions.",
  },
  {
    name: "GitHub",
    status: "Sauvegarde code",
    use: "Sauvegarder le code et revenir en arriere si une modification casse l'app.",
  },
  {
    name: "Expo",
    status: "Mobile",
    use: "Tester sur telephone et preparer Android/iPhone.",
  },
  {
    name: "Vercel",
    status: "Web",
    use: "Heberger le site, le tableau restaurant et l'admin.",
  },
  {
    name: "Cloudinary",
    status: "Images",
    use: "Stocker et optimiser les photos des plats et restaurants.",
  },
  {
    name: "Figma",
    status: "Design",
    use: "Faire les maquettes propres de l'application.",
  },
  {
    name: "Google Drive",
    status: "Documents",
    use: "Garder les logos, menus, fichiers et documents restaurants.",
  },
  {
    name: "Render",
    status: "API",
    use: "Heberger un serveur/API pour paiements et automatisations.",
  },
];

const categoryRow = document.querySelector("#categoryRow");
const restaurantList = document.querySelector("#restaurantList");
const searchInput = document.querySelector("#searchInput");
const resetButton = document.querySelector("#resetButton");
const useLocationButton = document.querySelector("#useLocationButton");
const locationLabel = document.querySelector("#locationLabel");
const onboardingScreen = document.querySelector("#onboardingScreen");
const quickSignupPanel = document.querySelector("#quickSignupPanel");
const clientLoginPanel = document.querySelector("#clientLoginPanel");
const manualSignupPanel = document.querySelector("#manualSignupPanel");
const restaurantLoginPanel = document.querySelector("#restaurantLoginPanel");
const quickSignupStatus = document.querySelector("#quickSignupStatus");
const clientLoginButton = document.querySelector("#clientLoginButton");
const manualSignupButton = document.querySelector("#manualSignupButton");
const restaurantLoginButton = document.querySelector("#restaurantLoginButton");
const backToQuickSignup = document.querySelector("#backToQuickSignup");
const backToQuickSignupFromLogin = document.querySelector("#backToQuickSignupFromLogin");
const backToQuickSignupFromRestaurant = document.querySelector("#backToQuickSignupFromRestaurant");
const onboardingForm = document.querySelector("#onboardingForm");
const clientLoginForm = document.querySelector("#clientLoginForm");
const restaurantCredentialForm = document.querySelector("#restaurantCredentialForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginStatus = document.querySelector("#loginStatus");
const restaurantLoginId = document.querySelector("#restaurantLoginId");
const restaurantLoginPassword = document.querySelector("#restaurantLoginPassword");
const restaurantLoginStatus = document.querySelector("#restaurantLoginStatus");
const googleSignup = document.querySelector("#googleSignup");
const skipOnboarding = document.querySelector("#skipOnboarding");
const signupFirstName = document.querySelector("#signupFirstName");
const signupLastName = document.querySelector("#signupLastName");
const signupEmail = document.querySelector("#signupEmail");
const signupPhone = document.querySelector("#signupPhone");
const signupBirthdate = document.querySelector("#signupBirthdate");
const signupAddress = document.querySelector("#signupAddress");
const signupPassword = document.querySelector("#signupPassword");
const signupStatus = document.querySelector("#signupStatus");
const cartPanel = document.querySelector("#cartPanel");
const openCart = document.querySelector("#openCart");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const subtotal = document.querySelector("#subtotal");
const delivery = document.querySelector("#delivery");
const deliveryEstimate = document.querySelector("#deliveryEstimate");
const total = document.querySelector("#total");
const cartCount = document.querySelector("#cartCount");
const checkoutButton = document.querySelector("#checkoutButton");
const orderModal = document.querySelector("#orderModal");
const closeModal = document.querySelector("#closeModal");
const orderMessage = document.querySelector("#orderMessage");
const orderTracking = document.querySelector("#orderTracking");
const authButton = document.querySelector("#authButton");
const authModal = document.querySelector("#authModal");
const closeAuthModal = document.querySelector("#closeAuthModal");
const authForm = document.querySelector("#authForm");
const authName = document.querySelector("#authName");
const authPhone = document.querySelector("#authPhone");
const authAddress = document.querySelector("#authAddress");
const authStatus = document.querySelector("#authStatus");
const logoutButton = document.querySelector("#logoutButton");
const orderHistory = document.querySelector("#orderHistory");
const paymentForm = document.querySelector("#paymentForm");
const deliveryAddress = document.querySelector("#deliveryAddress");
const deliveryPhone = document.querySelector("#deliveryPhone");
const paymentMethod = document.querySelector("#paymentMethod");
const cartNotice = document.querySelector("#cartNotice");
const restaurantEntryButton = document.querySelector("#restaurantEntryButton");
const restaurantDashboard = document.querySelector("#restaurantDashboard");
const adminDashboard = document.querySelector("#adminDashboard");
const appShell = document.querySelector(".app-shell");

const STORAGE_KEY = "bko-eats-state-v1";
const RESTAURANT_ORDERS_KEY = "bko-eats-restaurant-orders-v1";
const RESTAURANT_ORDER_CHANNEL = "bko-eats-restaurant-orders";
const STRIPE_PENDING_ORDER_KEY = "bko-eats-stripe-pending-order-v1";
const PLATFORM_COMMISSION_RATE = 0.2;
const WALLET_RESET_ONCE_KEY = "bko-eats-wallet-reset-2026-05-19-v1";
const restaurantOrderChannel =
  "BroadcastChannel" in window ? new BroadcastChannel(RESTAURANT_ORDER_CHANNEL) : null;

function resetLocalWalletsOnce() {
  if (localStorage.getItem(WALLET_RESET_ONCE_KEY)) return;

  localStorage.removeItem(RESTAURANT_ORDERS_KEY);
  localStorage.setItem(WALLET_RESET_ONCE_KEY, "done");
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;

    state.cart = saved.cart || {};
    state.userReviews = saved.userReviews || {};
    state.currentUser = null;
    state.userProfile = null;
    state.orders = saved.orders || [];
    state.userLocation = saved.userLocation || null;
    state.onboardingDismissed = false;
    state.loginIntent = "client";
    state.favorites = {
      ...state.favorites,
      ...(saved.favorites || {}),
    };
    state.payment = { ...state.payment, ...(saved.payment || {}) };
    sanitizeSavedCart();
    sanitizeFavorites();
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function sanitizeSavedCart() {
  const currentItems = Object.fromEntries(getAllItems().map((item) => [item.id, item]));
  state.cart = Object.fromEntries(
    Object.entries(state.cart)
      .map(([itemId, savedItem]) => {
        const currentItem = currentItems[itemId];
        if (!currentItem) return null;

        return [
          itemId,
          {
            ...currentItem,
            quantity: Math.max(1, Number(savedItem.quantity) || 1),
          },
        ];
      })
      .filter(Boolean),
  );
}

function sanitizeFavorites() {
  const restaurantsById = new Set(restaurants.map((restaurant) => restaurant.id));
  const itemsById = new Set(getAllItems().map((item) => item.id));

  state.favorites.restaurants = [...new Set(state.favorites.restaurants || [])].filter((id) =>
    restaurantsById.has(id),
  );
  state.favorites.items = [...new Set(state.favorites.items || [])].filter((id) => itemsById.has(id));
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      cart: state.cart,
      userReviews: state.userReviews,
      currentUser: state.currentUser,
      userProfile: state.userProfile,
      orders: state.orders,
      userLocation: state.userLocation,
      onboardingDismissed: state.onboardingDismissed,
      favorites: state.favorites,
      payment: state.payment,
    }),
  );
  scheduleUserDataSave();
}

function cleanFirestoreData(value) {
  if (Array.isArray(value)) {
    return value.map(cleanFirestoreData);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, entryValue]) => entryValue !== undefined)
        .map(([key, entryValue]) => [key, cleanFirestoreData(entryValue)]),
    );
  }

  return value;
}

function canSaveClientData() {
  return Boolean(
    state.currentUser?.uid &&
      (state.currentUser.role === "client" || state.userProfile?.role === "client") &&
      getFirebaseConfig() &&
      !isApplyingRemoteUserData,
  );
}

function buildClientUserDocument(extra = {}) {
  return cleanFirestoreData({
    uid: state.currentUser.uid,
    email: state.currentUser.email || "",
    firstName: state.currentUser.firstName || "",
    lastName: state.currentUser.lastName || "",
    name: state.currentUser.name || "",
    phone: state.currentUser.phone || "",
    address: state.currentUser.address || "",
    birthdate: state.currentUser.birthdate || "",
    photoURL: state.currentUser.photoURL || "",
    provider: state.currentUser.provider || "Email",
    role: "client",
    restaurantId: "",
    cart: state.cart,
    userReviews: state.userReviews,
    orders: state.orders,
    favorites: state.favorites,
    payment: state.payment,
    updatedAtLocal: Date.now(),
    ...extra,
  });
}

function scheduleUserDataSave() {
  if (!canSaveClientData()) return;

  window.clearTimeout(remoteSaveTimer);
  remoteSaveTimer = window.setTimeout(() => {
    saveUserDataToFirestore();
  }, 700);
}

async function saveUserDataToFirestore(extra = {}) {
  if (!canSaveClientData()) return;

  try {
    const client = await loadFirebaseAuthClient();
    await client.setDoc(
      client.doc(client.db, "users", state.currentUser.uid),
      {
        ...buildClientUserDocument(extra),
        updatedAt: client.serverTimestamp(),
      },
      { merge: true },
    );
  } catch {
    // Local data remains saved even if the network is unavailable.
  }
}

function applyClientDocument(firebaseUser, profile = {}, provider = "Email") {
  isApplyingRemoteUserData = true;
  const displayName = profile.name || firebaseUser.displayName || "Client Bko Eats";
  const nameParts = getNameParts(displayName);

  state.currentUser = {
    uid: firebaseUser.uid,
    email: profile.email || firebaseUser.email || "",
    firstName: profile.firstName || nameParts.firstName,
    lastName: profile.lastName || nameParts.lastName,
    name: displayName,
    phone: profile.phone || firebaseUser.phoneNumber || "",
    address: profile.address || "",
    birthdate: profile.birthdate || "",
    photoURL: profile.photoURL || firebaseUser.photoURL || "",
    provider: profile.provider || provider,
    role: profile.role || "client",
    restaurantId: profile.restaurantId || "",
  };
  state.userProfile = {
    uid: firebaseUser.uid,
    email: state.currentUser.email,
    role: state.currentUser.role,
    restaurantId: state.currentUser.restaurantId,
  };

  if (state.currentUser.role === "client") {
    state.cart = profile.cart || {};
    state.userReviews = profile.userReviews || {};
    state.orders = profile.orders || [];
    state.favorites = {
      ...state.favorites,
      ...(profile.favorites || {}),
    };
    state.payment = {
      ...state.payment,
      ...(profile.payment || {}),
    };
    sanitizeSavedCart();
    sanitizeFavorites();
  }

  state.onboardingDismissed = true;
  state.loginIntent = state.currentUser.role === "restaurant" ? "restaurant" : "client";
  isApplyingRemoteUserData = false;
  saveState();
  renderOnboarding();
  renderAccount();
  renderPaymentForm();

  if (state.currentUser.role === "restaurant" && state.currentUser.restaurantId) {
    stopClientOrderRealtime();
    openRestaurantDashboard(state.currentUser.restaurantId);
  } else {
    closeRestaurantDashboard();
    rememberClientOrderStatuses();
    syncClientOrdersFromRestaurantInbox();
    startClientOrderRealtime();
  }
}

function getInitials(name) {
  if (!name) return "SF";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function renderOnboarding() {
  const shouldShow = !state.currentUser && !state.onboardingDismissed;
  onboardingScreen.classList.toggle("open", shouldShow);
  document.body.classList.toggle("onboarding-open", shouldShow);
  if (shouldShow) showOnboardingPanel("quick");
}

function completeSignup(user) {
  state.currentUser = {
    role: "client",
    ...user,
    createdAt: Date.now(),
  };
  state.onboardingDismissed = true;
  state.payment.phone = state.payment.phone || state.currentUser.phone || "";
  state.payment.address = state.payment.address || state.currentUser.address || "";
  setStatus(signupStatus, "");
  saveState();
  renderOnboarding();
  renderAccount();
  renderPaymentForm();
}

function setStatus(element, message = "", type = "info") {
  if (!element) return;

  element.textContent = message;
  element.classList.toggle("error", type === "error");
  element.classList.toggle("success", type !== "error" && Boolean(message));
}

function getFirebaseConfig() {
  const config = window.BKO_EATS_FIREBASE_CONFIG;
  const requiredFields = ["apiKey", "authDomain", "projectId", "appId"];
  const isConfigured =
    config &&
    requiredFields.every((field) => typeof config[field] === "string" && config[field].trim().length > 0);

  return isConfigured ? config : null;
}

function getNameParts(displayName) {
  const parts = (displayName || "Client Google").trim().split(" ").filter(Boolean);
  return {
    firstName: parts[0] || "Client",
    lastName: parts.slice(1).join(" ") || "Google",
  };
}

async function completeGoogleSignup(firebaseUser) {
  await handleAuthenticatedFirebaseUser(firebaseUser);
}

async function handleAuthenticatedFirebaseUser(firebaseUser) {
  let userProfile = {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
    role: "client",
    restaurantId: "",
  };

  try {
    const client = await loadFirebaseAuthClient();
    const userRef = client.doc(client.db, "users", firebaseUser.uid);
    const userSnap = await client.getDoc(userRef);
    const storedProfile = userSnap.exists() ? userSnap.data() : null;

    if (!storedProfile || (state.loginIntent === "restaurant" && storedProfile.role !== "restaurant")) {
      userProfile = await createOrUpgradeFirebaseUser(client, firebaseUser, storedProfile);
    } else {
      userProfile = storedProfile;
    }
  } catch (error) {
    if (state.loginIntent === "restaurant") {
      throw error;
    }
  }

  applyClientDocument(firebaseUser, userProfile, "Google");
}

async function createOrUpgradeFirebaseUser(client, firebaseUser, existingProfile) {
  const baseProfile = {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
    role: state.loginIntent === "restaurant" ? "restaurant" : "client",
    restaurantId: state.loginIntent === "restaurant" ? `resto_${firebaseUser.uid.slice(0, 8)}` : "",
    updatedAt: client.serverTimestamp(),
  };

  if (existingProfile?.role === "restaurant") {
    return existingProfile;
  }

  await client.setDoc(
    client.doc(client.db, "users", firebaseUser.uid),
    {
      ...existingProfile,
      ...baseProfile,
      cart: existingProfile?.cart || state.cart,
      userReviews: existingProfile?.userReviews || state.userReviews,
      orders: existingProfile?.orders || state.orders,
      favorites: existingProfile?.favorites || state.favorites,
      payment: existingProfile?.payment || state.payment,
      createdAt: existingProfile?.createdAt || client.serverTimestamp(),
    },
    { merge: true },
  );

  if (baseProfile.role === "restaurant") {
    await client.setDoc(
      client.doc(client.db, "restaurants", baseProfile.restaurantId),
      {
        id: baseProfile.restaurantId,
        name: "Nouveau restaurant",
        ownerUid: firebaseUser.uid,
        image: "",
        address: "Bamako",
        phone: "",
        isOpen: true,
        preparationTime: 25,
        createdAt: client.serverTimestamp(),
        updatedAt: client.serverTimestamp(),
      },
      { merge: true },
    );
  }

  return baseProfile;
}

async function loadFirebaseAuthClient() {
  if (firebaseAuthClient) return firebaseAuthClient;

  const config = getFirebaseConfig();
  if (!config) {
    throw new Error("firebase-config-missing");
  }

  const [{ initializeApp }, authModule, firestoreModule] = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-auth.js`),
    import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore.js`),
  ]);

  const app = initializeApp(config);
  const auth = authModule.getAuth(app);
  const db = firestoreModule.getFirestore(app);
  auth.useDeviceLanguage();
  await authModule.setPersistence(auth, authModule.browserLocalPersistence);

  const googleProvider = new authModule.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });

  firebaseAuthClient = {
    auth,
    db,
    googleProvider,
    addDoc: firestoreModule.addDoc,
    collection: firestoreModule.collection,
    deleteDoc: firestoreModule.deleteDoc,
    doc: firestoreModule.doc,
    getDoc: firestoreModule.getDoc,
    getDocs: firestoreModule.getDocs,
    getRedirectResult: authModule.getRedirectResult,
    onSnapshot: firestoreModule.onSnapshot,
    onAuthStateChanged: authModule.onAuthStateChanged,
    createUserWithEmailAndPassword: authModule.createUserWithEmailAndPassword,
    browserPopupRedirectResolver: authModule.browserPopupRedirectResolver,
    query: firestoreModule.query,
    serverTimestamp: firestoreModule.serverTimestamp,
    setDoc: firestoreModule.setDoc,
    signInWithEmailAndPassword: authModule.signInWithEmailAndPassword,
    signInWithPopup: authModule.signInWithPopup,
    signInWithRedirect: authModule.signInWithRedirect,
    signOut: authModule.signOut,
    updateDoc: firestoreModule.updateDoc,
    where: firestoreModule.where,
  };

  return firebaseAuthClient;
}

function isMobileBrowser() {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function isEmbeddedAppBrowser() {
  const ua = navigator.userAgent || "";
  return Boolean(window.BKO_EATS_EXPO_GO || window.ReactNativeWebView) || /\bwv\b|WebView|Expo|FBAN|FBAV|Instagram/i.test(ua);
}

function openGoogleLoginInSystemBrowser() {
  const loginUrl = `${window.location.origin}${window.location.pathname}?login=google`;

  if (window.ReactNativeWebView?.postMessage) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "open-external-auth",
        url: loginUrl,
      }),
    );
    return true;
  }

  window.open(loginUrl, "_blank", "noopener,noreferrer");
  return true;
}

function getGoogleAuthErrorMessage(error) {
  if (error?.message === "firebase-config-missing") {
    return "Google n'est pas encore configure. Ajoute tes cles Firebase dans firebase-config.js.";
  }

  const hostname = window.location.hostname;
  const rawMessage = `${error?.code || ""} ${error?.message || ""}`;
  if (/disallowed_useragent|webview|embedded/i.test(rawMessage)) {
    return "Google bloque la connexion dans Expo Go/WebView. Ouvre Bko Eats dans Safari/Chrome ou utilise la connexion email.";
  }

  const errorMessages = {
    "auth/unauthorized-domain": `Domaine non autorise dans Firebase. Ajoute ${hostname} dans Authentication > Settings > Authorized domains.`,
    "auth/popup-closed-by-user": "Fenetre Google fermee avant la fin de la connexion.",
    "auth/popup-blocked": "Popup Google bloquee par le navigateur. Autorise les popups ou reessaie.",
    "auth/cancelled-popup-request": "Connexion Google annulee. Reessaie dans quelques secondes.",
    "auth/operation-not-allowed": "Google n'est pas active dans Firebase Authentication > Sign-in method.",
    "auth/network-request-failed": "Connexion reseau impossible. Verifie internet puis reessaie.",
  };

  return errorMessages[error?.code] || `Connexion Google impossible: ${error?.code || "erreur inconnue"}.`;
}

async function signInWithGoogle() {
  setStatus(quickSignupStatus, "Connexion Google...", "success");

  try {
    const client = await loadFirebaseAuthClient();

    if (isEmbeddedAppBrowser()) {
      setStatus(quickSignupStatus, "Google s'ouvre dans le navigateur securise...", "success");
      openGoogleLoginInSystemBrowser();
      return;
    }

    if (isMobileBrowser()) {
      await client.signInWithRedirect(client.auth, client.googleProvider, client.browserPopupRedirectResolver);
      return;
    }

    try {
      const result = await client.signInWithPopup(client.auth, client.googleProvider, client.browserPopupRedirectResolver);
      await completeGoogleSignup(result.user);
    } catch (popupError) {
      if (
        popupError.code === "auth/popup-blocked" ||
        popupError.code === "auth/cancelled-popup-request" ||
        popupError.code === "auth/popup-closed-by-user"
      ) {
        await client.signInWithRedirect(client.auth, client.googleProvider, client.browserPopupRedirectResolver);
        return;
      }
      throw popupError;
    }
  } catch (error) {
    setStatus(quickSignupStatus, getGoogleAuthErrorMessage(error), "error");
  }
}

async function initFirebaseGoogleAuth() {
  if (isAdminRoute()) return;
  if (!getFirebaseConfig()) return;

  try {
    const client = await loadFirebaseAuthClient();

    try {
      const redirectResult = await client.getRedirectResult(client.auth);
      if (redirectResult?.user) {
        await completeGoogleSignup(redirectResult.user);
      }
    } catch (redirectError) {
      setStatus(quickSignupStatus, getGoogleAuthErrorMessage(redirectError), "error");
    }

    client.onAuthStateChanged(client.auth, async (firebaseUser) => {
      if (!firebaseUser || state.adminMode || state.currentUser?.uid === firebaseUser.uid) return;

      try {
        await handleAuthenticatedFirebaseUser(firebaseUser);
        setStatus(quickSignupStatus, "Connexion Google reussie.", "success");
      } catch (authError) {
        setStatus(quickSignupStatus, getGoogleAuthErrorMessage(authError), "error");
      }
    });
  } catch (error) {
    setStatus(quickSignupStatus, getGoogleAuthErrorMessage(error), "error");
  }
}

function showOnboardingPanel(panel) {
  quickSignupPanel.hidden = panel !== "quick";
  clientLoginPanel.hidden = panel !== "login";
  manualSignupPanel.hidden = panel !== "manual";
  restaurantLoginPanel.hidden = panel !== "restaurant";
  setStatus(quickSignupStatus, "");
  setStatus(loginStatus, "");
  setStatus(signupStatus, "");
  setStatus(restaurantLoginStatus, "");
}

function showManualSignup(show) {
  if (show) state.loginIntent = "client";
  showOnboardingPanel(show ? "manual" : "quick");
}

function showClientLogin(show) {
  if (show) state.loginIntent = "client";
  showOnboardingPanel(show ? "login" : "quick");
}

function showRestaurantLogin(show) {
  if (!show) state.loginIntent = "client";
  showOnboardingPanel(show ? "restaurant" : "quick");
}

function getFirebaseAuthErrorMessage(error) {
  const messages = {
    "auth/email-already-in-use": "Ce compte existe deja. Utilise Se connecter.",
    "auth/invalid-email": "Email invalide.",
    "auth/invalid-credential": "Email ou mot de passe incorrect.",
    "auth/missing-password": "Entre ton mot de passe.",
    "auth/operation-not-allowed": "Active Email/Password dans Firebase Authentication > Sign-in method.",
    "auth/user-not-found": "Aucun compte trouve avec cet email.",
    "auth/wrong-password": "Mot de passe incorrect.",
    "auth/weak-password": "Mot de passe trop faible. Mets au moins 6 caracteres.",
    "auth/network-request-failed": "Connexion reseau impossible. Verifie internet puis reessaie.",
  };

  return messages[error.code] || `Erreur Firebase: ${error.code || "inconnue"}.`;
}

async function createClientAccountWithEmail(profile) {
  setStatus(signupStatus, "Creation du compte...", "success");

  try {
    const client = await loadFirebaseAuthClient();
    const credential = await client.createUserWithEmailAndPassword(client.auth, profile.email, profile.password);
    const firebaseUser = credential.user;
    const userDocument = {
      uid: firebaseUser.uid,
      email: profile.email,
      firstName: profile.firstName,
      lastName: profile.lastName,
      name: `${profile.firstName} ${profile.lastName}`,
      phone: profile.phone,
      address: profile.address,
      birthdate: profile.birthdate,
      provider: "Email",
      role: "client",
      restaurantId: "",
      cart: state.cart,
      userReviews: state.userReviews,
      orders: state.orders,
      favorites: state.favorites,
      payment: {
        ...state.payment,
        address: state.payment.address || profile.address,
        phone: state.payment.phone || profile.phone,
      },
      createdAt: client.serverTimestamp(),
      updatedAt: client.serverTimestamp(),
    };

    await client.setDoc(
      client.doc(client.db, "users", firebaseUser.uid),
      {
        ...cleanFirestoreData({
          ...userDocument,
          createdAt: undefined,
          updatedAt: undefined,
        }),
        createdAt: client.serverTimestamp(),
        updatedAt: client.serverTimestamp(),
      },
      { merge: true },
    );
    applyClientDocument(firebaseUser, userDocument, "Email");
    setStatus(signupStatus, "");
  } catch (error) {
    if (error.message === "firebase-config-missing") {
      setStatus(signupStatus, "Firebase n'est pas configure. Ajoute les cles dans firebase-config.js.", "error");
      return;
    }

    setStatus(signupStatus, getFirebaseAuthErrorMessage(error), "error");
  }
}

async function loginClientWithEmail(email, password) {
  setStatus(loginStatus, "Connexion...", "success");

  try {
    const client = await loadFirebaseAuthClient();
    const credential = await client.signInWithEmailAndPassword(client.auth, email, password);
    const userRef = client.doc(client.db, "users", credential.user.uid);
    const userSnap = await client.getDoc(userRef);
    const profile = userSnap.exists()
      ? userSnap.data()
      : {
          uid: credential.user.uid,
          email: credential.user.email || email,
          role: "client",
          provider: "Email",
        };

    if (profile.role === "restaurant") {
      setStatus(loginStatus, "Ce compte est un restaurant. Utilise Espace restaurant.", "error");
      return;
    }

    applyClientDocument(credential.user, profile, "Email");
    setStatus(loginStatus, "");
  } catch (error) {
    if (error.message === "firebase-config-missing") {
      setStatus(loginStatus, "Firebase n'est pas configure. Ajoute les cles dans firebase-config.js.", "error");
      return;
    }

    setStatus(loginStatus, getFirebaseAuthErrorMessage(error), "error");
  }
}

function findRestaurantCredential(login, password) {
  const normalizedLogin = login.trim().toLowerCase();
  return RESTAURANT_CREDENTIALS.find(
    (credential) => credential.login === normalizedLogin && credential.password === password,
  );
}

async function connectRestaurantCredentialToFirebase(credential) {
  if (!getFirebaseConfig()) return false;

  try {
    const client = await loadFirebaseAuthClient();
    const email = `${credential.login}@bko-eats.local`;
    let firebaseCredential;

    try {
      firebaseCredential = await client.signInWithEmailAndPassword(client.auth, email, credential.password);
    } catch (signInError) {
      if (signInError.code !== "auth/user-not-found" && signInError.code !== "auth/invalid-credential") {
        throw signInError;
      }
      firebaseCredential = await client.createUserWithEmailAndPassword(client.auth, email, credential.password);
    }

    const firebaseUser = firebaseCredential.user;
    const restaurant = getCatalogRestaurant(credential.restaurantId);
    await client.setDoc(
      client.doc(client.db, "users", firebaseUser.uid),
      {
        uid: firebaseUser.uid,
        email,
        role: "restaurant",
        restaurantId: credential.restaurantId,
        updatedAt: client.serverTimestamp(),
      },
      { merge: true },
    );
    await client.setDoc(
      client.doc(client.db, "restaurants", credential.restaurantId),
      {
        id: credential.restaurantId,
        name: restaurant?.name || credential.label,
        ownerUid: firebaseUser.uid,
        image: restaurant?.image || "",
        address: restaurant?.address || "Bamako",
        phone: restaurant?.phone || "",
        isOpen: true,
        preparationTime: parseTimeRange(restaurant?.time || "25-35 min").minutes,
        updatedAt: client.serverTimestamp(),
      },
      { merge: true },
    );

    state.currentUser = {
      ...state.currentUser,
      uid: firebaseUser.uid,
      email,
      provider: "RestaurantCodeFirebase",
    };
    state.userProfile = {
      uid: firebaseUser.uid,
      email,
      role: "restaurant",
      restaurantId: credential.restaurantId,
    };
    saveState();
    return true;
  } catch {
    return false;
  }
}

async function loginRestaurantWithCredentials(login, password) {
  const credential = findRestaurantCredential(login, password);
  if (!credential) {
    setStatus(restaurantLoginStatus, "Identifiant ou mot de passe incorrect.", "error");
    return;
  }

  const user = {
    uid: `restaurant-${credential.restaurantId}`,
    name: credential.label,
    email: `${credential.login}@bko-eats.local`,
    phone: "",
    address: "",
    role: "restaurant",
    restaurantId: credential.restaurantId,
    provider: "RestaurantCode",
  };

  state.currentUser = user;
  state.userProfile = {
    uid: user.uid,
    email: user.email,
    role: "restaurant",
    restaurantId: credential.restaurantId,
  };
  state.loginIntent = "restaurant";
  state.onboardingDismissed = true;
  saveState();
  setStatus(restaurantLoginStatus, "Connexion restaurant...", "success");
  await connectRestaurantCredentialToFirebase(credential);
  renderOnboarding();
  renderAccount();
  await openRestaurantDashboard(credential.restaurantId);
  requestRestaurantNotificationPermission();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    })[char],
  );
}

function getStatusLabel(status) {
  return RESTAURANT_ORDER_STATUSES.find(([value]) => value === status)?.[1] || status;
}

function normalizeRestaurantOrderStatus(status) {
  if (!status || status === ORDER_STEPS[0].label || status === "Commande recue") return "pending";
  if (status === ORDER_STEPS[1].label || status === "En preparation") return "preparing";
  if (status === ORDER_STEPS[2].label || status === "En route") return "delivering";
  if (status === ORDER_STEPS[3].label || status === "Livree") return "completed";
  const statusFromLabel = RESTAURANT_ORDER_STATUSES.find(([, label]) => label === status);
  if (statusFromLabel) return statusFromLabel[0];
  return RESTAURANT_ORDER_STATUSES.some(([value]) => value === status) ? status : "pending";
}

function getRestaurantOrderKey(order) {
  return String(order?.id || order?.reference || order?.createdAt || "");
}

function getRestaurantPendingOrders() {
  return state.restaurantOrders.filter((order) => normalizeRestaurantOrderStatus(order.status) === "pending");
}

function getLocalRestaurantInbox() {
  try {
    const saved = JSON.parse(localStorage.getItem(RESTAURANT_ORDERS_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    localStorage.removeItem(RESTAURANT_ORDERS_KEY);
    return [];
  }
}

function saveLocalRestaurantInbox(orders) {
  localStorage.setItem(RESTAURANT_ORDERS_KEY, JSON.stringify(orders));
  restaurantOrderChannel?.postMessage({ type: "restaurant-orders-updated" });
}

function normalizeLocalRestaurantOrder(order) {
  const createdAt =
    typeof order.createdAt?.seconds === "number"
      ? order.createdAt.seconds * 1000
      : Number(order.createdAt) || Date.now();
  const updatedAt =
    typeof order.updatedAt?.seconds === "number"
      ? order.updatedAt.seconds * 1000
      : Number(order.updatedAt || 0);

  return {
    ...order,
    id: order.id || `${order.reference || "BKO"}-${order.restaurantId || "restaurant"}`,
    status: normalizeRestaurantOrderStatus(order.status),
    createdAt,
    updatedAt,
    deliveryAddress: order.deliveryAddress || order.clientAddress || order.delivery?.address || "",
    deliveryLocation: order.deliveryLocation || order.delivery?.location || null,
    items: Array.isArray(order.items) ? order.items : [],
  };
}

function getRestaurantInboxOrders(restaurantId) {
  return getLocalRestaurantInbox()
    .map(normalizeLocalRestaurantOrder)
    .filter((order) => order.restaurantId === restaurantId)
    .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
}

function buildLocalRestaurantOrders(restaurantId) {
  const ordersById = new Map();

  getRestaurantInboxOrders(restaurantId).forEach((order) => {
    ordersById.set(getRestaurantOrderKey(order), order);
  });

  state.orders
    .filter((order) => order.items?.some((item) => item.restaurantId === restaurantId))
    .map((order) => normalizeLocalRestaurantOrder({
      ...order,
      id: `${order.reference}-${restaurantId}`,
      restaurantId,
      clientName: order.customer?.name || state.currentUser?.name || "Client",
      clientPhone: order.delivery?.phone || "",
      clientAddress: order.delivery?.address || "",
      items: order.items.filter((item) => item.restaurantId === restaurantId),
    }))
    .forEach((order) => {
      if (!ordersById.has(getRestaurantOrderKey(order))) {
        ordersById.set(getRestaurantOrderKey(order), order);
      }
    });

  return [...ordersById.values()].sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
}

function rememberRestaurantOrders() {
  restaurantKnownOrderIds = new Set(state.restaurantOrders.map(getRestaurantOrderKey).filter(Boolean));
}

function ensureRestaurantNotificationToast() {
  if (restaurantNotificationToast) return restaurantNotificationToast;

  restaurantNotificationToast = document.createElement("div");
  restaurantNotificationToast.className = "restaurant-notification-toast";
  restaurantNotificationToast.setAttribute("role", "status");
  restaurantNotificationToast.innerHTML = `
    <div class="notification-pulse" aria-hidden="true"></div>
    <div>
      <strong></strong>
      <span></span>
    </div>
    <button type="button" aria-label="Fermer la notification">x</button>
  `;
  restaurantNotificationToast.querySelector("button").addEventListener("click", () => {
    restaurantNotificationToast.classList.remove("show");
  });
  document.body.appendChild(restaurantNotificationToast);
  return restaurantNotificationToast;
}

function showRestaurantNotificationToast(title, message) {
  const toast = ensureRestaurantNotificationToast();
  toast.querySelector("strong").textContent = title;
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");

  window.clearTimeout(restaurantNotificationTimer);
  restaurantNotificationTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 7000);
}

function playRestaurantNotificationSound() {
  if ("vibrate" in navigator) {
    navigator.vibrate([120, 60, 120]);
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    restaurantAudioContext = restaurantAudioContext || new AudioContext();
    if (restaurantAudioContext.state === "suspended") {
      restaurantAudioContext.resume();
    }

    [0, 0.18].forEach((delay) => {
      const oscillator = restaurantAudioContext.createOscillator();
      const gain = restaurantAudioContext.createGain();
      const start = restaurantAudioContext.currentTime + delay;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(delay ? 740 : 560, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.16, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.14);

      oscillator.connect(gain);
      gain.connect(restaurantAudioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.16);
    });
  } catch {
    // Audio is optional; browsers can block it until the user interacts.
  }
}

function markRestaurantOrdersAlerted(orders) {
  orders.forEach((order) => {
    const key = getRestaurantOrderKey(order);
    if (key) restaurantPendingAlertedKeys.add(key);
  });
}

function showBrowserRestaurantNotification(order, count = 1) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  const total = Number(order?.total || 0);
  const title = count > 1 ? `${count} nouvelles commandes` : "Nouvelle commande Bko Eats";
  const body =
    count > 1
      ? `${state.restaurantProfile?.name || "Restaurant"} a recu plusieurs commandes.`
      : `${order.clientName || "Client"} - ${money.format(total)} - ${order.items?.length || 0} article(s)`;

  const notification = new Notification(title, {
    body,
    icon: "icon.svg",
    badge: "icon.svg",
    tag: `bko-eats-${state.restaurantProfile?.id || "restaurant"}-${getRestaurantOrderKey(order)}`,
  });

  notification.onclick = () => {
    window.focus();
    state.restaurantTab = "orders";
    if (state.restaurantMode) renderRestaurantDashboard();
    notification.close();
  };
}

function notifyRestaurantNewOrders(orders) {
  if (!orders.length) return;

  markRestaurantOrdersAlerted(orders);
  const firstOrder = orders[0];
  const message =
    orders.length > 1
      ? `${orders.length} nouvelles commandes viennent d'arriver.`
      : `${firstOrder.clientName || "Client"} - ${money.format(Number(firstOrder.total || 0))} - a traiter maintenant`;

  showRestaurantNotificationToast("Nouvelle commande", message);
  playRestaurantNotificationSound();
  showBrowserRestaurantNotification(firstOrder, orders.length);
}

function notifyRestaurantPendingOrdersOnOpen() {
  const pendingOrders = getRestaurantPendingOrders().filter((order) => {
    const key = getRestaurantOrderKey(order);
    return key && !restaurantPendingAlertedKeys.has(key);
  });

  if (pendingOrders.length) {
    notifyRestaurantNewOrders(pendingOrders);
  }
}

function ensureClientNotificationToast() {
  if (clientNotificationToast) return clientNotificationToast;

  clientNotificationToast = document.createElement("div");
  clientNotificationToast.className = "restaurant-notification-toast client-notification-toast";
  clientNotificationToast.setAttribute("role", "status");
  clientNotificationToast.innerHTML = `
    <div class="notification-pulse" aria-hidden="true"></div>
    <div>
      <strong></strong>
      <span></span>
    </div>
    <button type="button" aria-label="Fermer la notification">x</button>
  `;
  clientNotificationToast.querySelector("button").addEventListener("click", () => {
    clientNotificationToast.classList.remove("show");
  });
  document.body.appendChild(clientNotificationToast);
  return clientNotificationToast;
}

function showClientNotificationToast(title, message) {
  const toast = ensureClientNotificationToast();
  toast.querySelector("strong").textContent = title;
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");

  window.clearTimeout(clientNotificationTimer);
  clientNotificationTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 7000);
}

function showBrowserClientNotification(title, body, tag) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  const notification = new Notification(title, {
    body,
    icon: "icon.svg",
    badge: "icon.svg",
    tag,
  });
  notification.onclick = () => {
    window.focus();
    notification.close();
  };
}

async function requestClientNotificationPermission(options = {}) {
  const quiet = Boolean(options.quiet);

  if (!("Notification" in window)) {
    if (!quiet) {
      showClientNotificationToast("Notifications indisponibles", "Ce navigateur ne supporte pas les notifications.");
    }
    return false;
  }

  if (Notification.permission === "default") {
    const permission = await Notification.requestPermission();
    if (!quiet) {
      showClientNotificationToast(
        permission === "granted" ? "Notifications activees" : "Notifications bloquees",
        permission === "granted"
          ? "Tu recevras une alerte a chaque etape de ta commande."
          : "Autorise les notifications dans le navigateur pour recevoir le suivi.",
      );
    }
    return permission === "granted";
  }

  if (!quiet) {
    showClientNotificationToast(
      Notification.permission === "granted" ? "Notifications actives" : "Notifications bloquees",
      Notification.permission === "granted"
        ? "Le suivi de commande peut t'envoyer des alertes."
        : "Va dans les reglages du navigateur pour les reactiver.",
    );
  }

  return Notification.permission === "granted";
}

function playClientNotificationFeedback() {
  if ("vibrate" in navigator) {
    navigator.vibrate([80, 40, 80]);
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    clientAudioContext = clientAudioContext || new AudioContext();
    if (clientAudioContext.state === "suspended") {
      clientAudioContext.resume();
    }

    const oscillator = clientAudioContext.createOscillator();
    const gain = clientAudioContext.createGain();
    const start = clientAudioContext.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(660, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.12, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);

    oscillator.connect(gain);
    gain.connect(clientAudioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.18);
  } catch {
    // Sound is optional; mobile browsers can block it.
  }
}

function getClientStatusNotification(status) {
  const normalized = normalizeRestaurantOrderStatus(status);
  return CLIENT_STATUS_NOTIFICATIONS[normalized];
}

function notifyClientOrderStatus(order, status) {
  const content = getClientStatusNotification(status);
  if (!content) return;

  const [title, message] = content;
  const reference = order.reference || order.id || "";
  const fullMessage = `${message} ${reference}`.trim();

  showClientNotificationToast(title, fullMessage);
  playClientNotificationFeedback();
  showBrowserClientNotification(title, fullMessage, `bko-eats-client-${reference || Date.now()}-${normalizeRestaurantOrderStatus(status)}`);
}

function rememberClientOrderStatuses() {
  clientKnownOrderStatuses = new Map(
    state.orders.map((order) => [order.reference || order.id, normalizeRestaurantOrderStatus(order.status)]).filter(([key]) => key),
  );
}

function syncClientOrdersFromRestaurantInbox() {
  if (!state.currentUser || state.currentUser.role === "restaurant") return;

  const inbox = getLocalRestaurantInbox().map(normalizeLocalRestaurantOrder);
  let changed = false;

  state.orders = state.orders.map((order) => {
    const relatedOrders = inbox.filter(
      (restaurantOrder) =>
        restaurantOrder.reference === order.reference &&
        (!restaurantOrder.clientId ||
          !state.currentUser.uid ||
          restaurantOrder.clientId === state.currentUser.uid ||
          restaurantOrder.clientId === "local-client"),
    );

    if (!relatedOrders.length) return order;

    const latestStatusOrder = relatedOrders.sort((a, b) => Number(b.updatedAt || b.createdAt || 0) - Number(a.updatedAt || a.createdAt || 0))[0];
    const nextStatus = normalizeRestaurantOrderStatus(latestStatusOrder.status);
    const previousStatus = clientKnownOrderStatuses.get(order.reference) || normalizeRestaurantOrderStatus(order.status);

    if (nextStatus !== normalizeRestaurantOrderStatus(order.status)) {
      changed = true;
    }

    if (nextStatus !== previousStatus) {
      notifyClientOrderStatus(order, nextStatus);
    }

    return {
      ...order,
      status: nextStatus,
      restaurantStatuses: relatedOrders.map((restaurantOrder) => ({
        restaurantId: restaurantOrder.restaurantId,
        status: normalizeRestaurantOrderStatus(restaurantOrder.status),
      })),
    };
  });

  rememberClientOrderStatuses();

  if (changed) {
    saveState();
    renderAccount();
    if (state.activeOrder) {
      const refreshed = state.orders.find((order) => order.reference === state.activeOrder.reference);
      if (refreshed && orderModal.classList.contains("open")) renderOrderModal(refreshed);
    }
  }
}

function syncRestaurantOrders(nextOrders, options = {}) {
  const previousKnown = new Set(restaurantKnownOrderIds);
  const normalizedOrders = nextOrders.map((order) => ({
    ...order,
    status: normalizeRestaurantOrderStatus(order.status),
  }));
  const newOrders = normalizedOrders.filter((order) => {
    const key = getRestaurantOrderKey(order);
    return key && !previousKnown.has(key) && normalizeRestaurantOrderStatus(order.status) === "pending";
  });

  state.restaurantOrders = normalizedOrders;
  rememberRestaurantOrders();

  if (options.render && state.restaurantMode) {
    renderRestaurantDashboard();
  }

  if (options.notify && newOrders.length) {
    notifyRestaurantNewOrders(newOrders);
  }
}

function getNotificationPermissionLabel() {
  if (!("Notification" in window)) return "Notifications indisponibles";
  if (Notification.permission === "granted") return "Notifications actives";
  if (Notification.permission === "denied") return "Notifications bloquees";
  return "Activer notifications";
}

async function requestRestaurantNotificationPermission() {
  if (!("Notification" in window)) {
    showRestaurantNotificationToast("Notifications indisponibles", "Ce navigateur ne supporte pas les notifications.");
    return;
  }

  if (Notification.permission === "default") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      showRestaurantNotificationToast("Notifications actives", "Le restaurant recevra une alerte quand une commande arrive.");
    } else {
      showRestaurantNotificationToast("Notifications bloquees", "Autorise les notifications dans le navigateur pour recevoir les alertes.");
    }
  } else if (Notification.permission === "granted") {
    showRestaurantNotificationToast("Notifications actives", "Les alertes restaurant sont deja activees.");
  } else {
    showRestaurantNotificationToast("Notifications bloquees", "Va dans les reglages du navigateur pour les reactiver.");
  }

  if (state.restaurantMode) renderRestaurantDashboard();
}

function stopRestaurantOrderRealtime() {
  if (restaurantOrderUnsubscribe) {
    restaurantOrderUnsubscribe();
    restaurantOrderUnsubscribe = null;
  }
}

function stopClientOrderRealtime() {
  if (clientOrderUnsubscribe) {
    clientOrderUnsubscribe();
    clientOrderUnsubscribe = null;
  }
}

async function startClientOrderRealtime() {
  stopClientOrderRealtime();
  if (!state.currentUser?.uid || state.currentUser.role === "restaurant" || !getFirebaseConfig()) return;

  try {
    const client = await loadFirebaseAuthClient();
    const ordersQuery = client.query(
      client.collection(client.db, "orders"),
      client.where("clientId", "==", state.currentUser.uid),
    );
    let firstSnapshot = true;

    clientOrderUnsubscribe = client.onSnapshot(ordersQuery, (snapshot) => {
      const remoteOrders = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
      let changed = false;

      remoteOrders.forEach((remoteOrder) => {
        const reference = remoteOrder.reference || remoteOrder.id;
        const status = normalizeRestaurantOrderStatus(remoteOrder.status);
        const localOrder = state.orders.find((order) => order.reference === reference || order.id === reference);

        if (localOrder) {
          const previousStatus = clientKnownOrderStatuses.get(localOrder.reference) || normalizeRestaurantOrderStatus(localOrder.status);
          if (status !== normalizeRestaurantOrderStatus(localOrder.status)) {
            localOrder.status = status;
            changed = true;
          }
          if (!firstSnapshot && status !== previousStatus) {
            notifyClientOrderStatus(localOrder, status);
          }
        }
      });

      rememberClientOrderStatuses();
      if (changed) {
        saveState();
        renderAccount();
        if (state.activeOrder && orderModal.classList.contains("open")) {
          const refreshed = state.orders.find((order) => order.reference === state.activeOrder.reference);
          if (refreshed) renderOrderModal(refreshed);
        }
      }

      firstSnapshot = false;
    });
  } catch {
    // Local inbox sync still works without Firestore realtime.
  }
}

async function startRestaurantOrderRealtime(restaurantId) {
  stopRestaurantOrderRealtime();

  if (state.currentUser?.provider === "RestaurantCode" || !getFirebaseConfig()) {
    rememberRestaurantOrders();
    return;
  }

  try {
    const client = await loadFirebaseAuthClient();
    const ordersQuery = client.query(
      client.collection(client.db, "orders"),
      client.where("restaurantId", "==", restaurantId),
    );
    let firstSnapshot = true;

    restaurantOrderUnsubscribe = client.onSnapshot(ordersQuery, (snapshot) => {
      const orders = snapshot.docs
        .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
        .sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0;
          const bTime = b.createdAt?.seconds || 0;
          return bTime - aTime;
        });

      syncRestaurantOrders(orders, {
        notify: !firstSnapshot,
        render: state.restaurantMode && state.restaurantProfile?.id === restaurantId,
      });
      firstSnapshot = false;
    });
  } catch {
    rememberRestaurantOrders();
  }
}

function syncLocalRestaurantOrdersFromStorage(savedOrders) {
  if (!state.restaurantMode || state.currentUser?.role !== "restaurant" || !state.restaurantProfile?.id) return;
  if (savedOrders && !Array.isArray(savedOrders)) return;

  if (Array.isArray(savedOrders)) state.orders = savedOrders;
  syncRestaurantOrders(buildLocalRestaurantOrders(state.restaurantProfile.id), {
    notify: true,
    render: true,
  });
}

function isAdminRoute() {
  const params = new URLSearchParams(window.location.search);
  return params.has("admin") || window.location.hash === "#admin";
}

function isAdminAuthenticated() {
  return state.adminUser?.role === "admin";
}

function waitForAuthUser(client) {
  if (client.auth.currentUser) return Promise.resolve(client.auth.currentUser);

  return new Promise((resolve) => {
    let resolved = false;
    const unsubscribe = client.onAuthStateChanged(client.auth, (user) => {
      if (resolved) return;
      resolved = true;
      unsubscribe();
      resolve(user || null);
    });

    window.setTimeout(() => {
      if (resolved) return;
      resolved = true;
      unsubscribe();
      resolve(client.auth.currentUser || null);
    }, 1200);
  });
}

async function getFirebaseAdminProfile(firebaseUser) {
  if (!firebaseUser) return null;

  const client = await loadFirebaseAuthClient();
  const userSnap = await client.getDoc(client.doc(client.db, "users", firebaseUser.uid));
  if (!userSnap.exists()) return null;

  const profile = userSnap.data();
  if (profile.role !== "admin") return null;

  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || profile.email || "",
    name: profile.name || "Admin Bko Eats",
    role: "admin",
  };
}

async function requireFirebaseAdminSession() {
  if (!getFirebaseConfig()) {
    renderAdminLogin("Firebase doit etre configure pour securiser l'admin.");
    return false;
  }

  try {
    const client = await loadFirebaseAuthClient();
    const firebaseUser = await waitForAuthUser(client);
    const adminProfile = await getFirebaseAdminProfile(firebaseUser);

    if (!adminProfile) {
      state.adminUser = null;
      renderAdminLogin("Connecte-toi avec un compte qui a le role admin.");
      return false;
    }

    state.adminUser = adminProfile;
    return true;
  } catch {
    state.adminUser = null;
    renderAdminLogin("Verification admin impossible. Verifie Firebase et les regles.");
    return false;
  }
}

async function loginAdminWithEmail(email, password) {
  if (!getFirebaseConfig()) {
    renderAdminLogin("Firebase doit etre configure avant d'ouvrir l'admin securise.");
    return;
  }

  try {
    const client = await loadFirebaseAuthClient();
    const credential = await client.signInWithEmailAndPassword(client.auth, email, password);
    const adminProfile = await getFirebaseAdminProfile(credential.user);

    if (!adminProfile) {
      await client.signOut(client.auth);
      state.adminUser = null;
      renderAdminLogin("Acces refuse: ce compte n'a pas le role admin.");
      return;
    }

    state.currentUser = null;
    state.userProfile = null;
    state.adminUser = adminProfile;
    await renderAdminDashboard();
  } catch (error) {
    renderAdminLogin(getFirebaseAuthErrorMessage(error));
  }
}

function setAdminMode(enabled) {
  state.adminMode = enabled;
  document.body.classList.toggle("admin-mode", enabled);
  adminDashboard.hidden = !enabled;

  if (enabled) {
    stopRestaurantOrderRealtime();
    stopClientOrderRealtime();
    onboardingScreen.classList.remove("open");
    document.body.classList.remove("onboarding-open");
    restaurantDashboard.hidden = true;
    appShell.hidden = true;
    cartPanel.hidden = true;
    openCart.hidden = true;
    return;
  }

  adminDashboard.innerHTML = "";
  appShell.hidden = false;
  cartPanel.hidden = false;
  openCart.hidden = false;
}

function renderAdminLogin(errorMessage = "") {
  setAdminMode(true);
  adminDashboard.innerHTML = `
    <div class="admin-shell admin-login-shell">
      <div class="admin-login-card">
        <p class="eyebrow">Bko Eats Admin</p>
        <h1>Connexion admin</h1>
        <p>Acces securise par Firebase Auth. Seuls les comptes avec le role admin peuvent entrer.</p>
        <form class="admin-login-form" id="adminLoginForm">
          <label>
            Email admin
            <input name="email" type="email" autocomplete="username" placeholder="admin@bko-eats.com" required />
          </label>
          <label>
            Mot de passe
            <input name="password" type="password" autocomplete="current-password" required />
          </label>
          <p class="signup-status">${escapeHtml(errorMessage)}</p>
          <button class="primary-button" type="submit">Entrer dans l'admin</button>
          <button class="text-button" type="button" data-admin-close>Retour client</button>
        </form>
      </div>
    </div>
  `;
}

function renderAdminWalletCard(wallet) {
  return `
    <article class="admin-wallet-card">
      <div>
        <p class="eyebrow">${wallet.pendingOrderCount ? `${wallet.pendingOrderCount} a traiter` : "Restaurant"}</p>
        <h3>${escapeHtml(wallet.restaurant.name)}</h3>
        <span>${escapeHtml(wallet.restaurant.address || "Bamako")}</span>
      </div>
      <div class="admin-wallet-grid">
        <div>
          <span>Portefeuille</span>
          <strong>${money.format(wallet.restaurantWallet)}</strong>
        </div>
        <div>
          <span>Volume</span>
          <strong>${money.format(wallet.gross)}</strong>
        </div>
        <div>
          <span>Commission</span>
          <strong>${money.format(wallet.commission)}</strong>
        </div>
        <div>
          <span>Commandes</span>
          <strong>${wallet.orderCount}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderIntegrationModuleCard(module) {
  return `
    <article class="integration-card">
      <div>
        <p class="eyebrow">${escapeHtml(module.status)}</p>
        <h3>${escapeHtml(module.name)}</h3>
      </div>
      <p>${escapeHtml(module.use)}</p>
    </article>
  `;
}

function renderAdminOrderLine(order) {
  const restaurant = getCatalogRestaurant(order.restaurantId) || { name: order.restaurantId || "Restaurant" };
  const financials = getOrderFinancials(order);
  return `
    <article class="admin-order-line">
      <div>
        <strong>${escapeHtml(order.reference || order.id)}</strong>
        <span>${escapeHtml(restaurant.name)} - ${escapeHtml(order.clientName || "Client")}</span>
      </div>
      <div>
        <span>${getStatusLabel(normalizeRestaurantOrderStatus(order.status))}</span>
        <strong>${money.format(financials.restaurantNet)} resto / ${money.format(financials.adminShare)} admin</strong>
      </div>
    </article>
  `;
}

async function loadAdminSecureData() {
  state.adminDataLoaded = false;

  if (!isAdminAuthenticated() || !getFirebaseConfig()) {
    state.adminOrders = [];
    state.adminRestaurants = [];
    return;
  }

  try {
    const client = await loadFirebaseAuthClient();
    const [ordersSnap, restaurantsSnap] = await Promise.all([
      client.getDocs(client.collection(client.db, "orders")),
      client.getDocs(client.collection(client.db, "restaurants")),
    ]);

    state.adminOrders = ordersSnap.docs.map((docSnap) =>
      normalizeLocalRestaurantOrder({
        id: docSnap.id,
        ...docSnap.data(),
      }),
    );
    state.adminRestaurants = restaurantsSnap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
    state.adminDataLoaded = true;
  } catch {
    state.adminOrders = [];
    state.adminRestaurants = [];
    state.adminDataLoaded = false;
  }
}

async function renderAdminDashboard() {
  setAdminMode(true);
  adminDashboard.innerHTML = `
    <div class="admin-shell">
      <p class="dashboard-empty">Chargement securise des donnees admin...</p>
    </div>
  `;

  await loadAdminSecureData();
  const report = getAdminWalletReport();
  const commissionLabel = `${Math.round(PLATFORM_COMMISSION_RATE * 100)}%`;

  adminDashboard.innerHTML = `
    <div class="admin-shell">
      <header class="admin-header">
        <div>
          <p class="eyebrow">Bko Eats Admin</p>
          <h1>Portefeuilles</h1>
          <p>Connecte: ${escapeHtml(state.adminUser?.email || "admin")}. Donnees ${state.adminDataLoaded ? "Firebase securisees" : "locales de demo"}. Commission plateforme ${commissionLabel}.</p>
        </div>
        <div class="admin-actions">
          <button class="text-button" type="button" data-admin-refresh>Actualiser</button>
          <button class="text-button danger" type="button" data-admin-reset-wallets>Reinitialiser portefeuilles</button>
          <button class="text-button" type="button" data-admin-logout>Deconnexion admin</button>
          <button class="text-button" type="button" data-admin-close>Retour client</button>
        </div>
      </header>

      <section class="admin-kpis">
        <article class="admin-kpi primary">
          <span>Mon portefeuille perso</span>
          <strong>${money.format(report.totals.adminWallet)}</strong>
        </article>
        <article class="admin-kpi">
          <span>Portefeuilles restaurants</span>
          <strong>${money.format(report.totals.restaurantWallet)}</strong>
        </article>
        <article class="admin-kpi">
          <span>Volume commandes</span>
          <strong>${money.format(report.totals.gross + report.totals.deliveryFees)}</strong>
        </article>
        <article class="admin-kpi">
          <span>Commandes en attente</span>
          <strong>${report.totals.pendingOrderCount}</strong>
        </article>
      </section>

      <section class="admin-section">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">${report.wallets.length} restaurants</p>
            <h2>Portefeuilles restaurants</h2>
          </div>
        </div>
        <div class="admin-wallet-list">${report.wallets.map(renderAdminWalletCard).join("")}</div>
      </section>

      <section class="admin-section">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">${INTEGRATION_MODULES.length} modules</p>
            <h2>Modules a connecter</h2>
          </div>
        </div>
        <div class="integration-grid">${INTEGRATION_MODULES.map(renderIntegrationModuleCard).join("")}</div>
      </section>

      <section class="admin-section">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">${report.orders.length} commande(s)</p>
            <h2>Dernieres commandes</h2>
          </div>
        </div>
        <div class="admin-order-list">
          ${report.orders.length ? report.orders.slice(0, 40).map(renderAdminOrderLine).join("") : `<p class="dashboard-empty">Aucune commande pour le moment.</p>`}
        </div>
      </section>
    </div>
  `;
}

async function resetAdminWallets() {
  const confirmed = window.confirm(
    "Reinitialiser tous les portefeuilles ? Cela supprime les commandes qui servent au calcul financier.",
  );
  if (!confirmed) return;

  localStorage.removeItem(RESTAURANT_ORDERS_KEY);
  state.restaurantOrders = [];
  state.adminOrders = [];

  if (isAdminAuthenticated() && getFirebaseConfig()) {
    try {
      const client = await loadFirebaseAuthClient();
      const ordersSnap = await client.getDocs(client.collection(client.db, "orders"));
      await Promise.all(ordersSnap.docs.map((docSnap) => client.deleteDoc(client.doc(client.db, "orders", docSnap.id))));
      state.adminDataLoaded = true;
    } catch {
      state.adminDataLoaded = false;
    }
  }

  await renderAdminDashboard();
}

async function openAdminDashboard() {
  if (!(await requireFirebaseAdminSession())) {
    return;
  }

  await renderAdminDashboard();
}

async function logoutAdmin() {
  try {
    const client = await loadFirebaseAuthClient();
    await client.signOut(client.auth);
  } catch {
    // The local admin session reset below is enough for the UI.
  }

  state.adminUser = null;
  renderAdminLogin("Session admin fermee.");
}

function closeAdminDashboard() {
  setAdminMode(false);
  if (isAdminRoute()) {
    const nextUrl = `${window.location.pathname}?design=37`;
    window.history.replaceState({}, "", nextUrl);
  }
  renderOnboarding();
}

function setRestaurantMode(enabled) {
  state.restaurantMode = enabled;
  document.body.classList.toggle("restaurant-mode", enabled);
  restaurantDashboard.hidden = !enabled;
  if (enabled) {
    state.adminMode = false;
    adminDashboard.hidden = true;
    adminDashboard.innerHTML = "";
    document.body.classList.remove("admin-mode");
  }
  appShell.hidden = enabled;
  cartPanel.hidden = enabled;
  openCart.hidden = enabled;
}

function closeRestaurantDashboard() {
  stopRestaurantOrderRealtime();
  setRestaurantMode(false);
  state.restaurantProfile = null;
  state.restaurantOrders = [];
  state.restaurantMenuItems = [];
  state.editingMenuItemId = "";
  restaurantKnownOrderIds = new Set();
  restaurantPendingAlertedKeys = new Set();
}

function getCurrentRestaurantId() {
  if (state.userProfile?.role === "restaurant" && state.userProfile.restaurantId) {
    return state.userProfile.restaurantId;
  }

  if (state.currentUser?.role === "restaurant" && state.currentUser.restaurantId) {
    return state.currentUser.restaurantId;
  }

  return "";
}

function resumeSavedRestaurantSession() {
  const restaurantId = getCurrentRestaurantId();
  if (!restaurantId) return;

  state.loginIntent = "restaurant";
  state.onboardingDismissed = true;
  window.setTimeout(() => {
    openRestaurantDashboard(restaurantId);
  }, 0);
}

async function showIdentificationPage() {
  stopRestaurantOrderRealtime();
  stopClientOrderRealtime();
  if (firebaseAuthClient?.auth && firebaseAuthClient.signOut) {
    try {
      await firebaseAuthClient.signOut(firebaseAuthClient.auth);
    } catch {
      // The local session reset below is enough for the app UI.
    }
  }

  setRestaurantMode(false);
  state.currentUser = null;
  state.userProfile = null;
  state.loginIntent = "client";
  state.onboardingDismissed = false;
  state.restaurantProfile = null;
  state.restaurantOrders = [];
  state.restaurantMenuItems = [];
  state.editingMenuItemId = "";
  restaurantKnownOrderIds = new Set();
  authModal.classList.remove("open");
  orderModal.classList.remove("open");
  saveState();
  renderAccount();
  renderPaymentForm();
  renderOnboarding();
  showOnboardingPanel("quick");
}

function renderRestaurantDashboardShell(message) {
  setRestaurantMode(true);
  restaurantDashboard.innerHTML = `
    <div class="restaurant-dashboard-shell">
      <div class="restaurant-dashboard-header">
        <div>
          <p class="eyebrow">Bko Eats Restaurant</p>
          <h1>${escapeHtml(state.restaurantProfile?.name || "Espace restaurant")}</h1>
        </div>
        <button class="text-button" type="button" data-restaurant-close>Accueil client</button>
      </div>
      <p class="dashboard-empty">${escapeHtml(message)}</p>
    </div>
  `;
}

async function openRestaurantDashboard(restaurantId) {
  if (!restaurantId) {
    setStatus(quickSignupStatus, "Ce compte restaurant n'a pas encore de restaurantId.", "error");
    return;
  }

  state.restaurantTab = state.restaurantTab || "orders";
  renderRestaurantDashboardShell("Chargement du tableau de bord...");

  if (state.currentUser?.provider === "RestaurantCode") {
    loadLocalRestaurantWorkspace(restaurantId);
    rememberRestaurantOrders();
    renderRestaurantDashboard();
    notifyRestaurantPendingOrdersOnOpen();
    startRestaurantOrderRealtime(restaurantId);
    return;
  }

  try {
    await loadRestaurantWorkspace(restaurantId);
    rememberRestaurantOrders();
    renderRestaurantDashboard();
    notifyRestaurantPendingOrdersOnOpen();
    startRestaurantOrderRealtime(restaurantId);
  } catch (error) {
    loadLocalRestaurantWorkspace(restaurantId);
    rememberRestaurantOrders();
    renderRestaurantDashboard();
    notifyRestaurantPendingOrdersOnOpen();
    startRestaurantOrderRealtime(restaurantId);
  }
}

function getCatalogRestaurant(restaurantId) {
  return restaurants.find((restaurant) => restaurant.id === restaurantId);
}

function getLocalRestaurantOverrides(restaurantId) {
  const saved = JSON.parse(localStorage.getItem(`${STORAGE_KEY}-restaurant-${restaurantId}`) || "{}");
  return {
    profile: saved.profile || {},
    menuItems: saved.menuItems || null,
  };
}

function saveLocalRestaurantOverrides() {
  if (!state.restaurantProfile?.id) return;
  localStorage.setItem(
    `${STORAGE_KEY}-restaurant-${state.restaurantProfile.id}`,
    JSON.stringify({
      profile: state.restaurantProfile,
      menuItems: state.restaurantMenuItems,
    }),
  );
}

function loadLocalRestaurantWorkspace(restaurantId) {
  const restaurant = getCatalogRestaurant(restaurantId);
  const overrides = getLocalRestaurantOverrides(restaurantId);

  if (!restaurant && !overrides.profile.id) {
    state.restaurantProfile = {
      id: restaurantId,
      name: "Restaurant",
      image: "",
      address: "Bamako",
      phone: "",
      isOpen: true,
      preparationTime: 25,
    };
    state.restaurantMenuItems = [];
    state.restaurantOrders = [];
    return;
  }

  state.restaurantProfile = {
    id: restaurantId,
    name: restaurant?.name || "Restaurant",
    image: restaurant?.image || "",
    address: restaurant?.address || "Bamako",
    phone: restaurant?.phone || "",
    isOpen: true,
    preparationTime: parseTimeRange(restaurant?.time || "25-35 min").minutes,
    ...overrides.profile,
  };
  state.restaurantMenuItems =
    overrides.menuItems ||
    (restaurant?.menu || []).map((item) => ({
      ...item,
      restaurantId,
      category: item.section || item.category || "Menu",
      available: item.available !== false,
    }));
  state.restaurantOrders = buildLocalRestaurantOrders(restaurantId);
  return;
  state.restaurantOrders = state.orders
    .filter((order) => order.items?.some((item) => item.restaurantId === restaurantId))
    .map((order) => ({
      ...order,
      id: order.reference,
      status: order.status === "Commande reçue" ? "pending" : order.status || "pending",
      clientName: order.customer?.name || state.currentUser?.name || "Client",
      clientPhone: order.delivery?.phone || "",
      clientAddress: order.delivery?.address || "",
      items: order.items.filter((item) => item.restaurantId === restaurantId),
    }));
}

async function loadRestaurantWorkspace(restaurantId) {
  const client = await loadFirebaseAuthClient();
  const restaurantRef = client.doc(client.db, "restaurants", restaurantId);
  const restaurantSnap = await client.getDoc(restaurantRef);

  if (!restaurantSnap.exists()) {
    await client.setDoc(
      restaurantRef,
      {
        id: restaurantId,
        name: "Nouveau restaurant",
        ownerUid: client.auth.currentUser?.uid || state.currentUser?.uid || "",
        image: "",
        address: "Bamako",
        phone: "",
        isOpen: true,
        preparationTime: 25,
        createdAt: client.serverTimestamp(),
        updatedAt: client.serverTimestamp(),
      },
      { merge: true },
    );
  }

  const refreshedRestaurant = await client.getDoc(restaurantRef);
  state.restaurantProfile = {
    id: restaurantId,
    ...refreshedRestaurant.data(),
  };

  const ordersQuery = client.query(
    client.collection(client.db, "orders"),
    client.where("restaurantId", "==", restaurantId),
  );
  const menuQuery = client.query(
    client.collection(client.db, "menuItems"),
    client.where("restaurantId", "==", restaurantId),
  );

  const [ordersSnap, menuSnap] = await Promise.all([client.getDocs(ordersQuery), client.getDocs(menuQuery)]);
  state.restaurantOrders = ordersSnap.docs
    .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
    .sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    });
  state.restaurantMenuItems = menuSnap.docs
    .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
    .sort((a, b) => (a.category || "").localeCompare(b.category || "") || (a.name || "").localeCompare(b.name || ""));

  if (!state.restaurantMenuItems.length) {
    const restaurant = getCatalogRestaurant(restaurantId);
    state.restaurantMenuItems = (restaurant?.menu || []).map((item) => ({
      ...item,
      restaurantId,
      category: item.section || item.category || "Menu",
      available: item.available !== false,
    }));
  }
}

function renderRestaurantDashboard() {
  const restaurant = state.restaurantProfile;
  const pendingCount = getRestaurantPendingOrders().length;
  const notificationLabel = getNotificationPermissionLabel();
  const wallet = getRestaurantWalletSummary(restaurant?.id || "");
  restaurantDashboard.innerHTML = `
    <div class="restaurant-dashboard-shell">
      <div class="restaurant-dashboard-header">
        <div>
          <p class="eyebrow">Bko Eats Restaurant</p>
          <h1>${escapeHtml(restaurant?.name || "Restaurant")}</h1>
          <p>${restaurant?.isOpen ? "Ouvert" : "Ferme"} - Preparation ${Number(restaurant?.preparationTime || 25)} min</p>
        </div>
        <div class="restaurant-dashboard-actions">
          <button class="text-button" type="button" data-enable-notifications>${notificationLabel}</button>
          <button class="text-button" type="button" data-test-notification>Tester notification</button>
          <button class="text-button" type="button" data-restaurant-refresh>Actualiser</button>
          <button class="text-button" type="button" data-switch-account>Changer de compte</button>
          <button class="text-button" type="button" data-restaurant-close>Accueil client</button>
        </div>
      </div>
      <div class="restaurant-live-banner ${pendingCount ? "active" : ""}">
        <div>
          <strong>${pendingCount ? `${pendingCount} nouvelle(s) commande(s)` : "Commandes en direct"}</strong>
          <span>${
            pendingCount
              ? "Traite les nouvelles commandes depuis l'onglet Commandes."
              : "Le dashboard se met a jour quand une commande arrive."
          }</span>
        </div>
        <span class="live-dot" aria-hidden="true"></span>
      </div>
      <div class="wallet-summary">
        <article>
          <span>Portefeuille restaurant</span>
          <strong>${money.format(wallet.restaurantWallet)}</strong>
        </article>
        <article>
          <span>Commandes actives</span>
          <strong>${wallet.activeOrderCount}</strong>
        </article>
        <article>
          <span>Commission Bko Eats</span>
          <strong>${money.format(wallet.commission)}</strong>
        </article>
      </div>
      <div class="restaurant-tabs">
        ${[
          ["orders", `Commandes${pendingCount ? `<span class="tab-badge">${pendingCount}</span>` : ""}`],
          ["menu", "Menu"],
          ["settings", "Parametres"],
        ]
          .map(
            ([tab, label]) =>
              `<button class="${state.restaurantTab === tab ? "active" : ""}" type="button" data-restaurant-tab="${tab}">${label}</button>`,
          )
          .join("")}
      </div>
      <div class="restaurant-dashboard-content">${renderRestaurantTabContent()}</div>
    </div>
  `;
}

function renderRestaurantTabContent() {
  if (state.restaurantTab === "menu") return renderRestaurantMenuTab();
  if (state.restaurantTab === "settings") return renderRestaurantSettingsTab();
  return renderRestaurantOrdersTab();
}

function renderRestaurantOrdersTab() {
  if (!state.restaurantOrders.length) {
    return `<p class="dashboard-empty">Aucune commande pour ce restaurant pour le moment.</p>`;
  }

  return RESTAURANT_ORDER_STATUSES.map(([status, label]) => {
    const orders = state.restaurantOrders.filter((order) => normalizeRestaurantOrderStatus(order.status) === status);
    if (!orders.length) return "";

    return `
      <section class="dashboard-section">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">${orders.length} commande(s)</p>
            <h2>${label}</h2>
          </div>
        </div>
        <div class="restaurant-order-list">
          ${orders.map(renderRestaurantOrderCard).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderRestaurantOrderCard(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  const deliveryAddressText = order.deliveryAddress || order.clientAddress || "Adresse non precisee";
  const location = order.deliveryLocation;
  const locationLink =
    location?.lat && location?.lng
      ? `https://www.google.com/maps?q=${encodeURIComponent(`${location.lat},${location.lng}`)}`
      : "";
  return `
    <article class="restaurant-order-card ${normalizeRestaurantOrderStatus(order.status) === "pending" ? "new-order" : ""}">
      <div class="restaurant-order-top">
        <div>
          <strong>${escapeHtml(order.reference || order.id)}</strong>
          <span>${escapeHtml(order.clientName || "Client")} - ${escapeHtml(order.clientPhone || "")}</span>
        </div>
        <span class="status-pill">${getStatusLabel(normalizeRestaurantOrderStatus(order.status))}</span>
      </div>
      <p>${escapeHtml(deliveryAddressText)}</p>
      ${
        locationLink
          ? `<p class="live-location">Localisation client en direct: <a href="${locationLink}" target="_blank" rel="noreferrer">${Number(location.lat).toFixed(5)}, ${Number(location.lng).toFixed(5)}</a></p>`
          : `<p class="live-location muted">Localisation client non activee</p>`
      }
      <ul>
        ${items
          .map((item) => `<li>${Number(item.quantity || 1)} x ${escapeHtml(item.name)} - ${money.format(Number(item.price || 0))}</li>`)
          .join("")}
      </ul>
      <div class="restaurant-order-footer">
        <strong>${money.format(Number(order.total || 0))}</strong>
        <div class="order-actions">${renderOrderActionButtons(order)}</div>
      </div>
    </article>
  `;
}

function renderOrderActionButtons(order) {
  const status = normalizeRestaurantOrderStatus(order.status);
  const actions = {
    pending: [
      ["accepted", "Accepter"],
      ["refused", "Refuser"],
    ],
    accepted: [["preparing", "En preparation"]],
    preparing: [["ready", "Prete"]],
    ready: [["delivering", "Livreur en route"]],
    delivering: [["completed", "Livree"]],
  }[status];

  if (!actions) return "";
  return actions
    .map(
      ([nextStatus, label]) =>
        `<button class="small-action" type="button" data-order-id="${order.id}" data-order-status="${nextStatus}">${label}</button>`,
    )
    .join("");
}

function renderRestaurantMenuTab() {
  const editingItem = state.restaurantMenuItems.find((item) => item.id === state.editingMenuItemId);

  return `
    <section class="dashboard-section">
      <div class="section-heading compact">
        <div>
          <p class="eyebrow">${editingItem ? "Modification" : "Creation"}</p>
          <h2>${editingItem ? "Modifier un plat" : "Ajouter un plat"}</h2>
        </div>
      </div>
      <form class="restaurant-form" id="restaurantMenuForm">
        <input type="hidden" name="itemId" value="${escapeHtml(editingItem?.id || "")}" />
        <label>Nom<input name="name" type="text" value="${escapeHtml(editingItem?.name || "")}" required /></label>
        <label>Prix FCFA<input name="price" type="number" min="0" value="${Number(editingItem?.price || 0)}" required /></label>
        <label>Categorie<input name="category" type="text" value="${escapeHtml(editingItem?.category || editingItem?.section || "")}" /></label>
        <label>Image URL<input name="image" type="url" value="${escapeHtml(editingItem?.image || "")}" /></label>
        <label>Description<textarea name="description" rows="3">${escapeHtml(editingItem?.description || "")}</textarea></label>
        <label class="switch-line"><input name="available" type="checkbox" ${editingItem?.available === false ? "" : "checked"} /> Disponible</label>
        <div class="form-actions">
          <button class="primary-button" type="submit">${editingItem ? "Enregistrer" : "Ajouter"}</button>
          ${editingItem ? `<button class="text-button" type="button" data-menu-cancel>Annuler</button>` : ""}
        </div>
      </form>
    </section>
    <section class="dashboard-section">
      <div class="section-heading compact">
        <div>
          <p class="eyebrow">${state.restaurantMenuItems.length} plat(s)</p>
          <h2>Menu du restaurant</h2>
        </div>
      </div>
      <div class="restaurant-menu-admin-list">
        ${
          state.restaurantMenuItems.length
            ? state.restaurantMenuItems.map(renderRestaurantMenuItemCard).join("")
            : `<p class="dashboard-empty">Aucun plat ajoute pour le moment.</p>`
        }
      </div>
    </section>
  `;
}

function renderRestaurantMenuItemCard(item) {
  return `
    <article class="restaurant-menu-admin-card">
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.category || item.section || "Menu")} - ${money.format(Number(item.price || 0))}</span>
        <p>${escapeHtml(item.description || "")}</p>
      </div>
      <div class="menu-admin-actions">
        <button class="small-action" type="button" data-menu-toggle="${item.id}">${item.available === false ? "Activer" : "Desactiver"}</button>
        <button class="small-action" type="button" data-menu-edit="${item.id}">Modifier</button>
        <button class="small-action danger" type="button" data-menu-delete="${item.id}">Supprimer</button>
      </div>
    </article>
  `;
}

function renderRestaurantSettingsTab() {
  const restaurant = state.restaurantProfile || {};
  return `
    <section class="dashboard-section">
      <div class="section-heading compact">
        <div>
          <p class="eyebrow">Parametres</p>
          <h2>Restaurant</h2>
        </div>
      </div>
      <form class="restaurant-form" id="restaurantSettingsForm">
        <label>Nom du restaurant<input name="name" type="text" value="${escapeHtml(restaurant.name || "")}" required /></label>
        <label>Image URL<input name="image" type="url" value="${escapeHtml(restaurant.image || "")}" /></label>
        <label>Adresse<input name="address" type="text" value="${escapeHtml(restaurant.address || "")}" required /></label>
        <label>Telephone<input name="phone" type="tel" value="${escapeHtml(restaurant.phone || "")}" /></label>
        <label>Temps moyen de preparation<input name="preparationTime" type="number" min="1" value="${Number(restaurant.preparationTime || 25)}" /></label>
        <label class="switch-line"><input name="isOpen" type="checkbox" ${restaurant.isOpen === false ? "" : "checked"} /> Restaurant ouvert</label>
        <button class="primary-button" type="submit">Enregistrer les parametres</button>
      </form>
    </section>
  `;
}

async function updateRestaurantOrderStatus(orderId, status) {
  if (orderId?.startsWith("BKO-")) {
    const order = state.restaurantOrders.find((candidate) => candidate.id === orderId);
    if (order) {
      order.status = status;
      const savedOrder = state.orders.find((candidate) => candidate.reference === orderId || orderId.startsWith(`${candidate.reference}-`));
      if (savedOrder) savedOrder.status = status;
      updateLocalRestaurantInboxOrderStatus(orderId, status);
      saveState();
      renderRestaurantDashboard();
      showRestaurantNotificationToast("Statut envoye", `${getStatusLabel(status)} - le client sera notifie.`);
    }
    return;
  }

  const client = await loadFirebaseAuthClient();
  await client.updateDoc(client.doc(client.db, "orders", orderId), {
    status,
    updatedAt: client.serverTimestamp(),
  });
  await loadRestaurantWorkspace(state.restaurantProfile.id);
  renderRestaurantDashboard();
  showRestaurantNotificationToast("Statut envoye", `${getStatusLabel(status)} - le client sera notifie.`);
}

async function saveRestaurantMenuItem(form) {
  if (state.currentUser?.provider === "RestaurantCode") {
    const itemId = form.elements.itemId.value || `local-${Date.now()}`;
    const data = {
      id: itemId,
      restaurantId: state.restaurantProfile.id,
      name: form.elements.name.value.trim(),
      description: form.elements.description.value.trim(),
      price: Number(form.elements.price.value || 0),
      image: form.elements.image.value.trim(),
      available: form.elements.available.checked,
      category: form.elements.category.value.trim() || "Menu",
    };

    const itemIndex = state.restaurantMenuItems.findIndex((item) => item.id === itemId);
    if (itemIndex >= 0) {
      state.restaurantMenuItems[itemIndex] = data;
    } else {
      state.restaurantMenuItems.unshift(data);
    }
    state.editingMenuItemId = "";
    saveLocalRestaurantOverrides();
    renderRestaurantDashboard();
    return;
  }

  const client = await loadFirebaseAuthClient();
  const data = {
    restaurantId: state.restaurantProfile.id,
    name: form.elements.name.value.trim(),
    description: form.elements.description.value.trim(),
    price: Number(form.elements.price.value || 0),
    image: form.elements.image.value.trim(),
    available: form.elements.available.checked,
    category: form.elements.category.value.trim() || "Menu",
    updatedAt: client.serverTimestamp(),
  };
  const itemId = form.elements.itemId.value;

  if (itemId) {
    await client.updateDoc(client.doc(client.db, "menuItems", itemId), data);
  } else {
    await client.addDoc(client.collection(client.db, "menuItems"), {
      ...data,
      createdAt: client.serverTimestamp(),
    });
  }

  state.editingMenuItemId = "";
  await loadRestaurantWorkspace(state.restaurantProfile.id);
  renderRestaurantDashboard();
}

async function deleteRestaurantMenuItem(itemId) {
  if (state.currentUser?.provider === "RestaurantCode") {
    state.restaurantMenuItems = state.restaurantMenuItems.filter((item) => item.id !== itemId);
    saveLocalRestaurantOverrides();
    renderRestaurantDashboard();
    return;
  }

  const client = await loadFirebaseAuthClient();
  await client.deleteDoc(client.doc(client.db, "menuItems", itemId));
  await loadRestaurantWorkspace(state.restaurantProfile.id);
  renderRestaurantDashboard();
}

async function toggleRestaurantMenuItem(itemId) {
  const item = state.restaurantMenuItems.find((candidate) => candidate.id === itemId);
  if (!item) return;

  if (state.currentUser?.provider === "RestaurantCode") {
    item.available = item.available === false;
    saveLocalRestaurantOverrides();
    renderRestaurantDashboard();
    return;
  }

  const client = await loadFirebaseAuthClient();
  await client.updateDoc(client.doc(client.db, "menuItems", itemId), {
    available: item.available === false,
    updatedAt: client.serverTimestamp(),
  });
  await loadRestaurantWorkspace(state.restaurantProfile.id);
  renderRestaurantDashboard();
}

async function saveRestaurantSettings(form) {
  if (state.currentUser?.provider === "RestaurantCode") {
    state.restaurantProfile = {
      ...state.restaurantProfile,
      name: form.elements.name.value.trim(),
      image: form.elements.image.value.trim(),
      address: form.elements.address.value.trim(),
      phone: form.elements.phone.value.trim(),
      preparationTime: Number(form.elements.preparationTime.value || 25),
      isOpen: form.elements.isOpen.checked,
    };
    saveLocalRestaurantOverrides();
    renderRestaurantDashboard();
    return;
  }

  const client = await loadFirebaseAuthClient();
  await client.updateDoc(client.doc(client.db, "restaurants", state.restaurantProfile.id), {
    name: form.elements.name.value.trim(),
    image: form.elements.image.value.trim(),
    address: form.elements.address.value.trim(),
    phone: form.elements.phone.value.trim(),
    preparationTime: Number(form.elements.preparationTime.value || 25),
    isOpen: form.elements.isOpen.checked,
    updatedAt: client.serverTimestamp(),
  });
  await loadRestaurantWorkspace(state.restaurantProfile.id);
  renderRestaurantDashboard();
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(start, end) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(end.lat - start.lat);
  const dLng = toRadians(end.lng - start.lng);
  const lat1 = toRadians(start.lat);
  const lat2 = toRadians(end.lat);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function parseTimeRange(time) {
  const match = time.match(/(\d+)\D+(\d+)/);
  if (!match) return { min: 25, max: 35, minutes: 30, label: time || "25-35 min" };

  const min = Number(match[1]);
  const max = Number(match[2]);
  return {
    min,
    max,
    minutes: Math.round((min + max) / 2),
    label: `${min}-${max} min`,
  };
}

function getDeliveryEstimate(restaurant) {
  const fallback = parseTimeRange(restaurant.time);
  const prepMinutes = PREP_MINUTES_BY_CATEGORY[restaurant.category] || 14;

  if (!state.userLocation || !restaurant.location) {
    return {
      ...fallback,
      prepMinutes: Math.min(prepMinutes, Math.max(6, Math.round(fallback.minutes * 0.58))),
      travelMinutes: Math.max(8, fallback.minutes - prepMinutes),
      distanceKm: null,
      basedOnLocation: false,
    };
  }

  const distanceKm = getDistanceKm(state.userLocation, restaurant.location);
  const travelMinutes = Math.max(8, Math.round(8 + distanceKm * 3.6));
  const minutes = Math.max(prepMinutes + travelMinutes, 12);
  const min = Math.max(10, minutes - 5);
  const max = minutes + 6;

  return {
    min,
    max,
    minutes,
    prepMinutes,
    travelMinutes,
    distanceKm,
    label: `${min}-${max} min`,
    basedOnLocation: true,
  };
}

function formatDeliveryEstimate(estimate) {
  if (!estimate) return "Active ta position";
  if (!estimate.basedOnLocation) return `${estimate.label} - position a activer`;
  return `${estimate.label} - ${estimate.distanceKm.toFixed(1)} km`;
}

function getCartDeliveryEstimate(items) {
  const restaurantIds = [...new Set(items.map((item) => item.restaurantId).filter(Boolean))];
  const estimates = restaurantIds
    .map((restaurantId) => restaurants.find((restaurant) => restaurant.id === restaurantId))
    .filter(Boolean)
    .map((restaurant) => ({
      ...getDeliveryEstimate(restaurant),
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
    }));

  if (!estimates.length) return null;

  return estimates.reduce((slowest, estimate) => (estimate.minutes > slowest.minutes ? estimate : slowest), estimates[0]);
}

function getOrderEstimate(order) {
  const fallback = {
    ...parseTimeRange("25-35 min"),
    prepMinutes: 16,
    travelMinutes: 14,
    distanceKm: null,
    basedOnLocation: false,
  };

  return order.estimate ? { ...fallback, ...order.estimate } : fallback;
}

function getOrderTimeline(order) {
  return ORDER_TRACKING_STEPS;
}

function isFavorite(type, id) {
  return Boolean(state.favorites[type]?.includes(id));
}

function toggleFavorite(type, id) {
  const currentFavorites = new Set(state.favorites[type] || []);
  if (currentFavorites.has(id)) {
    currentFavorites.delete(id);
  } else {
    currentFavorites.add(id);
  }

  state.favorites[type] = [...currentFavorites];
  saveState();
  renderCategories();
  renderRestaurants();
}

function formatCoordinateLabel(location) {
  if (!location?.lat || !location?.lng) return "Position actuelle";
  return `${Number(location.lat).toFixed(4)}, ${Number(location.lng).toFixed(4)}`;
}

function updateLocationLabel() {
  if (!state.userLocation) {
    locationLabel.textContent = "Bamako, Mali";
    locationLabel.title = "Utiliser ma localisation";
    return;
  }

  locationLabel.textContent = state.userLocation.label || formatCoordinateLabel(state.userLocation);
  locationLabel.title = `Position: ${formatCoordinateLabel(state.userLocation)}`;
}

function getReadableLocationFromApi(data) {
  const parts = [
    data.locality,
    data.city,
    data.principalSubdivision,
    data.countryName,
  ]
    .filter(Boolean)
    .filter((part, index, list) => list.indexOf(part) === index);

  if (!parts.length) return "";

  const conciseParts = parts.filter((part) => !/^mali$/i.test(part)).slice(0, 2);
  return conciseParts.length ? conciseParts.join(", ") : parts.slice(0, 2).join(", ");
}

async function resolveUserLocationLabel(location) {
  if (!location?.lat || !location?.lng) return;

  const requestId = ++locationLabelRequestId;
  const params = new URLSearchParams({
    latitude: String(location.lat),
    longitude: String(location.lng),
    localityLanguage: "fr",
  });

  try {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?${params.toString()}`);
    if (!response.ok) throw new Error("reverse-geocode-failed");

    const data = await response.json();
    const label = getReadableLocationFromApi(data);
    if (!label || requestId !== locationLabelRequestId || !state.userLocation) return;

    state.userLocation = {
      ...state.userLocation,
      label,
    };
    updateLocationLabel();
    saveState();
    updateOpenLocalOrdersLocation();
  } catch {
    updateLocationLabel();
  }
}

function applyUserPosition(position) {
  const previousLocation = state.userLocation;
  const nextLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    accuracy: position.coords.accuracy,
    updatedAt: Date.now(),
  };

  if (previousLocation?.label && getDistanceKm(previousLocation, nextLocation) < 0.08) {
    nextLocation.label = previousLocation.label;
  }

  state.userLocation = {
    ...nextLocation,
  };
  updateLocationLabel();
  saveState();
  renderRestaurants();
  renderCart();
  updateOpenLocalOrdersLocation();

  if (!state.userLocation.label) {
    void resolveUserLocationLabel(state.userLocation);
  }
}

function startUserLocationWatch() {
  if (!navigator.geolocation || userLocationWatchId) return;

  userLocationWatchId = navigator.geolocation.watchPosition(
    applyUserPosition,
    () => {},
    {
      enableHighAccuracy: true,
      maximumAge: 60000,
      timeout: 15000,
    },
  );
}

function updateOpenLocalOrdersLocation() {
  if (!state.currentUser || state.currentUser.role === "restaurant" || !state.userLocation) return;

  const openReferences = new Set(
    state.orders
      .filter((order) => !["completed", "cancelled", "refused"].includes(normalizeRestaurantOrderStatus(order.status)))
      .map((order) => order.reference),
  );
  if (!openReferences.size) return;

  let changed = false;
  const nextInbox = getLocalRestaurantInbox().map((order) => {
    if (!openReferences.has(order.reference)) return order;
    changed = true;
    return {
      ...order,
      deliveryLocation: { ...state.userLocation },
      updatedAt: Date.now(),
    };
  });

  if (changed) saveLocalRestaurantInbox(nextInbox);
  scheduleRemoteOpenOrdersLocationSave(openReferences);
}

function scheduleRemoteOpenOrdersLocationSave(openReferences) {
  if (!getFirebaseConfig() || !state.currentUser?.uid || !state.userLocation || !openReferences?.size) return;

  window.clearTimeout(remoteLocationTimer);
  remoteLocationTimer = window.setTimeout(async () => {
    try {
      const client = await loadFirebaseAuthClient();
      const ordersQuery = client.query(
        client.collection(client.db, "orders"),
        client.where("clientId", "==", state.currentUser.uid),
      );
      const snap = await client.getDocs(ordersQuery);
      await Promise.all(
        snap.docs
          .filter((docSnap) => openReferences.has(docSnap.data().reference))
          .map((docSnap) =>
            client.updateDoc(client.doc(client.db, "orders", docSnap.id), {
              deliveryLocation: { ...state.userLocation },
              updatedAt: client.serverTimestamp(),
            }),
          ),
      );
    } catch {
      // Local live location remains available for same-device tests.
    }
  }, 1500);
}

function requestUserLocation() {
  if (!navigator.geolocation) {
    locationLabel.textContent = "Position indisponible";
    return;
  }

  useLocationButton.classList.add("is-loading");
  locationLabel.textContent = "Localisation...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      useLocationButton.classList.remove("is-loading");
      applyUserPosition(position);
      startUserLocationWatch();
    },
    () => {
      useLocationButton.classList.remove("is-loading");
      locationLabel.textContent = "Position refusee";
      setTimeout(updateLocationLabel, 1800);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 300000,
      timeout: 10000,
    },
  );
}

function requestLocationOnStartup() {
  window.setTimeout(() => {
    requestUserLocation();
  }, 700);
}

function getOrderCreatedAt(order) {
  const createdAt = Number(order.createdAt);
  return Number.isFinite(createdAt) && createdAt > 0 ? createdAt : Date.now();
}

function getOrderStepIndex(order) {
  const timeline = getOrderTimeline(order);
  const status = normalizeRestaurantOrderStatus(order.status);
  const index = timeline.findIndex((step) => step.status === status);

  if (status === "refused" || status === "cancelled") return 0;
  return index >= 0 ? index : 0;
}

function getOrderStatus(order) {
  return getStatusLabel(normalizeRestaurantOrderStatus(order.status));
}

function renderOrderTracking(order, options = {}) {
  const activeIndex = getOrderStepIndex(order);
  const compactClass = options.compact ? " compact" : "";
  const estimate = getOrderEstimate(order);
  const timeline = getOrderTimeline(order);

  return `
    <div class="order-tracking${compactClass}" aria-label="Suivi de commande">
      <div class="tracking-head">
        <span>Suivi de commande</span>
        <strong>${getOrderStatus(order)}</strong>
      </div>
      <p class="tracking-estimate">Livraison estimee: ${formatDeliveryEstimate(estimate)}</p>
      ${
        ["refused", "cancelled"].includes(normalizeRestaurantOrderStatus(order.status))
          ? `<p class="tracking-estimate alert">${getOrderStatus(order)}</p>`
          : ""
      }
      <div class="tracking-steps">
        ${timeline.map(
          (step, index) => `
            <div class="tracking-step ${index < activeIndex ? "done" : ""} ${index === activeIndex ? "current" : ""} ${index <= activeIndex ? "active" : ""}">
              <span class="tracking-dot" aria-hidden="true"></span>
              <span>${step.label}</span>
            </div>
          `,
        ).join("")}
      </div>
    </div>
  `;
}

function renderOrderModal(order) {
  state.activeOrder = order;
  orderMessage.textContent = `Commande ${order.reference} sauvegardee. Mode de paiement: ${order.paymentLabel}. Livraison estimee: ${formatDeliveryEstimate(getOrderEstimate(order))}.`;
  orderTracking.innerHTML = renderOrderTracking(order);
}

function renderAccount() {
  authButton.textContent = state.currentUser ? getInitials(state.currentUser.name) : "SF";
  authName.value = state.currentUser?.name || "";
  authPhone.value = state.currentUser?.phone || "";
  authAddress.value = state.currentUser?.address || "";

  authStatus.textContent = state.currentUser
    ? `Connecte: ${state.currentUser.name}. Tes donnees sont sauvegardees sur cet appareil.`
    : "Connecte-toi pour sauvegarder tes commandes, ton panier et tes avis.";

  if (!state.orders.length) {
    orderHistory.innerHTML = `<p class="restaurant-meta">Aucune commande sauvegardee pour le moment.</p>`;
    return;
  }

  orderHistory.innerHTML = `
    <h3>Historique</h3>
    ${state.orders
      .map(
        (order) => `
          <article class="history-line">
            <strong>${order.reference} · ${money.format(order.total)}</strong>
            <span>${order.date} · ${order.paymentLabel}</span>
            <span>${order.items.length} article(s) - ${getOrderStatus(order)}</span>
            ${renderOrderTracking(order, { compact: true })}
            ${
              ["pending", "accepted"].includes(normalizeRestaurantOrderStatus(order.status))
                ? `<button class="small-action danger" type="button" data-cancel-client-order="${order.reference}">Annuler la commande</button>`
                : ""
            }
          </article>
        `,
      )
      .join("")}
  `;
}

function renderPaymentForm() {
  deliveryAddress.value = state.payment.address || state.currentUser?.address || "";
  deliveryPhone.value = state.payment.phone || state.currentUser?.phone || "";
  paymentMethod.value = state.payment.method || "cash";
}

function showCartNotice(message) {
  cartNotice.textContent = message;
  cartNotice.classList.add("show");
}

function clearCartNotice() {
  cartNotice.textContent = "";
  cartNotice.classList.remove("show");
}

function resetCheckoutButton() {
  checkoutButton.disabled = false;
  checkoutButton.textContent = "Valider la commande";
  delete checkoutButton.dataset.processing;
}

function getPaymentLabels() {
  return {
    cash: "Paiement a la livraison",
    "orange-money": "Orange Money",
    wave: "Wave",
    card: "Carte bancaire",
  };
}

function buildCheckoutOrder(items, totalValue, estimate) {
  const paymentLabels = getPaymentLabels();

  return {
    reference: `BKO-${Date.now().toString().slice(-6)}`,
    createdAt: Date.now(),
    date: new Date().toLocaleString("fr-FR"),
    customer: state.currentUser,
    clientId: state.currentUser.uid || "local-client",
    delivery: { ...state.payment, location: state.userLocation ? { ...state.userLocation } : null },
    deliveryAddress: state.payment.address,
    deliveryLocation: state.userLocation ? { ...state.userLocation } : null,
    paymentLabel: paymentLabels[state.payment.method] || "Paiement a la livraison",
    paymentMethod: state.payment.method,
    paymentStatus: state.payment.method === "card" ? "pending" : "cod",
    items: items.map((item) => ({ ...item })),
    total: totalValue,
    estimate,
    status: "pending",
  };
}

async function finalizeConfirmedOrder(order, paymentDetails = {}) {
  const confirmedOrder = {
    ...order,
    ...paymentDetails,
    status: order.status || "pending",
    updatedAt: Date.now(),
  };

  await requestClientNotificationPermission({ quiet: true });
  state.orders = state.orders.filter((savedOrder) => savedOrder.reference !== confirmedOrder.reference);
  state.orders.unshift(confirmedOrder);
  saveOrderToLocalRestaurantInbox(confirmedOrder);
  const firestoreSave = saveOrderToFirestore(confirmedOrder);
  state.cart = {};
  clearCartNotice();
  saveState();
  renderCart();
  renderAccount();
  cartPanel.classList.remove("open");
  renderOrderModal(confirmedOrder);
  orderModal.classList.add("open");
  notifyClientOrderStatus(confirmedOrder, "pending");
  void firestoreSave;
}

async function startStripeCheckout(order) {
  localStorage.setItem(STRIPE_PENDING_ORDER_KEY, JSON.stringify(order));
  saveState();
  showCartNotice("Ouverture du paiement securise Stripe...");

  const response = await fetch("/api/stripe-create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order }),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !payload.url) {
    localStorage.removeItem(STRIPE_PENDING_ORDER_KEY);
    const message =
      payload.error === "stripe_not_configured"
        ? "Stripe n'est pas encore configure dans Vercel."
        : payload.message || "Paiement par carte indisponible pour le moment.";
    throw new Error(message);
  }

  window.location.href = payload.url;
}

async function verifyStripeSession(sessionId) {
  const response = await fetch(`/api/stripe-session?session_id=${encodeURIComponent(sessionId)}`);
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Verification du paiement impossible.");
  }

  return payload;
}

async function handleStripeReturn() {
  const params = new URLSearchParams(window.location.search);
  const paymentStatus = params.get("payment");
  if (!paymentStatus?.startsWith("stripe-")) return;

  const cleanUrl = `${window.location.pathname}${window.location.hash || ""}`;

  if (paymentStatus === "stripe-cancel") {
    window.history.replaceState({}, "", cleanUrl);
    cartPanel.classList.add("open");
    showCartNotice("Paiement par carte annule. Ton panier est toujours la.");
    return;
  }

  const sessionId = params.get("session_id");
  const pendingOrder = JSON.parse(localStorage.getItem(STRIPE_PENDING_ORDER_KEY) || "null");
  window.history.replaceState({}, "", cleanUrl);

  if (!sessionId || !pendingOrder) {
    cartPanel.classList.add("open");
    showCartNotice("Paiement recu, mais commande locale introuvable. Contacte le support Bko Eats.");
    return;
  }

  try {
    showCartNotice("Verification du paiement carte...");
    const session = await verifyStripeSession(sessionId);
    if (session.payment_status !== "paid") {
      cartPanel.classList.add("open");
      showCartNotice("Paiement carte non confirme. Reessaie ou choisis un autre moyen de paiement.");
      return;
    }

    localStorage.removeItem(STRIPE_PENDING_ORDER_KEY);
    await finalizeConfirmedOrder(pendingOrder, {
      paymentStatus: "paid",
      stripeSessionId: session.id,
      stripeAmountTotal: session.amount_total,
      stripeCurrency: session.currency,
    });
  } catch (error) {
    cartPanel.classList.add("open");
    showCartNotice(error.message || "Verification Stripe impossible pour le moment.");
  }
}

function getAllItems() {
  return restaurants.flatMap((restaurant) =>
    restaurant.menu.map((item) => ({
      ...item,
      restaurant: restaurant.name,
      restaurantId: restaurant.id,
      restaurantCategory: restaurant.category,
    })),
  );
}

function renderCategories() {
  const categories = ["Tous", "Favoris", ...new Set(restaurants.map((restaurant) => restaurant.category))];
  categoryRow.innerHTML = categories
    .map(
      (category) => `
        <button class="category-chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderRestaurants() {
  document.body.classList.toggle("detail-mode", Boolean(state.selectedRestaurantId));

  if (state.selectedRestaurantId) {
    renderRestaurantDetail(state.selectedRestaurantId);
    return;
  }

  const query = state.query.trim().toLowerCase();
  const filtered = restaurants.filter((restaurant) => {
    const hasFavoriteItem = restaurant.menu.some((item) => isFavorite("items", item.id));
    const matchesCategory =
      state.category === "Tous" ||
      restaurant.category === state.category ||
      (state.category === "Favoris" && (isFavorite("restaurants", restaurant.id) || hasFavoriteItem));
    const matchesQuery =
      !query ||
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.category.toLowerCase().includes(query) ||
      restaurant.menu.some((item) => item.name.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  restaurantList.innerHTML = filtered.length
    ? filtered.map(renderRestaurantCard).join("")
    : `<div class="restaurant-card"><div class="restaurant-body"><h3>Aucun resultat</h3><p class="restaurant-meta">${state.category === "Favoris" ? "Ajoute un restaurant ou un plat en favori pour le retrouver ici." : "Essaie une autre recherche."}</p></div></div>`;
}

function renderRestaurantCard(restaurant) {
  const estimate = getDeliveryEstimate(restaurant);
  const favorite = isFavorite("restaurants", restaurant.id);
  const favoriteItems = restaurant.menu.filter((item) => isFavorite("items", item.id)).length;

  return `
    <article class="restaurant-card restaurant-link" data-restaurant="${restaurant.id}">
      <div class="restaurant-image" style="--image: url('${restaurant.image}')"></div>
      <div class="restaurant-body">
        <div class="restaurant-title">
          <h3>${restaurant.name}</h3>
          <button class="favorite-button ${favorite ? "active" : ""}" type="button" data-favorite-restaurant="${restaurant.id}" aria-label="${favorite ? "Retirer des favoris" : "Ajouter aux favoris"}">
            ${favorite ? "&#9829;" : "&#9825;"}
          </button>
          <span class="rating">★ ${restaurant.rating}</span>
        </div>
        <p class="restaurant-meta">${restaurant.category} - ${formatDeliveryEstimate(estimate)} - Livraison ${money.format(DEFAULT_DELIVERY_FEE)}</p>
        <p class="restaurant-description">${restaurant.description}</p>
        <div class="card-footer">
          <span>${restaurant.address}${favoriteItems ? ` - ${favoriteItems} plat(s) favori(s)` : ""}</span>
          <button class="text-button" type="button">Voir le menu</button>
        </div>
      </div>
    </article>
  `;
}

function renderRestaurantDetail(restaurantId) {
  const restaurant = restaurants.find((candidate) => candidate.id === restaurantId);
  if (!restaurant) {
    state.selectedRestaurantId = "";
    renderRestaurants();
    return;
  }

  const reviewLabel = restaurant.reviewCount
    ? `${restaurant.rating} (${restaurant.reviewCount} avis)`
    : `${restaurant.rating} (avis a completer)`;
  const estimate = getDeliveryEstimate(restaurant);
  const restaurantFavorite = isFavorite("restaurants", restaurant.id);

  const menuGroups = restaurant.menu.reduce((groups, item) => {
    const section = item.section || "Menu";
    groups[section] = groups[section] || [];
    groups[section].push(item);
    return groups;
  }, {});
  const menuItems = Object.entries(menuGroups)
    .map(
      ([section, items]) => `
        <section class="menu-group">
          <h3>${section}</h3>
          <div class="menu-list">
            ${items
              .map(
                (item) => `
                  <article class="menu-item detail-menu-item">
                    <div>
                      <strong>${item.name}</strong>
                      <p>${item.description}</p>
                      <span>${money.format(item.price)}</span>
                    </div>
                    <div class="menu-actions">
                      <button class="favorite-button item-favorite ${isFavorite("items", item.id) ? "active" : ""}" type="button" data-favorite-item="${item.id}" aria-label="${isFavorite("items", item.id) ? "Retirer ce plat des favoris" : "Ajouter ce plat aux favoris"}">
                        ${isFavorite("items", item.id) ? "&#9829;" : "&#9825;"}
                      </button>
                      <button class="add-button" type="button" data-item="${item.id}">Ajouter</button>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
  const allReviews = [...restaurant.reviews, ...(state.userReviews[restaurant.id] || [])];
  const hoursRows = restaurant.hours
    .map(
      ([day, hours]) => `
        <tr>
          <th scope="row">${day}</th>
          <td>${hours}</td>
        </tr>
      `,
    )
    .join("");
  const contactInfo = `
    <section class="contact-section">
      <div class="section-heading compact">
        <div>
          <p class="eyebrow">Coordonnees</p>
          <h2>Restaurant</h2>
        </div>
      </div>
      <div class="info-list">
        <div>
          <strong>Localisation</strong>
          <span>${restaurant.address}</span>
        </div>
        <div>
          <strong>Telephone</strong>
          <span>${restaurant.phone}</span>
        </div>
        ${
          restaurant.website
            ? `<div><strong>Site web</strong><a href="${restaurant.website}" target="_blank" rel="noreferrer">${restaurant.website.replace("https://", "").replace("/", "")}</a></div>`
            : ""
        }
      </div>
    </section>
  `;

  restaurantList.innerHTML = `
    <section class="restaurant-detail">
      <button class="back-button" type="button" id="backToRestaurants">← Restaurants</button>
      <div class="detail-hero" style="--image: url('${restaurant.image}')"></div>
      <div class="detail-header">
        <div class="detail-title-row">
          <div>
            <p class="eyebrow">${restaurant.category}</p>
            <h2>${restaurant.name}</h2>
          </div>
          <button class="favorite-button ${restaurantFavorite ? "active" : ""}" type="button" data-favorite-restaurant="${restaurant.id}" aria-label="${restaurantFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}">
            ${restaurantFavorite ? "&#9829;" : "&#9825;"}
          </button>
        </div>
        <p>${restaurant.description}</p>
        <div class="detail-chips">
          <span>★ ${reviewLabel}</span>
          <span>${formatDeliveryEstimate(estimate)}</span>
          <span>Livraison ${money.format(DEFAULT_DELIVERY_FEE)}</span>
        </div>
      </div>

      <section class="delivery-card">
        <div>
          <p class="eyebrow">Livraison estimee</p>
          <h3>${formatDeliveryEstimate(estimate)}</h3>
          <p>${
            estimate.basedOnLocation
              ? "Calcule avec ta position actuelle et la localisation du restaurant."
              : "Appuie sur Bamako, Mali en haut pour utiliser ta position reelle."
          }</p>
        </div>
        <button class="text-button" type="button" data-use-location>Utiliser ma position</button>
      </section>

      <section class="hours-section">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Horaires</p>
            <h2>Ouverture</h2>
          </div>
        </div>
        <table class="hours-table">
          <tbody>${hoursRows}</tbody>
        </table>
      </section>

      <section class="reviews">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Avis</p>
            <h2>Ce que les clients disent</h2>
          </div>
        </div>
        <form class="review-form" id="reviewForm">
          <label for="reviewInput">Ajouter ton avis</label>
          <textarea id="reviewInput" name="review" rows="3" placeholder="Exemple: Burger tres bon, livraison rapide..."></textarea>
          <button class="primary-button" type="submit">Publier l'avis</button>
        </form>
        <div class="review-list">
          ${allReviews.map((review) => `<p class="review-line">"${review}"</p>`).join("")}
        </div>
      </section>

      <section>
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Menu</p>
            <h2>Commander</h2>
          </div>
        </div>
        <div class="menu-groups">${menuItems}</div>
      </section>

      ${contactInfo}
    </section>
  `;
}

function addItem(itemId) {
  const item = getAllItems().find((candidate) => candidate.id === itemId);
  if (!item) return;

  state.cart[itemId] = state.cart[itemId] || { ...item, quantity: 0 };
  state.cart[itemId].quantity += 1;
  clearCartNotice();
  saveState();
  renderCart();
}

function updateQuantity(itemId, delta) {
  if (!state.cart[itemId]) return;

  state.cart[itemId].quantity += delta;
  if (state.cart[itemId].quantity <= 0) {
    delete state.cart[itemId];
  }

  saveState();
  renderCart();
}

function getCartTotals() {
  const items = Object.values(state.cart);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalValue = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const estimate = getCartDeliveryEstimate(items);
  const deliveryValue = itemCount ? DEFAULT_DELIVERY_FEE : 0;
  const totalValue = subtotalValue + deliveryValue;

  return { items, itemCount, subtotalValue, deliveryValue, totalValue, estimate };
}

function roundWalletValue(value) {
  return Math.max(0, Math.round(Number(value || 0)));
}

function buildOrderFinancials(subtotalValue, deliveryFee = DEFAULT_DELIVERY_FEE) {
  const subtotalAmount = roundWalletValue(subtotalValue);
  const deliveryAmount = roundWalletValue(deliveryFee);
  const totalAmount = subtotalAmount + deliveryAmount;
  const platformCommission = roundWalletValue(totalAmount * PLATFORM_COMMISSION_RATE);
  const restaurantNet = roundWalletValue(totalAmount - platformCommission);

  return {
    subtotal: subtotalAmount,
    deliveryFee: deliveryAmount,
    platformCommission,
    restaurantNet,
    adminShare: platformCommission,
  };
}

function getOrderFinancials(order) {
  const subtotalValue =
    Number(order.subtotal) ||
    (Array.isArray(order.items)
      ? order.items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0)
      : 0);
  const deliveryFee =
    Number(order.deliveryFee) ||
    Math.max(0, Number(order.total || 0) - subtotalValue) ||
    DEFAULT_DELIVERY_FEE;

  return {
    ...buildOrderFinancials(subtotalValue, deliveryFee),
  };
}

function isWalletCountedStatus(status) {
  return !["cancelled", "refused"].includes(normalizeRestaurantOrderStatus(status));
}

function getRestaurantWalletSummary(restaurantId) {
  const restaurant = getCatalogRestaurant(restaurantId) || { id: restaurantId, name: "Restaurant", address: "Bamako" };
  const orders = getLocalRestaurantInbox()
    .map(normalizeLocalRestaurantOrder)
    .filter((order) => order.restaurantId === restaurantId);
  const summary = {
    restaurantId,
    restaurant,
    orderCount: orders.length,
    activeOrderCount: 0,
    pendingOrderCount: 0,
    gross: 0,
    deliveryFees: 0,
    commission: 0,
    restaurantWallet: 0,
    adminWallet: 0,
  };

  orders.forEach((order) => {
    if (!isWalletCountedStatus(order.status)) return;

    const financials = getOrderFinancials(order);
    summary.activeOrderCount += 1;
    summary.gross += financials.subtotal;
    summary.deliveryFees += financials.deliveryFee;
    summary.commission += financials.platformCommission;
    summary.restaurantWallet += financials.restaurantNet;
    summary.adminWallet += financials.adminShare;
    if (normalizeRestaurantOrderStatus(order.status) === "pending") summary.pendingOrderCount += 1;
  });

  return summary;
}

function getAdminWalletReport() {
  const localOrders = getLocalRestaurantInbox().map(normalizeLocalRestaurantOrder);
  const orderMap = new Map(localOrders.map((order) => [getRestaurantOrderKey(order), order]));
  state.adminOrders.forEach((order) => {
    orderMap.set(getRestaurantOrderKey(order), order);
  });
  const orders = [...orderMap.values()]
    .sort((a, b) => Number(b.updatedAt || b.createdAt || 0) - Number(a.updatedAt || a.createdAt || 0));
  const ordersByRestaurant = orders.reduce((groups, order) => {
    groups[order.restaurantId] = groups[order.restaurantId] || [];
    groups[order.restaurantId].push(order);
    return groups;
  }, {});
  const walletByRestaurant = restaurants.map((restaurant) => {
    const summary = getRestaurantWalletSummary(restaurant.id);
    const remoteOrders = ordersByRestaurant[restaurant.id] || [];

    if (!remoteOrders.length) return summary;

    return remoteOrders.reduce(
      (wallet, order) => {
        wallet.orderCount += 1;
        if (!isWalletCountedStatus(order.status)) return wallet;

        const financials = getOrderFinancials(order);
        wallet.activeOrderCount += 1;
        wallet.gross += financials.subtotal;
        wallet.deliveryFees += financials.deliveryFee;
        wallet.commission += financials.platformCommission;
        wallet.restaurantWallet += financials.restaurantNet;
        wallet.adminWallet += financials.adminShare;
        if (normalizeRestaurantOrderStatus(order.status) === "pending") wallet.pendingOrderCount += 1;
        return wallet;
      },
      {
        restaurantId: restaurant.id,
        restaurant,
        orderCount: 0,
        activeOrderCount: 0,
        pendingOrderCount: 0,
        gross: 0,
        deliveryFees: 0,
        commission: 0,
        restaurantWallet: 0,
        adminWallet: 0,
      },
    );
  });
  const totals = walletByRestaurant.reduce(
    (result, wallet) => ({
      gross: result.gross + wallet.gross,
      deliveryFees: result.deliveryFees + wallet.deliveryFees,
      commission: result.commission + wallet.commission,
      restaurantWallet: result.restaurantWallet + wallet.restaurantWallet,
      adminWallet: result.adminWallet + wallet.adminWallet,
      orderCount: result.orderCount + wallet.orderCount,
      activeOrderCount: result.activeOrderCount + wallet.activeOrderCount,
      pendingOrderCount: result.pendingOrderCount + wallet.pendingOrderCount,
    }),
    {
      gross: 0,
      deliveryFees: 0,
      commission: 0,
      restaurantWallet: 0,
      adminWallet: 0,
      orderCount: 0,
      activeOrderCount: 0,
      pendingOrderCount: 0,
    },
  );

  return { totals, wallets: walletByRestaurant, orders };
}

function createRestaurantOrdersFromCheckout(order) {
  const groupedItems = order.items.reduce((groups, item) => {
    const restaurantId = item.restaurantId || "unknown";
    groups[restaurantId] = groups[restaurantId] || [];
    groups[restaurantId].push(item);
    return groups;
  }, {});

  return Object.entries(groupedItems).map(([restaurantId, items]) => {
    const subtotalValue = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
    const financials = buildOrderFinancials(subtotalValue, DEFAULT_DELIVERY_FEE);
    return normalizeLocalRestaurantOrder({
      id: `${order.reference}-${restaurantId}`,
      restaurantId,
      clientId: order.clientId || state.currentUser?.uid || "local-client",
      clientName:
        state.currentUser?.role === "restaurant"
          ? "Client test"
          : order.customer?.name || state.currentUser?.name || "Client Bko Eats",
      clientPhone: order.delivery?.phone || order.customer?.phone || state.currentUser?.phone || "",
      clientAddress: order.delivery?.address || order.customer?.address || state.currentUser?.address || "",
      deliveryAddress: order.deliveryAddress || order.delivery?.address || order.customer?.address || state.currentUser?.address || "",
      deliveryLocation: order.deliveryLocation || order.delivery?.location || null,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price || 0),
        quantity: Number(item.quantity || 1),
      })),
      total: subtotalValue + DEFAULT_DELIVERY_FEE,
      ...financials,
      status: "pending",
      reference: order.reference,
      paymentLabel: order.paymentLabel,
      paymentStatus: order.paymentStatus || "cod",
      stripeSessionId: order.stripeSessionId || "",
      createdAt: order.createdAt || Date.now(),
      createdAtText: order.date,
    });
  });
}

function saveOrderToLocalRestaurantInbox(order) {
  const inbox = getLocalRestaurantInbox().map(normalizeLocalRestaurantOrder);
  const nextOrders = createRestaurantOrdersFromCheckout(order);
  const byId = new Map(inbox.map((candidate) => [getRestaurantOrderKey(candidate), candidate]));

  nextOrders.forEach((restaurantOrder) => {
    byId.set(getRestaurantOrderKey(restaurantOrder), restaurantOrder);
  });

  saveLocalRestaurantInbox([...byId.values()]);
  if (state.restaurantMode && state.restaurantProfile?.id) {
    syncRestaurantOrders(buildLocalRestaurantOrders(state.restaurantProfile.id), {
      notify: true,
      render: true,
    });
  }
}

function updateLocalRestaurantInboxOrderStatus(orderId, status) {
  const inbox = getLocalRestaurantInbox().map(normalizeLocalRestaurantOrder);
  const nextInbox = inbox.map((order) =>
    getRestaurantOrderKey(order) === orderId || order.reference === orderId
      ? { ...order, status, updatedAt: Date.now() }
      : order,
  );
  saveLocalRestaurantInbox(nextInbox);
}

async function cancelClientOrder(reference) {
  const order = state.orders.find((candidate) => candidate.reference === reference);
  if (!order) return;

  order.status = "cancelled";
  updateLocalRestaurantInboxOrderStatus(reference, "cancelled");

  if (getFirebaseConfig() && state.currentUser?.uid) {
    try {
      const client = await loadFirebaseAuthClient();
      const ordersQuery = client.query(
        client.collection(client.db, "orders"),
        client.where("clientId", "==", state.currentUser.uid),
      );
      const snap = await client.getDocs(ordersQuery);
      await Promise.all(
        snap.docs
          .filter((docSnap) => docSnap.data().reference === reference)
          .map((docSnap) =>
            client.updateDoc(client.doc(client.db, "orders", docSnap.id), {
              status: "cancelled",
              updatedAt: client.serverTimestamp(),
            }),
          ),
      );
    } catch {
      showClientNotificationToast("Commande annulee localement", "Firebase n'a pas pu etre mis a jour.");
    }
  }

  saveState();
  renderAccount();
  if (state.activeOrder?.reference === reference) renderOrderModal(order);
}

function createRestaurantTestOrder() {
  if (!state.restaurantProfile?.id) return;

  const restaurantId = state.restaurantProfile.id;
  const menuItem = state.restaurantMenuItems[0] || {
    id: `${restaurantId}-test-item`,
    name: "Commande test",
    price: 5000,
  };
  const order = {
    reference: `BKO-${Date.now().toString().slice(-6)}`,
    createdAt: Date.now(),
    date: new Date().toLocaleString("fr-FR"),
    customer: {
      uid: "test-client",
      name: "Client test",
      phone: "+223 70 00 00 00",
    },
    delivery: {
      address: "Adresse test a Bamako",
      phone: "+223 70 00 00 00",
      location: state.userLocation || null,
    },
    deliveryAddress: "Adresse test a Bamako",
    deliveryLocation: state.userLocation || null,
    paymentLabel: "Paiement a la livraison",
    items: [
      {
        ...menuItem,
        restaurantId,
        restaurant: state.restaurantProfile.name,
        quantity: 1,
      },
    ],
    total: Number(menuItem.price || 0) + DEFAULT_DELIVERY_FEE,
    status: "pending",
  };

  saveOrderToLocalRestaurantInbox(order);
}

async function saveOrderToFirestore(order) {
  if (!getFirebaseConfig()) return;

  try {
    const client = await loadFirebaseAuthClient();
    const groupedItems = order.items.reduce((groups, item) => {
      const restaurantId = item.restaurantId || "unknown";
      groups[restaurantId] = groups[restaurantId] || [];
      groups[restaurantId].push(item);
      return groups;
    }, {});

    await Promise.all(
      Object.entries(groupedItems).map(([restaurantId, items]) => {
        const subtotalValue = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
        const financials = buildOrderFinancials(subtotalValue, DEFAULT_DELIVERY_FEE);
        const restaurantOrder = {
          restaurantId,
          clientId: order.clientId || client.auth.currentUser?.uid || state.currentUser?.uid || "local-client",
          clientName: order.customer?.name || state.currentUser?.name || "Client Bko Eats",
          clientPhone: order.delivery?.phone || order.customer?.phone || state.currentUser?.phone || "",
          clientAddress: order.delivery?.address || order.customer?.address || state.currentUser?.address || "",
          deliveryAddress: order.deliveryAddress || order.delivery?.address || order.customer?.address || state.currentUser?.address || "",
          deliveryLocation: order.deliveryLocation || order.delivery?.location || null,
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: Number(item.price || 0),
            quantity: Number(item.quantity || 1),
          })),
          total: subtotalValue + DEFAULT_DELIVERY_FEE,
          ...financials,
          status: "pending",
          reference: order.reference,
          paymentLabel: order.paymentLabel,
          paymentStatus: order.paymentStatus || "cod",
          stripeSessionId: order.stripeSessionId || "",
          createdAt: client.serverTimestamp(),
          createdAtText: order.date,
        };

        return client.addDoc(client.collection(client.db, "orders"), restaurantOrder);
      }),
    );
  } catch {
    showCartNotice("Commande sauvegardee localement. Firestore n'a pas pu enregistrer la commande.");
  }
}

function renderCart() {
  const { items, itemCount, subtotalValue, deliveryValue, totalValue, estimate } = getCartTotals();

  cartCount.textContent = itemCount;
  openCart.classList.toggle("is-hidden", itemCount === 0);
  subtotal.textContent = money.format(subtotalValue);
  delivery.textContent = money.format(deliveryValue);
  deliveryEstimate.textContent = itemCount ? formatDeliveryEstimate(estimate) : "Active ta position";
  total.textContent = money.format(totalValue);
  checkoutButton.disabled = itemCount === 0;

  cartItems.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="cart-line">
              <div>
                <h3>${item.name}</h3>
                <p>${item.restaurant} · ${money.format(item.price)}</p>
              </div>
              <div class="quantity">
                <button class="qty-button" type="button" data-delta="-1" data-item="${item.id}">-</button>
                <strong>${item.quantity}</strong>
                <button class="qty-button" type="button" data-delta="1" data-item="${item.id}">+</button>
              </div>
            </article>
          `,
        )
        .join("")
    : `<p class="restaurant-meta">Ton panier est vide. Ajoute un plat pour commencer.</p>`;
}

categoryRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  state.selectedRestaurantId = "";
  renderCategories();
  renderRestaurants();
});

restaurantList.addEventListener("click", (event) => {
  const backButton = event.target.closest("#backToRestaurants");
  if (backButton) {
    state.selectedRestaurantId = "";
    renderRestaurants();
    return;
  }

  const locationButton = event.target.closest("[data-use-location]");
  if (locationButton) {
    requestUserLocation();
    return;
  }

  const favoriteRestaurantButton = event.target.closest("[data-favorite-restaurant]");
  if (favoriteRestaurantButton) {
    toggleFavorite("restaurants", favoriteRestaurantButton.dataset.favoriteRestaurant);
    return;
  }

  const favoriteItemButton = event.target.closest("[data-favorite-item]");
  if (favoriteItemButton) {
    toggleFavorite("items", favoriteItemButton.dataset.favoriteItem);
    return;
  }

  const addButton = event.target.closest("[data-item]");
  if (addButton) {
    addItem(addButton.dataset.item);
    return;
  }

  const card = event.target.closest("[data-restaurant]");
  if (!card) return;

  state.selectedRestaurantId = card.dataset.restaurant;
  renderRestaurants();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

restaurantList.addEventListener("submit", (event) => {
  const form = event.target.closest("#reviewForm");
  if (!form || !state.selectedRestaurantId) return;

  event.preventDefault();
  const input = form.elements.review;
  const review = input.value.trim();
  if (!review) return;

  state.userReviews[state.selectedRestaurantId] = state.userReviews[state.selectedRestaurantId] || [];
  const author = state.currentUser?.name ? `${state.currentUser.name}: ` : "";
  state.userReviews[state.selectedRestaurantId].unshift(`${author}${review}`);
  input.value = "";
  saveState();
  renderRestaurantDetail(state.selectedRestaurantId);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delta]");
  if (!button) return;

  updateQuantity(button.dataset.item, Number(button.dataset.delta));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.selectedRestaurantId = "";
  renderRestaurants();
});

resetButton.addEventListener("click", () => {
  state.category = "Tous";
  state.query = "";
  state.selectedRestaurantId = "";
  searchInput.value = "";
  renderCategories();
  renderRestaurants();
});

useLocationButton.addEventListener("click", requestUserLocation);

restaurantEntryButton.addEventListener("click", () => {
  state.loginIntent = "restaurant";
  const restaurantId = getCurrentRestaurantId();
  if (restaurantId) {
    openRestaurantDashboard(restaurantId);
    return;
  }

  state.onboardingDismissed = false;
  renderOnboarding();
  showRestaurantLogin(true);
});

restaurantLoginButton.addEventListener("click", () => {
  state.loginIntent = "restaurant";
  showRestaurantLogin(true);
});

restaurantCredentialForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await loginRestaurantWithCredentials(restaurantLoginId.value, restaurantLoginPassword.value);
});

googleSignup.addEventListener("click", () => {
  state.loginIntent = "client";
  signInWithGoogle();
});

clientLoginButton.addEventListener("click", () => showClientLogin(true));
manualSignupButton.addEventListener("click", () => showManualSignup(true));
backToQuickSignupFromLogin.addEventListener("click", () => showClientLogin(false));
backToQuickSignup.addEventListener("click", () => showManualSignup(false));
backToQuickSignupFromRestaurant.addEventListener("click", () => showRestaurantLogin(false));

clientLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await loginClientWithEmail(loginEmail.value.trim(), loginPassword.value);
});

skipOnboarding.addEventListener("click", () => {
  state.onboardingDismissed = true;
  saveState();
  renderOnboarding();
});

onboardingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const firstName = signupFirstName.value.trim();
  const lastName = signupLastName.value.trim();
  const email = signupEmail.value.trim();
  const phone = signupPhone.value.trim();
  const birthdate = signupBirthdate.value;
  const address = signupAddress.value.trim();
  const password = signupPassword.value;

  if (!firstName || !lastName || !email || !phone || !birthdate || !address || !password) {
    setStatus(signupStatus, "Complete tous les champs pour creer ton compte.", "error");
    return;
  }

  await createClientAccountWithEmail({
    firstName,
    lastName,
    email,
    phone,
    birthdate,
    address,
    password,
  });
});

openCart.addEventListener("click", () => cartPanel.classList.add("open"));
closeCart.addEventListener("click", () => cartPanel.classList.remove("open"));

adminDashboard.addEventListener("submit", async (event) => {
  const adminForm = event.target.closest("#adminLoginForm");
  if (!adminForm) return;

  event.preventDefault();
  const email = adminForm.elements.email.value.trim();
  const password = adminForm.elements.password.value;
  await loginAdminWithEmail(email, password);
});

adminDashboard.addEventListener("click", async (event) => {
  if (event.target.closest("[data-admin-refresh]")) {
    await renderAdminDashboard();
    return;
  }

  if (event.target.closest("[data-admin-reset-wallets]")) {
    await resetAdminWallets();
    return;
  }

  if (event.target.closest("[data-admin-logout]")) {
    await logoutAdmin();
    return;
  }

  if (event.target.closest("[data-admin-close]")) {
    closeAdminDashboard();
  }
});

restaurantDashboard.addEventListener("click", async (event) => {
  const closeButton = event.target.closest("[data-restaurant-close]");
  if (closeButton) {
    closeRestaurantDashboard();
    return;
  }

  const switchAccountButton = event.target.closest("[data-switch-account]");
  if (switchAccountButton) {
    await showIdentificationPage();
    return;
  }

  const notificationButton = event.target.closest("[data-enable-notifications]");
  if (notificationButton) {
    await requestRestaurantNotificationPermission();
    return;
  }

  const testNotificationButton = event.target.closest("[data-test-notification]");
  if (testNotificationButton) {
    createRestaurantTestOrder();
    return;
  }

  const refreshButton = event.target.closest("[data-restaurant-refresh]");
  if (refreshButton && state.restaurantProfile?.id) {
    await openRestaurantDashboard(state.restaurantProfile.id);
    return;
  }

  const tabButton = event.target.closest("[data-restaurant-tab]");
  if (tabButton) {
    state.restaurantTab = tabButton.dataset.restaurantTab;
    state.editingMenuItemId = "";
    renderRestaurantDashboard();
    return;
  }

  const orderButton = event.target.closest("[data-order-id][data-order-status]");
  if (orderButton) {
    await updateRestaurantOrderStatus(orderButton.dataset.orderId, orderButton.dataset.orderStatus);
    return;
  }

  const editButton = event.target.closest("[data-menu-edit]");
  if (editButton) {
    state.editingMenuItemId = editButton.dataset.menuEdit;
    renderRestaurantDashboard();
    return;
  }

  const cancelButton = event.target.closest("[data-menu-cancel]");
  if (cancelButton) {
    state.editingMenuItemId = "";
    renderRestaurantDashboard();
    return;
  }

  const toggleButton = event.target.closest("[data-menu-toggle]");
  if (toggleButton) {
    await toggleRestaurantMenuItem(toggleButton.dataset.menuToggle);
    return;
  }

  const deleteButton = event.target.closest("[data-menu-delete]");
  if (deleteButton) {
    await deleteRestaurantMenuItem(deleteButton.dataset.menuDelete);
  }
});

restaurantDashboard.addEventListener("submit", async (event) => {
  const menuForm = event.target.closest("#restaurantMenuForm");
  if (menuForm) {
    event.preventDefault();
    await saveRestaurantMenuItem(menuForm);
    return;
  }

  const settingsForm = event.target.closest("#restaurantSettingsForm");
  if (settingsForm) {
    event.preventDefault();
    await saveRestaurantSettings(settingsForm);
  }
});

authButton.addEventListener("click", () => {
  renderAccount();
  authModal.classList.add("open");
});

closeAuthModal.addEventListener("click", () => authModal.classList.remove("open"));

logoutButton.addEventListener("click", showIdentificationPage);

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.currentUser = {
    ...state.currentUser,
    name: authName.value.trim(),
    phone: authPhone.value.trim(),
    address: authAddress.value.trim(),
    provider: state.currentUser?.provider || "Manuel",
    email: state.currentUser?.email || "",
    birthdate: state.currentUser?.birthdate || "",
    role: state.currentUser?.role || "client",
  };
  state.onboardingDismissed = true;
  state.payment.phone = state.currentUser.phone || state.payment.phone;
  state.payment.address = state.currentUser.address || state.payment.address;
  saveState();
  await saveUserDataToFirestore();
  renderOnboarding();
  renderAccount();
  renderPaymentForm();
  authModal.classList.remove("open");

  if (getCartTotals().itemCount > 0) {
    cartPanel.classList.add("open");
    showCartNotice("Compte enregistre. Tu peux maintenant valider la commande.");
  }
});

orderHistory.addEventListener("click", async (event) => {
  const cancelButton = event.target.closest("[data-cancel-client-order]");
  if (!cancelButton) return;

  await cancelClientOrder(cancelButton.dataset.cancelClientOrder);
});

paymentForm.addEventListener("input", () => {
  state.payment = {
    method: paymentMethod.value,
    address: deliveryAddress.value.trim(),
    phone: deliveryPhone.value.trim(),
  };
  clearCartNotice();
  saveState();
});

checkoutButton.addEventListener("click", async () => {
  if (checkoutButton.dataset.processing === "true") return;

  const { items, itemCount, totalValue, estimate } = getCartTotals();
  if (itemCount === 0) return;

  state.payment = {
    method: paymentMethod.value,
    address: deliveryAddress.value.trim(),
    phone: deliveryPhone.value.trim(),
  };

  if (!state.currentUser) {
    renderAccount();
    authStatus.textContent = "Cree ton compte avant de valider la commande. Il servira a sauvegarder tes commandes.";
    authModal.classList.add("open");
    showCartNotice("Cree d'abord ton compte, puis reviens valider la commande.");
    return;
  }

  if (!state.payment.address || !state.payment.phone) {
    cartPanel.classList.add("open");
    showCartNotice("Ajoute ton adresse et ton telephone avant de valider.");
    deliveryAddress.focus();
    return;
  }

  checkoutButton.dataset.processing = "true";
  checkoutButton.disabled = true;
  checkoutButton.textContent = "Validation...";
  showCartNotice("Validation de ta commande...");

  const order = buildCheckoutOrder(items, totalValue, estimate);

  try {
    if (state.payment.method === "card") {
      await startStripeCheckout(order);
      return;
    }

    await finalizeConfirmedOrder(order);
    resetCheckoutButton();
  } catch (error) {
    showCartNotice(error.message || "Impossible de valider la commande pour le moment.");
    resetCheckoutButton();
  }
});

closeModal.addEventListener("click", () => {
  orderModal.classList.remove("open");
  state.activeOrder = null;
});

window.addEventListener("storage", (event) => {
  if (!event.newValue) return;

  try {
    if (event.key === STORAGE_KEY) {
      const saved = JSON.parse(event.newValue);
      syncLocalRestaurantOrdersFromStorage(saved.orders || []);
    }

    if (event.key === RESTAURANT_ORDERS_KEY) {
      syncLocalRestaurantOrdersFromStorage();
      syncClientOrdersFromRestaurantInbox();
      if (state.adminMode && isAdminAuthenticated()) void renderAdminDashboard();
    }
  } catch {
    // Ignore malformed storage events from older app versions.
  }
});

restaurantOrderChannel?.addEventListener("message", (event) => {
  if (event.data?.type === "restaurant-orders-updated") {
    syncLocalRestaurantOrdersFromStorage();
    syncClientOrdersFromRestaurantInbox();
    if (state.adminMode && isAdminAuthenticated()) void renderAdminDashboard();
  }
});

resetLocalWalletsOnce();
loadSavedState();
updateLocationLabel();
renderOnboarding();
renderCategories();
renderRestaurants();
renderCart();
renderAccount();
renderPaymentForm();
if (isAdminRoute()) {
  void openAdminDashboard();
} else {
  resumeSavedRestaurantSession();
  requestLocationOnStartup();
}
void initFirebaseGoogleAuth().finally(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("login") === "google") {
    window.history.replaceState({}, "", window.location.pathname);
    state.loginIntent = "client";
    void signInWithGoogle();
  }

  void handleStripeReturn();
});

setInterval(() => {
  if (state.activeOrder && orderModal.classList.contains("open")) {
    renderOrderModal(state.activeOrder);
  }

  if (authModal.classList.contains("open") && state.orders.length) {
    renderAccount();
  }
}, 60000);
