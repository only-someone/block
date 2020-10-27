$(function () {
	"use strict";
	// chart 1
	var options = {
		series: [{
			name: 'Visitors',
			data: [10, 9, 24, 19, 22, 9, 12, 7]
		}],
		chart: {
			type: 'bar',
			width: 130,
			height: 65,
			sparkline: {
				enabled: true
			},
			stacked: true,
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '25%',
				endingShape: 'rounded'
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			offsetX: 0
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0,
			colors: ['transparent']
		},
		colors: ["#fff"],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
		fill: {
			opacity: 1
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var options = {
		series: [{
			name: 'Customers',
			data: [10, 9, 24, 19, 22, 9, 12, 7]
		}],
		chart: {
			type: 'area',
			width: 130,
			height: 65,
			sparkline: {
				enabled: true
			},
			stacked: true,
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '25%',
				endingShape: 'rounded'
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			offsetX: 0
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			//colors: ['transparent']
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				shadeIntensity: 0.15,
				gradientToColors: ['#fff'],
				type: 'vertical',
				inverseColors: false,
				opacityFrom: 0.1,
				opacityTo: 0.5,
				stops: [0, 50, 65, 91]
			},
		},
		colors: ["#fff"],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart2"), options);
	chart.render();
	// chart 3
	var options = {
		series: [{
			name: 'Orders',
			data: [10, 9, 24, 19, 22, 9, 12, 7]
		}],
		chart: {
			type: 'bar',
			width: 130,
			height: 65,
			sparkline: {
				enabled: true
			},
			stacked: true,
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '25%',
				endingShape: 'rounded'
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			offsetX: 0
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0,
			colors: ['transparent']
		},
		colors: ["#fff"],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart3"), options);
	chart.render();
	// chart 4
	var options = {
		series: [{
			name: 'Sales',
			data: [10, 9, 24, 19, 15, 22, 12, 7]
		}],
		chart: {
			type: 'area',
			width: 130,
			height: 65,
			sparkline: {
				enabled: true
			},
			stacked: true,
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '25%',
				endingShape: 'rounded'
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			offsetX: 0
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			//colors: ['transparent']
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				shadeIntensity: 0.15,
				gradientToColors: ['#fff'],
				type: 'vertical',
				inverseColors: false,
				opacityFrom: 0.1,
				opacityTo: 0.5,
				stops: [0, 50, 65, 91]
			},
		},
		colors: ["#fff"],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	// chart 5
	var options = {
		series: [{
			name: 'Audience',
			data: [427, 613, 901, 257, 505, 414, 671, 160, 440]
		}],
		chart: {
			type: 'line',
			height: 80,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#007bff',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#007bff"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth'
		},
		colors: ["#007bff"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart5"), options);
	chart.render();
	// chart 6
	var options = {
		series: [{
			name: 'Impressions',
			data: [427, 613, 901, 257, 505, 414, 671, 160, 440]
		}],
		chart: {
			type: 'line',
			height: 80,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#12bc90',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#12bc90"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth'
		},
		colors: ["#12bc90"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();
	// chart 7
	var options = {
		series: [{
			name: 'Engagement',
			data: [427, 613, 901, 257, 505, 414, 671, 160, 440]
		}],
		chart: {
			type: 'line',
			height: 80,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#ef2513',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#ef2513"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth'
		},
		colors: ["#ef2513"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			x: {
			  show: false
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart7"), options);
	chart.render();
	// chart 8
	var options = {
		series: [25, 65, 10],
		chart: {
			height: 220,
			type: 'donut',
		},
		legend: {
			position: 'bottom',
			show: false,
		},
		plotOptions: {
			pie: {
				// customScale: 0.8,
				donut: {
					size: '70%'
				}
			}
		},
		colors: ["#dc3545", "#007bff", "#ffc107"],
		dataLabels: {
			enabled: false
		},
		labels: ['Social Media', 'Email', 'Organic'],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart8"), options);
	chart.render();
	// chart 9
	var options = {
		series: [{
			name: 'Visitors',
			data: [427, 613, 901, 257, 505, 414, 671, 160, 440]
		}],
		chart: {
			type: 'bar',
			height: 320,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: false,
				top: 3,
				left: 10,
				blur: 3,
				opacity: 0.10,
				color: '#007bff',
			},
			sparkline: {
				enabled: false
			}
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '70%',
				}
			},
			bar: {
				horizontal: false,
				columnWidth: '35%',
				endingShape: 'rounded'
			},
		},
		markers: {
			size: 0,
			colors: ["#ef2513"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth'
		},
		colors: ["#007bff"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
		fill: {
			opacity: 1
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart9"), options);
	chart.render();
});