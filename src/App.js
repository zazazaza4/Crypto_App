import { BrowserRouter } from "react-router-dom";

import { Header } from "components";

import "./App.scss";
import "swiper/swiper.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
