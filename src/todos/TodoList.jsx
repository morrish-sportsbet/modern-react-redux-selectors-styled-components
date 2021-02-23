import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { markTodoAsCompleted } from "./actions";
import { connect } from "react-redux";
import { displayAlert, loadTodos, removeTodoRequest } from "./thunks";
import "./TodoList.css";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading Todos ...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          onCompletedPressed={onCompletedPressed}
          onRemovePressed={onRemovePressed}
          todo={todo}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
