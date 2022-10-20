import TodoList from "./todos/TodoList";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, Sans-serif;
  color: #222222;
  width: 100vw;
  height: 200vh;
`;

function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default App;
