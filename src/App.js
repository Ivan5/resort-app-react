import React, { Fragment } from "react";

import "./App.css";

//import pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

//import components
import Navbar from "./components/Navbar";

//import react-router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
