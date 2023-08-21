import axios from "axios"

const ENV_API_KEY = import.meta.env.VITE_API_KEY
const ENV_BASE_URL = import.meta.env.VITE_BASE_URL

const options = {
   method: 'GET',
   url: ENV_BASE_URL,
   headers: {
      'X-RapidAPI-Key': ENV_API_KEY,
      'X-RapidAPI-Host': 'cek-id-pln-pasca-dan-pra-bayar.p.rapidapi.com'
   }
}


const fetchAPI = async(idpel) => {
   try{
      const { data } = await axios.get(`${ENV_BASE_URL}/${idpel}`, options)
      return data
   }catch(err) {
      console.log(err.message)
   }
}


export default fetchAPI 