import { useState } from 'react';

import { navLinks } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';

const NavItems = ({ onClick = () => {}, t }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {t.nav[item.name.toLowerCase()]}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Abderrahmen
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label={isOpen ? t.nav.close : t.nav.menu}>
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems t={t} />
            <button type="button" onClick={toggleLanguage} className="ml-6 text-sm font-semibold text-neutral-400 hover:text-white transition-colors" aria-label="Change language">
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} t={t} />
          <button type="button" onClick={toggleLanguage} className="mx-auto mt-4 block text-sm font-semibold text-neutral-400 hover:text-white transition-colors" aria-label="Change language">
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
