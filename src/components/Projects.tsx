import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Visualization', 'Predictive Modeling', 'Survey Analysis', 'Feature Engineering'];

  const projects = [
    {
      title: 'Nepal Market Research Dashboard',
      category: 'Visualization',
      description: 'Comprehensive analysis of FMCG, EV, and smartphone market trends in Nepal with interactive dashboards.',
      impact: 'Helped clients identify 25% growth opportunity in EV segment',
      tools: ['Python', 'Tableau', 'SQL'],
      image: '📊',
      github: '#',
      demo: '#',
      features: ['Market Segmentation', 'Consumer Journey Maps', 'Trend Analysis', 'Survey Insights'],
    },
    {
      title: 'Customer Behavior Prediction Model',
      category: 'Predictive Modeling',
      description: 'Built ML model to predict customer churn with 87% accuracy using historical transaction data.',
      impact: 'Reduced customer churn by 15% through proactive retention strategies',
      tools: ['Python', 'Scikit-learn', 'Pandas'],
      image: '🤖',
      github: '#',
      demo: '#',
      features: ['Random Forest', 'Feature Importance', 'Cross-validation', 'ROC Analysis'],
    },
    {
      title: 'E-commerce Sales Analytics',
      category: 'Feature Engineering',
      description: 'Analyzed 2M+ transactions to identify sales patterns and optimize inventory management.',
      impact: 'Improved inventory turnover by 30% and reduced stockouts by 40%',
      tools: ['Python', 'Power BI', 'SQL'],
      image: '🛒',
      github: '#',
      demo: '#',
      features: ['Time Series Analysis', 'Cohort Analysis', 'RFM Segmentation'],
    },
    {
      title: 'Consumer Survey Analysis Platform',
      category: 'Survey Analysis',
      description: 'Analyzed 5000+ survey responses to understand consumer preferences and purchase behavior.',
      impact: 'Generated insights that drove 20% increase in campaign effectiveness',
      tools: ['R', 'Tableau', 'Excel'],
      image: '📋',
      github: '#',
      demo: '#',
      features: ['Sentiment Analysis', 'Response Patterns', 'Demographic Insights'],
    },
    {
      title: 'Healthcare Data Visualization',
      category: 'Visualization',
      description: 'Created interactive dashboards for hospital operations and patient outcome tracking.',
      impact: 'Enabled data-driven decisions that improved patient satisfaction by 25%',
      tools: ['Tableau', 'SQL', 'Python'],
      image: '🏥',
      github: '#',
      demo: '#',
      features: ['Real-time Dashboards', 'KPI Tracking', 'Predictive Analytics'],
    },
    {
      title: 'Financial Risk Assessment',
      category: 'Predictive Modeling',
      description: 'Developed risk scoring model for loan applications using gradient boosting algorithms.',
      impact: 'Reduced default rate by 18% while maintaining approval rates',
      tools: ['Python', 'XGBoost', 'SQL'],
      image: '💰',
      github: '#',
      demo: '#',
      features: ['Credit Scoring', 'Risk Profiling', 'Model Validation'],
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Showcasing data analysis projects with real business impact
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 flex items-center justify-center">
                <span className="text-7xl">{project.image}</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs font-medium whitespace-nowrap ml-2">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
                <div className="bg-primary/5 dark:bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-medium text-primary">Impact:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIdx) => (
                    <span
                      key={toolIdx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
