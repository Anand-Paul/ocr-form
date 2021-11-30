import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation(["general"]);
  const { lang } = useSelector((state) => state?.settings);

  return (
    <div className="App">
      {lang}
      {t("title")}
    </div>
  );
}

export default App;
