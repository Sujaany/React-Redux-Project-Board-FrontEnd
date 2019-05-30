import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ProjectBoard from "./Components/ProjectBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectTask from "./Components/ProjectTasks/AddProjectTask";
import { Provider } from "react-redux";
import store from "./Components/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <h1 className="alert alert-warning"> WEL COME TO PROJECT BOARD</h1>
            <NavBar />

            <Route exact path="/" component={ProjectBoard} />
            <Route exact path="/addProjectTask" component={AddProjectTask} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
