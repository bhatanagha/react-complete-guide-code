import BarChart from './BarChart'
import './Chart.css'
const Chart = (props) => {

    const datapointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...datapointValues)

return <div className='chart'>
    {props.dataPoints.map(dataPoint => 
        <BarChart
         value={dataPoint.value}
         key={dataPoint.label}
         maxValue={totalMax}
         label={dataPoint.label}
        />)}
</div>

}

export default Chart