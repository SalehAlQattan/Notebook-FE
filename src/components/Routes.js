import NotebookDetails from "./NotebookDetails";
import NotebookList from "./NotebookList";
import Home from "./Home";
// router
import { Route, Switch } from "react-router";

const Routes = () => {
  return (
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
  );
};

export default Routes;
