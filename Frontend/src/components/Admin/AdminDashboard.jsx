import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const AdminDashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div style={{ width: '600px', height: '400px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AdminDashboard;
