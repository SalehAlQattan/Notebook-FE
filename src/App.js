// components
import NotebookDetails from "./components/NotebookDetails";
import NotebookList from "./components/NotebookList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

// router
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/notebooks/:notebookSlug">
          <NotebookDetails />
        </Route>
        <Route path="/notebooks">
          <NotebookList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
