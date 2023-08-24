
// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { tiktok } from '../assets';

const Credit = () => {
   return (
      <section className="w-full h-screen p-7 md:p-10 bg-[#252A34]">
         <div className="flex flex-col gap-5 justify-center items-center w-full">
            <div className='text-center mt-7'>
               <h2 className='font-paytone text-[#FF2E63] text-5xl md:text-[72px]'>
                  MAKE IT CLICK
               </h2>
               &nbsp;
               <p className='text-white font-outfit text-md sm:text-[36px]'>
                  if this site is useful or you have a suggestion for future development, feel free to contact.
               </p>
            </div>
            <div className='flex flex-col gap-6 justify-center sm:grid sm:grid-cols-2'>
               <div className='bg-slate-200 p-2 rounded-lg'>
                  <GitHubIcon fontSize='large'/>
                     @Dp_ras  | Github
               </div>
               <div className='bg-[#F08A5D] p-2 rounded-lg'>
                  <a href="https://www.instagram.com/dimp.fe">
                     <InstagramIcon fontSize='large' />
                     @dimp.fe | Instagram
                  </a>
               </div>
               <div className='bg-[#B83B5E] p-2 rounded-lg'>
                  <a href="https://www.tiktok.com/@dimp.fe" className='flex'>
                     <img src={tiktok} alt="tiktok" width={30} height={30} />
                     @dimp.fe | tiktok
                  </a>
               </div>
               <div className='bg-[#F38181] p-2 rounded-lg'>
                  <a href="">
                     <CardGiftcardIcon/>
                     dimpFE | Saweria
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Credit