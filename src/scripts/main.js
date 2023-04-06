'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  if (!item || !thumbs.contains(item)) {
    return;
  }

  e.preventDefault();
  largeImg.src = item.href;
});
