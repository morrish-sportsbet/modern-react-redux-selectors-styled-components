import React, { useEffect } from "react";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import {
  displayAlert,
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "./thunks";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";

const ListWrapper = styled.div`
  max-width: 500px;
  margin: auto;
`;

const TodoList = ({
  completedTodos,
  incompleteTodos,
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
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete: </h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          onCompletedPressed={onCompletedPressed}
          onRemovePressed={onRemovePressed}
          todo={todo}
        />
      ))}
      <h3>Completed: </h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          onCompletedPressed={onCompletedPressed}
          onRemovePressed={onRemovePressed}
          todo={todo}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
