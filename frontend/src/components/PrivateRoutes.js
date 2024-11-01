import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ children, auth: { isAuthenticated, loading } }) {
  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/login" />;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
