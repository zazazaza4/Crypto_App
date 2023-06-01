import { BrowserRouter } from "react-router-dom";

import { RoutesCustom } from "config";
import { Footer, Header } from "components";

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
