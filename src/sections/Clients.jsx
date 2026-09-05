import { Myexploration } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';

const ReviewCard = ({ item, reviewCopy, linkCopies, exploringLabel }) => (
  <div className="client-review">
    <div>
      <p className="text-white-800 font-light">{reviewCopy.review || item.review}</p>

      {item.links && (
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
          {item.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors">
              <span>{linkCopies[link.label] || link.label}</span>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          ))}
        </div>
      )}

      <div className="client-content">
        <div className="flex gap-3">
          <img src={item.img} alt="" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <p className="font-semibold text-white-800">{reviewCopy.name || item.name}</p>
            <p className="text-white-500 md:text-base text-sm font-light">{reviewCopy.position || item.position}</p>
          </div>
        </div>

        <div className="flex self-end items-center gap-2">
          <span className="text-white-500 text-sm">{exploringLabel}</span>
        </div>
      </div>
    </div>
  </div>
);

const Clients = () => {
  const { t } = useLanguage();

  return (
    <section className="c-space my-20">
      <h3 className="head-text">{t.exploringTitle}</h3>
      <div className="client-container">
        {Myexploration.map((item) => (
          <ReviewCard
            key={`review-${item.id}`}
            item={item}
            reviewCopy={t.reviewCopies[item.name] || {}}
            linkCopies={t.reviewLinks || {}}
            exploringLabel={t.exploringLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
