let deviceWidthLessPadding = `${window.screen.width - 20}px`;

let dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
let dataYears = [
    '2000','2001','2002','2003','2004','2005','2006','2007','2008',
    '2009','2010','2011','2012','2013','2014','2015','2016'];

let height = 200,
    width = 200;

let areaGenerator = d3.area()
    .x((d,i) => i * 20)
    .y0(height)
    .y1((d) => height - d);

let svg = d3.select("body")
    .append("svg")
    .attr("height", "100%")
    .attr("width", deviceWidthLessPadding);

svg.append("path").attr("d",areaGenerator(dataArray));