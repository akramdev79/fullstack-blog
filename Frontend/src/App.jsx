import { Outlet } from "react-router-dom"
import { Button }  from "./components/ui/button"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer"


function App() {


  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Header />

    <Outlet className="flex-grow" />

    <Footer />
    </div>
    </>
  )
}

export default App
