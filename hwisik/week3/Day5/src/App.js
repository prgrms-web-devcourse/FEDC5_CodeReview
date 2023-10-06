// 어떤 컴포넌트들이 추가되야 하는지 관리하는 곳
function App({ $target, initialState }) {
  // new 키워드를 사용하지 않았을 경우 예외 처리
  if (!(this instanceof App)) {
    throw new Error('App Component must be called with "new"');
  }

  new Header({ $target, text: 'Todo App' });
  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text: text, isCompleted: false }];
      todoList.setState(nextState);
      storage.setItem('todos', JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
