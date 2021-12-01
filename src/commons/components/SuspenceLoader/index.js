import React from "react";
import { Backdrop, Grid, CircularProgress } from "@mui/material";

const SuspenseLoader = () => {
  return (
    <Backdrop open={true}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Grid>
    </Backdrop>
  );
};

export { SuspenseLoader };
