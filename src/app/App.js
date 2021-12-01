import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { SuspenseLoader } from "../commons/components";
import { history } from "../commons/helpers";
import MainNavigation from "../navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter history={history}>
      <Suspense fallback={<SuspenseLoader />}>
        <MainNavigation />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
