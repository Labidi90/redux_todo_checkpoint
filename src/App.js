import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import Filter from "./Components/Filter";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
