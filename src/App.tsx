import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Home from "./views/Home";
import Workout from "./views/Workout";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
            <Route path="/" exact component={Home} />
            <Route path="/workout/" exact component={Workout} />
          </div>
        </header>
      </Router>
      <div />
    </div>
  );
};

export default App;
