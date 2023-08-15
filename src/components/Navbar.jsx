import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';


const Navbar = () => {
   return (
      <nav className="fixed flex justify-center top-0 w-full ">
         <div className="flex px-4 mt-2 gap-10 backdrop-blur-sm rounded-full border-2 border-slate-100">
            <a href="#about" className='p-2'>
               <HelpOutlineIcon/>
            </a>
            <a href="#cekit" className='p-2'>
               <ElectricBoltIcon/>
            </a>
            <a href="#support" className='p-2'>
               <AllInclusiveIcon/>
            </a>
         </div>
      </nav>
   )
}

export default Navbar