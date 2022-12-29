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

        
