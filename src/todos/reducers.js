import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";

export const todos = (state = [], actions) => {
  const { type, payload } = actions;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;

      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      console.log("Remove pressed");
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
