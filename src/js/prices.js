let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("datasets/prices.csv")
    .row((d) => {
        return {month:parseDate(d.month),price:Number(d.price.trim().slice(1))}
    })
    .get((error, data) => {
        let height = 300;
        let width = 500;

        let max = d3.max(data, (d) => d.price);
        let minDate = d3.min(data, (d) => d.month);
        let maxDate = d3.max(data, (d) => d.month);

        let y = d3.scaleLinear()
                .domain([0, max])
                .range([height, 0]);
        let x = d3.scaleTime()
                .domain([minDate, maxDate])
                .range([0, width]);
        let yAxis = d3.axisLeft(y);
        let xAxis = d3.axisBottom(x);

        let svg = d3.select("body").append("svg").attr("height", "100%").attr("width",deviceWidthLessPadding);

        let margin = {
            left: 50,
            right: 50,
            top: 40,
            bottom: 0
        }

        let chartGroup = 
        svg.append("g")
            .attr("transform",`translate(${margin.left},${margin.top})`);

        let line = d3.line()
            .x((d) => x(d.month))
            .y((d) => y(d.price));
        
        chartGroup.append("path").attr("d", line(data));
        chartGroup.append("g").attr("class", "x axis").attr("transform",`translate(0,${height})`).call(xAxis);
        chartGroup.append("g").attr("class", "y axis").call(yAxis);

        console.log();
    });