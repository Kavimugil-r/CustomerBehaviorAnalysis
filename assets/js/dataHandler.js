// Data handling utilities
const DataHandler = {
  // Initialize cart from localStorage
  init: function() {
    try {
      const savedCart = localStorage.getItem('shopping_cart');
      if (savedCart) {
        appData.cart = JSON.parse(savedCart);
        console.log('Cart loaded from localStorage');
      }
      
      // Load orders from localStorage
      const savedOrders = localStorage.getItem('shopping_orders');
      if (savedOrders) {
        appData.orders = JSON.parse(savedOrders);
        console.log('Orders loaded from localStorage');
      }
      
      // Load users from localStorage
      const savedUsers = localStorage.getItem('shopping_users');
      if (savedUsers) {
        appData.users = JSON.parse(savedUsers);
        console.log('Users loaded from localStorage');
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      // Reset to empty arrays if there's an error
      appData.cart = [];
      appData.orders = [];
    }
  },
  
  // Save cart to localStorage
  saveCart: function() {
    try {
      localStorage.setItem('shopping_cart', JSON.stringify(appData.cart));
      console.log('Cart saved to localStorage');
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  },
  
  // Save orders to localStorage
  saveOrders: function() {
    try {
      localStorage.setItem('shopping_orders', JSON.stringify(appData.orders));
      console.log('Orders saved to localStorage');
    } catch (error) {
      console.error('Error saving orders to localStorage:', error);
    }
  },
  
  // Save users to localStorage
  saveUsers: function() {
    try {
      localStorage.setItem('shopping_users', JSON.stringify(appData.users));
      console.log('Users saved to localStorage');
    } catch (error) {
      console.error('Error saving users to localStorage:', error);
    }
  },
  
  // Get all product items
  getProductItems: function(available_only = true) {
    if (available_only) {
      return appData.product_items.filter(item => item.is_available);
    }
    return appData.product_items;
  },
  
  // Get product item by ID
  getProductItemById: function(product_id) {
    return appData.product_items.find(item => item.product_id == product_id);
  },
  
  // Get user by username
  getUserByUsername: function(username) {
    console.log('Looking for user with username:', username);
    console.log('Available users:', appData.users);
    
    if (!username) {
      console.error('No username provided to getUserByUsername');
      return null;
    }
    
    const user = appData.users.find(user => {
      const match = user.username === username;
      console.log(`Checking user ${user.username} against ${username}: ${match}`);
      return match;
    });
    
    console.log('Found user:', user);
    return user || null;
  },
  
  // Get user by email
  getUserByEmail: function(email) {
    return appData.users.find(user => user.email === email);
  },
  
  // Add new user
  addUser: function(userData) {
    // Generate new user ID
    const newId = appData.users.length > 0 ? 
      Math.max(...appData.users.map(user => user.user_id)) + 1 : 1;
      
    const newUser = {
      user_id: newId,
      username: userData.username,
      email: userData.email,
      password_hash: userData.password_hash,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    
    appData.users.push(newUser);
    
    // Save users to localStorage
    this.saveUsers();
    
    return newUser;
  },
  
  // Add item to cart
  addToCart: function(user_id, product_id, quantity = 1) {
    // Check if item already exists in cart
    const existingItemIndex = appData.cart.findIndex(item => 
      item.user_id == user_id && item.product_id == product_id);
    
    if (existingItemIndex !== -1) {
      // Update quantity
      appData.cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      const newId = appData.cart.length > 0 ? 
        Math.max(...appData.cart.map(item => item.cart_id)) + 1 : 1;
        
      appData.cart.push({
        cart_id: newId,
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        added_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
      });
    }
    
    // Save cart to localStorage
    this.saveCart();
    return true;
  },
  
  // Get cart items for user
  getCartItems: function(user_id) {
    const cartItems = appData.cart.filter(item => item.user_id == user_id);
    
    // Attach product item details to cart items
    return cartItems.map(cartItem => {
      const productItem = this.getProductItemById(cartItem.product_id);
      return {
        ...cartItem,
        ...productItem
      };
    });
  },
  
  // Remove item from cart
  removeFromCart: function(cart_id, user_id) {
    const index = appData.cart.findIndex(item => 
      item.cart_id == cart_id && item.user_id == user_id);
    
    if (index !== -1) {
      appData.cart.splice(index, 1);
      // Save cart to localStorage
      this.saveCart();
      return true;
    }
    return false;
  },
  
  // Update cart item quantity
  updateCartQuantity: function(cart_id, user_id, quantity) {
    const index = appData.cart.findIndex(item => 
      item.cart_id == cart_id && item.user_id == user_id);
    
    if (index !== -1) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return this.removeFromCart(cart_id, user_id);
      } else {
        // Update quantity
        appData.cart[index].quantity = quantity;
        // Save cart to localStorage
        this.saveCart();
        return true;
      }
    }
    return false;
  },
  
  // Get cart total for user
  getCartTotal: function(user_id) {
    const cartItems = this.getCartItems(user_id);
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  },
  
  // Create order
  createOrder: function(user_id) {
    const cartItems = this.getCartItems(user_id);
    const total = this.getCartTotal(user_id);
    
    if (cartItems.length === 0) {
      return false;
    }
    
    // Generate new order ID
    const newOrderId = appData.orders.length > 0 ? 
      Math.max(...appData.orders.map(order => order.order_id)) + 1 : 1;
    
    // Create order
    const order = {
      order_id: newOrderId,
      user_id: user_id,
      total_amount: total,
      order_status: 'confirmed',
      order_time: new Date().toISOString().slice(0, 19).replace('T', ' '),
      items: cartItems.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
        item_price: item.price
      }))
    };
    
    appData.orders.push(order);
    
    // Clear cart for this user
    appData.cart = appData.cart.filter(item => item.user_id != user_id);
    
    // Save cart and orders to localStorage
    this.saveCart();
    this.saveOrders();
    
    return order;
  },
  
  // Get user orders
  getUserOrders: function(user_id) {
    return appData.orders.filter(order => order.user_id == user_id);
  },
  
  // Get order by ID
  getOrderById: function(order_id) {
    return appData.orders.find(order => order.order_id == order_id);
  },
  
  // Update user profile
  updateUserProfile: function(user_id, userData) {
    const userIndex = appData.users.findIndex(user => user.user_id == user_id);
    
    if (userIndex !== -1) {
      appData.users[userIndex] = {
        ...appData.users[userIndex],
        ...userData
      };
      
      // Save users to localStorage
      this.saveUsers();
      
      return appData.users[userIndex];
    }
    return null;
  }
};

// Initialize cart when module loads
DataHandler.init();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataHandler;
}