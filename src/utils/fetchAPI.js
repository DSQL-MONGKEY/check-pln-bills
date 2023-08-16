import axios from "axios"

const ENV_API_KEY = import.meta.env.ENV_API_KEY
const BASE_URL = 'https://cek-id-pln-pasca-dan-pra-bayar.p.rapidapi.com/plnpostpaid'

const options = {
   method: 'GET',
   url: BASE_URL,
   headers: {
      'X-RapidAPI-Key': ENV_API_KEY,
      'X-RapidAPI-Host': 'cek-id-pln-pasca-dan-pra-bayar.p.rapidapi.com'
   }
}


const fetchData = async(url) => {
   try{
      const { data } = await axios.get(`${BASE_URL}/${url}`, options)
      return data
   }catch(err) {
      console.log(err.message)
   }
}

export default fetchData 