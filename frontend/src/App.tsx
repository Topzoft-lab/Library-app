import "./App.css";
import { Navbar } from "./layouts/Navbar";

import { Footer } from "./layouts/Footer";
import { Homepage } from "./layouts/Homepage";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
};
