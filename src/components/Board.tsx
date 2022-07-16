import React from 'react'
import { List, Paper } from '@mui/material'

import { Grid, Box, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import AppsIcon from '@mui/icons-material/Apps'
import BarChart from './BarChart'
import { blue } from '@mui/material/colors'

const styles = {
  newsBar: {
    Width: '318px',
    Height: '86px',
    gap: '16px',
    padding: '12px',
    marginTop: '20px',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    border: '1px solid #F4F4F4',
    borderRadius: '8px',
    boxSizing: 'border-box',
    isolation: 'isolate',
  },
  heading: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17.6px',
    color: '#1A1A1A',
    borderLeftColor: 'red',
  },
  newsHeading: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '25.14px',
  },
  date: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: '400',
    color: '#767676',
    marginTop: '6px',
  },
  leftsideNav: {
    padding: '12px 8px',
    gap: '8px',
    isolation: 'isolate',
    Width: '250px',
    Height: '44px',
    backgroundColor: '#E9E5FA',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '15px',
    marginRight: '50px',
  },
  bottomLine: {
    backgroundColor: '#EEEEEE',
    height: '835px',
    width: '1px',
    display: 'inline-flex',
    flexDirection: 'column',
  },
}

const Board = () => {
  return (
    <section style={{ marginTop: '90px' }}>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          height: '1px',
          width: '1700px',
          marginBottom: '15px',
        }}
      ></div>
      {/* <Box sx={styles.bottomLine}></Box> */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={2} style={{ marginLeft: '-10px' }}>
          <Box sx={styles.leftsideNav}>
            <div>
              <AppsIcon style={{ color: '#7B61FF' }} />
            </div>
            <div>
              <Typography
                variant="h6"
                sx={{
                  color: '#7B61FF',
                  marginTop: '-5px',
                }}
              >
                Reserve
              </Typography>
            </div>
          </Box>

          <div style={{ marginTop: '700px' }} className="log-out">
            <div
              style={{
                marginTop: '15px',
                marginRight: '10px',
              }}
            >
              <LogoutIcon></LogoutIcon>
            </div>
            <div>
              <p
                style={{
                  marginTop: '-28px',
                  marginLeft: '40px',
                }}
              >
                Logout
              </p>
            </div>
          </div>
        </Grid>
        <Box sx={styles.bottomLine}></Box>
        <Grid item xs={6}>
          <BarChart />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ Width: '550px', backgroundColor: '#EEEEEE', padding: '20px' }}
        >
          <Typography variant="h5" sx={styles.newsHeading}>
            News
          </Typography>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography variant="h5" sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography variant="h5" sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography variant="h5" sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography variant="h5" sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography variant="h5" sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.newsBar}>
            <Typography variant="h5" sx={styles.heading}>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </Typography>
            <Typography sx={styles.date}>Jan 22,2022</Typography>
          </Paper>
        </Grid>
      </Grid>
    </section>
  )
}

export default Board
