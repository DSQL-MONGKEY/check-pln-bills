// Navbar Icon
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

// Card Icon

const navLinks = [
   {
      title: 'about',
      icon: <HelpOutlineIcon/>,
      href: '#about',
   },
   {
      title: 'cekit',
      icon:<ElectricBoltIcon/>, 
      href: '#cekit',
   },
   {
      title: 'support',
      icon: <AllInclusiveIcon/>,
      href: '#support'
   }
]


export { navLinks }