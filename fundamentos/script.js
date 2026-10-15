const dialog = document.getElementById('egresado-dialog');
const trigger = document.getElementById('egresado-open');
trigger.addEventListener('click', () => { dialog.showModal(); document.body.classList.add('modal-open'); });
dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
 const bounds = dialog.getBoundingClientRect();
 if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); trigger.focus(); });

document.querySelectorAll('.video-play').forEach(button => {
 button.addEventListener('click', () => {
  if (window.location.protocol === 'file:') {
   window.open('https://www.youtube.com/watch?v=' + button.dataset.video, '_blank', 'noopener,noreferrer');
   return;
  }
  const frame = document.createElement('iframe');
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.video + '?autoplay=1';
  frame.title = button.getAttribute('aria-label');
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  button.parentElement.replaceChildren(frame);
  frame.focus();
 });
});

const yapeDialog = document.getElementById('yape-dialog');
const yapeTrigger = document.getElementById('yape-open');
yapeTrigger.addEventListener('click', () => { yapeDialog.showModal(); document.body.classList.add('modal-open'); });
yapeDialog.querySelector('.modal-close').addEventListener('click', () => yapeDialog.close());
yapeDialog.addEventListener('click', event => {
 const r = yapeDialog.getBoundingClientRect();
 if (event.target === yapeDialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) yapeDialog.close();
});
yapeDialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); yapeTrigger.focus(); });
