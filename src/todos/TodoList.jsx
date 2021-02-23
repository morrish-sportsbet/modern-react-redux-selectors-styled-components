import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, markTodoAsCompleted } from "./actions";
import { connect } from "react-redux";
import { displayAlert } from "./thunks";
import "./TodoList.css";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlertClicked,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        onCompletedPressed={onDisplayAlertClicked}
        onRemovePressed={onRemovePressed}
        todo={todo}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
