import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../../firebase.init';
import Login from '../Login/Login';
import Home from './Home';
const Dashboard = () => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if(user) {
            setUser(user);
         }
         else {
            setUser(null);
         }
      });
   }, []);

   return (
      <div>
         {user ? <Home /> : <Login />}
      </div>
   );
};

export default Dashboard;