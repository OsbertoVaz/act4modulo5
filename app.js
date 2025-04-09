document.addEventListener('DOMContentLoaded', function() {
    // 1. Configuración global
    Chart.defaults.font.family = "'Segoe UI', sans-serif";
    Chart.defaults.color = '#333';
    
    // 2. Crear gráficos
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: salesData.labels,
            datasets: [{
                label: 'Ventas Mensuales',
                data: salesData.values,
                backgroundColor: 'rgba(52, 152, 219, 0.8)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 3. Navegación entre pestañas
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            
            // Oculta todas las secciones
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Muestra solo la sección objetivo
            document.getElementById(targetId).classList.add('active');
            
            // Actualiza gráficos al cambiar pestaña
            barChart.update();
        });
    });
});