let dataArray = [5, 11, 18];

let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let svg = d3.select("body").append("svg").attr("height","100%").attr("width", deviceWidthLessPadding);

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