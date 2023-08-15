import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, ErrorComponent } from "components/common";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="page404">
      <div className="section mb-3">
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

export default Page404;
