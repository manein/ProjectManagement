import React from 'react';

const Signup = ({ onLoginClick, onSignupSubmit, onChange, signupData }) => {
  const { firstName, lastName, username, password } = signupData;

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
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
        <button type="button" className="btn btn-primary" onClick={onSignupSubmit}>
          Sign Up
        </button>
        <p>
          Already have an account?{' '}
          <span className="auth-link" onClick={onLoginClick}>
            <strong style={{ cursor: 'pointer' }}>Login</strong>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
