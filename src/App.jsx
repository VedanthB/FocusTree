import React from "react";
import { Footer, Header } from "./components";
import { useTheme } from "./context";

import { WebsiteRoutes } from "./routes";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: `${theme === "light" ? "white" : "#191A19"}` }}
    >
      <Header />
      <WebsiteRoutes />
      <Footer />
    </div>
  );
};

export default App;
