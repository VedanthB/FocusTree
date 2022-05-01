import React from "react";
import { Footer, Header } from "./components";

import { WebsiteRoutes } from "./routes";

const App = () => {
  return (
    <div>
      <Header />
      <WebsiteRoutes />
      <Footer />
    </div>
  );
};

export default App;
