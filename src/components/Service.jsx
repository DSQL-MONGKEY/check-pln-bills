import { useDebounce } from "@uidotdev/usehooks"
import { useState, createContext, } from "react"

import { CircularProgress } from "@mui/material"
import fetchAPI from "../utils/fetchAPI"
import CardResult from "./CardResult"

export const ServiceDataContext = createContext() 
const Service = () => {
   const [Idpel, setIdpel] = useState("")
   const [isSearching, setIsSearching] = useState(true)
   const [responseData, setResponseData] = useState([])
   const debouncedIdpel = useDebounce(Idpel, 300)


   const handleChange = (e) => {
      setIdpel(e.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      setIdpel(formData.get("search-id"))

      if(debouncedIdpel) {
         setIsSearching(true)
         fetchAPI(Idpel)
         .then(data => (
            console.log(data.data),
            setResponseData(data.data)
         ))
      }
      setIsSearching(false)
   }

   return (
      <section id="cekit" className="w-full h-screen flex flex-col justify-center items-center gap-4">
         <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col flex-wrap justify-center items-center gap-10">
            <input
               name="search-id"
               type="number"
               placeholder="Enter your ID"
               onChange={(e) => handleChange(e)}
               className="p-2 border-2 rounded-lg"
            />
            <button type="submit" disabled={isSearching} className="border-2 py-2 px-6 rounded-md" >
               {!isSearching ? 
                  <CircularProgress color="primary" /> : 
                  'Search'
               }
            </button>
         </form>
         <ServiceDataContext.Provider value={{ responseData, isSearching }}>
            <CardResult />
         </ServiceDataContext.Provider>
      </section>
   )
}

export default Service