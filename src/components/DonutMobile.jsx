import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      options: {
        colors: ["#2b89cc", "#73bcf8", "#679dcf"],
        tooltip: {
          fillSeriesColor: true,
        },
        dataLabels: {
          style:{
            fontSize: 12,
          }
        },
        fill: {
          colors: ["#2b89cc", "#73bcf8", "#679dcf"],
        },
        labels: ['Доходы ', 'Расходы ', 'Дефицит/профицит '],
        legend: {
          position: "bottom",
          fontSize: 15,
          markers: {
            fillColors: ["#2b89cc", "#73bcf8", "#679dcf"]
          }
        },
      },
      series: [3746, 4183, 436],
    }
  }

  render() {

    return (
      <div className="donut">
          <Chart options={this.state.options} series={this.state.series} type="donut" width="400px"/>
      </div>
    );
  }
}

export default Donut;