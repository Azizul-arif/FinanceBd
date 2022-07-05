import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  Grid,
} from '@mui/material'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

// const Navbar = () => {
//   return (
//     <section>
//       <nav className="nav-bar">
//         <div>
//           <h4>FinanceBd</h4>
//         </div>
//         <div>
//           <h4>Good Morning,Shiva!</h4>
//         </div>
//         <div>
//           <h4>SearchBar</h4>
//         </div>
//         <div>
//           <h4>Notification Icon</h4>
//         </div>
//         <div>
//           <h4>Profile</h4>
//         </div>
//       </nav>
//     </section>
//   )
// }
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'black' }}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={6} className="left-nav">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                FinanceBD
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Good Morning, Shiva!
              </Typography>
            </Grid>
            <Grid item xs={6} className="right-nav" spacing={8}>
              <div>
                <TextField
                  className="border"
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  sx={{ borderRadius: '20vh' }}
                  style={{
                    position: 'relative',
                    height: '',
                    borderRadius: 0,
                    padding: '5px',
                  }}
                />
              </div>
              <div style={{ marginRight: '-170px' }}>
                <NotificationsNoneIcon sx={{ color: '#7b61FF' }} />
              </div>
              <div style={{ marginRight: '-130px' }}>
                <AccountCircleIcon />
              </div>
              <div>
                <p>
                  Shiva Michelle <KeyboardArrowDownIcon />
                </p>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
