import React from 'react'
import { List, Paper } from '@mui/material'

import { Grid, Box } from '@mui/material'

const Board = () => {
  return (
    <section className="conatainer">
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <List>Reserve</List>
        </Grid>
        <Grid item xs={6} md={8}>
          <List>Breadcrumb</List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>News</List>
          <Paper elevation={0} />
          <Paper />
          <Paper elevation={3} />
        </Grid>
      </Grid>
    </section>
  )
}

export default Board
