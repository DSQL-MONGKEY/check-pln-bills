import { useDebounce } from "@uidotdev/usehooks"
import { useState } from "react"

import Result from "./Result"

const Service = () => {
   const [idpel, setIdpel] = useState("")
   const debouncedIdpel = useDebounce(idpel, 500)


   const handleChange = (e) => {
      setIdpel(e.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      setIdpel(formData.get("input-id"))
   }


   return (
      <section id="cekit" className="w-full h-[1080px] bg-[#FF2E63] p-10">
         <div className="translate-y-20 flex flex-col sm:flex-row gap-5 sm:gap-10 text-white">
            <h2 className="text-6xl sm:text-[100px] font-paytone">Cekit.</h2>
            <p className="font-poppins">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eveniet velit deleniti voluptate maxime in quas eius quod, pariatur modi enim voluptatem voluptates qui nesciunt accusamus dolorum debitis a! Odit.
            </p>
         </div>
         <div className="flex flex-col justify-center items-center gap-4 translate-y-20 mt-20">
            <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center gap-5  p-5 rounded-xl bg-white border-4 border-slate-200">
               <div></div>
               <div>
                  <input
                     name="input-id"
                     type="text"
                     placeholder="Masukkan ID Pelanggan"
                     onChange={handleChange}
                     className="py-2 px-3 border-2 rounded-lg w-[300px] md:w-[500px]"
                  />
               </div>
               <button type="submit" className="py-2 px-6 rounded-md bg-[#FF2E63] hover:bg-[#ba264b] text-white duration-300 font-paytone ">
                  Check
               </button>
            </form>
            <Result searchId={debouncedIdpel} />
         </div>
      </section>
   )
}

export default Service