$(function() {
	'use strict';
	var ctx3 = document.getElementById('chartline3').getContext('2d');
	var gradient = ctx3.createLinearGradient(0, 0, 0, 250);
	gradient.addColorStop(0, '#15181c');
	gradient.addColorStop(1, '#31a26d');
	new Chart(ctx3, {
		type: 'pie',
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
	/** AREA CHART **/
	var ctx9 = document.getElementById('chartArea1');
	var gradient1= ctx3.createLinearGradient(0, 350, 0, 0);
	gradient1.addColorStop(0, 'rgba(241, 0, 117,0)');
	gradient1.addColorStop(1, 'rgba(241, 0, 117,.5)');
	var gradient2 = ctx3.createLinearGradient(0, 280, 0, 0);
	gradient2.addColorStop(0, 'rgba(86, 70, 255,0)');
	gradient2.addColorStop(1, 'rgba(86, 70, 255,.5)');
	new Chart(ctx9, {
		type: 'line',
		data: {
			labels: ['اسفند', 'بهمن', 'دی', 'آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت','فروردین',],
			datasets: [{
				data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
				borderColor: '#4454c3',
				borderWidth: 1,
				backgroundColor: gradient1
			}, {
				data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
				borderColor: '#f72d66',
				borderWidth: 1,
				backgroundColor: gradient2
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
	/** AREA CHART **/
	var ctx9 = document.getElementById('chartArea2');
	var gradient1 = ctx3.createLinearGradient(0, 350, 10, 0);
	gradient1.addColorStop(0, 'rgba(241, 0, 117,0)');
	gradient1.addColorStop(1, 'rgba(241, 0, 117,.5)');
	var gradient2 = ctx3.createLinearGradient(0, 280, 20, 0);
	gradient2.addColorStop(0, 'rgba(86, 70, 255,0)');
	gradient2.addColorStop(1, 'rgba(86, 70, 255,.5)');
	new Chart(ctx9, {
		type: 'line',
		data: {
			labels: ['مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'],
			datasets: [{
				data: [31, 57, 35, 46, 73, 10, 50],
				borderColor: '#4454c3',
				borderWidth: 1,
				backgroundColor: gradient1
			}, {
				data: [10, 30, 0, 27, 37, 91, 21],
				borderColor: '#f72d66',
				borderWidth: 1,
				backgroundColor: gradient2
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
					ticks: {
						beginAtZero:true ,
						fontSize: 0,
						max: 100,
						fontColor: "#b4b7c5",
					},
					gridLines: {
						color: 'rgba(180, 183, 197, 0.4)'
					}
				}],
				xAxes: [{
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
	/** PIE CHART **/
	var datapie = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
		datasets: [{
			data: [35,24,20,15,8],
			backgroundColor: ['#4454c3', '#f72d66', '#5ed94c', '#45aaf2', '#c344ff', '#f7592d']
		}]
	};
	var optionpie = {
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	};
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