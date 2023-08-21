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

// Card Icon
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SpeedIcon from '@mui/icons-material/Speed';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import fetchAPI from "../utils/fetchAPI";

const CardResult = ({ searchId }) => {
  const [responseData, setResponseData] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if(searchId) {
      setIsSearching(true)
      fetchAPI(searchId).then(data => (
        setResponseData(data.data)
      ))
    }
      setIsSearching(false)
  }, [searchId])

  let indonesianRupiah = Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })

  if(!isSearching) return (
    <List 
    sx={{ 
      width: '100%',
      maxWidth: 360,
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
        primary={'Not Found'} 
        secondary={'please input the ID'} />
      </ListItem>
    </List>
  )

  const { meter_number, subscriber_name, Daya, Periode, Denda, Admin, Tagihan, stand_meter } = responseData
  console.log(responseData)
  return (
    <List 
      sx={{ 
        width: '100%',
        maxWidth: 360,
        bgcolor: 'white',
        borderRadius: 10,
        border: 3,
        borderTop: 20,
        borderColor: '#40F8FF'
      }}>
        <Box>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <NumbersIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Meter Number'} 
            secondary={meter_number} />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <PersonIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Nama Pelanggan'} 
            secondary={subscriber_name} />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <BoltIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Daya'} 
            secondary={Daya} />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <AccessTimeFilledIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Periode'} 
            secondary={Periode} />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <AdminPanelSettingsIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Denda & Admin'} 
            secondary={`Denda: ${Denda}, Admin: ${Admin}`} />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <PaidIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Tagihan'} 
            secondary={`${indonesianRupiah.format(Tagihan)}`} />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#A0C49D' }}>
                <SpeedIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={'Stand-meter'} 
            secondary={stand_meter} />
          </ListItem>
        </Box>
    </List>
  )
}

CardResult.propTypes = {
  searchId: PropTypes.any
}

export default CardResult