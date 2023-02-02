import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react"
import './App.css';
import Chat from "./Components/Chat/Chat";
import SideBar from './Components/SideBar/SideBar';
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";



function App() {

  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">
        {!user ? (
          <Login/>
        ) : (
      <div className="app_body">
        
      <Router>
          <SideBar />
          <Switch>
            

            <Route  path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route  path="/">
              <Chat />
            </Route>

          </Switch>
        </Router>
      </div>
    )}
    </div>
  );
}

export default App;
