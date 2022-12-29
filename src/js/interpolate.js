let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let dataArray = [{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];

let svg = d3.select("body").append("svg").attr("height","100%").attr("width", deviceWidthLessPadding);

/* d3 line is a generator */
let line = d3.line()
    .x((d,i) => d.x * 6)
    .y((d,i) => d.y * 4)
    .curve(d3.curveCardinal);

svg.append("path")
    .attr("d", line(dataArray))
    .attr("fill","none")
    .attr("stroke","blue");