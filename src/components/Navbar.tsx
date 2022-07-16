import { AppBar, Toolbar, Typography, Grid } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchBox from './SearchBox'
import logo from './../assets/Logo.jpg'

const styles = {
  appBar: { bgcolor: 'white', color: 'black', padding: 1 },
  logo: {
    marginLeft: '50px',
    Width: '217px',
    Height: '36px',
  },
}

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
//         </div>
//           <h4>SearchBar</h4>
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
    <AppBar elevation={0} position="fixed" sx={styles.appBar}>
      <Toolbar>
        <Grid container spacing={3} alignItems="center">
          <Grid item md={2}>
            <img src={logo} style={styles.logo} alt="Logo" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Good Morning, Shiva!
            </Typography>
          </Grid>
          <Grid container item xs={4} spacing={3}>
            <Grid item>
              <SearchBox />
            </Grid>
            <Grid item>
              <NotificationsNoneIcon
                sx={{ color: '#7b61FF' }}
                style={{ marginTop: '12px' }}
              />
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="end"
              style={{ marginBottom: '12px' }}
            >
              <AccountCircleIcon />
              <Typography>Shiva Michelle </Typography>
              <KeyboardArrowDownIcon />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
