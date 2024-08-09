import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

  const NavBar = () => {
    return (
      <>
       

<nav className="bg-transparent border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <img src={logo} className='w-[15%] h-[8rem] bg-cover'/>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
         <NavLink to='/' className={(navDate) => navDate.isActive ? "text-sky-700 " : ""}>
            Home
         </NavLink>
        </li>
        <li>
        <NavLink to='/product' className={(navDate) => navDate.isActive ? "text-sky-700 " : ""}>
            Product
         </NavLink>
        </li>
        <li>
        <NavLink to='/about' className={(navDate) => navDate.isActive ? "text-sky-700 " : ""}>
            About
         </NavLink>
        </li>
        <li>
        <NavLink to='/signup' className={(navDate) => navDate.isActive ? "text-sky-700 " : ""}>
            Sign Up
         </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
    )
}

export default NavBar