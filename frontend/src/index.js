import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { MainContainer } from "./Layout/MainContainer";
import './i18n';


ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <MainContainer />
      </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
