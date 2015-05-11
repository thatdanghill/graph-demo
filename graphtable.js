function drawAllTheYearsChart() {
				
			var data = new google.visualization.DataTable;
			data.addColumn('string', 'Month');
			data.addColumn('number', 2004);
			data.addColumn('number', 2005);
			data.addColumn('number', 2006);
			data.addColumn('number', 2007);
			data.addColumn('number', 2008);
			data.addColumn('number', 2009);
			data.addColumn('number', 2010);
			data.addColumn('number', 2011);
			data.addColumn('number', 2012);
			data.addColumn('number', 2013);
			data.addColumn('number', 2014);
			data.addRows([
				['Jan', 1683699, 2083852, 2316749, 2573451, 2761583, 2839617, 3142629, 3743593, 3728514, 3878640, 4021678 ],
				['Feb',  1864970, 	 2168985, 	 2373706, 	 2646775, 	 3240767, 	 3018910, 	 3390523, 	 3833667, 	 3976741, 	 4112186, 	 4232325 ],
				['Mar',  1996790, 	 2573070, 	 2754705, 	 3094588, 	 3730134, 	 3494312, 	 3964399, 	 4435624, 	 4629241, 	 4872934, 	 5107676 ],
				['Apr',  1947675, 	 2438194, 	 2848065, 	 3133725, 	 3553023, 	 3776582, 	 3490599, 	 4717402, 	 5124597, 	 5253610, 	 5787833 ],
				['May',  2092709,	2551619,	2939361,	3345465,	3877960,	3948416,	4258675,	4739436,	5423726,	5609351,	6054249],
				['Jun', 2241252,	2586889,	2990169,	3440639,	4112951,	4146609,	4537959,	4952305,	5434763,	5537275,	6098364],
				['Jul', 2413367,	2847598,	3168012,	3723004,	4467268,	4661068,	5021838,	5427112,	5860272,	5976704,	6434284],
				['Aug', 2459735,	2903404,	3146216,	3706354,	4585739,	4800336,	5203165,	5543961,	5873948,	6101344,	6612075],
				['Sep', 2355324,	2743221,    3011145,	3438261,	4197643, 4422021,	4774991,	5181839,	5451217,	5714152,	6143974],
				['Oct', 2405073,	2734931,	2935355,	3344916,	3959194,	4219096,	4582632,	4939904,	5245201,	5530091,	5835145],
				['Nov', 2120948,	2297895,	2554143,	2888133,	2985826,	3351187,	3694514,	3821355,	4116576,	4255978,	4537369],
				['Dec', 2134787,	2372333,	2638279,	2899349,	3111388,	3399305,	3657186,	4135562,	4339836,	4490538,	4836276]
				
			]);
			
			var options = {'title':'Passenger Volume for easyJet 2004-2014',
                     'width':1000,
                     'height':500};

			
			
			
			
			
			var chart = new google.charts.Line(document.getElementById('All the years'));
			chart.draw(data, options);
			
			drawAllTheYearsTable(data);
			document.getElementById("up-butt").disabled = true;
			document.getElementById("down-butt").disabled = true;
			
}
			
function drawAllTheYearsTable(data) {
	var table = new google.visualization.Table(document.getElementById('all-year-table'));

    table.draw(data, {showRowNumber: true});
    $('#all-year-table-wrap').hide();
    google.visualization.events.addListener(table, 'select', selectHandler);
}

function selectHandler() {
	console.log(this.getSelection());
	if (this.getSelection()) {
		document.getElementById("up-butt").disabled = false;
		document.getElementById("down-butt").disabled = false;	
	} else {
		document.getElementById("up-butt").disabled = true;
		document.getElementById("down-butt").disabled = true;
	}	
}
			
function attachHandlers() {
	$("#tab-toggle").click(function(){
		$('#all-year-table-wrap').toggle("slow");
	});
}