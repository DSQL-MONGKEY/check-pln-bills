import { useDebounce } from "@uidotdev/usehooks"
import { useState } from "react"

import CardResult from "./CardResult"

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
      <section id="cekit" className="w-full h-screen bg-[#FF2E63] p-10">
         <div className="translate-y-20 flex flex-col sm:flex-row gap-5 sm:gap-10 text-white">
            <h2 className="text-6xl sm:text-[100px] font-paytone">Cekit.</h2>
            <p className="font-poppins">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eveniet velit deleniti voluptate maxime in quas eius quod, pariatur modi enim voluptatem voluptates qui nesciunt accusamus dolorum debitis a! Odit.
            </p>
         </div>
         <div className="flex flex-col justify-center items-center gap-4 translate-y-20 mt-20">
            <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center gap-10 bg-slate-100">
               <label htmlFor="input-id"></label>
               <input
                  name="input-id"
                  type="text"
                  placeholder="Enter your IDPEL"
                  onChange={handleChange}
                  className="p-2 border-2 rounded-lg"
               />
               <button type="submit" className="border-2 py-2 px-6 rounded-md" >
                  SEARCH
               </button>
            </form>
            <CardResult searchId={debouncedIdpel} />
         </div>
      </section>
   )
}

export default Service