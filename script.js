const menuBtn = document.querySelector('.share_btn');
const menuBtn2 = document.querySelector('.share_btn_2');
const menuContent = document.querySelector('.social_pop_up');
const svgElement = document.querySelector('svg');


let menuVisible = false;

menuBtn.addEventListener('click', () => {
  if (menuVisible) {
    menuContent.classList.remove('show');
    menuVisible = false;
  } else {
    menuContent.classList.add('show');
    menuVisible = true;
  }
});
menuBtn2.addEventListener('click', () => {
  if (menuVisible) {
    menuContent.classList.remove('show');
    menuVisible = false;
  } else {
    menuContent.classList.add('show');
    menuVisible = true;
  }
});

document.addEventListener('click', (event) => {
  // check if the click occurred outside of the menu and the menu buttons
  if (!menuContent.contains(event.target) && !menuBtn.contains(event.target) && !menuBtn2.contains(event.target)) {
    // hide the menu if it is currently visible
    if (menuVisible) {
      menuContent.classList.remove('show');
      menuVisible = false;
    }
  }
});





svgElement.addEventListener('click', () => {
  svgElement.style.fill = '#fff';
});
