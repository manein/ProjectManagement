import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './App.css'; // You can import your custom CSS or styling framework here
import axios from 'axios';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    axios.get('http://localhost:9000/getUser', { params: loginData })
        .then((res) => {
            if(res.data)
                alert('Login Successful')
            else
                alert('Wrong Credentials')
        })
        .catch((err) => alert('Error in Login'))
    
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault()
        axios.post('http://localhost:9000/createUser', signupData)
            .then((res) => setShowLogin(true))
            .catch((err) => alert('Error in Signing Up'))
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (showLogin) {
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setSignupData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="app-container">
      <div className="auth-container">
        {showLogin ? (
          <Login
            onSignUpClick={handleSignupClick}
            onLoginSubmit={handleLoginSubmit}
            onChange={handleInputChange}
            loginData={loginData}
          />
        ) : (
          <Signup
            onLoginClick={handleLoginClick}
            onSignupSubmit={handleSignupSubmit}
            onChange={handleInputChange}
            signupData={signupData}
          />
        )}
      </div>
    </div>
  );
};

export default App;