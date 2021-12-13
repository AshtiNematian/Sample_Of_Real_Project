$(function() {
	'use strict';
	var ctx6 = document.getElementById('flotBar2');
	var axis_time_x
	var axis_number_y
	var ashtiurl = document.getElementById("ashtiurl").innerHTML;
	$.ajax({
		data: 'GET',
		url: ashtiurl,
		// on success

		success: function (response) {
			axis_time_x = response.axis_time_x;
			axis_number_y = response.axis_number_y;
			new Chart(ctx6, {
				type: 'bar',
				data: {
					labels: axis_time_x,
					datasets: [{
						data: axis_number_y,
						backgroundColor: '#198754',
						borderWidth: 1,
						fill: true
					}]
				},
				options: {
					maintainAspectRatio: false,
					legend: {
						display: false,
						labels: {
							display: false
						}
					},
					scales: {
						yAxes: [{
							stacked: true,
							ticks: {
								beginAtZero: true,
								fontSize: 11,
								fontColor: "#b4b7c5",
							},
							gridLines: {
								color: 'rgba(180, 183, 197, 0.4)'
							}
						}],
						xAxes: [{
							barPercentage: 0.9,
							stacked: true,
							ticks: {
								fontSize: 11,
								fontColor: "#b4b7c5",
							},
							gridLines: {
								color: 'rgba(180, 183, 197, 0.4)'
							}
						}]
					}
				}
			});
		}
	})
});


