import { BrowserRouter } from "react-router-dom";

import RoutesCustom from "components/routes";
import { Footer, Header } from "components/common";

import "./App.scss";
import "swiper/swiper.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesCustom />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
