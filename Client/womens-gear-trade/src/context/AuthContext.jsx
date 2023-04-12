import React, { useEffect, useState, createContext } from 'react';
import { me } from '../api/auth';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, settoken] = useState('');
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [user, setUser] = useState({});

  // const redirHome = () => {
  //   window.location.href = '/';
  // };

  useEffect(() => {
    settoken(localStorage['womensgear-token'] || '');

    if (localStorage['womensgear-token']) {
      const getMe = async () => {
        const result = await me(localStorage['womensgear-token']);
        console.log('thisis RESULT', result);
        setUser(result);
      };
      getMe();
    }
  }, [shouldUpdate]);

  const updateAuthStatus = () => setShouldUpdate(!shouldUpdate);

  const logout = () => {
    delete localStorage['womensgear-token'];

    updateAuthStatus();
    // redirHome();
  };

  const providerValue = {
    token,
    isLoggedIn: !!token,
    logout,
    updateAuthStatus,
    user,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
