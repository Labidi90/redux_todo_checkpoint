import React from "react";
import { useDispatch } from "react-redux";
import { complete, deleteTask } from "../Redux/Actions/Actions";
import EditTask from "./EditTast";

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div className={todo.isDone ? "done" : null}>{todo.task}</div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => dispatch(complete(todo.id))}
        >
          {todo.isDone ? "Undo" : "complete"}
        </button>

        <EditTask todo={todo} />

        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTask(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
