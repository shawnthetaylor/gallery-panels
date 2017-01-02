const gallery = document.getElementsByClassName('Gallery')[0];
const panels = document.querySelectorAll('.Gallery-panel');

panels.forEach((panel, index) => {
  panel.addEventListener('click', e => {
    gallery.classList.toggle('expand-0', index === 0);
    gallery.classList.toggle('expand-1', index === 1);
    gallery.classList.toggle('expand-2', index === 2);
    gallery.classList.toggle('expand-3', index === 3);
    gallery.classList.toggle('expand-4', index === 4);
  });
});
