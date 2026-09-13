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
import { isAllProjectsRoute } from './utils/projectRoutes.js';

const App = () => {
  const [isAllProjectsPage, setIsAllProjectsPage] = useState(() =>
    isAllProjectsRoute(window.location.pathname, window.location.hash)
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setIsAllProjectsPage(isAllProjectsRoute(window.location.pathname, window.location.hash));
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
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
