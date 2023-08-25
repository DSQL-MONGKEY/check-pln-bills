import { useParallax } from "react-scroll-parallax"

const Hero = () => {
   
   const text = useParallax({ speed: -10, translateY: -20,})


   return (
      <section className="w-full h-screen linear-white-gradient">
         <div className="flex flex-col justify-center gap-5 p-5 py-20">
            <div ref={text.ref} className="mt-10 text-center translate-y-20 z-40">
               <h1>
                  <span className="text-3xl sm:text-7xl text-black font-poppins font-extrabold">The Alternative Way</span>
               </h1>
               <p className="font-semibold text-cyan-600 font-sanss">
                  To check your electricity bill 
               </p>
            </div>
            <div className="flex justify-around mt-20">
               <div className="w-10 h-10 bg-blue-300 sm:-translate-y-20"></div>
               <div className="w-10 h-10 bg-blue-300"></div>
               <div className="w-10 h-10 bg-blue-300 sm:-translate-y-10"></div>
               <div className="w-10 h-10 bg-blue-300 hidden sm:block"></div>
               <div className="w-10 h-10 bg-blue-300 hidden sm:block -translate-y-20"></div>
            </div>
         </div>
      </section>
   )
}

export default Hero