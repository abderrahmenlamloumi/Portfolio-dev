import { education, hackathons, workExperiences } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';

const WorkExperience = () => {
  const { t } = useLanguage();

  const renderItems = (items) => {
    /*
     * Remove duplicate experiences.
     *
     * We compare the actual content of each experience
     * instead of relying only on id/name.
     */
    const uniqueItems = items.filter((item, index, source) => {
      const normalize = (value) =>
        String(value || '')
          .toLowerCase()
          .trim()
          .replace(/\s+/g, ' ');

      const itemSignature = [
        normalize(item.company),
        normalize(item.pos),
        normalize(item.duration),
        normalize(item.title),
      ].join('|');

      return (
        index ===
        source.findIndex((candidate) => {
          const candidateSignature = [
            normalize(candidate.company),
            normalize(candidate.pos),
            normalize(candidate.duration),
            normalize(candidate.title),
          ].join('|');

          return candidateSignature === itemSignature;
        })
      );
    });

    /*
     * Group experiences by company/group.
     */
    const groupedItems = uniqueItems.reduce((groups, item) => {
      const groupKey = item.group || item.company?.toLowerCase() || item.name?.toLowerCase();

      const group = groups.find((entry) => entry.key === groupKey);

      if (group) {
        group.items.push(item);
      } else {
        groups.push({
          key: groupKey,
          items: [item],
        });
      }

      return groups;
    }, []);

    return groupedItems.map((group, index) => {
      /*
       * Put Bangalore before the other Schneider experiences.
       */
      const sortedItems = [...group.items].sort((a, b) => {
        const aIsBangalore =
          a.name?.toLowerCase().includes('bangalore') ||
          a.location?.toLowerCase().includes('bangalore') ||
          a.title?.toLowerCase().includes('bangalore');

        const bIsBangalore =
          b.name?.toLowerCase().includes('bangalore') ||
          b.location?.toLowerCase().includes('bangalore') ||
          b.title?.toLowerCase().includes('bangalore');

        if (aIsBangalore && !bIsBangalore) {
          return -1;
        }

        if (!aIsBangalore && bIsBangalore) {
          return 1;
        }

        return 0;
      });

      const primaryItem = sortedItems[0];

      /*
       * Company colors.
       *
       * Change these Tailwind classes to whatever colors
       * you want for your companies.
       */
      const groupColor = group.key?.toLowerCase() || '';

      let colorClasses = '';

      if (groupColor.includes('schneider')) {
        // Green
        colorClasses = 'border border-green-400/40 bg-green-400/5';
      } else if (groupColor.includes('ensimag')) {
        colorClasses = 'border border-green-400/40 bg-green-400/5';
      } else if (groupColor.includes('polytech')) {
        colorClasses = 'border border-blue-400/40 bg-blue-400/5';
      } else if (groupColor.includes('accenture')) {
        // Purple
        colorClasses = 'border border-purple-400/40 bg-purple-400/5';
      } else if (groupColor.includes('google')) {
        // Blue
        colorClasses = 'border border-blue-400/40 bg-blue-400/5';
      } else if (groupColor.includes('microsoft')) {
        // Cyan / Blue
        colorClasses = 'border border-cyan-400/40 bg-cyan-400/5';
      } else if (groupColor.includes('apple')) {
        // Gray
        colorClasses = 'border border-gray-300/40 bg-gray-300/5';
      } else if (groupColor.includes('amazon')) {
        // Orange
        colorClasses = 'border border-orange-400/40 bg-orange-400/5';
      } else if (
        groupColor.includes('university') ||
        groupColor.includes('school') ||
        groupColor.includes('education')
      ) {
        // Yellow
        colorClasses = 'border border-yellow-400/40 bg-yellow-400/5';
      } else {
        // Default
        colorClasses = 'border border-white/10 bg-white/5';
      }

      return (
        <div key={group.key || index} className={`work-content_container group ${colorClasses}`}>
          <div className="flex flex-col h-full justify-start items-center py-2">
            <div className="work-content_logo">
              <img className="w-full h-full" src={primaryItem.icon} alt="" />
            </div>

            <div className="work-content_bar" />
          </div>

          <div className="sm:p-5 px-2.5 py-5 w-full space-y-6">
            {sortedItems.map((item, idx) => {
              const experienceCopy = t.experienceCopies?.[item.name] || {};

              return (
                <div
                  key={item.id || idx}
                  className={sortedItems.length > 1 && idx > 0 ? 'border-t border-white/10 pt-4' : ''}>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-bold text-white-800">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-white-800 hover:text-blue-400 transition-colors">
                          {experienceCopy.name || item.name}
                        </a>
                      ) : (
                        <p className="font-bold text-white-800">{experienceCopy.name || item.name}</p>
                      )}
                    </p>
                  </div>

                  <p className="text-sm mb-2">
                    {experienceCopy.pos || item.pos} -- <span>{experienceCopy.duration || item.duration}</span>
                  </p>

                  <p className="group-hover:text-white transition-all ease-in-out duration-500">
                    {experienceCopy.title || item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-800">
        <p className="head-text">{t.experienceTitle}</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {/* Education */}
              <p className="head-text text-2xl mb-5">{t.educationTitle}</p>

              {renderItems(education)}

              {/* Work Experience */}
              <p className="head-text text-2xl mt-8 mb-5">{t.workTitle}</p>

              {renderItems(workExperiences)}

              <p className="head-text text-2xl mt-8 mb-5">{t.hackathonsTitle}</p>

              <div className="work-content_container group border border-amber-400/40 bg-amber-400/5">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5 w-full space-y-5">
                  {hackathons.map((hackathon) => {
                    const copy = t.hackathonCopies?.[hackathon.name] || {};

                    return (
                      <div
                        key={hackathon.id}
                        className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <div className={`flex items-center ${hackathon.icon ? 'gap-3' : ''}`}>
                          {hackathon.icon && (
                            <img
                              className="w-10 h-10 object-contain rounded-md bg-black-300 p-1"
                              src={hackathon.icon}
                              alt=""
                            />
                          )}
                          <div>
                            <p className="font-bold text-white-800">{copy.name || hackathon.name}</p>
                            <p className="text-amber-200 font-medium">{copy.result || hackathon.result}</p>
                          </div>
                        </div>
                        <span className="text-sm text-white-500">{hackathon.year}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
