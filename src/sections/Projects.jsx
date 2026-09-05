import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

import { myProjects } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import getTagIcon from '../utils/getTagIcon.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { t } = useLanguage();

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  const projectCopy = t.projectCopies[currentProject.sourceTitle || currentProject.title] || {};

  return (
    <section className="c-space my-20" id="projects">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <p className="head-text">{t.projectsTitle}</p>
        <a href="/projects" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <span>{t.viewAllProjects}</span>
        </a>
      </div>

      <div className="grid grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0 pointer-events-none">
            <img src={currentProject.spotlight.startsWith('/') ? `${import.meta.env.BASE_URL}${currentProject.spotlight.slice(1)}` : currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl pointer-events-none" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{projectCopy.title || currentProject.title}</p>

            <p className="animatedText">{projectCopy.desc || currentProject.desc}</p>
            <p className="animatedText">{projectCopy.subdesc || currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center flex-wrap gap-3">
              {currentProject.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="tech-logo flex items-center justify-center w-auto h-6 min-h-10 max-w-full px-2 py-1 rounded-md text-center text-xs font-medium text-neutral-300 shadow-sm"
                  title={tag.name}
                  aria-label={tag.name}
                >
                  <img src={getTagIcon(tag)} alt={tag.name} className="w-5 h-5 object-contain" />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 z-10"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>{t.repository}</p>
              <img src={`${import.meta.env.BASE_URL}assets/arrow-up.png`} alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;