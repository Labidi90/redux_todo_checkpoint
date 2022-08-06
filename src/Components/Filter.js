import React from "react";
import { useDispatch } from "react-redux";
import { filter } from "../Redux/Actions/Actions";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="filter">
        <div>
          <input
            onClick={() => dispatch(filter("All"))}
            type="radio"
            name="task"
            value="all"
            id="all"
          />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input
            onClick={() => dispatch(filter("Done"))}
            type="radio"
            name="task"
            value="completed"
            id="completed"
          />
          <label className="form-label" htmlFor="completed">
            completed
          </label>
        </div>
        <div>
          <input
            onClick={() => dispatch(filter("unDone"))}
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
          />
          <label className="form-label" htmlFor="uncompleted">
            uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
