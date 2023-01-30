import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react"
import './App.css';
import Chat from "./Components/Chat/Chat";
import SideBar from './Components/SideBar/SideBar';



function App() {
  return (
    <div className="app">

      <div className="app_body">
      <Router>
          <Switch>
            <SideBar />

            <Route  path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route  path="/">
              <Chat />
            </Route>

          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
