const panels = document.querySelectorAll('.FlexGallery-panel');

function removeOpen() {
  const open = document.querySelector('.open');
  if (open) {
    open.classList.remove('open');
    const caption = open.querySelector('.active');
    caption.classList.remove('active');
  }

}

function toggleOpen() {
  removeOpen();
  this.classList.toggle('open');
  const caption = this.querySelector('.FlexGallery-figure-caption');
  caption.classList.add('active');
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
});
