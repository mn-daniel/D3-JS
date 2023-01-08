let parseDate = d3.timeParse("%Y");

d3.xml("datasets/data2.xml").get((error, xml) => {

    let height = 200,
        width = 500,
        margin = {
            left: 50,
            right: 50,
            top: 40,
            bottom: 0
        };
    
    xml = [].map.call(xml.querySelectorAll("dat"), (d) => {
            return {
                date: parseDate(d.getAttribute("id")),
                top: +d.querySelector("top").textContent,
                middle: +d.querySelector("middle").textContent,
                bottom: +d.querySelector("bottom").textContent
            }
        }
    );
    
    let x = d3.scaleTime()
            .domain(d3.extent(xml, (d) => d.date))
            .range([0, width]),
        y = d3.scaleLinear()
            .domain([0,d3.max(xml, (d) => d.top + d.middle + d.bottom)])
            .range([height,0])
        categories = ["top","middle","bottom"],
        stack = d3.stack().keys(categories);

    area = d3.area()
        .x((d) => x(d.data.date))
        .y0((d) => y(d[0]))
        .y1((d) => y(d[1]));

    svg = d3.select("body").append("svg").attr("width","100%").attr("height", "100%");
    
    chartGroup = svg.append("g")
        .attr("transform",`translate(${margin.left},${margin.top})`);
    
    let stacked = stack(xml);
    
    chartGroup.append("g")
        .attr("class","x axis")
        .attr("transform",`translate(0,${height})`)
        .call(d3.axisBottom(x));
    chartGroup.append("g")
        .attr("class","y axis")
        .call(d3.axisLeft(y).ticks(5));
    chartGroup.selectAll("g.area")
        .data(stacked)
        .enter().append("g")
            .attr("class","area")
        .append("path")
            .attr("class","area")
            .attr("d", (d) => area(d))
})
