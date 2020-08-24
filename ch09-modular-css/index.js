(() => {
  let toggle = document.querySelector('.dropdown__toggle');
  toggle.addEventListener('click', event => {
    event.preventDefault();
    let dropdown = event.target.parentNode;
    dropdown.classList.toggle('is-open');
  })
})()
