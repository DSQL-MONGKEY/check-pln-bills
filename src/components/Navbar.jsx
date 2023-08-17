import { navLinks } from "../utils/constans"



const Navbar = () => {
   return (
      <nav className="fixed flex z-20 justify-center top-0 w-full ">
         <div className="flex px-4 mt-2 gap-10 backdrop-blur-sm rounded-full border-2 border-slate-100">
            <ul className="flex gap-10 p-2">
               {navLinks.map(nav => (
                  <li key={nav.title}>
                     <a href={nav.href}>{nav.icon}</a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar