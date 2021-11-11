import React from 'react'
import {Doughnut} from 'react-chartjs-2'
const DonoughtChart = () => {
    return(
        <div>
        <h3>Here's Your Donought Chart</h3>
        <div class="chart-container">

            
           <Doughnut
           
           data = {{
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100, 75],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 92, 86)'
              ],
              hoverOffset: 4
            }],
            labels: [
                'Red',
                'Blue',
                'Yellow',
                'Others'
              ]
          }}
        
           height={250}
           width={250}
           options={{
               maintainAspectRatio: false
           }}
        
           
           />
            
        </div>
        </div>




    )


}

export default DonoughtChart