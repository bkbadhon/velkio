
import { Outlet } from 'react-router-dom'
import './App.css'
import Whatsapp from './component/Whatsapp'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Outlet></Outlet>
      <Whatsapp></Whatsapp>
      <Footer></Footer>
    </>
  )
}

export default App
