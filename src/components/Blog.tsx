import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Nepal Market Trends 2025: Data-Driven Insights on FMCG, EVs, and Mobile Consumers',
      excerpt: 'A comprehensive analysis of emerging market trends in Nepal across FMCG, electric vehicles, and mobile phone segments.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Market Research',
    },
    {
      title: "Understanding Nepal's Consumer Landscape: Market Research Across FMCG, EV Scooters, and Smartphones",
      excerpt: 'Deep dive into consumer behavior patterns and purchasing decisions in Nepal\'s evolving market landscape.',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Consumer Insights',
    },
    {
      title: 'Nepal Consumer Trends Report 2025: Data Insights into FMCG, Tech, and Festive Spending',
      excerpt: 'Exploring seasonal spending patterns and festival-driven consumer behavior in the Nepali market.',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Trend Analysis',
    },
    {
      title: 'Decoding Nepal\'s Consumer Market: Data, Trends, and Purchase Behavior in 2024–2025',
      excerpt: 'Statistical analysis of purchase patterns and market dynamics shaping consumer choices in Nepal.',
      date: '2024-12-20',
      readTime: '9 min read',
      category: 'Data Analysis',
    },
    {
      title: 'Market Pulse Nepal: How Data Reveals Shifting Trends in FMCG, EVs, and Mobile Phones',
      excerpt: 'Using data analytics to uncover emerging trends and market shifts across key consumer sectors.',
      date: '2024-12-15',
      readTime: '6 min read',
      category: 'Visualization',
    },
    {
      title: 'From FMCG to EVs: A Data-Backed Study of Consumer Behavior and Market Shifts in Nepal',
      excerpt: 'Comparative analysis of traditional and emerging markets, highlighting the transition in consumer preferences.',
      date: '2024-12-10',
      readTime: '11 min read',
      category: 'Market Research',
    },
    {
      title: 'Consumer Insights Nepal 2025: Market Research on Tech Adoption and Festive Buying Trends',
      excerpt: 'Analyzing technology adoption rates and festival shopping behaviors through survey data.',
      date: '2024-12-05',
      readTime: '8 min read',
      category: 'Survey Analysis',
    },
    {
      title: 'Nepal\'s Market Evolution: Data-Driven Analysis of FMCG Growth, EV Demand, and Mobile Segments',
      excerpt: 'Tracking market evolution through quantitative analysis and predictive modeling.',
      date: '2024-11-28',
      readTime: '9 min read',
      category: 'Predictive Modeling',
    },
    {
      title: 'The Data Behind Nepal\'s Festive Spending: Understanding Market Trends and Consumer Choices',
      excerpt: 'Statistical breakdown of festive season spending patterns and consumer decision-making processes.',
      date: '2024-11-20',
      readTime: '7 min read',
      category: 'Consumer Insights',
    },
    {
      title: 'Tracking Nepal\'s Market Momentum: A Research-Based Look at FMCG, EV, and Smartphone Sectors',
      excerpt: 'Comprehensive research study examining growth trajectories and market momentum across key sectors.',
      date: '2024-11-15',
      readTime: '10 min read',
      category: 'Market Research',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog & Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Sharing knowledge through data analysis case studies and tutorials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-gray-50 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 flex items-center justify-center">
                <span className="text-6xl">📈</span>
              </div>
              <div className="p-6 space-y-4">
                <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
