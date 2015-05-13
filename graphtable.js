// Variables created to make coding graphs easier
var data_set = new Array();
	data_set = [
		[new Date(2004, 0), 1683699],
		[new Date(2004, 1), 1864970],
		[new Date(2004, 2), 1996790],
		[new Date(2004, 3), 1947675], 
		[new Date(2004, 4), 2092709],
		[new Date(2004, 5), 2241252],
		[new Date(2004, 6), 2413367],
		[new Date(2004, 7), 2459735],
		[new Date(2004, 8), 2355324], 
		[new Date(2004, 9), 2405073], 
		[new Date(2004, 10), 2120948], 
		[new Date(2004, 11), 2134787],
		[new Date(2005, 0), 2083852],
		[new Date(2005, 1), 2168985],
		[new Date(2005, 2), 2573070],
		[new Date(2005, 3), 2438194],
		[new Date(2005, 4), 2551619],
		[new Date(2005, 5), 2586889],
		[new Date(2005, 6), 2847598],
		[new Date(2005, 7), 2903404],
		[new Date(2005, 8), 2743221], 
		[new Date(2005, 9), 2734931], 
		[new Date(2005 ,10), 2297895],
		[new Date(2005, 11), 2372333],
		[new Date(2006, 0), 2316749],
		[new Date(2006, 1), 2373706],
		[new Date(2006, 2), 2754705],
		[new Date(2006, 3), 2848065],
		[new Date(2006, 4), 2939361], 
		[new Date(2006, 5), 2990169],
		[new Date(2006, 6), 3168012],
		[new Date(2006, 7), 3146216],
		[new Date(2006, 8), 3011145],
		[new Date(2006, 9), 2935355],
		[new Date(2006, 10), 2554143],
		[new Date(2006, 11), 2638279],
		[new Date(2007, 0), 2573451],
		[new Date(2007, 1), 2646775],
		[new Date(2007, 2), 3094588],
		[new Date(2007, 3), 3133725],
		[new Date(2007, 4), 3345465],
		[new Date(2007, 5), 3440639],
		[new Date(2007, 6), 3723004],
		[new Date(2007, 7), 3706354],
		[new Date(2007, 8), 3438261],
		[new Date(2007, 9), 3344916],
		[new Date(2007, 10), 2888133],
		[new Date(2007, 11), 2899349],
		[new Date(2008, 0), 2761583],
		[new Date(2008, 1), 3240767],
		[new Date(2008, 2), 3730134],
		[new Date(2008, 3), 3553023],
		[new Date(2008, 4), 3877960],
		[new Date(2008, 5), 4112951],
		[new Date(2008, 6), 4467268],
		[new Date(2008, 7), 4585739],
		[new Date(2008, 8), 4197643],
		[new Date(2008, 9), 3959194],
		[new Date(2008, 10), 2985826],
		[new Date(2008, 11), 3111388],
		[new Date(2009, 0),2839617],
		[new Date(2009, 1), 3018910],
		[new Date(2009, 2), 3494312],
		[new Date(2009, 3), 3776582],
		[new Date(2009, 4), 3948416],
		[new Date(2009, 5), 4146609],
		[new Date(2009, 6), 4661068],
		[new Date(2009, 7), 4800336],
		[new Date(2009, 8), 4422021],
		[new Date(2009, 9), 4219096],
		[new Date(2009, 10), 3351187],
		[new Date(2009, 11), 3399305],
		[new Date(2010, 0), 3142629],
		[new Date(2010, 1), 3390523],
		[new Date(2010, 2), 3964399],
		[new Date(2010, 3), 3490599],
		[new Date(2010, 4), 4258675],
		[new Date(2010, 5), 4537959],
		[new Date(2010, 6), 5021838],
		[new Date(2010, 7), 5203165],
		[new Date(2010, 8), 4774991],
		[new Date(2010, 9), 4582632],
		[new Date(2010, 10), 3694514],
		[new Date(2010, 11), 3657186],
		[new Date(2011, 0), 3743593],
		[new Date(2011, 1), 3833667],
		[new Date(2011, 2), 4435624],
		[new Date(2011, 3), 4717402],
		[new Date(2011, 4), 4739436],
		[new Date(2011, 5), 4952305],
		[new Date(2011, 6), 5427112],
		[new Date(2011, 7), 5543961],
		[new Date(2011, 8), 5181839],
		[new Date(2011, 9), 4939904],
		[new Date(2011, 10), 3821355],
		[new Date(2011, 11), 4135562],
		[new Date(2012, 0), 3728514],
		[new Date(2012, 1), 3976741],
		[new Date(2012, 2), 4629241],
		[new Date(2012, 3), 5124597],
		[new Date(2012, 4), 5423726],
		[new Date(2012, 5), 5434763],
		[new Date(2012, 6), 5860272],
		[new Date(2012, 7), 5873948],
		[new Date(2012, 8), 5451217],
		[new Date(2012, 9), 5245201],
		[new Date(2012, 10), 4116576],
		[new Date(2012, 11), 4339836],
		[new Date(2013, 0), 3878640],
		[new Date(2013, 1), 4112186],
		[new Date(2013, 2), 4872934],
		[new Date(2013, 3), 5253610],
		[new Date(2013, 4), 5609351],
		[new Date(2013, 5), 5537275],
		[new Date(2013, 6), 5976704],
		[new Date(2013, 7), 6101344],
		[new Date(2013, 8), 5714152],
		[new Date(2013, 9), 5530091],
		[new Date(2013, 10), 4255978],
		[new Date(2013, 11), 4490538],
		[new Date(2014, 0), 4021678],
		[new Date(2014, 1), 4232325],
		[new Date(2014, 2), 5107676],
		[new Date(2014, 3), 5787833],
		[new Date(2014, 4), 6054249],
		[new Date(2014, 5), 6098364],
		[new Date(2014, 6), 6434284],
		[new Date(2014, 7), 6612075],
		[new Date(2014, 8), 6143974],
		[new Date(2014, 9), 5835145],
		[new Date(2014, 10), 4537369],
		[new Date(2014, 11), 4836276]
		
	];
	
	var yearly_totals = [25716329,	30301991,	33675905,	38234660,	44583476,	46077459,	49719110,	55471760,	59204632,	61332803,	65701248];
	
	
	
//----------------------------------------------------------------------------------------------------------------	
// Functions to create some of the seasonal variables	
	function getPastSeasonalData(){
		
		rolling_data = new Array;
		 for (i=0; i<data_set.length-12; i++){
		
		rolling_data[rolling_data.length] = [data_set[i+12][0], (data_set[i+1][1] + data_set[i+2][1] + data_set[i+3][1] + 
										data_set[i+4][1] + data_set[i+5][1] + data_set[i+6][1] + data_set[i+7][1] + data_set[i+8][1] + 												data_set[i+9][1] + data_set[i+10][1] + data_set[i+11][1] + data_set[i+12][1])];
	}
	
	var data = new Array;
	for (i=0, j=0; i<rolling_data.length, j<data_set.length-12; i++, j++){
		data[data.length] =[data_set[j+12][0], (data_set[j+12][1]/rolling_data[i][1])] 
		
	}
	
	return data;
		 
	}
	
	
	
var past_snl_data = getPastSeasonalData();
	
function getPastSeasonalTotalAverageData(){
	
	var data = new Array;
	var Jan = 0;
	var Feb = 0;
	var Mar = 0;
	var Apr = 0;
	var May = 0;
	var Jun = 0;
	var Jul = 0;
	var Aug = 0;
	var Sep = 0;
	var Oct = 0;
	var Nov = 0;
	var Dec = 0;
	
	for(i=0; i<past_snl_data.length; i++){
		if (i%12 == 0){
			Jan = Jan + past_snl_data[i][1];
			}
		if (i%12 == 1){
			Feb = Feb + past_snl_data[i][1];
			}
		if (i%12 == 2){
			Mar = Mar + past_snl_data[i][1];
			}
		if (i%12 == 3){
			Apr = Apr + past_snl_data[i][1];
			}
		if (i%12 == 4){
			May = May + past_snl_data[i][1];
			}
		if (i%12 == 5){
			Jun = Jun + past_snl_data[i][1];
			}
		if (i%12 == 6){
			Jul = Jul + past_snl_data[i][1];
			}
		if (i%12 == 7){
			Aug = Aug + past_snl_data[i][1];
			}
		if (i%12 == 8){
			Sep = Sep + past_snl_data[i][1];
			}
		if (i%12 == 9){
			Oct = Oct + past_snl_data[i][1];
			}
		if (i%12 == 10){
			Nov = Nov + past_snl_data[i][1];
			}
		if (i%12 == 11){
			Dec = Dec + past_snl_data[i][1];
			}
		}
		
		data = [Jan/10, Feb/10, Mar/10, Apr/10, May/10, Jun/10, Jul/10, Aug/10, Sep/10, Oct/10, Nov/10, Dec/10];
		return data;
	
}	

var past_snl_data_ttl_avg = getPastSeasonalTotalAverageData();


	
function getPastSeasonalLastThreeYearsData(){
	
	var data = new Array;
	var Jan = 0;
	var Feb = 0;
	var Mar = 0;
	var Apr = 0;
	var May = 0;
	var Jun = 0;
	var Jul = 0;
	var Aug = 0;
	var Sep = 0;
	var Oct = 0;
	var Nov = 0;
	var Dec = 0;
	
	for(i=84; i<past_snl_data.length; i++){
		if (i%12 == 0){
			Jan = Jan + past_snl_data[i][1];
			}
		if (i%12 == 1){
			Feb = Feb + past_snl_data[i][1];
			}
		if (i%12 == 2){
			Mar = Mar + past_snl_data[i][1];
			}
		if (i%12 == 3){
			Apr = Apr + past_snl_data[i][1];
			}
		if (i%12 == 4){
			May = May + past_snl_data[i][1];
			}
		if (i%12 == 5){
			Jun = Jun + past_snl_data[i][1];
			}
		if (i%12 == 6){
			Jul = Jul + past_snl_data[i][1];
			}
		if (i%12 == 7){
			Aug = Aug + past_snl_data[i][1];
			}
		if (i%12 == 8){
			Sep = Sep + past_snl_data[i][1];
			}
		if (i%12 == 9){
			Oct = Oct + past_snl_data[i][1];
			}
		if (i%12 == 10){
			Nov = Nov + past_snl_data[i][1];
			}
		if (i%12 == 11){
			Dec = Dec + past_snl_data[i][1];
			}
		}
		
		data = [Jan/3, Feb/3, Mar/3, Apr/3, May/3, Jun/3, Jul/3, Aug/3, Sep/3, Oct/3, Nov/3, Dec/3];
		return data;
	}
	
	
var past_snl_data_lst_three_years = getPastSeasonalLastThreeYearsData();
		
	
	
function getFutureSeasonalData(){
	
	var data = new Array;
	for (i=0; i<data_set.length; i++){
		
	var total;
	 		if(i < 12){
			total = yearly_totals[0];
		}
		else if(i < 24){
			total = yearly_totals[1];
		}
		else if(i < 36){
			total = yearly_totals[2];
		}
		else if(i < 48){
			total = yearly_totals[3];
		}
		else if(i < 60){
			total = yearly_totals[4];
		}
		else if(i < 72){
			total = yearly_totals[5];
		}
		else if(i < 84){
			total = yearly_totals[6];
		}
		else if(i < 96){
			total = yearly_totals[7];
		}
		else if(i < 108){
			total = yearly_totals[8];
		}
		else if(i < 120){
			total = yearly_totals[9];
		}
		else if(i < 132){
			total = yearly_totals[10];
		}
		else if(i < 144){
			total = yearly_totals[11];
		}
		
		
data[data.length] = [data_set[i][0], (data_set[i][1]/total)];
	}		
	return data;
	
	
}

var ftr_snl_data = getFutureSeasonalData();



function getFutureSeasonalTotalAverageData(){
	
	var data = new Array;
	var Jan = 0;
	var Feb = 0;
	var Mar = 0;
	var Apr = 0;
	var May = 0;
	var Jun = 0;
	var Jul = 0;
	var Aug = 0;
	var Sep = 0;
	var Oct = 0;
	var Nov = 0;
	var Dec = 0;
	
	for(i=0; i<ftr_snl_data.length; i++){
		if (i%12 == 0){
			Jan = Jan + ftr_snl_data[i][1];
			}
		if (i%12 == 1){
			Feb = Feb + ftr_snl_data[i][1];
			}
		if (i%12 == 2){
			Mar = Mar + ftr_snl_data[i][1];
			}
		if (i%12 == 3){
			Apr = Apr + ftr_snl_data[i][1];
			}
		if (i%12 == 4){
			May = May + ftr_snl_data[i][1];
			}
		if (i%12 == 5){
			Jun = Jun + ftr_snl_data[i][1];
			}
		if (i%12 == 6){
			Jul = Jul + ftr_snl_data[i][1];
			}
		if (i%12 == 7){
			Aug = Aug + ftr_snl_data[i][1];
			}
		if (i%12 == 8){
			Sep = Sep + ftr_snl_data[i][1];
			}
		if (i%12 == 9){
			Oct = Oct + ftr_snl_data[i][1];
			}
		if (i%12 == 10){
			Nov = Nov + ftr_snl_data[i][1];
			}
		if (i%12 == 11){
			Dec = Dec + ftr_snl_data[i][1];
			}
		}
		
		data = [Jan/11, Feb/11, Mar/11, Apr/11, May/11, Jun/11, Jul/11, Aug/11, Sep/11, Oct/11, Nov/11, Dec/11];
		return data;

	
}

var ftr_snl_data_ttl_avg = getFutureSeasonalTotalAverageData();



function getFutureSeasonalLastThreeYearsData(){
	
	var data = new Array;
	var Jan = 0;
	var Feb = 0;
	var Mar = 0;
	var Apr = 0;
	var May = 0;
	var Jun = 0;
	var Jul = 0;
	var Aug = 0;
	var Sep = 0;
	var Oct = 0;
	var Nov = 0;
	var Dec = 0;
	
	for(i=96; i<ftr_snl_data.length; i++){
		if (i%12 == 0){
			Jan = Jan + ftr_snl_data[i][1];
			}
		if (i%12 == 1){
			Feb = Feb + ftr_snl_data[i][1];
			}
		if (i%12 == 2){
			Mar = Mar + ftr_snl_data[i][1];
			}
		if (i%12 == 3){
			Apr = Apr + ftr_snl_data[i][1];
			}
		if (i%12 == 4){
			May = May + ftr_snl_data[i][1];
			}
		if (i%12 == 5){
			Jun = Jun + ftr_snl_data[i][1];
			}
		if (i%12 == 6){
			Jul = Jul + ftr_snl_data[i][1];
			}
		if (i%12 == 7){
			Aug = Aug + ftr_snl_data[i][1];
			}
		if (i%12 == 8){
			Sep = Sep + ftr_snl_data[i][1];
			}
		if (i%12 == 9){
			Oct = Oct + ftr_snl_data[i][1];
			}
		if (i%12 == 10){
			Nov = Nov + ftr_snl_data[i][1];
			}
		if (i%12 == 11){
			Dec = Dec + ftr_snl_data[i][1];
			}
		}
		
		data = [Jan/3, Feb/3, Mar/3, Apr/3, May/3, Jun/3, Jul/3, Aug/3, Sep/3, Oct/3, Nov/3, Dec/3];
		return data;
}

var ftr_snl_data_lst_three_years = getFutureSeasonalLastThreeYearsData();


	
	
////// GRAPHS and TABLES ______________________________________________________________
	



function drawAllTheYearsChart() {
				
			var data = new google.visualization.DataTable();
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
			
			var options = {
				'title':'Passenger Volume per year (2004-2014)',
				'vAxis': {format:'decimal'},
				'width' : 1000,
				'height' : 750,
				'chartArea.width' : 700,
				'chartArea.height' : 500,
			};

			
			
			
			
			
			var chart = new google.charts.Line(document.getElementById('All_the_years_chart'));
			chart.draw(data, options);
			
			drawAllTheYearsTable(data);
			document.getElementById("up-butt").disabled = true;
			document.getElementById("down-butt").disabled = true;
			
}
			
function drawAllTheYearsTable(data) {
	var table = new google.visualization.Table(document.getElementById('all-year-table'));
	var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
	for (var col = 1; col < 12; col++) {
		formatter.format(data, col);	
	}
    table.draw(data, {showRowNumber: true});
    $('#all-year-table-wrap').hide();
    google.visualization.events.addListener(table, 'select', selectHandler);
}

function drawChronTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var col = 1; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('chron-table'));

    table.draw(data2, {showRowNumber: true});
    $('#chron-table-wrap').hide();
}

function drawIndexTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###.###'});
		formatter.format(data, 1);
	for (var col = 1; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('index-table'));

    table.draw(data2, {showRowNumber: true});
    $('#index-table-wrap').hide();
}

function drawYoYTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
	var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
	formatter.format(data, 1);
	for (var col = 1; col < 11; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}

	var table = new google.visualization.Table(document.getElementById('yoy-table'));

    table.draw(data2, {showRowNumber: true});
    $('#yoy-table-wrap').hide();
}

function selectHandler() {
	if (this.getSelection()) {
		document.getElementById("up-butt").disabled = false;
		document.getElementById("down-butt").disabled = false;	
	} else {
		document.getElementById("up-butt").disabled = true;
		document.getElementById("down-butt").disabled = true;
	}	
}
			
function attachHandlers() {
	$('#generator').click(function() {
		$('#graph-choices').toggle("slow");
	});
	
	$('input:checkbox').change(function() {
		var str = '#' + $(this).val();
		if ($(this).prop("checked")) {
			$(str).show();
			chooseDraw($(this).val());
		} else {
			$(str).hide();
		}
	});

	$("#tab-toggle-all").click(function(){
		$('#all-year-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-chron").click(function(){
		$('#chron-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-index").click(function(){
		$('#index-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-yoy").click(function(){
		$('#yoy-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mom").click(function(){
		$('#mom-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-qoq").click(function(){
		$('#qoq-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mav").click(function(){
		$('#mav-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mav-yoy").click(function(){
		$('#mav-yoy-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mth").click(function(){
		$('#mth-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mom-mth").click(function(){
		$('#mom-mth-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-imptot").click(function(){
		$('#imptot-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-imp3").click(function(){
		$('#imp3-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-tot-fut").click(function(){
		$('#tot-fut-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-3fut").click(function(){
		$('#3fut-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mom-past").click(function(){
		$('#mom-past-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-3mom").click(function(){
		$('#3mom-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-mom-fut").click(function(){
		$('#mom-fut-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-3mom-fut").click(function(){
		$('#3mom-fut-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-3mav12").click(function(){
		$('#3mav12-table-wrap').toggle("slow");
	});
	
	$("#tab-toggle-yoy3mav12").click(function(){
		$('#yoy3mav12-table-wrap').toggle("slow");
	});
	
	$('#airline').change(function(){
		if ($('#airline').val() == 'easyjet') {
			$('#easyjet').show();
			$('#westjet').hide();
			$('#klm').hide();
		}
		else if ($('#airline').val() == 'westjet') {
			$('#easyjet').hide();
			$('#westjet').show();
			$('#klm').hide();
		} else if ($('#airline').val() == 'klm') {
			$('#easyjet').hide();
			$('#westjet').hide();
			$('#klm').show();
		}
	});
}

function drawChronologyChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year")
	data.addColumn('number', "Total Passenger Volume (2004-2014)")	
	data.addRows(data_set);
	
	var options = {'title':'Total Passenger Volume 2004-2014',
		'vAxis' : {format: 'decimal'},
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			
			var chart = new google.charts.Line(document.getElementById('Chronology_chart'));
			chart.draw(data, options);
			drawChronTable(data);

	
	
}

function drawIndexChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', 'Indexed Passenger Volume (2004-2014)');
	var row_data = new Array();
	var first_term = data_set[0][1];
	for (i=0; i<data_set.length; i++){
		row_data[row_data.length] = [data_set[i][0], (data_set[i][1]/first_term)*100];
	}
	data.addRows(row_data);
	
	var options = {'title':'Total Passenger Index 2004-2014',
		'vAxis' : {format: 'short'},
		'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('Index_chart'));
			chart.draw(data, options);
			drawIndexTable(data);
}

function drawYOYChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', 'YoY trend from Janury 2004');
	var row_data = new Array();
	
	for (i=0, j=12; i<data_set.length-12, j<data_set.length; i++, j++){
		row_data[row_data.length] = [data_set[j][0], (data_set[j][1]/data_set[i][1])-1];
		
	}
	
	data.addRows(row_data);
	
	var options = {'title':'Passenger Year on Year 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('YoY_chart'));
			chart.draw(data, options);
			drawYoYTable(data);
}


function drawMOMChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', 'MoM 2004-2014');
	var row_data = new Array();
	
	for (i=0; i<data_set.length-1; i++){
		row_data[row_data.length] = [data_set[i+1][0], (data_set[i+1][1]/data_set[i][1])-1];
		
	}
	
	data.addRows(row_data);
	
	var options = {'title':'Passenger Month on Month 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('MoM_chart'));
			chart.draw(data, options);
			drawMoMTable(data);
}

function drawQOQChart(){
	
var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', 'QoQ trend 2004-2014');
	var row_data = new Array();
	var Q1; 
	var Q2;
	var QoQ;
	
	
	for (i=0; i<data_set.length-5; i++){
		
		Q1 = (data_set[i][1] + data_set[i+1][1] + data_set[i+2][1])/3;
		Q2 = (data_set[i+3][1] + data_set[i+4][1] + data_set[i+5][1])/3;
		QoQ = Q2/Q1 - 1;
		
		row_data[row_data.length] = [data_set[i+5][0], QoQ];
	}
	

	data.addRows(row_data);
	
	var options = {'title':'Passenger Quarter on Quarter 2004-2014',
		'height' : 750,
		'width' : 1000,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('QoQ_chart'));
			chart.draw(data, options);
			drawQOQTable(data);
			
			}
			
function drawQOQTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
	var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
	formatter.format(data, 1);
	for (var row = 5; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-5,1));
	}
	for (var col = 2; col < 11; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-5+row,1));
		}
	}

	var table = new google.visualization.Table(document.getElementById('qoq-table'));

    table.draw(data2, {showRowNumber: true});
    $('#qoq-table-wrap').hide();
}
			
			
function draw12MTHRollingChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', '12 Month Rolling 2004-2014');
	var row_data = new Array();
	
	
	
	for (i=0; i<data_set.length-12; i++){
		
		row_data[row_data.length] = [data_set[i+12][0], (data_set[i+1][1] + data_set[i+2][1] + data_set[i+3][1] + 
										data_set[i+4][1] + data_set[i+5][1] + data_set[i+6][1] + data_set[i+7][1] + data_set[i+8][1] + data_set[i+9][1] + data_set[i+10][1] + data_set[i+11][1] + data_set[i+12][1])];
	}
	
	data.addRows(row_data);
	
	var options = {'title':'12 Month Rolling 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('12_mth_rolling_chart'));
			chart.draw(data, options);
			draw12MTHRollingTable(data);
}	

function draw12MTHRollingTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
	var formatter = new google.visualization.NumberFormat(
		{pattern:'#,###'});
	formatter.format(data, 1);
	for (var col = 1; col < 11; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}


	var table = new google.visualization.Table(document.getElementById('mth-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mth-table-wrap').hide();
}
	
function drawMOM12MTHRollingChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', 'MoM for the 12 Month Rolling 2004-2014');
	var twelve_mth_data = new Array();
	
	
	
	for (i=0; i<data_set.length-12; i++){
		
		twelve_mth_data[twelve_mth_data.length] = [data_set[i+12][0], (data_set[i+1][1] + data_set[i+2][1] + data_set[i+3][1] + 
										data_set[i+4][1] + data_set[i+5][1] + data_set[i+6][1] + data_set[i+7][1] + data_set[i+8][1] + data_set[i+9][1] + data_set[i+10][1] + data_set[i+11][1] + data_set[i+12][1])];
	}
	 var row_data = new Array();
	
	for (i=0; i<twelve_mth_data.length-1; i++){
		row_data[row_data.length] = [twelve_mth_data[i+1][0], (twelve_mth_data[i+1][1]/twelve_mth_data[i][1])-1];
		
	}
	
	
	
	data.addRows(row_data);
	
	var options = {'title':'MoM for the 12 Month Rolling 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('mom_12_mth_rolling_chart'));
			chart.draw(data, options);
	drawMOM12MTHRollingTable(data);
	
	
}

function drawMOM12MTHRollingTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
	var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
	formatter.format(data, 1);
	for (var row = 1; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-1,1));
	}
	for (var col = 2; col < 11; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-1+row,1));
		}
	}


	var table = new google.visualization.Table(document.getElementById('mom-mth-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mom-mth-table-wrap').hide();
}	

function draw3MAVChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', '3MAV 2004-2014');
	
	 var row_data = new Array();
	
	for (i=0; i<data_set.length-2; i++){
		row_data[row_data.length] = [data_set[i+2][0], (data_set[i][1] + data_set[i+1][1] + data_set[i+2][1])/3];
		
	}
	
	
	
	data.addRows(row_data);
	
	var options = {'title':'3MAV 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('3MAV_chart'));
			chart.draw(data, options);
	
	
	draw3MAVTable(data);

	
}	

function draw3MAVTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var row = 2; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-2,1));
	}
	for (var col = 2; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-2+row,1));
		}
	}


	var table = new google.visualization.Table(document.getElementById('mav-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mav-table-wrap').hide();
}

function drawMoMTable(data) {
		var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
		formatter.format(data, 1);
	for (var row = 1; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-1,1));
	}
	for (var col = 2; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-1+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('mom-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mom-table-wrap').hide();
}			


function draw3MAVYOYChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', 'YoY for the 3MAV 2004-2014');
	
	 var three_MAV_data = new Array();
	
	for (i=0; i<data_set.length-2; i++){
		three_MAV_data[three_MAV_data.length] = [data_set[i+2][0], (data_set[i][1] + data_set[i+1][1] + data_set[i+2][1])/3];
		
	}
	
	var row_data = new Array;
	
	for (i=0, j=12; i<three_MAV_data.length-12, j<three_MAV_data.length; i++, j++){
		row_data[row_data.length] = [three_MAV_data[j][0], (three_MAV_data[j][1]/three_MAV_data[i][1])-1];
	
	}
	
	data.addRows(row_data);
	
	var options = {'title':'3MAV 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};

			var chart = new google.charts.Line(document.getElementById('3MAV_YOY_chart'));
			chart.draw(data, options);
			draw3MAVYOYTable(data);
	
}



function draw3MAVYOYTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
	var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'}); 
	formatter.format(data, 1);
	for (var row = 2; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-2,1));
	}
	for (var col = 2; col < 11; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-2+row,1));
		}
	}

	var table = new google.visualization.Table(document.getElementById('mav-yoy-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mav-yoy-table-wrap').hide();
}

function drawImpliedFullYearBKWRDTotalAvgChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var row_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = past_snl_data_ttl_avg[0];
				}
				else if (i%12 == 1){
					average = past_snl_data_ttl_avg[1];
				}
				else if (i%12 == 2){
					average = past_snl_data_ttl_avg[2];
				}
				else if (i%12 == 3){
					average = past_snl_data_ttl_avg[3];
				}
				else if (i%12 == 4){
					average = past_snl_data_ttl_avg[4];
				}
				else if (i%12 == 5){
					average = past_snl_data_ttl_avg[5];
				}
				else if (i%12 == 6){
					average = past_snl_data_ttl_avg[6];
				}
				else if (i%12 == 7){
					average = past_snl_data_ttl_avg[7];
				}
				else if (i%12 == 8){
					average = past_snl_data_ttl_avg[8];
				}
				else if (i%12 == 9){
					average = past_snl_data_ttl_avg[9];
				}
				else if (i%12 == 10){
					average = past_snl_data_ttl_avg[10];
				}
				else if (i%12 == 11){
					average = past_snl_data_ttl_avg[11];
				}
			
		
		row_data[row_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	data.addRows(row_data);
	
	var options = {'title':' 2004-2014',
	'width' : 1000,
                     'height' : 750,
				'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};

			var chart = new google.charts.Line(document.getElementById('Implied_Full_Year_BKWRD_Total_Avg_Chart'));
			chart.draw(data, options);
			drawImpliedFullYearBKWRDTotalAvgTable(data);
	
}

function drawImpliedFullYearBKWRDTotalAvgTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var col = 1; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('imptot-table'));

    table.draw(data2, {showRowNumber: true});
    $('#imptot-table-wrap').hide();

}

function drawImpliedFullYearBKWRDLastThreeYearsAvgChart(){
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var row_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = past_snl_data_lst_three_years[0];
				}
				else if (i%12 == 1){
					average = past_snl_data_lst_three_years[1];
				}
				else if (i%12 == 2){
					average = past_snl_data_lst_three_years[2];
				}
				else if (i%12 == 3){
					average = past_snl_data_lst_three_years[3];
				}
				else if (i%12 == 4){
					average = past_snl_data_lst_three_years[4];
				}
				else if (i%12 == 5){
					average = past_snl_data_lst_three_years[5];
				}
				else if (i%12 == 6){
					average = past_snl_data_lst_three_years[6];
				}
				else if (i%12 == 7){
					average = past_snl_data_lst_three_years[7];
				}
				else if (i%12 == 8){
					average = past_snl_data_lst_three_years[8];
				}
				else if (i%12 == 9){
					average = past_snl_data_lst_three_years[9];
				}
				else if (i%12 == 10){
					average = past_snl_data_lst_three_years[10];
				}
				else if (i%12 == 11){
					average = past_snl_data_lst_three_years[11];
				}
			
		
		row_data[row_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	data.addRows(row_data);
	

	

	var options = {'title':'3MAV 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};


			var chart = new google.charts.Line(document.getElementById('Implied_Full_Year_BKWRD_Last_Three_Years_Avg_Chart'));
			chart.draw(data, options);
			drawImpliedFullYearBKWRDLastThreeYearsAvgTable(data);
			
}

function drawImpliedFullYearBKWRDLastThreeYearsAvgTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var col = 1; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('imp3-table'));

    table.draw(data2, {showRowNumber: true});
    $('#imp3-table-wrap').hide();

}

function drawImpliedFullYearFRWRDTotalAvgChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var row_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = ftr_snl_data_ttl_avg[0];
				}
				else if (i%12 == 1){
					average = ftr_snl_data_ttl_avg[1];
				}
				else if (i%12 == 2){
					average = ftr_snl_data_ttl_avg[2];
				}
				else if (i%12 == 3){
					average = ftr_snl_data_ttl_avg[3];
				}
				else if (i%12 == 4){
					average = ftr_snl_data_ttl_avg[4];
				}
				else if (i%12 == 5){
					average = ftr_snl_data_ttl_avg[5];
				}
				else if (i%12 == 6){
					average = ftr_snl_data_ttl_avg[6];
				}
				else if (i%12 == 7){
					average = ftr_snl_data_ttl_avg[7];
				}
				else if (i%12 == 8){
					average = ftr_snl_data_ttl_avg[8];
				}
				else if (i%12 == 9){
					average = ftr_snl_data_ttl_avg[9];
				}
				else if (i%12 == 10){
					average = ftr_snl_data_ttl_avg[10];
				}
				else if (i%12 == 11){
					average = ftr_snl_data_ttl_avg[11];
				}
			
		
		row_data[row_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	data.addRows(row_data);
	
	var options = {'title':' 2004-2014',
	'width' : 1000,
                     'height' : 750,
				'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};

			var chart = new google.charts.Line(document.getElementById('Implied_Full_Year_FRWRD_Total_Avg_Chart'));
			chart.draw(data, options);
			drawImpliedFullYearFRWRDTotalAvgTable(data);

}

function drawImpliedFullYearFRWRDTotalAvgTable(data) {
		var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var col = 1; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('tot-fut-table'));

    table.draw(data2, {showRowNumber: true});
    $('#tot-fut-table-wrap').hide();
}

function drawImpliedFullYearFRWRDLastThreeYearsAvgChart(){
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var row_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = ftr_snl_data_lst_three_years[0];
				}
				else if (i%12 == 1){
					average = ftr_snl_data_lst_three_years[1];
				}
				else if (i%12 == 2){
					average = ftr_snl_data_lst_three_years[2];
				}
				else if (i%12 == 3){
					average = ftr_snl_data_lst_three_years[3];
				}
				else if (i%12 == 4){
					average = ftr_snl_data_lst_three_years[4];
				}
				else if (i%12 == 5){
					average = ftr_snl_data_lst_three_years[5];
				}
				else if (i%12 == 6){
					average = ftr_snl_data_lst_three_years[6];
				}
				else if (i%12 == 7){
					average = ftr_snl_data_lst_three_years[7];
				}
				else if (i%12 == 8){
					average = ftr_snl_data_lst_three_years[8];
				}
				else if (i%12 == 9){
					average = ftr_snl_data_lst_three_years[9];
				}
				else if (i%12 == 10){
					average = ftr_snl_data_lst_three_years[10];
				}
				else if (i%12 == 11){
					average = ftr_snl_data_lst_three_years[11];
				}
			
		
		row_data[row_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	data.addRows(row_data);
	

	

	var options = {'title':'3MAV 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};


			var chart = new google.charts.Line(document.getElementById('Implied_Full_Year_FRWRD_Last_Three_Years_Avg_Chart'));
			chart.draw(data, options);
			drawImpliedFullYearFRWRDLastThreeYearsAvgTable(data);
}

function drawImpliedFullYearFRWRDLastThreeYearsAvgTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var col = 1; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('3fut-table'));

    table.draw(data2, {showRowNumber: true});
    $('#3fut-table-wrap').hide();
}

function drawMOMImpliedFullYearBKWRDTotalAvgChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var average_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = past_snl_data_ttl_avg[0];
				}
				else if (i%12 == 1){
					average = past_snl_data_ttl_avg[1];
				}
				else if (i%12 == 2){
					average = past_snl_data_ttl_avg[2];
				}
				else if (i%12 == 3){
					average = past_snl_data_ttl_avg[3];
				}
				else if (i%12 == 4){
					average = past_snl_data_ttl_avg[4];
				}
				else if (i%12 == 5){
					average = past_snl_data_ttl_avg[5];
				}
				else if (i%12 == 6){
					average = past_snl_data_ttl_avg[6];
				}
				else if (i%12 == 7){
					average = past_snl_data_ttl_avg[7];
				}
				else if (i%12 == 8){
					average = past_snl_data_ttl_avg[8];
				}
				else if (i%12 == 9){
					average = past_snl_data_ttl_avg[9];
				}
				else if (i%12 == 10){
					average = past_snl_data_ttl_avg[10];
				}
				else if (i%12 == 11){
					average = past_snl_data_ttl_avg[11];
				}
			
		
		average_data[average_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	var row_data = new Array();
	
	for (i=0; i<average_data.length-1; i++){
		row_data[row_data.length] = [average_data[i+1][0], (average_data[i+1][1]/average_data[i][1])-1];
		
	}
	
	data.addRows(row_data);
	
	
	
	var options = {'title':' 2004-2014',
	'width' : 1000,
                     'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};

			var chart = new google.charts.Line(document.getElementById('MoM_Implied_Full_Year_BKWRD_Total_Avg_Chart'));
			chart.draw(data, options);
	
			drawMOMImpliedFullYearBKWRDTotalAvgTable(data);
	
}

function drawMOMImpliedFullYearBKWRDTotalAvgTable(data) {
		var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
		formatter.format(data, 1);
	for (var row = 1; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-1,1));
	}
	for (var col = 2; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-1+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('mom-past-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mom-past-table-wrap').hide();
}

function drawMOMImpliedFullYearBKWRDLastThreeYearsAvgChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var average_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = past_snl_data_lst_three_years[0];
				}
				else if (i%12 == 1){
					average = past_snl_data_lst_three_years[1];
				}
				else if (i%12 == 2){
					average = past_snl_data_lst_three_years[2];
				}
				else if (i%12 == 3){
					average = past_snl_data_lst_three_years[3];
				}
				else if (i%12 == 4){
					average = past_snl_data_lst_three_years[4];
				}
				else if (i%12 == 5){
					average = past_snl_data_lst_three_years[5];
				}
				else if (i%12 == 6){
					average = past_snl_data_lst_three_years[6];
				}
				else if (i%12 == 7){
					average = past_snl_data_lst_three_years[7];
				}
				else if (i%12 == 8){
					average = past_snl_data_lst_three_years[8];
				}
				else if (i%12 == 9){
					average = past_snl_data_lst_three_years[9];
				}
				else if (i%12 == 10){
					average = past_snl_data_lst_three_years[10];
				}
				else if (i%12 == 11){
					average = past_snl_data_lst_three_years[11];
				}
			
		
		average_data[average_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	var row_data = new Array();
	
	for (i=0; i<average_data.length-1; i++){
		row_data[row_data.length] = [average_data[i+1][0], (average_data[i+1][1]/average_data[i][1])-1];
		
	}
	
	data.addRows(row_data);
	

	

	var options = {'title':'3MAV 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};


			var chart = new google.charts.Line(document.getElementById('MoM_Implied_Full_Year_BKWRD_Last_Three_Years_Avg_Chart'));
			chart.draw(data, options);
	
			drawMOMImpliedFullYearBKWRDLastThreeYearsAvgTable(data);
}

function drawMOMImpliedFullYearBKWRDLastThreeYearsAvgTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
		formatter.format(data, 1);
	for (var row = 1; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-1,1));
	}
	for (var col = 2; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-1+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('3mom-table'));

    table.draw(data2, {showRowNumber: true});
    $('#3mom-table-wrap').hide();
}

function drawMOMImpliedFullYearFRWRDTotalAvgChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var average_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = ftr_snl_data_ttl_avg[0];
				}
				else if (i%12 == 1){
					average = ftr_snl_data_ttl_avg[1];
				}
				else if (i%12 == 2){
					average = ftr_snl_data_ttl_avg[2];
				}
				else if (i%12 == 3){
					average = ftr_snl_data_ttl_avg[3];
				}
				else if (i%12 == 4){
					average = ftr_snl_data_ttl_avg[4];
				}
				else if (i%12 == 5){
					average = ftr_snl_data_ttl_avg[5];
				}
				else if (i%12 == 6){
					average = ftr_snl_data_ttl_avg[6];
				}
				else if (i%12 == 7){
					average = ftr_snl_data_ttl_avg[7];
				}
				else if (i%12 == 8){
					average = ftr_snl_data_ttl_avg[8];
				}
				else if (i%12 == 9){
					average = ftr_snl_data_ttl_avg[9];
				}
				else if (i%12 == 10){
					average = ftr_snl_data_ttl_avg[10];
				}
				else if (i%12 == 11){
					average = ftr_snl_data_ttl_avg[11];
				}
			
		
		average_data[average_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	var row_data = new Array();
	
	for (i=0; i<average_data.length-1; i++){
		row_data[row_data.length] = [average_data[i+1][0], (average_data[i+1][1]/average_data[i][1])-1];
		
	}
	
	data.addRows(row_data);
	
	var options = {'title':' 2004-2014',
	'width' : 1000,
                     'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};

			var chart = new google.charts.Line(document.getElementById('MoM_Implied_Full_Year_FRWRD_Total_Avg_Chart'));
			chart.draw(data, options);	
			drawMOMImpliedFullYearFRWRDTotalAvgTable(data);
}

function drawMOMImpliedFullYearFRWRDTotalAvgTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
		formatter.format(data, 1);
	for (var row = 1; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-1,1));
	}
	for (var col = 2; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-1+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('mom-fut-table'));

    table.draw(data2, {showRowNumber: true});
    $('#mom-fut-table-wrap').hide();
}

function drawMOMImpliedFullYearFRWRDLastThreeYearsAvgChart(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', ' 2004-2014');
	
	var average_data = new Array;
	
	for (i=0; i<data_set.length; i++){
		
		
		var average; 
		
				if (i%12 == 0){
					average = ftr_snl_data_lst_three_years[0];
				}
				else if (i%12 == 1){
					average = ftr_snl_data_lst_three_years[1];
				}
				else if (i%12 == 2){
					average = ftr_snl_data_lst_three_years[2];
				}
				else if (i%12 == 3){
					average = ftr_snl_data_lst_three_years[3];
				}
				else if (i%12 == 4){
					average = ftr_snl_data_lst_three_years[4];
				}
				else if (i%12 == 5){
					average = ftr_snl_data_lst_three_years[5];
				}
				else if (i%12 == 6){
					average = ftr_snl_data_lst_three_years[6];
				}
				else if (i%12 == 7){
					average = ftr_snl_data_lst_three_years[7];
				}
				else if (i%12 == 8){
					average = ftr_snl_data_lst_three_years[8];
				}
				else if (i%12 == 9){
					average = ftr_snl_data_lst_three_years[9];
				}
				else if (i%12 == 10){
					average = ftr_snl_data_lst_three_years[10];
				}
				else if (i%12 == 11){
					average = ftr_snl_data_lst_three_years[11];
				}
			
		
		average_data[average_data.length] = [data_set[i][0], (data_set[i][1]/average)];
	
	}
	
	var row_data = new Array();
	
	for (i=0; i<average_data.length-1; i++){
		row_data[row_data.length] = [average_data[i+1][0], (average_data[i+1][1]/average_data[i][1])-1];
		
	}
	
	data.addRows(row_data);
	

	

	var options = {'title':'3MAV 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}};


			var chart = new google.charts.Line(document.getElementById('MoM_Implied_Full_Year_FRWRD_Last_Three_Years_Avg_Chart'));
			chart.draw(data, options);
			drawMOMImpliedFullYearFRWRDLastThreeYearsAvgTable(data);
	
	
}

function drawMOMImpliedFullYearFRWRDLastThreeYearsAvgTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2004);
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
		formatter.format(data, 1);
	for (var row = 1; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-1,1));
	}
	for (var col = 2; col < 12; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-1+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('3mom-fut-table'));

    table.draw(data2, {showRowNumber: true});
    $('#3mom-fut-table-wrap').hide();
}

function draw3MAV12MTHRollingChart(){
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', '12 Month Rolling 2004-2014');
	var rolling_data = new Array();
	
	
	
	for (i=0; i<data_set.length-12; i++){
		
		rolling_data[rolling_data.length] = [data_set[i+12][0], (data_set[i+1][1] + data_set[i+2][1] + data_set[i+3][1] + 
										data_set[i+4][1] + data_set[i+5][1] + data_set[i+6][1] + data_set[i+7][1] + data_set[i+8][1] + data_set[i+9][1] + data_set[i+10][1] + data_set[i+11][1] + data_set[i+12][1])];
	}
	
	var row_data = new Array();
	
	for (i=0; i<rolling_data.length-2; i++){
		row_data[row_data.length] = [rolling_data[i+2][0], (rolling_data[i][1] + rolling_data[i+1][1] + rolling_data[i+2][1])/3];
		
	}

	
	
	data.addRows(row_data);
	
	var options = {'title':'12 Month Rolling 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('3MAV_12_mth_rolling_chart'));
			chart.draw(data, options);
			
			draw3MAV12MTHRollingTable(data);
}

function draw3MAV12MTHRollingTable(data) {
	var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2005);
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#,###'});
		formatter.format(data, 1);
	for (var row = 2; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-2,1));
	}
	for (var col = 2; col < 11; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-2+row,1));
		}
	}
	var table = new google.visualization.Table(document.getElementById('3mav12-table'));

    table.draw(data2, {showRowNumber: true});
    $('#3mav12-table-wrap').hide();
}

function draw3MAVYOY12MTHRollingChart(){
	
		var data = new google.visualization.DataTable();
	data.addColumn('date', "Year");
	data.addColumn('number', '12 Month Rolling 2004-2014');
	var rolling_data = new Array();
	
	
	
	for (i=0; i<data_set.length-12; i++){
		
		rolling_data[rolling_data.length] = [data_set[i+12][0], (data_set[i+1][1] + data_set[i+2][1] + data_set[i+3][1] + 
										data_set[i+4][1] + data_set[i+5][1] + data_set[i+6][1] + data_set[i+7][1] + data_set[i+8][1] + data_set[i+9][1] + data_set[i+10][1] + data_set[i+11][1] + data_set[i+12][1])];
	}
	
	var average_data = new Array();
	
	for (i=0; i<rolling_data.length-2; i++){
		average_data[average_data.length] = [rolling_data[i+2][0], (rolling_data[i][1] + rolling_data[i+1][1] + rolling_data[i+2][1])/3];
		
	}

	var row_data = new Array();
	
	for (i=0, j=12; i<average_data.length-12, j<average_data.length; i++, j++){
		row_data[row_data.length] = [average_data[j][0], (average_data[j][1]/average_data[i][1])-1];
		
	}
	
	data.addRows(row_data);
	
	var options = {'title':'12 Month Rolling 2004-2014',
	'width' : 1000,
		'height' : 750,
		'chartArea.width' : 700,
		'chartArea.height' : 500,
		'legend': {position: 'none'}
	};

			var chart = new google.charts.Line(document.getElementById('3MAV_YOY_12_mth_rolling_chart'));
			chart.draw(data, options);
			
			draw3MAVYOY12MTHRollingTable(data);

	
}

function draw3MAVYOY12MTHRollingTable(data) {
		var data2 = new google.visualization.DataTable();
	data2.addColumn('string','Month');
	data2.addColumn('number', 2006);
	data2.addColumn('number', 2007);
	data2.addColumn('number', 2008);
	data2.addColumn('number', 2009);
	data2.addColumn('number', 2010);
	data2.addColumn('number', 2011);
	data2.addColumn('number', 2012);
	data2.addColumn('number', 2013);
	data2.addColumn('number', 2014);
	data2.addRows(12);
	data2.setFormattedValue(0,0,"Jan");
	data2.setFormattedValue(1,0,"Feb");
	data2.setFormattedValue(2,0,"Mar");
	data2.setFormattedValue(3,0,"Apr");
	data2.setFormattedValue(4,0,"May");
	data2.setFormattedValue(5,0,"Jun");
	data2.setFormattedValue(6,0,"Jul");
	data2.setFormattedValue(7,0,"Aug");
	data2.setFormattedValue(8,0,"Sep");
	data2.setFormattedValue(9,0,"Oct");
	data2.setFormattedValue(10,0,"Nov");
	data2.setFormattedValue(11,0,"Dec");
		var formatter = new google.visualization.NumberFormat(
			{pattern:'#.###%'});
		formatter.format(data, 1);
	for (var row = 2; row < 12; row++) {
		data2.setFormattedValue(row,1,data.getFormattedValue(row-2,1));
	}
	for (var col = 2; col < 10; col++) {
		for (var row = 0; row < 12; row++) {
			data2.setFormattedValue(row,col,data.getFormattedValue((col-1)*12-2+row,1));
		}
	}	
	var table = new google.visualization.Table(document.getElementById('yoy3mav12-table'));

    table.draw(data2, {showRowNumber: true});
    $('#yoy3mav12-table-wrap').hide();
}
	

function drawAllAgain() {
	drawChronologyChart();
			drawAllTheYearsChart();
			drawIndexChart();
			drawYOYChart();
			drawMOMChart();
			drawQOQChart();
			draw3MAVChart();
			draw12MTHRollingChart();
			drawMOM12MTHRollingChart();
			draw3MAVYOYChart();
			drawImpliedFullYearBKWRDTotalAvgChart();
			drawImpliedFullYearBKWRDLastThreeYearsAvgChart();
			drawImpliedFullYearFRWRDTotalAvgChart();
			drawImpliedFullYearFRWRDLastThreeYearsAvgChart();
			drawMOMImpliedFullYearBKWRDTotalAvgChart();
			drawMOMImpliedFullYearBKWRDLastThreeYearsAvgChart();
			drawMOMImpliedFullYearFRWRDTotalAvgChart();
			drawMOMImpliedFullYearFRWRDLastThreeYearsAvgChart();
			draw3MAV12MTHRollingChart();
			draw3MAVYOY12MTHRollingChart();
}	
	
function chooseDraw(str) {
	switch (str) {
		case "all-year":
			drawAllTheYearsChart();
			break;
		case "index":
			drawIndexChart();
			break;
		case "yoy":
			drawYOYChart();
			break;
		case "mom":
			drawMOMChart();
			break;
		case "qoq":
			drawQOQChart();
			break;
		case "mav":
			draw3MAVChart();
			break;
		case "mav-yoy":
			draw3MAVYOYChart();
			break;
		case "mth":
			draw12MTHRollingChart();
			break;
		case "mom-mth":
			drawMOM12MTHRollingChart();
			break;
		case "imptot":
			drawImpliedFullYearBKWRDTotalAvgChart();
			break;
		case "imp3":
			drawImpliedFullYearBKWRDLastThreeYearsAvgChart();
			break;
		case "tot-fut":
			drawImpliedFullYearFRWRDTotalAvgChart();
			break;
		case "3fut":
			drawImpliedFullYearFRWRDLastThreeYearsAvgChart();
			break;
		case "mom-past":
			drawMOMImpliedFullYearBKWRDTotalAvgChart();
			break;
		case "3mom":
			drawMOMImpliedFullYearBKWRDLastThreeYearsAvgChart();
			break;
		case "mom-fut":
			drawMOMImpliedFullYearFRWRDTotalAvgChart();
			break;
		case "3mom-fut":
			drawMOMImpliedFullYearFRWRDLastThreeYearsAvgChart();
			break;
		case "3mav12":
			draw3MAV12MTHRollingChart();
			break;
		case "yoy3mav12":
			draw3MAVYOY12MTHRollingChart();
			break;
		default:
			console.log("suckadeek");
	}
}