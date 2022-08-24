import React from "react";
import { useTranslation } from "react-i18next";

function Blocktext() {
    const { t, i18n } = useTranslation();
    function clickLanguage(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <p>{t('par1')}</p>
    );
}

export default Blocktext