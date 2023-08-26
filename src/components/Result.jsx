import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from "axios";


// List item material UI
import { Skeleton } from "@mui/material"

// icons
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import NumbersIcon from '@mui/icons-material/Numbers';
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MessageIcon from '@mui/icons-material/Message';

import { options, ENV_BASE_URL } from "../utils/options";
import Modal from "./Modal";


const Result = ({ searchId }) => {
  const [responseData, setResponseData] = useState([])
  const [isSearhing, setIsSearching] = useState(false)
  const [error, setError] = useState(false)
  
  let indonesianRupiah = Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })

  const fetchData = async(searchId) => {
    try {
      const { data } = await axios.get(`${ENV_BASE_URL}/${searchId}`, options)
      return data
    }catch(err) {
      console.log(err)
      if(err.response.status === 429) {
        setError(true)
      }
    }
  }

  useEffect(() => {
    if(searchId) {
      setIsSearching(true)
      fetchData(searchId)
      .then(res => setResponseData(res?.data))
      .then(setIsSearching(false))
    }
    setError(false)
  }, [responseData, searchId])
  console.log(error)
  if(error) return <Modal/>

  if(responseData?.subscriber_name == undefined) return (
    <div className={`container bg-white w-[350px] md:w-[550px] rounded-xl border-4 border-slate-200 p-3`}>
      <div className="flex gap-3 items-center px-1 py-2">
        <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full">
          <MessageIcon/>
        </span>
        <div>
          {isSearhing ?
            <Skeleton variant="text" width={400} height={20}/>
          :
            <p className="text-zinc-500 text-md sm:text-xl font-outfit">
              {responseData !== undefined ? responseData : 
              'Data kamu akan ditampilkan disini'}
            </p>
          }
        </div>
      </div>
    </div>
  )


  return (
    <div className="container bg-white w-[350px] md:w-[550px] rounded-xl border-4 border-slate-200 p-3">
      <div className="flex flex-col flex-wrap gap-3 font-sans">
        <div className="flex gap-3 px-1 py-2">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><NumbersIcon/></span>
            <div>
              <h4>ID Pelanggan</h4>
              <p>{responseData?.meter_number ? responseData.meter_number : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><PersonIcon/></span>
            <div>
              <h4 className="">Nama Pengguna</h4>
              <p>{responseData?.subscriber_name ? responseData.subscriber_name : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><BoltIcon/></span>
            <div>
              <h4 className="">Daya</h4>
              <p>{responseData?.Daya ? responseData.Daya : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><AccessTimeFilledIcon/></span>
            <div>
              <h4 className="">Periode</h4>
              <p>{responseData?.Periode ? responseData.Periode : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><ReportProblemIcon/></span>
            <div>
              <h4 className="">Admin</h4>
              <p>{responseData?.Admin ? 
                  `Admin: ${indonesianRupiah.format(responseData.Admin)}
                  Denda: ${indonesianRupiah.format(responseData.Denda)}` : 
                  '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><ReportProblemIcon/></span>
            <div>
              <h4 className="">Tagihan</h4>
              <p>{responseData?.Tagihan ? 
                  indonesianRupiah.format (responseData.Tagihan) : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><ReportProblemIcon/></span>
            <div>
              <h4 className="">Stand Meter</h4>
              <p>{responseData?.stand_meter ? 
                  responseData.stand_meter : '...'}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  searchId: PropTypes.any
}

export default Result