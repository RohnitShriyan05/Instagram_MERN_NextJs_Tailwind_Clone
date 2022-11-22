import '../styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  return(
    <div>
      {
        user?
        <div className='flex flex-col h-screen w-full bg-white'>
          <Header/>
          <Component {...pageProps} user={user}/>     
          <Navbar/>
        </div>
        :
        <Login setUser={setUser}/>
      }
    </div>
  )
}

export default MyApp
