import * as React from 'react'
import Paper from '@mui/material/Paper'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui'

// const generateData = (n) => {
//   const ret = []
//   let y = 0
//   for (let i = 0; i < n; i += 1) {
//     y += Math.round(Math.random() * 10 - 5)
//     ret.push({ x: i, y })
//   }
//   return ret
// }
// const data = generateData(100)

const BarChart = () => {
  //   const x = { data: chartData, viewport }

  return (
    <div>
      <h1>Cahrt</h1>
      {/* <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="y" argumentField="x" />
          <ZoomAndPan viewport={viewport} onViewportChange={viewportChange} />
        </Chart>
      </Paper> */}
    </div>
  )
}

export default BarChart
