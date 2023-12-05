import "./App.css";
import { Navbar } from "./layouts/Navbar";

import { Footer } from "./layouts/Footer";
import { Homepage } from "./layouts/Homepage";
import { SearchBookPage } from "./layouts/SearchBookPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Homepage /> */}
      <SearchBookPage />
      <Footer />
    </div>
  );
};
