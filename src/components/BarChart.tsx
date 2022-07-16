import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
//import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

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
      <div>
        <h1>Cahrt</h1>
        {/* <Line options={options} data={data} />; */}
      </div>
    </div>
  )
}

export default BarChart
