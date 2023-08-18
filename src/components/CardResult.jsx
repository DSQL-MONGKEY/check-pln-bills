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

// context
import { useContext } from "react"
import { ServiceDataContext } from "./Service";

const CardResult = () => {
  const { isSearching } = useContext(ServiceDataContext)
  const responseData = [{
    Admin: 2500,
    Daya: "R1 / 1300",
    Denda: 0,
    Periode : "2023-08-01",
    Tagihan: 244401,
    meter_number: "538711141151",
    stand_meter : "00036088 - 00036249",
    subscriber_name: "ALIH ITI BIN TIIN 1"
  }]

  let indonesianRupiah = Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })

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
      {isSearching ?
        responseData.map(data => (
          <Box key={data.subscriber_name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <NumbersIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Meter Number'} 
              secondary={data.meter_number} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <PersonIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Nama Pelanggan'} 
              secondary={data.subscriber_name} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <BoltIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Daya'} 
              secondary={data.Daya} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <AccessTimeFilledIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Periode'} 
              secondary={data.Periode} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <AdminPanelSettingsIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Denda & Admin'} 
              secondary={`Denda: ${data.Denda}, Admin: ${data.Admin}`} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <PaidIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Tagihan'} 
              secondary={`${indonesianRupiah.format(data.Tagihan)}`} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#F4D160' }}>
                  <SpeedIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Stand-meter'} 
              secondary={data.stand_meter} />
            </ListItem>
          </Box>
        )) :
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ReportProblemIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Not Found" secondary="Please input the ID correctly" />
        </ListItem>
      } 
    </List>
  )
}

CardResult.propTypes = {
  data: PropTypes.any
}

export default CardResult

        