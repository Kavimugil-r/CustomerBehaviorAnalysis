# Shopping ZONE - Client-Side E-Commerce Application

A complete client-side e-commerce application built with HTML, CSS, and JavaScript that runs entirely in the browser with no server dependencies.

## Features

- User registration and login with `@customer.com` email validation
- Product browsing with categorized items
- Shopping cart management (add, update, remove items)
- Order placement and order history tracking
- User profile management
- Responsive design that works on all devices
- Data persistence using localStorage

## Application Structure

```
Shopping ZONE/
├── index.html              # Home page
├── menu.html               # Product browsing page
├── cart.html               # Shopping cart page
├── checkout.html           # Checkout process page
├── order_confirmation.html # Order confirmation page
├── login.html              # User login page
├── register.html           # User registration page
├── assets/
│   ├── js/
│   │   ├── appData.js      # Application data structure
│   │   ├── session.js      # Session management
│   │   └── dataHandler.js  # Data handling utilities
│   ├── images/             # Product images
│   └── bg/                 # Background videos
└── user/
    ├── profile.html        # User profile management
    └── orders.html         # Order history
```

## Core Functionality

### User Management
- Register new accounts with `@customer.com` email
- Login with existing credentials
- Manage profile information
- Secure session handling

### Product Browsing
- View all available products
- See product details, prices, and descriptions
- Add products to shopping cart

### Shopping Cart
- Add/remove items
- Update quantities
- View cart total
- Persistent cart data

### Order Management
- Place orders from cart
- View order history
- Order details and status
- Persistent order data

## How to Use

1. Open `index.html` in a web browser
2. Register a new account or login with:
   - Username: `admin` or `user1`
   - Password: `password`
3. Browse products and add items to cart
4. Proceed to checkout to place orders
5. View order history in the Orders section

## Technical Details

- **Client-Side Only**: No server dependencies, runs entirely in the browser
- **Data Persistence**: Uses localStorage to save user data, cart, and orders
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Security**: Implements basic authentication and validation

## Browser Compatibility

Works in all modern browsers that support:
- localStorage
- JavaScript ES6+
- HTML5
- CSS3

## Data Storage

All data is stored in the browser's localStorage:
- User accounts
- Shopping cart contents
- Order history

Data persists between browser sessions but is specific to each browser/device.