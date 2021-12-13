$(function(e){
	/* leads1 */
    var ctx = document.getElementById('leads1');
	var solving_mistakes
	var solving_labels
	var myurl = document.getElementById("myurl").innerHTML;
	$.ajax({
		data:'GET',
		url: myurl,
		// on success

		success: function (response) {
			solving_mistakes = response.y_data;
			solving_labels = response.x_data;

		var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: solving_labels,
			type: 'line',
			datasets: [{
				label: "ثانیه",
				data:solving_mistakes ,
				backgroundColor: 'rgba(68, 84, 195,0.1)',
				borderColor: 'rgba(68, 84, 195,0.9)',
				borderWidth: 5,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgba(68, 84, 195,0.8)',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(0,0,0,0.9)',
				bodyFontColor: 'rgba(0,0,0,0.9)',
				backgroundColor: '#fff',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 0,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
			scales: {
				xAxes: [{
					display: true,
					ticks: {
						display: true,
						fontColor: "#8e9cad",
						fontSize: "13",
					},
					scaleLabel: {
						display: true,
						labelString: 'ژمان',
						fontSize: "15",
						fontColor: "#8e9cad",
					},
					gridLines: {
						display: true,
						drawBorder: false,
						color: 'rgba(193, 184, 184,0.1)',
						zeroLineColor: '#000'
					}
				}],
				yAxes: [{
					display: true,
					ticks: {
						display: true,
						fontColor: "#8e9cad",
						color: 'rgba(193, 184, 184,0.1)',
						fontSize: "13",
						callback: function(value, index, values) {
							return   value;
						},
						maxRotation: 0,
						stepSize: 200,
						min: -310,
						max: 4000
					},
					scaleLabel: {
						display: true,
						fontColor: "#8e9cad",
						fontSize: "15",
					},
					gridLines: {
						display: true,
						drawBorder: false,
						color: 'rgba(193, 184, 184,0)',
						zeroLineColor: 'rgba(193, 184, 184,0.1)'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
		})
		}
	});
	});
