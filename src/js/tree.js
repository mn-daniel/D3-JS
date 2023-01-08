let deviceWidthLessPadding = `${window.screen.width - 20}px`,
    height = 200,
    width = 500,
    margin = {
        left: 50,
        right: 50,
        top: 40,
        bottom: 0
    },

    tree = d3.tree().size([width,height]),

    svg = d3.select('body').append('svg')
        .attr("width", deviceWidthLessPadding)
        .attr("height", "100%"),

    chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json('datasets/treeData.json').get((error, data) => {
    console.log(data);
    let root = d3.hierarchy(data[0]);
    tree(root);

    chartGroup.selectAll("circle")
        .data(root.descendants())
        .enter().append("circle")
            .attr("cx",(d) => d.x)
            .attr("cy",(d) => d.y)
            .attr("r","5");
    
    chartGroup.selectAll("path")
        .data(root.descendants().slice(1))
        .enter().append("path")
            .attr("class","link")
            .attr("d",(d) => `M${d.x},${d.y}L${d.parent.x},${d.parent.y}`)

});
    
