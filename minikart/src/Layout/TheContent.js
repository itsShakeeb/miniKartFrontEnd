import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import routes from "../routes";

const TheContent = () => {
  return (
    <div>
      <Suspense fallback="loading theContent.js...">
        <Switch>
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  name={route.name}
                  exact={route.exact}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          <Redirect from="/" to="/overview" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default TheContent;
