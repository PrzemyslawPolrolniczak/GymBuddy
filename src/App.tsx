import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import "./App.scss";
import store from './store';
import Home from "./views/Home";
import Workout from "./views/Workout";
import Warmup from "./views/Warmup";

const App: React.FC = () => {
  return (
    <div className="App h-screen max-w-sm mx-auto p-6 bg-white flex">
      <Router>
        <Provider store={store}>
          <Route path="/" exact component={Home} />
          <Route path="/workout/" exact component={Workout} />
          <Route path="/workout/warmup/" exact component={Warmup} />
        </Provider>
      </Router>
    </div>
  );
};

export default App;
