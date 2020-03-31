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
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);
});

function startRotate(event) {
  const cardItem = this.querySelector('.card-item');
  const halfHight = cardItem.offsetHeight / 2;
  const halfWidth = cardItem.offsetWidth / 2;
  cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHight) / 10 +'deg) rotateY('+ (event.offsetX - halfWidth) / 10 +'deg)';
}

function stopRotate(event) {
  const cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}