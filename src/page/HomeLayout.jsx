import { Outlet } from "react-router-dom"
import { Navbar, Footer } from '../components'

function HomeLayout() {
  return (
    <div className=" font-sans">
      <Navbar/>
      <main className="grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default HomeLayout