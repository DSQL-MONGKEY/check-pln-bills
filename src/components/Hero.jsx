import { useParallax } from "react-scroll-parallax"

const Hero = () => {
   const { ref } = useParallax({ speed: 10, translateY: -20, })
   return (
      <section className="w-full h-screen linear-white-gradient">
         <div className="flex flex-col justify-center  gap-5 p-5 py-20 ">
            <div ref={ref} className="mt-10 text-center z-20">
               <h1>
                  <span className="text-3xl sm:text-7xl text-black font-poppins font-extrabold">The Alternative Way</span>
               </h1>
               <p className="font-semibold text-cyan-600 font-">
                  To check your electricity bill 
               </p>
            </div>
            <div className="flex justify-around translate-y-52 z-10">
               <div className="w-5 sm:w-10 h-5 sm:h-10 bg-blue-300"></div>
               <div className="w-5 sm:w-10 h-5 sm:h-10 bg-blue-300"></div>
               <div className="w-5 sm:w-10 h-5 sm:h-10 bg-blue-300"></div>
               <div className="w-5 sm:w-10 h-5 sm:h-10 bg-blue-300 hidden sm:block"></div>
               <div className="w-5 sm:w-10 h-5 sm:h-10 bg-blue-300 hidden sm:block"></div>
               <div className="w-5 sm:w-10 h-5 sm:h-10 bg-blue-300 hidden sm:block"></div>
               
            </div>
         </div>
      </section>
   )
}

export default Hero