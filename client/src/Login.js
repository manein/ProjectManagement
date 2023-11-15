import React from 'react';

const Login = ({ onSignUpClick, onLoginSubmit, onChange, loginData }) => {
  const { username, password } = loginData;

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={onLoginSubmit}>
          Login
        </button>
        <p>
          Don't have an account?{' '}
          <span className="auth-link" onClick={onSignUpClick}>
            <strong style={{ cursor: 'pointer' }}>Sign Up</strong>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
