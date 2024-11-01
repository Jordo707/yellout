import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

function LoginPage({ login, error }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={onSubmit} className="flex flex-col max-w-md">
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
          className="border p-2 mt-2"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="border p-2 mt-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Login
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { login })(LoginPage);
