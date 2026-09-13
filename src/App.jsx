import { useEffect, useState } from 'react';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import AllProjects from './sections/AllProjects.jsx';
import WorkExperience from './sections/Experience.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

const App = () => {
  const isProjectsPath = (p) => p && p.endsWith('/projects');
  const [isAllProjectsPage, setIsAllProjectsPage] = useState(() => isProjectsPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setIsAllProjectsPage(isProjectsPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (isAllProjectsPage) {
    return (
      <LanguageProvider>
        <AllProjects />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;
