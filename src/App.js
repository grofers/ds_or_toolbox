import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SamplePage from "./pages/SamplePage";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <SamplePage {...props} />} />
        <Route render={(props) => <Page404 {...props} />}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
