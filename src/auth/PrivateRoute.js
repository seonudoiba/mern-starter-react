import { Navigate } from "react-router-dom";

import auth from './auth-helper'

function PrivateRoute({ children }) {
  if (!auth.isAuthenticated()) {
    return <Navigate to="/signin" replace />
  }
  return children
}
export default PrivateRoute