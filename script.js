  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        changeElement(event.target)
    });
  });

  function changeElement(target) {

    if (target.firstElementChild.classList[0] === 'expand') {
        target.firstElementChild.classList.replace('expand', 'collapse')
        target.firstElementChild.alt = "Click to collapse the section."
        target.firstElementChild.src = "assets/images/icon-minus.svg"
        // target.nextElementSibling.style.display = 'flex' 
        target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px"
    } else {
        target.firstElementChild.classList.replace('collapse', 'expand')
        target.firstElementChild.alt = "Click to expand for more information."
        target.firstElementChild.src = "assets/images/icon-plus.svg"
        // target.nextElementSibling.style.display = 'none' 
        target.nextElementSibling.style.maxHeight = 0
    }
  }



  //Still need to add transition animation to the change along more styling for the actual text but beyond that I think it close to done.