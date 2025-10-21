// Application Data Structure (replacing MySQL database)
const appData = {
  // Users data
  users: [
    {
      user_id: 1,
      username: "admin",
      email: "admin@customer.com",
      password_hash: "password", // In a real app, this would be a proper hash
      created_at: "2023-01-01 12:00:00"
    },
    {
      user_id: 2,
      username: "user1",
      email: "user1@customer.com",
      password_hash: "password",
      created_at: "2023-01-02 12:00:00"
    }
  ],
  
  // Product items data
  product_items: [
    {
      product_id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life for immersive audio experience.",
      price: 69.99,
      image_url: "assets/images/burger1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 2,
      name: "Smart Fitness Tracker",
      description: "Track your steps, heart rate, sleep patterns and receive smartphone notifications with this sleek wearable device.",
      price: 49.99,
      image_url: "assets/images/wings1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 3,
      name: "Portable Phone Charger",
      description: "10000mAh high-capacity power bank with fast charging technology and multiple device compatibility.",
      price: 29.99,
      image_url: "assets/images/fries1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 4,
      name: "Wireless Gaming Mouse",
      description: "Ergonomic gaming mouse with customizable RGB lighting and ultra-responsive optical sensor for precision control.",
      price: 39.99,
      image_url: "assets/images/pizza1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 5,
      name: "Bluetooth Speaker",
      description: "360-degree surround sound speaker with waterproof design and 12-hour playtime for indoor and outdoor use.",
      price: 59.99,
      image_url: "assets/images/pasta1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 6,
      name: "Smart Home Security Camera",
      description: "1080p HD indoor camera with night vision, motion detection and smartphone app control for home monitoring.",
      price: 79.99,
      image_url: "assets/images/fajitas1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 7,
      name: "Wireless Keyboard",
      description: "Slim and quiet wireless keyboard with long battery life and comfortable key spacing for productive typing.",
      price: 34.99,
      image_url: "assets/images/salmon1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 8,
      name: "Tablet Stand",
      description: "Adjustable aluminum tablet stand with 360-degree rotation for optimal viewing angles in any position.",
      price: 24.99,
      image_url: "assets/images/wrap1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 9,
      name: "USB-C Hub Adapter",
      description: "Multi-port USB-C adapter with HDMI, USB 3.0, SD card reader and charging port for modern laptops.",
      price: 39.99,
      image_url: "assets/images/lava1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 10,
      name: "Smart LED Bulbs",
      description: "Color-changing LED bulbs with app control, dimming capability and energy-efficient design for any room.",
      price: 19.99,
      image_url: "assets/images/pancakes1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 11,
      name: "Laptop Cooling Pad",
      description: "Adjustable height cooling pad with dual fans and ergonomic design to prevent laptop overheating during use.",
      price: 29.99,
      image_url: "assets/images/sushi1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 12,
      name: "Wireless Earbuds",
      description: "True wireless earbuds with charging case, touch controls and crystal-clear audio for on-the-go listening.",
      price: 54.99,
      image_url: "assets/images/nachos1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 13,
      name: "External Hard Drive",
      description: "1TB portable external hard drive with USB 3.0 interface and shock-resistant design for secure data storage.",
      price: 59.99,
      image_url: "assets/images/soup1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 14,
      name: "Smartphone Gimbal",
      description: "3-axis smartphone stabilizer with app control and smooth motor technology for professional-quality video recording.",
      price: 89.99,
      image_url: "assets/images/thaicurry1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 15,
      name: "Wireless Charging Pad",
      description: "Fast wireless charging pad compatible with Qi-enabled devices for convenient cable-free charging.",
      price: 24.99,
      image_url: "assets/images/burrito1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 16,
      name: "Bluetooth Car Kit",
      description: "Hands-free Bluetooth car kit with FM transmitter and dual USB ports for safe driving and device charging.",
      price: 34.99,
      image_url: "assets/images/grilledcheese1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 17,
      name: "Smart Doorbell",
      description: "WiFi-enabled video doorbell with HD camera, night vision and smartphone notifications for home security.",
      price: 129.99,
      image_url: "assets/images/toast1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 18,
      name: "Noise Cancelling Earbuds",
      description: "Premium noise cancelling earbuds with active noise control and 24-hour battery life for immersive listening.",
      price: 149.99,
      image_url: "assets/images/butterchicken1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 19,
      name: "Smart Watch",
      description: "Feature-rich smartwatch with fitness tracking, heart rate monitoring and customizable watch faces for Android and iOS.",
      price: 199.99,
      image_url: "assets/images/tacos1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 20,
      name: "Wireless Router",
      description: "High-speed WiFi 6 router with advanced security features and coverage for large homes and offices.",
      price: 129.99,
      image_url: "assets/images/pizza2.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 21,
      name: "Gaming Keyboard",
      description: "Mechanical gaming keyboard with RGB backlighting, programmable keys and anti-ghosting technology.",
      price: 79.99,
      image_url: "assets/images/bowl1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 22,
      name: "4K Action Camera",
      description: "Waterproof 4K action camera with image stabilization and smartphone app for adventure recording.",
      price: 149.99,
      image_url: "assets/images/burger2.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 23,
      name: "Falafel Wrap",
      description: "Crunchy falafels, hummus, and veggies in pita - plant-based goodness.",
      price: 6.25,
      image_url: "assets/images/falafel1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 24,
      name: "Strawberry Smoothie",
      description: "Blended fresh strawberries, yogurt, and a splash of honey - cool and energizing.",
      price: 3.75,
      image_url: "assets/images/smoothie1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 25,
      name: "Caramel Frappe",
      description: "Iced coffee blended with caramel and whipped cream - sip into sweetness.",
      price: 4.25,
      image_url: "assets/images/frappe1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 26,
      name: "Veggie Spring Rolls",
      description: "Crispy rolls packed with spiced veggies and served with tangy dip - crunchy snack delight.",
      price: 4.00,
      image_url: "assets/images/springroll1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 27,
      name: "Crispy Chicken Sandwich",
      description: "Crispy fried chicken breast, lettuce, and mayo on a soft bun - crave it daily.",
      price: 6.50,
      image_url: "assets/images/chickensandwich1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 28,
      name: "Beef Burrito Bowl",
      description: "Rice, beans, spicy beef, cheese, salsa and guac in a loaded bowl - every bite a fiesta.",
      price: 8.95,
      image_url: "assets/images/burritobowl1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 29,
      name: "Pepperoni Pizza",
      description: "Mozzarella and spicy pepperoni over classic tomato sauce - every slice satisfies.",
      price: 8.75,
      image_url: "assets/images/pizza3.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 30,
      name: "Mixed Berry Parfait",
      description: "Layers of berries, yogurt, and granola - sweet, creamy, and crunchy.",
      price: 4.25,
      image_url: "assets/images/parfait1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 31,
      name: "Grilled Paneer Tikka",
      description: "Char-grilled paneer cubes marinated in spices - smoky vegetarian delight.",
      price: 7.50,
      image_url: "assets/images/paneer1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 32,
      name: "Korean Fried Chicken",
      description: "Crispy double-fried chicken tossed in Korean chili glaze - sweet, spicy, and sticky.",
      price: 9.25,
      image_url: "assets/images/koreanchicken1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 33,
      name: "Mediterranean Couscous Salad",
      description: "A refreshing mix of couscous, cucumbers, olives, and feta - flavor-packed and fresh.",
      price: 6.45,
      image_url: "assets/images/couscous1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 34,
      name: "Fish & Chips",
      description: "Golden fried fish with crispy fries and tartar dip - a British classic.",
      price: 9.95,
      image_url: "assets/images/fishchips1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 35,
      name: "Cheesy Baked Ziti",
      description: "Oven-baked pasta with layers of cheese and tangy tomato sauce - comfort in every bite.",
      price: 8.25,
      image_url: "assets/images/ziti1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 36,
      name: "Spaghetti Carbonara",
      description: "Spaghetti in creamy egg sauce with crispy pancetta - rich Roman taste.",
      price: 8.95,
      image_url: "assets/images/carbonara1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 37,
      name: "Caesar Salad",
      description: "Crisp romaine, croutons, parmesan, and Caesar dressing - classy and refreshing.",
      price: 5.75,
      image_url: "assets/images/caesarsalad1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 38,
      name: "Stuffed Crust Pizza",
      description: "Cheese-stuffed crust with all your favorite toppings - pizza to the edge!",
      price: 10.49,
      image_url: "assets/images/pizza4.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 39,
      name: "Tuna Melt Sandwich",
      description: "Melted cheese over savory tuna salad on grilled bread - gooey and satisfying.",
      price: 6.95,
      image_url: "assets/images/tunamelt1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 40,
      name: "Apple Pie Delight",
      description: "Flaky crust, warm apples, and cinnamon - classic dessert bliss.",
      price: 4.95,
      image_url: "assets/images/applepie1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 41,
      name: "Veggie Lasagna",
      description: "Layered pasta with seasoned vegetables, creamy béchamel, and cheese - hearty and healthy.",
      price: 7.99,
      image_url: "assets/images/lasagna1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 42,
      name: "Mango Sticky Rice",
      description: "Sweet mango paired with coconut sticky rice - a Thai dessert dream.",
      price: 5.50,
      image_url: "assets/images/mangorice1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 43,
      name: "Chicken Shawarma Plate",
      description: "Sliced chicken with garlic sauce, pickles, and rice - Middle Eastern magic.",
      price: 8.75,
      image_url: "assets/images/shawarma1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 44,
      name: "Chocolate Milkshake",
      description: "Thick and creamy chocolate shake topped with whipped cream - sip into nostalgia.",
      price: 3.99,
      image_url: "assets/images/milkshake1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 45,
      name: "Veg Hakka Noodles",
      description: "Stir-fried noodles with crunchy vegetables and soy sauce - Indo-Chinese treat.",
      price: 6.49,
      image_url: "assets/images/noodles1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 46,
      name: "Pesto Pasta",
      description: "Pasta tossed in fresh basil pesto sauce - green, creamy, and full of flavor.",
      price: 7.99,
      image_url: "assets/images/pesto1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 47,
      name: "Cheesy Burger",
      description: "A delicious burger loaded with cheese and fresh veggies.",
      price: 5.49,
      image_url: "assets/images/burger.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 48,
      name: "Creamy Pasta",
      description: "Italian-style pasta served with rich creamy white sauce.",
      price: 8.75,
      image_url: "assets/images/pasta.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    },
    {
      product_id: 49,
      name: "Fresh Garden Salad",
      description: "A healthy bowl of greens with cherry tomatoes and vinaigrette.",
      price: 3.99,
      image_url: "assets/images/salad.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00"
    }
  ],
  
  // Shopping cart data
  cart: [],
  
  // Orders data
  orders: []
};

// Export the data structure
if (typeof module !== 'undefined' && module.exports) {
  module.exports = appData;
}