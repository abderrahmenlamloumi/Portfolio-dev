import { myProjects } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import getTagIcon from '../utils/getTagIcon.js';

const AllProjects = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-5 sm:px-10 py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              window.location.assign('/');
            }}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8">
            <span aria-hidden="true">&larr;</span>
            <span>{t.allProjects.back}</span>
          </a>
          <p className="head-text">{t.allProjects.title}</p>
          <p className="text-neutral-400 mt-3 max-w-2xl">{t.allProjects.subtitle}</p>
        </div>
        <span className="text-neutral-500 text-sm">{myProjects.length} {t.allProjects.count}</span>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {myProjects.map((project) => {
          const projectCopy = t.projectCopies[project.sourceTitle || project.title] || {};

          return (
            <article key={project.title} className="flex flex-col bg-black-200 border border-black-300 rounded-lg overflow-hidden hover:border-neutral-600 transition-colors">
              <div className="h-2" style={{ background: project.logoStyle.background || project.logoStyle.backgroundColor }} />
              <div className="flex flex-col gap-5 p-6 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-neutral-500">{String(myProjects.indexOf(project) + 1).padStart(2, '0')}</span>
                </div>

                <div className="flex-1">
                  <h2 className="text-white text-xl font-semibold">{projectCopy.title || project.title}</h2>
                  <p className="text-neutral-400 mt-3 text-sm leading-6">{projectCopy.desc || project.desc}</p>
                  <p className="text-neutral-500 mt-3 text-sm leading-6">{projectCopy.subdesc || project.subdesc}</p>
                </div>

                <div className="flex items-end justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-2.5 py-1 rounded-md bg-white/10 text-xs text-neutral-300 whitespace-nowrap max-w-full truncate inline-flex items-center gap-2"
                      >
                        <img src={getTagIcon(tag)} alt={tag.name} className="w-4 h-4" />
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-end gap-x-4 gap-y-2">
                    <a href={project.href} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" aria-label={`${t.repository}: ${projectCopy.title || project.title}`}>
                      <span>{t.repository}</span>
                      <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>
                    {project.docs && (
                      <a href={project.docs} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" aria-label={`${t.documentation}: ${projectCopy.title || project.title}`}>
                        <span>{t.documentation}</span>
                        <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default AllProjects;