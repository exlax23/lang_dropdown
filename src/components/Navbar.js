import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div class="dropdown">
      <button class="dropbtn">{t('Languages')}</button>
      <div class="dropdown-content">
        <button onClick={() => clickLanguage('en')}>English</button>
        <button onClick={() => clickLanguage('de')}>Deutsch</button>
      </div>
    </div>
  )
}

export default Navbar