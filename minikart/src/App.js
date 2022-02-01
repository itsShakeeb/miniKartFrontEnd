import React, { Suspense, lazy, useEffect, useState } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

const Login = lazy(() => import("./components/Login/Login"));
const TheLayout = lazy(() => import("./Layout/TheLayout"));

const App = () => {
  const [auth, setAuth] = useState(false);

  const checkAuth = () => {
    let isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    let token = JSON.parse(sessionStorage.getItem("token"));
    if (isLoggedIn && token) {
      setAuth(true);
    }
  };
  console.log("rerender app.js");
  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("isLoggedIn"))) {
      sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
  }, [auth]);

  return (
    <div>
      <BrowserRouter basename="/admin">
        <Suspense fallback="loading app.js.....">
          <Switch>
            {auth === true || checkAuth() ? (
              <Route path="/" name="Layout" render={() => <TheLayout />} />
            ) : (
              <>
                <Redirect from="*" to={`/login`} />
                <Route
                  path="/login"
                  exact
                  name="Login"
                  render={(props) => (
                    <Login {...props} authVerification={checkAuth} />
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
