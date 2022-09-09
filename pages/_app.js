import '../styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return(
    <div className='flex flex-col h-screen w-full bg-white'>
      <Header/>
      <Component {...pageProps}/>
      <Navbar/>
    </div>
  )
}

export default MyApp
