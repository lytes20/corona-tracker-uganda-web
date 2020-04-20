import * as d3 from 'd3';

const url = 'https://corona.lmao.ninja/v2/historical/Uganda?lastdays=14';
const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 60, RIGHT: 10 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 350 - MARGIN.TOP - MARGIN.BOTTOM;
export default class BarChart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', '100%')
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    d3.json(url).then((response) => {
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
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.date))
        .range([0, WIDTH])
        .padding(0.4);

      // Add x-axis
      const xAxisCall = d3.axisBottom(x);
      svg.append('g').attr('transform', `translate(0, ${HEIGHT})`).call(xAxisCall);

      //   Add y-axis
      const yAxisCall = d3.axisLeft(y);
      svg.append('g').call(yAxisCall);

      //   Add y-axis label
      svg
        .append('text')
        .attr('x', -(HEIGHT / 2))
        .attr('y', -40)
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .attr('fill', '#43506a')
        .text('Number of confirmed cases');

      //   Add x-axis label
      svg
        .append('text')
        .attr('x', WIDTH / 2)
        .attr('y', HEIGHT + 40)
        .attr('text-anchor', 'middle')
        .attr('fill', '#43506a')
        .text('Dates');

      // Add bars to the svg
      const rects = svg.selectAll('rect').data(data);
      rects
        .enter()
        .append('rect')
        .attr('x', (d) => x(d.date))
        .attr('y', (d) => y(d.cases))
        .attr('width', x.bandwidth)
        .attr('height', (d) => HEIGHT - y(d.cases))
        .attr('fill', 'grey');
    });
  }
}
