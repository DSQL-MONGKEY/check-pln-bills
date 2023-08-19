import { useEffect, useState } from "react"
import { navLinks } from "../utils/constans"



const Navbar = () => {
   const [show, setShow] = useState(true)
   
   const controlNavbar = () => {
      const currentScroll = window.scrollY
      if(currentScroll > 300) {
         setShow(false)
      }else {
         setShow(true)
      }
   }
   useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => window.removeEventListener('scroll', controlNavbar) 
   })

   return (
      <nav 
         className={`fixed flex z-50 justify-center top-0 w-full 
         ${show && 'hidden'} ease-in-out`}>
         <div className={`flex px-4 mt-2 sm:mt-0 gap-10 backdrop-blur-sm rounded-full sm:rounded-none shadow sm:border-b-1 sm:shadow sm:w-full justify-center`}>
            <ul className="flex gap-10 p-2">
               {navLinks.map(nav => (
                  <li key={nav.title} className="p-1 sm:p-2">
                     <a href={nav.href}>{nav.icon}</a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar