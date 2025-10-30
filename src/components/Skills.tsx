import { Code2, BarChart3, Database, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 95 },
        { name: 'Excel / Google Sheets', level: 90 },
        { name: 'Jupyter Notebooks', level: 85 },
      ],
    },
    {
      title: 'Visualization Tools',
      icon: BarChart3,
      skills: [
        { name: 'Tableau', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 85 },
        { name: 'Plotly', level: 75 },
      ],
    },
    {
      title: 'Analytical Skills',
      icon: Database,
      skills: [
        { name: 'Exploratory Data Analysis', level: 95 },
        { name: 'Statistical Modeling', level: 85 },
        { name: 'Data Cleaning', level: 90 },
        { name: 'Machine Learning', level: 80 },
        { name: 'A/B Testing', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: MessageSquare,
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Critical Thinking', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Presentation', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Technical proficiencies and analytical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
