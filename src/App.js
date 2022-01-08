import React, { useEffect} from 'react';
import './App.css';
import { Homescreen } from './screens/Homescreen';
import { LoginScreen } from './screens/LoginScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

  
function App() {
 
const loggedInUser = useSelector(selectUser);
const dispatch = useDispatch();

 useEffect(() => {
  
  const auth = getAuth(); 
  const unsubscribe  = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('signed in');
          dispatch(login({uid:user.uid, email: user.email}));
        } else {
          // User is signed out
          console.log('signed out');
          dispatch(logout());
        }
      });
  
  return unsubscribe;
 }, [dispatch]) 
 
  return (
    <div className="App">
    <Router>
      <Routes>
        { 
          !loggedInUser ? (<Route path='/' element={<LoginScreen/>}>
          </Route>) : (
          <>
            <Route  path='/'  element={<Homescreen/>}>
            </Route>
            
            <Route exact path='/profile'  element={<ProfileScreen/>}>
            </Route>
          </>
        )
       } 
      
      </Routes>
     </Router> 
    </div>
  ); 
}

export default App;
