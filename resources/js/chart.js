let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Saksi', 'Ahli', 'Perlindungan Anak', 'Pelapor'];
let colorHex = ['#FB3640','#EFCA08','#43AA8B', '#253D5B'];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Kasus',
            data: [300, 200, 345, 453],
            backgroundColor: colorHex
        }],
        labels: labels,
        fontSize: 100,
    },
    options: {
        responsive: true
    }
});

let ctx2 = document.getElementById('myChart2').getContext('2d');
let labels2 = ['Saksi', 'Ahli', 'Perlindungan Anak', 'Pelapor'];
let colorHex2 = ['#FB3640','#EFCA08','#43AA8B', '#253D5B'];

let myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Kasus',
            data: [300, 200, 345, 453],
            backgroundColor: colorHex2
        }],
        labels: labels2,
        fontSize: 100,
    },
    options: {
        responsive: true
    }
})