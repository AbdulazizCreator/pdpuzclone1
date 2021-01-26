import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import ChatTask from "./components/ChatTasks/ChatTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <ChatTask />
          </Route>
          <Route exact path="/dashboard">
            
          </Route>
          <Route exact path="/qurilmalar">

          </Route>
          <Route exact path="/zoomchat">

          </Route>
          <Route exact path="/sozlamalar">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
