(() => {
  document.querySelectorAll('.toolbar button').forEach((button) => {
    button.addEventListener('click', (e)=> {
      const command = button.getAttribute('data-command');
      document.execCommand(command);
    })
  })
})();