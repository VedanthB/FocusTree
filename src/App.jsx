import React from "react";
import { Header } from "./components";

import { WebsiteRoutes } from "./routes";

const App = () => {
  return (
    <div>
      <Header />
      <WebsiteRoutes />
      This was made from Scratch! Also hello world!
    </div>
  );
};

export default App;
