import { useEffect } from 'react';
import { Chart, BarElement, BarController, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import '../styles/Project.css';
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
    labels: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    datasets: [{
        label: 'Proficiency (%)',
        data: [90, 80, 70, 80, 80, 85, 80],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

function SkillChart() {
    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data,
            options: {
                indexAxis: 'y',
            }
        });
    }, []);

    return <canvas id='myChart' width='200' height='150' aria-label='Skill Proficiency Chart' role='img'></canvas>;
}

export default SkillChart;