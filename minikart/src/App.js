import React, { Suspense, useState, lazy, useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";

const TheLayout = lazy(() => import("./Layout/TheLayout"));

const App = () => {
  const [auth, setAuth] = useState(false);

  const authVerification = (data) => {
    sessionStorage.setItem("isLoggedIn", data);
    setAuth(data);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      sessionStorage.setItem("isLoggedIn", false);
    }
  }, []);
  return (
    <div>
      <BrowserRouter basename="/admin">
        <Suspense fallback="loading app.js.....">
          <Switch>
            {auth === false ? (
              <Route path="/" name="Layout" render={() => <TheLayout />} />
            ) : (
              <>
                <Redirect from="*" to={`/login`} />
                <Route
                  path="/login"
                  exact
                  name="Login"
                  render={(props) => (
                    <Login authVerification={authVerification} {...props} />
                  )}
                />
              </>
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
