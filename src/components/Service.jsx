import { useDebounce } from "@uidotdev/usehooks"
import { useState } from "react"

import { CircularProgress } from "@mui/material"
import fetchAPI from "../utils/fetchAPI"
import CardResult from "./CardResult"

const Service = () => {
   const [Idpel, setIdpel] = useState("")
   const [isSearching, setIsSearching] = useState(false)
   const [response, setResponse] = useState([{meter_number:"532411286263",
   subscriber_name:"ABDUL KODIR",
   Daya:"B1 / 2200",
   Periode:"2022-11-01",
   Denda:0,
   Admin:2500,
   Tagihan:236030,
   stand_meter:"00013697 - 00013890"}])
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
         fetchAPI(debouncedIdpel)
         .then(data => setResponse(data.data))
      }
      setIsSearching(false)
   }

   return (
      <section id="cekit" className="w-full h-screen flex flex-col justify-center items-center gap-4">
         <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center gap-10">
            <input
               name="search-id"
               type="number"
               placeholder="Enter your ID"
               onChange={handleChange}
               className="p-2 border-2 rounded-lg"
            />
            <button type="submit" disabled={isSearching} className="border-2 py-2 px-6 rounded-md" >
               {isSearching ? 
                  <CircularProgress color="primary" /> : 
                  'Search'
               }
            </button>
         </form>
         <CardResult data={response}/>
      </section>
   )
}

export default Service