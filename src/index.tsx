import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { App } from "app";
import { ThemeWrap } from "context";
// import { Preloader } from "components";
import { GlobalStyles } from "styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeWrap>
      <GlobalStyles />
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </ThemeWrap>
  </React.StrictMode>,
);
