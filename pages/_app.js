import '../styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import {Login} from '../components/Login'
import { useState } from 'react';
import Register from "../components/Register";
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [register, setRegister] = useState(false);
  return(
    <div>
      {
        user?
        <div className='flex flex-col h-screen w-full bg-white'>
          <Header/>
          <Component {...pageProps} user={user}/>     
          <Navbar/>
        </div>
        : <Login setUser={setUser} setRegister={setRegister}/>
        
      }
    </div>
  )
}

export default MyApp
