// Get the canvas context
const ctx = document.getElementById('myChart').getContext('2d');
        // Define chart data
Chart.register(ChartDataLabels);
const data = {
    labels: ['C', 'PYTHON', 'HTML/CSS', 'JAVASCRIPT', 'LATEX', 'WORDPRESS'],
    datasets: [{
        barPercentage: 0.27,
        data: [45, 70, 39, 20, 50, 10],
        backgroundColor: [
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 255, 0, 0.7)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)'
        ],
        borderWidth: 1
    }]
};      // Define chart configuration
const config = {
    type: 'bar',
    data: data,
    options: {
        indexAxis:'y',
        scales: {
            x: {             
                beginAtZero: true,
                border:{display: false,
                },
                grid:{
                    drawOnChartArea:false,
                },
                min:0,
                max:100,
                ticks:{
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks:{
                    font:{
                        weight:"bold",
                    },
                    color:"white",
                },
                border:{
                    display: false,
                },
                grid:{
                    drawOnChartArea:false,
                },
            },
        },
        plugins:{
            legend:{
                display:false,
            },
            tooltip:{
                enabled: false,
            },
            datalabels:{
                anchor:"end",
                align:"end",
                color:"white",
                font: {
                    weight: "bold",
                },
                formatter:function(value, context){
                    return value + "%";
                }
            },
        },
    },  
};

Chart.defaults.font.size = 16;

// Create the chart
const myChart = new Chart(ctx, config)