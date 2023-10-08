function Header({ $target, text }) {
  // new 키워드를 사용하지 않았을 경우 예외 처리
  if (!(this instanceof Header)) {
    throw new Error('Header Component must be called with "new"');
  }

  const $header = document.createElement('h1');
  this.render = () => {
    $header.textContent = text;

    $target.appendChild($header);
  }

  this.render();
}
