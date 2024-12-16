
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './Store/authSlice'
import  appwriteService from './appwrite/auth'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    appwriteService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200' style={{ backgroundImage: "url('./img/bg.jpeg')" }}>
      <div className='w-full min-h-screen flex flex-col justify-between'>
        <Navbar />
        <main className=''>
         <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
