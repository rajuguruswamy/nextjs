import LineChart from "./line-chart"

function BarChart() {
  return (
    <div>
         <h1>Bar Chart</h1>
    </div>
  )
}

export default function Dashboard(){
    return (
        <div>
            
            <BarChart/>
            <LineChart/>
        </div>
    )
}