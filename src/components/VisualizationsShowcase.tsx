import { BarChart, LineChart, PieChart, HeatMap } from './Visualizations';

export default function VisualizationsShowcase() {
  const barData = [
    { label: 'FMCG Products', value: 85, color: '#059669' },
    { label: 'EV Scooters', value: 72, color: '#10b981' },
    { label: 'Smartphones', value: 90, color: '#34d399' },
    { label: 'Electronics', value: 68, color: '#6ee7b7' },
  ];

  const lineData = [
    { x: 'Jan', y: 65 },
    { x: 'Feb', y: 72 },
    { x: 'Mar', y: 68 },
    { x: 'Apr', y: 80 },
    { x: 'May', y: 85 },
    { x: 'Jun', y: 92 },
  ];

  const pieData = [
    { label: 'Online', value: 45, color: '#059669' },
    { label: 'Retail', value: 35, color: '#10b981' },
    { label: 'Wholesale', value: 20, color: '#34d399' },
  ];

  const heatMapData = [
    [8, 6, 7, 9, 5],
    [6, 9, 8, 7, 8],
    [7, 8, 9, 6, 7],
    [9, 7, 6, 8, 9],
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Visualizations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Sample visualizations showcasing analytical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Market Penetration by Category
            </h3>
            <BarChart data={barData} />
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Sales Growth Trend
            </h3>
            <LineChart data={lineData} />
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Sales Channel Distribution
            </h3>
            <PieChart data={pieData} />
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Product Correlation Heatmap
            </h3>
            <div className="overflow-x-auto">
              <HeatMap data={heatMapData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
