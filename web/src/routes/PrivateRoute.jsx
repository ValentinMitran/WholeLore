import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./../pages/LandingPage/LandingPage";

function PrivateRoute({ children, ...rest }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyLoggedIn();
  }, []);

  const verifyLoggedIn = async () => {
    if (localStorage.entered) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Route {...rest} render={() => (isLoggedIn ? children : <LandingPage />)} />
  );
}

export default PrivateRoute;
