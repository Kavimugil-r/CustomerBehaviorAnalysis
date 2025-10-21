// Data handling utilities
const DataHandler = {
  // Initialize cart from localStorage
  init: function() {
    try {
      // Initialize with default data if localStorage is empty
      const savedCart = localStorage.getItem('shopping_cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          appData.cart = parsedCart;
          console.log('Cart loaded from localStorage');
        }
      }
      
      // Load orders from localStorage
      const savedOrders = localStorage.getItem('shopping_orders');
      if (savedOrders) {
        const parsedOrders = JSON.parse(savedOrders);
        if (Array.isArray(parsedOrders)) {
          appData.orders = parsedOrders;
          console.log('Orders loaded from localStorage');
        }
      }
      
      // Load users from localStorage
      const savedUsers = localStorage.getItem('shopping_users');
      if (savedUsers) {
        const parsedUsers = JSON.parse(savedUsers);
        if (Array.isArray(parsedUsers)) {
          appData.users = parsedUsers;
          console.log('Users loaded from localStorage');
          
          // Ensure all users have roles and proper data structure
          appData.users.forEach(user => {
            // Ensure user has all required fields
            if (user.user_id === undefined) {
              user.user_id = this.generateUserId();
            }
            if (user.created_at === undefined) {
              user.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
            }
            
            // Assign role based on email domain for existing users
            if (!user.role) {
              user.role = user.email && user.email.endsWith('@admin.com') ? 'admin' : 'customer';
            }
          });
        }
      } else {
        // Save initial data to localStorage if not present
        this.saveUsers();
        this.saveCart();
        this.saveOrders();
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      // Reset to empty arrays if there's an error
      appData.cart = [];
      appData.orders = [];
      appData.users = [];
    }
  },
  
  // Generate unique user ID
  generateUserId: function() {
    return appData.users.length > 0 ? 
      Math.max(...appData.users.map(user => user.user_id)) + 1 : 1;
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
    // Ensure data is initialized
    this.init();
    
    if (available_only) {
      return appData.product_items.filter(item => item.is_available);
    }
    return appData.product_items;
  },
  
  // Get product item by ID
  getProductItemById: function(product_id) {
    // Ensure data is initialized
    this.init();
    
    return appData.product_items.find(item => item.product_id == product_id);
  },
  
  // Get user by username
  getUserByUsername: function(username) {
    // Ensure data is initialized
    this.init();
    
    if (!username) {
      return null;
    }
    
    return appData.users.find(user => user.username === username) || null;
  },
  
  // Get user by email
  getUserByEmail: function(email) {
    // Ensure data is initialized
    this.init();
    
    return appData.users.find(user => user.email === email);
  },
  
  // Add new user
  addUser: function(userData) {
    // Ensure data is initialized
    this.init();
    
    // Generate new user ID
    const newId = this.generateUserId();
      
    const newUser = {
      user_id: newId,
      username: userData.username,
      email: userData.email,
      password_hash: userData.password_hash,
      role: userData.role || (userData.email && userData.email.endsWith('@admin.com') ? 'admin' : 'customer'),
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    
    appData.users.push(newUser);
    
    // Save users to localStorage
    this.saveUsers();
    
    return newUser;
  },
  
  // Add item to cart
  addToCart: function(user_id, product_id, quantity = 1) {
    // Ensure data is initialized
    this.init();
    
    // Validate inputs
    if (!user_id || !product_id) {
      console.error('Invalid user_id or product_id');
      return false;
    }
    
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
    // Ensure data is initialized
    this.init();
    
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
    // Ensure data is initialized
    this.init();
    
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
    // Ensure data is initialized
    this.init();
    
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
    // Ensure data is initialized
    this.init();
    
    const cartItems = this.getCartItems(user_id);
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  },
  
  // Create order
  createOrder: function(user_id) {
    // Ensure data is initialized
    this.init();
    
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
    // Ensure data is initialized
    this.init();
    
    return appData.orders.filter(order => order.user_id == user_id);
  },
  
  // Get order by ID
  getOrderById: function(order_id) {
    // Ensure data is initialized
    this.init();
    
    return appData.orders.find(order => order.order_id == order_id);
  },
  
  // Update user profile
  updateUserProfile: function(user_id, userData) {
    // Ensure data is initialized
    this.init();
    
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