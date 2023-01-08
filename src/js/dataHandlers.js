d3.json("datasets/treeData.json")
    .get((error, data) => {
        console.log(data[0]);
    });