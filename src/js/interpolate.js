let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let dataArray = [{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];
let interpolateTypes = [
    d3.curveLinear,
    d3.curveNatural,
    d3.curveStep,
    d3.curveBasis,
    d3.curveBundle,
    d3.curveCardinal
]

let svg = d3.select("body").append("svg").attr("height","100%").attr("width", deviceWidthLessPadding);

for (let p=0; p<6; p++) {
    /* d3 line is a generator */
    let line = d3.line()
        .x((d,i) => d.x * 6)
        .y((d,i) => d.y * 4)
        .curve(interpolateTypes[p]);

    let shiftX  = p * 250,
    shiftY = 0;
    let chartGroup = svg.append("g").attr("class",`grp${p}`).attr("transform",`translate(${shiftX},0)`);

    chartGroup.append("path")
        .attr("d", line(dataArray))
        .attr("fill","none")
        .attr("stroke","blue");

    chartGroup.selectAll(`circle.grp${p}`)
        .data(dataArray)
        .enter().append("circle")
            .attr("class", (d,i) => `grp${i}`)
            .attr("cx", (d,i) => d.x * 6)
            .attr("cy", (d,i) => d.y * 4)
            .attr("r","2");
}

        