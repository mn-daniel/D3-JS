let dataArray = [5, 11, 18];

let svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
        .attr("height", (d, i) => d * 15)
        .attr("width", "50")
        .attr("fill", "magenta")
        .attr("x", (d, i) => 60 * i)
        .attr("y", (d, i) => 300 - (d * 15));

let newX = 300;
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
        .attr("class", "first")
        .attr("cx", (d, i) => { newX += (d*3) + (i*20); return newX; })
        .attr("cy","100")
        .attr("r", (d) => d * 3)

let ellipseX = 600;
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append("ellipse")
        .attr("cx", (d, i) => { ellipseX += (d*3) + (i*20); return ellipseX; })
        .attr("cy","100")
        .attr("rx", (d) => d * 3)
        .attr("ry", "30");
        