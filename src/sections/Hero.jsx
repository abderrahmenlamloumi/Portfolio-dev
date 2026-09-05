import Button from '../components/Button.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full flex flex-col relative pb-16" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          {t.heroGreeting} <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">{t.heroTagline}</p>
        <div className="w-full z-10 c-space mt-1">
          <a href="#about" className="w-fit">
            <Button name={t.explore} isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
