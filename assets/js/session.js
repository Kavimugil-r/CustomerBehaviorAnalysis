// Session handling using localStorage
const Session = {
  // Start a new session
  start: function(userData) {
    // Validate required user data
    if (!userData) {
      console.error('No user data provided for session start');
      return null;
    }
    
    // Check for required fields
    if (!userData.user_id) {
      console.error('Missing user_id in user data:', userData);
      return null;
    }
    
    if (!userData.username) {
      console.error('Missing username in user data:', userData);
      return null;
    }
    
    // Ensure role is properly set
    const role = userData.role || (userData.email && userData.email.endsWith('@admin.com') ? 'admin' : 'customer');
    
    const sessionData = {
      user_id: userData.user_id,
      username: userData.username,
      email: userData.email || '',
      role: role,
      logged_in: true,
      login_time: new Date().toISOString()
    };
    
    try {
      const sessionString = JSON.stringify(sessionData);
      localStorage.setItem('user_session', sessionString);
      console.log('Session started successfully:', sessionData);
      return sessionData;
    } catch (error) {
      console.error('Error starting session:', error);
      return null;
    }
  },
  
  // Get current session data
  get: function() {
    try {
      const sessionData = localStorage.getItem('user_session');
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        console.log('Session retrieved successfully:', parsedData);
        return parsedData;
      }
      console.log('No session data found in localStorage');
      return null;
    } catch (error) {
      console.error('Error retrieving session:', error);
      return null;
    }
  },
  
  // Check if user is logged in
  isLoggedIn: function() {
    try {
      const session = this.get();
      // Check multiple conditions for a valid session
      return session && 
             session.logged_in === true && 
             session.username && 
             session.user_id;
    } catch (error) {
      console.error('Error checking login status:', error);
      return false;
    }
  },
  
  // Destroy session (logout)
  destroy: function() {
    try {
      localStorage.removeItem('user_session');
      console.log('Session destroyed successfully');
    } catch (error) {
      console.error('Error destroying session:', error);
    }
  },
  
  // Update session data
  update: function(data) {
    try {
      const session = this.get();
      if (session) {
        const updatedSession = {...session, ...data};
        localStorage.setItem('user_session', JSON.stringify(updatedSession));
        console.log('Session updated successfully:', updatedSession);
        return updatedSession;
      }
      console.error('No session to update');
      return null;
    } catch (error) {
      console.error('Error updating session:', error);
      return null;
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Session;
}