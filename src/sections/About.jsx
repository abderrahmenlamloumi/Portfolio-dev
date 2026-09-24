import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { useLanguage } from '../context/LanguageContext.jsx';

const About = () => {
  const { t } = useLanguage();
  const globeRef = useRef();

  useEffect(() => {
    // Ensure the globe is mounted before calling the method
    if (globeRef.current) {
      // Set the point of view to France
      // Lower altitude = closer zoom (e.g., 0.15 is quite close, 0.35 is further out)
      // The second argument (2000) is the animation duration in milliseconds
      globeRef.current.pointOfView({ lat: 46.603354, lng: 1.888334, altitude: 0.35 }, 2000);
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid1.png`}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">{t.about.introTitle}</p>
              <p className="grid-subtext">{t.about.intro}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/image.png`}
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">{t.about.technologies}</p>
              <p className="grid-subtext">{t.about.techText}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                ref={globeRef} // Attach the ref here
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 46.603354,
                    lng: 1.888334,
                    text: t.about.country,
                    color: 'white',
                    size: 15, // You might want to adjust this size based on the new zoom level
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">{t.about.based}</p>
              <p className="grid-subtext">{t.about.basedText}</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">{t.about.resumeTitle}</p>
              <p className="grid-subtext">{t.about.resumeText}</p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              {[
                {
                  flag: '🇬🇧',
                  label: t.about.resumeEn,
                  file: 'Abderrahmen_LAMLOUMI_RESUME_EN.pdf',
                  downloadName: 'Abderrahmen_LAMLOUMI_RESUME.pdf',
                },
                {
                  flag: '🇫🇷',
                  label: t.about.resumeFr || 'CV (FR)',
                  file: 'Abderrahmen_LAMLOUMI_CV_FR.pdf',
                  downloadName: 'Abderrahmen_LAMLOUMI_CV_FR.pdf',
                },
              ].map((resume) => {
                const resumeUrl = `${import.meta.env.BASE_URL}assets/${resume.file}`;

                return (
                  <div key={resume.file} className="group relative">
                    <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-black font-medium transition-colors group-hover:bg-gray-200">
                      <span>{resume.flag}</span>
                      <span>{resume.label}</span>
                    </div>
                    <div className="absolute inset-x-3 bottom-3 z-10 flex translate-y-2 items-center justify-center gap-2 rounded-lg bg-black/90 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md px-3 py-2 text-sm text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        {t.about.resumeView}
                      </a>
                      <a
                        href={resumeUrl}
                        download={resume.downloadName}
                        className="rounded-md bg-white px-3 py-2 text-sm text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        {t.about.resumeDownload}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
