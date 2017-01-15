function donutChart ()
{
	
	console.log('checking');

    var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

	 var color = d3.scaleOrdinal(d3.schemeCategory20b);

	var arc = d3.arc()
			.outerRadius(radius - 10)
			.innerRadius(0);

	var pie = d3.pie()
			.sort(null)
			.value(function(d) { return d.value; });

	var svg = d3.select(".donutChart")
			.attr("width", width)
			.attr("height", height)
		.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	d3.tsv("/assets/config/donut_data.tsv", type, function(error, data) {
		if (error) throw error;

		var g = svg.selectAll(".arc")
				.data(pie(data))
			.enter().append("g")
				.attr("class", "arc");

		g.append("path")
				.attr("d", arc)
				//.attr("data-legend", function(d){return d.data.status})
				.style("fill", function(d) { return color(d.data.status); });

		g.append("text")
				.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
				.attr("dy", ".71em")
				.text(function(d) { return d.data.status; });
		
		
	});
	
	function type(d) {
  d.value = +d.value;
  return d;
}
}