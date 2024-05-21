import {BsMoonFill,BsSunFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import logo from '/assets/shared/desktop/logo.svg'
import cartImg from '/assets/shared/desktop/icon-cart.svg' 
import Cart from './Cart'
import {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const themes ={
  winter:"winter",
  dracula:"retro",
}

function darkModeFromLocalStoage(){
  return localStorage.getItem("mode") || themes.winter
}



function Navbar() {
  const [theme,setTheme] =useState(darkModeFromLocalStoage)
  const handleClick =() =>{
    const newTheme =theme==themes.winter ? themes.retro:themes.winter
    setTheme(newTheme)
    localStorage.setItem("mode",newTheme)
  }
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])

  const [showCart, setShowCart] = useState(false)
  const cart  = useSelector((state) => state.cart)


  function toogleCart(){
    setShowCart((prev) => !prev)
  }

  return (
    <div className="pt-8 pb-9 bg-black">
      <div className='max-container flex items-center justify-between'>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <ul className='flex items-center gap-5'>
            <li>
              <Link to="/" className='text-white uppercase font-bold text-xs tracking-widest hover:text-cream-light'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/headphones' className='text-white uppercase font-bold text-xs tracking-widest hover:text-cream-light'>
                Headphones
              </Link>
            </li>
            <li>
              <Link to='/speakers' className='text-white uppercase font-bold text-xs tracking-widest hover:text-cream-light'>
                speakers
              </Link>
            </li>
            <li>
              <Link to='/earphones' className='text-white uppercase font-bold text-xs tracking-widest hover:text-cream-light'>
                earphones
              </Link>
            </li>
          </ul>
        </nav>
        <label className="swap swap-rotate  items-center justify-center left-40">
            <input type="checkbox"
            onClick={handleClick}
            />
            {/* sun icon */}
             <BsSunFill className="swap-on fill-current w-6 h-6"/>
             {/* moon icon */}
             <BsMoonFill className="swap-off fill-current w-6 h-6" /> 
        </label>
        <div className={`relative cursor-pointer indicator ${cart === false && "hidden"}`} onClick={toogleCart}>
          <img src={cartImg} alt="" />
          <span className='indicator-item badge badge-primary'>{cart.totalQuantity}</span>
        </div>
        {showCart && (
            <>
              <div className='fixed top-[90px] bottom-0 left-0 right-0 bg-black/50 z-[1]' />
              <div className='md:w-[377px] absolute xs:left-6 xs:right-6 md:left-auto md:right-10 lg:right-40 top-[120px] z-30'>
                  <Cart/>
              </div>
            </>
          )}
      </div>
    </div>
  )
}

export default Navbar