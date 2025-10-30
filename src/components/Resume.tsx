import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading data analytics initiatives and mentoring junior analysts.',
      achievements: [
        'Developed predictive models that increased revenue by 25%',
        'Built automated reporting systems reducing manual work by 40%',
        'Led cross-functional team of 5 analysts',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Market Research Co.',
      period: '2021 - 2023',
      description: 'Conducted market research and consumer behavior analysis.',
      achievements: [
        'Analyzed 10,000+ survey responses for major FMCG brands',
        'Created interactive dashboards used by C-level executives',
        'Improved data quality processes by 35%',
      ],
    },
    {
      title: 'Junior Data Analyst',
      company: 'Analytics Hub',
      period: '2020 - 2021',
      description: 'Performed data cleaning, analysis, and visualization tasks.',
      achievements: [
        'Automated ETL processes saving 15 hours per week',
        'Created 50+ data visualizations for client presentations',
        'Maintained 99% data accuracy rate',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University Name',
      year: '2020',
      details: 'Specialized in Machine Learning and Statistical Analysis',
    },
    {
      degree: 'Bachelor of Science in Statistics',
      institution: 'College Name',
      year: '2018',
      details: 'Graduated with Honors, GPA: 3.8/4.0',
    },
  ];

  const certifications = [
    'Google Data Analytics Professional Certificate',
    'Microsoft Certified: Data Analyst Associate',
    'Tableau Desktop Specialist',
    'Python for Data Science (Coursera)',
    'Advanced SQL for Data Scientists',
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Professional experience and qualifications
          </p>
          <button className="mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
            <Download size={20} />
            Download Resume PDF
          </button>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li
                        key={achIdx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <ul className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
