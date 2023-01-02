let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
let dataYears = [
    '2000','2001','2002','2003','2004','2005','2006','2007','2008',
    '2009','2010','2011','2012','2013','2014','2015','2016'];

let parseDate = d3.timeParse("%Y");

let height = 200,
    width = 500;

let margin = {
    left:50,
    right:50,
    top:40,
    bottom:0
}

let y = d3.scaleLinear()
    .domain([0,d3.max(dataArray)])
    .range([height,0]);

let x = d3.scaleTime()
    .domain(d3.extent(dataYears, (d) => parseDate(d)))
    .range([0,width]);   

let yAxis = d3.axisLeft(y).ticks(3).tickPadding(10).tickSize(10);
let xAxis = d3.axisBottom(x);

let areaGenerator = d3.area()
    .x((d,i) => x(parseDate(dataYears[i])))
    .y0(height)
    .y1((d) => y(d));

let svg = d3.select("body")
    .append("svg")
    .attr("height", "100%")
    .attr("width", deviceWidthLessPadding);

let chartGroup = svg.append("g")
    .attr("transform",`translate(${margin.left},${margin.top})`);

chartGroup.append("path").attr("d",areaGenerator(dataArray));
chartGroup.append("g")
    .attr("class", "axis y")
    .call(yAxis);

chartGroup.append("g")
    .attr("class", "axis x")
    .call(xAxis)
    .attr("transform",`translate(0, ${height})`);