function donutChart ()
{
    d3.tsv("/assets/config/donut_data.tsv", function (data)
    {
			console.log(data[0]);
        var radius      = 100;
        var color       = d3.scaleBand()

        var canvas      = d3.select(".donutChart")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);
 
        var group       = canvas.append("g")
            .attr("transform", "translate(500,350)");

        var arc         = d3.svg.arc()
            .innerRadius(50)
            .outerRadius(radius);

        var pie         = d3.layout.pie()
            .value(function (d)
            {
                return d.value;
            });

        var theArc      = group.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

        theArc.append("path")
            .attr("d", arc)
            .attr("fill", function (d)
            {
                return color(d.data.value);
            });

        theArc.append("text")
            .attr("transform", function (d)
            {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", "0.15em")
            .text(function (d)
            {
                return d.data.rank;
            });
    });
}