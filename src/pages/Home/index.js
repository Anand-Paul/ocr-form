import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["common"]);
  const { lang } = useSelector((state) => state?.settings);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {lang}
      {t("title")}
      Hello Developer
    </Grid>
  );
};

export { Home };
