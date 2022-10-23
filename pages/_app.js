import '../styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  return(
    <div className='flex flex-col h-screen w-full bg-white'>
      <Header/>
      {
        user? <Component {...pageProps} user={user}/> : <Login setUser={setUser}/>
      }      
      <Navbar/>
    </div>
  )
}

export default MyApp
