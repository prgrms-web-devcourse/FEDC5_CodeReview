function TodoItem({ $target, initialState }) {
  // new 키워드를 사용하지 않았을 경우 예외 처리
  if (!(this instanceof TodoItem)) {
    throw new Error('TodoItem Component must be called with "new"');
  }

  const $todoItem = document.createElement('li');
  let isInit = false;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.onToggle = () => {
    this.setState({
      ...this.state,
      isCompleted: !this.state.isCompleted,
    });
  };

  this.render = () => {
    const { text, isCompleted } = this.state;
    $todoItem.innerHTML = `
      <span class="text">${text}</span>
      <button class="remove-btn">삭제</button>
    `;
    $todoItem.querySelector('span').style.textDecoration = isCompleted ? 'line-through' : 'none';
  };
  console.log($todoItem)
  this.render();
}
