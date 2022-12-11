import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import '../App.css' 

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
            fontSize: 25,
          }
        },
        fill: {
          colors: ["#2b89cc", "#73bcf8", "#679dcf"],
        },
        labels: ['Доходы ', 'Расходы ', 'Дефицит/профицит '],
        legend: {
          position: "bottom",
          fontSize: 25,
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
      <div className="donut ">
          <Chart options={this.state.options} series={this.state.series} type="donut" width="700px"/>
      </div>
    );
  }
}

export default Donut;