function TodoForm({ $target, onSubmit }) {
  // new 키워드를 사용하지 않았을 경우 예외 처리
  if (!(this instanceof TodoForm)) {
    throw new Error('TodoForm Component must be called with "new"');
  }

  const $form = document.createElement('form');
  let isInit = false;
  this.render = () => {
    $form.innerHTML = `
      <input type="text" name='todo' placeholder="todo" />
      <button>Add</button>
    `;

    if (!isInit) {
      $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const $todo = $form.querySelector('input[name=todo]');
        const text = $todo.value;

        // 입력값이 없으면 추가하지 않음.
        if (!text || text.trim().length === 0) {
          return;
        }

        onSubmit(text);
        $form.reset(); // $todo.value = '';
      });
    }

    isInit = true;
    $target.appendChild($form);
  };
  this.render();
}
