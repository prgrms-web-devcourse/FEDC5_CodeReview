/* 명령형 방식으로 하기 */

// // 버튼 3개를 만든다.
// const $button1 = document.createElement('button');
// $button1.textContent = 'Button1';
// $button1.className = 'button1';
// let button1ClickCount = 0;

// const $button2 = document.createElement('button');
// $button2.textContent = 'Button2';
// $button2.className = 'button2';
// let button2ClickCount = 0;

// const $button3 = document.createElement('button');
// $button3.textContent = 'Button3';
// $button3.className = 'button3';
// let button3ClickCount = 0;

// // 만든 버튼을 화면에 그린다.
// const $main = document.querySelector('#app');

// $main.appendChild($button1);
// $main.appendChild($button2);
// $main.appendChild($button3);

// const toggleButton = ($button) => {
//   if ($button.className === 'button1') {
//     button1ClickCount++;
//     if (button1ClickCount === 3) {
//       button1ClickCount = 0;
//       alert('button1 clicked 3 times');
//     }
//   } else if ($button.className === 'button2') {
//     button2ClickCount++;
//     if (button2ClickCount === 3) {
//       button2ClickCount = 0;
//       alert('button2 clicked 3 times');
//     }
//   } else {
//     button3ClickCount++;
//     if (button3ClickCount === 3) {
//       button3ClickCount = 0;
//       alert('button3 clicked 3 times');
//     }
//   }
//   if($button.style.textDecoration === 'line-through') {
//     $button.style.textDecoration = 'none';
//   } else {
//     $button.style.textDecoration = 'line-through';
//   }
// }
// // 버튼을 클릭하면 삭선이 그어진다.
// document.querySelectorAll('button').forEach($button => {
//   $button.addEventListener('click', (e) => {
//     toggleButton(e.target);
//   })
// })

/* ToggleButton 생성자 함수로 추상화 (선언적 방식) */
function ToggleButton({ $target, text, onClick }) {
  const $button = document.createElement('button');
  let isInit = false;

  this.state = {
    clickCount: 0,
    toggled: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.toggle = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled,
    });

    if (onClick) {
      onClick(this.state.clickCount);
    }
  };

  this.render = () => {
    $button.textContent = text;
    $button.style.textDecoration = this.state.toggled ? 'line-through' : 'none';

    if (!isInit) {
      $target.appendChild($button);
      $button.addEventListener('click', () => {
        this.toggle();
      });
      isInit = true;
    }
  };

  this.render();
}

/* 지정한 시간 뒤에 자동으로 토글이 되는 버튼 */
function TimerButton({ $target, text, timer = 3000 }) {
  const button = new ToggleButton({
    $target,
    text,
    onClick: () => {
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled,
        });
      }, timer);
    },
  });
}

function ButtonGroup({ $target, buttons }) {
  const $group = document.createElement('div');
  let isInit = false;

  this.render = () => {
    if (!isInit) {
      buttons.forEach(({ type, ...props }) => {
        if (type === 'toggle') {
          new ToggleButton({ $target: $group, ...props });
        } else if (type === 'timer') {
          new TimerButton({ $target: $group, ...props });
        }
      });
      $target.appendChild($group);
      isInit = true;
    }
  };

  this.render();
}

const $app = document.querySelector('#app');

new ButtonGroup({
  $target: $app,
  buttons: [
    {
      type: 'toggle',
      text: '토글 버튼',
    },
    {
      type: 'toggle',
      text: '토글 버튼2',
    },
    {
      type: 'timer',
      text: '타이머 버튼',
      timer: 3000,
    },
  ],
});
