// Registration function
function register() {
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;
  
    // Check if username is already registered
    if (localStorage.getItem(username) !== null) {
      alert('Username already exists!');
      return;
    }
  
    // Store the username and password in local storage
    localStorage.setItem(username, password);
    alert('Registration successful! You can now log in.');
  }
  
  // Login function
  function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
  
    // Check if the stored password matches the input password
    var storedPassword = localStorage.getItem(username);
    if (storedPassword === null || storedPassword !== password) {
      alert('Invalid username or password!');
      return;
    }
  
    // Hide registration and login forms, show user profile
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('user-profile').style.display = 'block';
    document.getElementById('username').textContent = username;
  }
  
  // Logout function
  function logout() {
    // Clear the stored user information and show registration and login forms
    document.getElementById('registration').style.display = 'block';
    document.getElementById('login').style.display = 'block';
    document.getElementById('user-profile').style.display = 'none';
    document.getElementById('reg-username').value = '';
    document.getElementById('reg-password').value = '';
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
  }
  
  // Handle form submission
document.getElementById('createQuizForm').addEventListener('submit', createQuiz);
