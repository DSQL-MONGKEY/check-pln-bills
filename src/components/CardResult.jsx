import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Box
} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SpeedIcon from '@mui/icons-material/Speed';
import PropTypes from 'prop-types'

const CardResult = ({ data }) => {

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
      {
        data.map(data => (
          <Box key={data.subscriber_name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
                  <NumbersIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Meter Number'} 
              secondary={!data ? data.meter_number : '...' } />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
                  <PersonIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Nama Pelanggan'} 
              secondary={data ? data.subscriber_name : '...'} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
                  <BoltIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Daya'} 
              secondary={data ? data.Daya : '...'} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
                  <AccessTimeFilledIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Periode'} 
              secondary={data ? data.Periode : '...'} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
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
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
                  <PaidIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Tagihan'} 
              secondary={data ? `${indonesianRupiah.format(data.Tagihan)}` : '...'} />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#33BBC5' }}>
                  <SpeedIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
              primary={'Stand-meter'} 
              secondary={data ? data.stand_meter : '...'} />
            </ListItem>
          </Box>
        ))
      }
    </List>
  )
}

CardResult.propTypes = {
  data: PropTypes.any
}

export default CardResult