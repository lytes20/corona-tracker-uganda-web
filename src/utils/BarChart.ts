import * as d3 from 'd3';

const url = 'https://corona.lmao.ninja/v2/historical/Uganda?lastdays=14';
const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 60, RIGHT: 10 };
let WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 350 - MARGIN.TOP - MARGIN.BOTTOM;
export default class BarChart {
  svg;
  xScale;
  xAxisCall;
  xAxisElement;
  rects;
  constructor(element) {
    this.svg = d3
      .select(element)
      .append('svg')
      .attr('width', '100%')
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    d3.json(url)
      .then((response) => {
        const responseData = Object.entries(response.timeline.cases);
        const data = responseData.map((dataItem) => {
          const dataObject = { date: '', cases: 0 };
          dataObject.date = dataItem[0];
          dataObject.cases = Number(dataItem[1]);
          return dataObject;
        });

        const y = d3
          .scaleLinear()
          .domain([d3.min(data, (d) => d.cases) * 0.95, d3.max(data, (d) => d.cases)])
          .range([HEIGHT, 0]);
        this.xScale = d3
          .scaleBand()
          .domain(data.map((d) => d.date))
          .range([0, WIDTH])
          .padding(0.4);

        // Add x-axis
        this.xAxisCall = d3.axisBottom(this.xScale);
        this.xAxisElement = this.svg.append('g').attr('transform', `translate(0, ${HEIGHT})`);
        this.xAxisElement.call(this.xAxisCall);

        //   Add y-axis
        const yAxisCall = d3.axisLeft(y);
        this.svg.append('g').call(yAxisCall);

        //   Add y-axis label
        this.svg
          .append('text')
          .attr('x', -(HEIGHT / 2))
          .attr('y', -40)
          .attr('text-anchor', 'middle')
          .attr('transform', 'rotate(-90)')
          .attr('fill', '#43506a')
          .text('Number of confirmed cases');

        //   Add x-axis label
        this.svg
          .append('text')
          .attr('x', WIDTH / 2)
          .attr('y', HEIGHT + 40)
          .attr('text-anchor', 'middle')
          .attr('fill', '#43506a')
          .attr('class', 'Xaxis-label')
          .text('Dates');

        // Add bars to the svg
        this.rects = this.svg.selectAll('rect').data(data);
        this.rects
          .enter()
          .append('rect')
          .attr('x', (d) => this.xScale(d.date))
          .attr('y', (d) => y(d.cases))
          .attr('width', this.xScale.bandwidth)
          .attr('height', (d) => HEIGHT - y(d.cases))
          .attr('fill', 'grey');

        this.drawChart();
      })
      .catch((error) => {
        this.svg.append('text').attr('x', 0).attr('y', 10).attr('fill', 'red').text('Can not display bar chart now');
      });

    window.addEventListener('resize', () => this.drawChart());
  }

  drawChart() {
    // reset the width
    WIDTH = parseInt(d3.select('.BarChart-wrapper').style('width'), 10) - MARGIN.LEFT - MARGIN.RIGHT;

    // set the svg dimensions
    this.svg.attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT);

    // Set new range for xScale
    this.xScale.range([0, WIDTH]).padding(0.4);

    // draw the new xAxis
    this.xAxisElement.call(this.xAxisCall);
    // this.svg.append('g').attr('transform', `translate(0, ${HEIGHT})`).call(this.xAxisCall);

    // specify new properties for the bars
    this.svg
      .selectAll('rect')
      .attr('x', (d) => this.xScale(d.date))
      .attr('width', this.xScale.bandwidth);
  }
}
