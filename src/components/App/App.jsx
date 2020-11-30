import React from "react";

import './App.scss';

import Layout from "./../Layout/Layout.jsx";
// import { useTranslation } from "react-i18next";
// import '@app/i18n';

const App = () => {
  // const { t, i18n } = useTranslation();
  //
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };


  return (
    <>
      {/*<button onClick={() => changeLanguage("en")}>EN</button>*/}
      {/*<button onClick={() => changeLanguage("ru")}>RU</button>*/}
      {/*<hr />*/}
      {/*<div><h1>{t("title")}</h1></div>*/}
      {/*<div>{t("description.part1")}</div>*/}
      {/*<div>{t("description.part2")}</div>*/}
      <Layout />
    </>
  );
}

export default App;