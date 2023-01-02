let dataArray = [5, 11, 18];
let dataDays = ["Mon", "Wed","Fri"];

let rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,10]);
let rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0,3]);

let x = d3.scaleBand()
    .domain(dataDays)
    .range([0,170])
    .paddingInner(0.1176);

let xAxis = d3.axisBottom(x);

let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let svg = d3.select("body").append("svg").attr("height","100%").attr("width", deviceWidthLessPadding);

let cat20 = d3.schemeCategory20;
console.log(cat20);

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
        .attr("height", (d, i) => d * 15)
        .attr("width", "50")
        .attr("fill", (d,i) => rainbow(i))
        .attr("x", (d, i) => 60 * i)
        .attr("y", (d, i) => 300 - (d * 15));

svg.append("g")
    .attr("class","x axis hidden")
    .attr("transform","translate(0,300)")
    .call(xAxis);

let newX = 300;
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
        .attr("class", "first")
        .attr("fill", (d,i) => rainbow2(i))
        .attr("cx", (d, i) => { newX += (d*3) + (i*20); return newX; })
        .attr("cy","100")
        .attr("r", (d) => d * 3)

let ellipseX = 600;
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append("ellipse")
        .attr("fill",(d,i) => cat20[i])
        .attr("cx", (d, i) => { ellipseX += (d*3) + (i*20); return ellipseX; })
        .attr("cy","100")
        .attr("rx", (d) => d * 3)
        .attr("ry", "30");
        
let linePos = 900;
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
        .attr("x1", linePos)
        .attr("y1", (d, i) => 80 + (i * 20))
        .attr("x2", (d) =>  linePos + (d * 15))
        .attr("y2", (d, i) => 80 + (i * 20));

let textArray = ["start", "middle", "end"];
svg.append("text").selectAll("tspan")
    .data(textArray)
    .enter().append("tspan")
        .attr("x", linePos)
        .attr("y", (d, i) => 150 + (i * 30))
        .attr("font-size", "30")
        .attr("fill","none")
        .attr("stroke","blue")
        .attr("stroke-width","2")
        .attr("text-anchor","start")
        .text((d) => d);