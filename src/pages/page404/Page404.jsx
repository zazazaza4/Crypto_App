import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, ErrorComponent } from "components/common";
import { image404 } from "assets";

import "./page404.scss";

export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="page404">
      <div className="container mb-3">
        <img src={image404} />
        <ErrorComponent>
          <h3>Lost in cryptospace?</h3>
          <p>
            It looks like that page doesn`t exist - please check the URL and try
            again
          </p>
        </ErrorComponent>
        <Button onClick={goHome}>Home</Button>
      </div>
    </div>
  );
};
