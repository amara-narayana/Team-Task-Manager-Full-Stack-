import { useState, useEffect } from 'react';
import { taskService } from '../services';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    overdueTasks: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await taskService.getDashboardStats();
      setStats(data);
    } catch (err) {
      setError('Failed to load dashboard stats');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    { title: 'Total Tasks', value: stats.totalTasks, color: 'bg-blue-500' },
    { title: 'Completed', value: stats.completedTasks, color: 'bg-green-500' },
    { title: 'Pending', value: stats.pendingTasks, color: 'bg-yellow-500' },
    { title: 'Overdue', value: stats.overdueTasks, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-full p-3 mr-4`}>
                  <span className="text-white text-2xl font-bold">{stat.value}</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-gray-800 font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome!</h2>
          <p className="text-gray-600">
            Use the navigation menu to access your tasks and projects. 
            Admins can create projects and assign tasks, while members can view and update their assigned tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
