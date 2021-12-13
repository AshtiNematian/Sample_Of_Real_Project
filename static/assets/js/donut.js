$(function() {
	'use strict';
	var ctx3 = document.getElementById('chartdonut').getContext('2d');
	var gradient = ctx3.createLinearGradient(0, 0, 0, 250);
	gradient.addColorStop(0, '#15181c');
	gradient.addColorStop(1, '#31a26d');
	new Chart(ctx3, {
		type: 'doughnut',
		data: {
			labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
			datasets: [{
				label: "خطاهای تولید شده",
				data: [14, 12, 34, 25, 24, 20],
				backgroundColor: ['#4454c3', '#f72d66', '#5ed94c', '#45aaf2', '#c344ff', '#f7592d']
			}]
		},
		options: {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false,
				labels: {
					display: false
				}
			},
			hover: {mode: null},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize: 10,
						max: 80,
						fontColor: "#b4b7c5",
					},
					gridLines: {
						color: 'rgba(180, 183, 197, 0.4)'
					}
				}],
				xAxes: [{
					barPercentage: 0.6,
					ticks: {
						beginAtZero: true,
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
	// For a doughnut chart
	var ctx6 = document.getElementById('chartPie');
	var myPieChart6 = new Chart(ctx6, {
		type: 'doughnut',
		data: datapie,
		options: optionpie
	});
	// For a pie chart
	var ctx7 = document.getElementById('chartDonut');
	var myPieChart7 = new Chart(ctx7, {
		type: 'pie',
		data: datapie,
		options: optionpie
	});
});