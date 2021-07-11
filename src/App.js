import { observer } from "mobx-react";

// components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

// stores
import notebookStore from "./stores/notebookStore";
import noteStore from "./stores/noteStore";

function App() {
  return (
    <div>
      <NavBar />
      {noteStore.loading || notebookStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </div>
  );
}

export default observer(App);
