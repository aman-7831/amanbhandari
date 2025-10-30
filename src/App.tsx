import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VisualizationsShowcase from './components/VisualizationsShowcase';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <VisualizationsShowcase />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
