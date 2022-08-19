import React from 'react'
import { Bar } from "chart.js/"
import { Chart as ChartJS } from 'chart.js/auto';



function Barchart({ chartData }) {

    return (
        <Bar data={chartData} />
    )
}

export default Barchart
