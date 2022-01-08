import React from 'react'
import './ProfileScreen.css';
import { getAuth} from "firebase/auth";
import { useNavigate  } from 'react-router-dom';
import Nav from '../Nav'; 
export const ProfileScreen = () => {
    const Navigate = useNavigate();
    const auth = getAuth();
    return (
        <div className='userProfile__screen'>
            <Nav/>
            <div className='userProfile__body'> 
                    <h1>Edit</h1>
                    <div className='profile'>
                       <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile pic" />
                    </div>
                    <div className='profile__info'>
                        
                            <h2 onClick={() =>{
                            auth.signOut();
                             Navigate('/');
                            }}>logout</h2>
                   </div> 
            </div>
        </div>
    )
}

export default ProfileScreen;
