import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "components";

import "./App.scss";
import "swiper/swiper.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
