

function hower_word(circle){
circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
});
}


var c = document.querySelector('#circle1');
hower_word(c);
c = document.querySelector('#circle2');
hower_word(c);
c = document.querySelector('#circle3');
hower_word(c);
c = document.querySelector('#circle4');
hower_word(c);
c = document.querySelector('#circle5');
hower_word(c);
c = document.querySelector('#circle6');
hower_word(c);
c = document.querySelector('#circle7');
hower_word(c);
c = document.querySelector('#circle8');
hower_word(c);
c = document.querySelector('#circle9');
hower_word(c);
c = document.querySelector('#circle10');
hower_word(c);
c = document.querySelector('#circle11');
hower_word(c);