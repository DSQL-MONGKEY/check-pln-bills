import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';


const Navbar = () => {
   return (
      <nav className="fixed flex justify-center top-0 w-full ">
         <div className="flex p-5 gap-5 ">
            <a href="#about">
               <HelpOutlineIcon/>
            </a>
            <a href="#cekit">
               <ElectricBoltIcon/>
            </a>
            <a href="#support">
               <AllInclusiveIcon/>
            </a>
         </div>
      </nav>
   )
}

export default Navbar