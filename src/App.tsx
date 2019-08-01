import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import store from "./store";
import Home from "./views/Home/Home";
import Workout from "./views/Workout/Workout";
import Warmup from "./views/Warmup/Warmup";
import Exercise from "./views/Exercise/Exercise";

const App: React.FC = () => {
  return (
    <div className="App h-screen max-w-sm mx-auto p-6 bg-white flex">
      <Router>
        <Provider store={store}>
          <Route path="/" exact component={Home} />
          <Route path="/workout/" exact component={Workout} />
          <Route path="/workout/warmup/" exact component={Warmup} />
          <Route path="*/exercise" component={Exercise} />
        </Provider>
      </Router>
    </div>
  );
};

export default App;
