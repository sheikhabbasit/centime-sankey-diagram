import { useTranslation } from "react-i18next";

export const useHeaderController = () => {
  const { i18n } = useTranslation();
  const updateLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return {
    updateLanguage,
  };
};
