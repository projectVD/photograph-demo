let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.menu-list');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCursor.style.transform = 'scale(4)'
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.style.transform = ''
  });
})