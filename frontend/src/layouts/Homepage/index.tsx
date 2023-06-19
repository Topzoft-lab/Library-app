import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryService } from "./components/LibraryServices";

export const Homepage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryService />
    </>
  );
};
