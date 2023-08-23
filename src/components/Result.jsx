import { useEffect, useState } from "react";

// List item material UI
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Box
} from "@mui/material"
import PropTypes from 'prop-types'

// icons
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import NumbersIcon from '@mui/icons-material/Numbers';
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


import fetchAPI from "../utils/fetchAPI";

const Result = ({ searchId }) => {
  const [responseData, setResponseData] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isError, setIsError] = useState([])

  useEffect(() => {
    if(searchId) {
      setIsSearching(true)
      fetchAPI(searchId)
      .then(data => setResponseData(data?.data))
      .catch(err => console.log(err.err))
    }
      setIsSearching(false)
  }, [searchId])

  let indonesianRupiah = Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })

  if(!responseData) return (
    <List 
    sx={{ 
      width: '100%',
      maxWidth: 500,
      bgcolor: 'white',
      borderRadius: 10,
      border: 3,
      borderTop: 20,
      borderColor: '#40F8FF'
    }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: '#FF2E63' }}>
            <ReportProblemIcon/>  
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={responseData} 
        />
      </ListItem>
    </List>
  )


  // const { meter_number, subscriber_name, Daya, Periode, Denda, Admin, Tagihan, stand_meter } = responseData
  console.log(responseData)

  return (
    <div className="container bg-white w-5/10 md:w-1/2 rounded-xl border-4 border-slate-200 p-4">
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
              <p>{responseData?.Admin ? `Admin: ${indonesianRupiah.format(responseData.Admin)} Denda: ${indonesianRupiah.format(responseData.Denda)}` : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><ReportProblemIcon/></span>
            <div>
              <h4 className="">Tagihan</h4>
              <p>{responseData?.Tagihan ? indonesianRupiah.format (responseData.Tagihan) : '...'}</p>
            </div>
        </div>
        <div className="flex gap-3 px-1 py-2 border-t-2 ">
            <span className="bg-[#FF2E63] text-center text-white py-2.5 px-3 rounded-full"><ReportProblemIcon/></span>
            <div>
              <h4 className="">Stand Meter</h4>
              <p>{responseData?.stand_meter ? responseData.stand_meter : '...'}</p>
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