// Navbar Icon
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

// Card Icon
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WebhookIcon from '@mui/icons-material/Webhook';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const navLinks = [
   {
      title: 'About',
      icon: <HelpOutlineIcon/>,
      href: '#about',
   },
   {
      title: 'Cek-it',
      icon:<ElectricBoltIcon/>, 
      href: '#cekit',
   },
   {
      title: 'Credit',
      icon: <AllInclusiveIcon/>,
      href: '#credit'
   }
]

const cardContent = [
   {
      icon: <QuestionMarkIcon/>,
      sub: 'Alternative',
      description: 'Born from personal problems that are always constrained and make it lazy enough to check electricity bills.'
   },
   {
      icon: <WebhookIcon/>,
      sub: 'Works',
      description: 'Using API from PLN which is supported through the RapidAPI platform. Try our best to be able to help'
   },
   {
      icon: <AutoGraphIcon/>,
      sub: 'Limit',
      description: 'Because the API is free, the functionality on this web has a limit of 25 requests per day and not individuals'
   },
]
export { navLinks, cardContent }