// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.$initialState - 해당 컴포넌트의 초기 상태값
// $ : DOM 객체를 담고있는 변수를 의미
function TodoList(params) {
  // new 키워드를 사용하지 않았을 경우 예외 처리
  if (!(this instanceof TodoList)) {
    throw new Error('TodoList Component must be called with "new"');
  }

  const $todoList = document.createElement('div');
  const $target = params.$target;

  this.state = params.initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
    <ul>
      ${this.state.map(
        (todo) => new TodoItem({ $target: $todoList, initialState: todo })
      )}
    </ul>
    `;
    $target.appendChild($todoList);
  };
  this.render();
}
