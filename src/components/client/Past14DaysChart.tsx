import React, { Component } from 'react';
import BarChart from '../../utils/BarChart';

class Past14DaysChart extends Component {
  private barChart = React.createRef<HTMLDivElement>();

  componentDidMount() {
    new BarChart(this.barChart.current);
  }
  render() {
    return (
      <div>
        <h2>Past 14 days Chart</h2>
        <div ref={this.barChart}></div>
      </div>
    );
  }
}

export default Past14DaysChart;
