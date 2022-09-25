import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Your Carbon Emissions During 2022',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Carbon Emissions',
            data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
            borderColor: 'green',
            backgroundColor: 'green',
        }
    ]
}
export default function LineChart() {
  return(
        <Line options={options} data={data} />
  )
}
