import React, { useContext } from 'react';
import { AuthContext } from './../../provider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const GoogleSignIn = () => {
  const { googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleGoogleLogin}
        className="btn bg-blue-500 hover:bg-red-600 text-white"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
