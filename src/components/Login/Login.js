import React from 'react';
import { signInWithGoogle } from '../../firebase.init';

const Login = () => {
   return (
      <div className="dashboard">
         <button onClick={signInWithGoogle} >
            Sign in with google
         </button>
      </div>
   );
};

export default Login;