import React from 'react'
import { List, Paper } from '@mui/material'

import { Grid, Box, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import AppsIcon from '@mui/icons-material/Apps'
import BarChart from './BarChart'

const Board = () => {
  return (
    <section style={{ marginTop: '90px' }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item xs={2}>
          <div className="side-bar">
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
          </div>

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
              <p>Logout</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <BarChart />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ Width: '500px', backgroundColor: '#EEEEEE', padding: '10px' }}
        >
          <Typography>News</Typography>
          <Paper elevation={3} sx={{ gap: '8px' }}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
          <Paper elevation={3}>
            <p>
              Fades preferred infaltion measures rose 4.7% in May,around
              multi-decade heights
            </p>
            <p>Jan 22,2022</p>
          </Paper>
        </Grid>
      </Grid>
    </section>
  )
}

export default Board
