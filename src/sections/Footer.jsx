import { useLanguage } from '../context/LanguageContext.jsx';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">

      <div className="flex gap-3">
        <a href="https://github.com/abderrahmenlamloumi" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub profile">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/abderrahmen-lamloumi-6282a9294/" target="_blank" rel="noreferrer" className="social-icon text-white font-bold text-xl" aria-label="LinkedIn profile">
          in
        </a>
      </div>

      <p className="text-white-500">© 2026 Abderrahmen Lamloumi. {t.footer.rights}</p>
    </footer>
  );
};

export default Footer;
