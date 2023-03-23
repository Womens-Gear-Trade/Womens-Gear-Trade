import React from 'react';
import { Login, Signup } from './AuthForm';
const LogReg = () => {
  return (
    <div>
      <div>
        Login and Register here:
        <div>{Login}</div>
        <div>{Signup}</div>
      </div>
    </div>
  );
};

export default LogReg;
