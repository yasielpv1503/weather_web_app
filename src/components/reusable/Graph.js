import React from 'react'
import { Chart } from 'react-charts'
import useChartConfig from '../../core/helper/useChartConfig'

import * as moment from 'moment'

const Graph = (props) => {

    const { graphData } = props

    const { data } = useChartConfig({
        series: 2
    })
    const [chatData, setChartData] = React.useState([])
    React.useEffect(() => {

        let datumsS1 = []
        let datumsS2 = []
    
        graphData.forEach(element => {
            datumsS1.push({
                x: moment(element.date).toDate(),
                y: element.minTemp,
                r:undefined
            })
            datumsS2.push({
                x: moment(element.date).toDate(),
                y: element.maxTemp,
                r:undefined
            })
        });

        setChartData([{ label: 'Low temperatures', datums: datumsS1 },
        { label: 'Maximum temperatures', datums: datumsS2 }
        ])
    }, [graphData])

    

    const series = React.useMemo(
        () => ({
            showPoints: false
        }),
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    return (
        <div style={{ width: '100%', height: 300, }}>

            <Chart data={chatData} series={series} axes={axes} tooltip />


        </div>
    )
}

export default Graph