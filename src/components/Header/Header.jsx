import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/LogoFile.png";
import { useHeaderStyles } from "./useHeaderStyles";
import { useHeaderController } from "./Header.controller";

const Header = () => {
  const { t } = useTranslation();
  const styles = useHeaderStyles();
  const { updateLanguage } = useHeaderController();

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.imageStyle} />
        <h3 style={styles.heading}>{t("header")}</h3>
      </div>
      <div style={styles.languageChanger}>
        <label htmlFor="language-select">{t("language")}: </label>
        <select
          id="language-select"
          onChange={updateLanguage}
          defaultValue="en"
        >
          <option value="en">English</option>
          <option value="sp">Espanol</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
