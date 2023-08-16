import { useState } from "react"

const Service = () => {
   const [IDPEL, setIDPEL] = useState('')
   const handleSubmit = (e) => {
      e.preventDefault()
   }

   return (
      <section>
         <form action={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter your ID"
            value={IDPEL}
            onChange={(e) => setIDPEL(e.target.value)}
            />
         </form>
      </section>
   )
}

export default Service