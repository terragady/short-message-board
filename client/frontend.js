const form = document.querySelector('form');
const messageInput = document.querySelector('#message-input');
const loading = document.querySelector('.loading');
const messages = document.querySelector('.messages');
const showMore = document.querySelector('#show-more');
let skip = 0;
const limit = 5;

const init = (reset = true) => {
  if (reset) {
    messages.innerHTML = '';
    skip = 0;
  }
  fetch(`/messages?skip=${skip}&limit=${limit}`)
    .then(res => res.json())
    .then(res => {
      res.messages.forEach(e => {
        messages.innerHTML += `
        <div class="message">
        <p class="p-name">${e.name}</p>
        <p class="p-message">${e.message}</p>
        <p class="p-date">${(new Date(e.createdAt)).toLocaleString('en-GB', { hour12: false })}</p>
        `;
      });

      loading.style.display = 'none';
      if (!res.pagination.left) {
        showMore.style.display = 'none';
      } else {
        showMore.style.display = 'block';
      }
    })
    // eslint-disable-next-line no-undef
    .catch(() => swal('some error'));
  if (reset) {
    messageInput.focus();
  }
};

init();

showMore.addEventListener('click', () => {
  skip += limit;
  init(false);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const message = {
    message: formData.get('message-input'),
    name: formData.get('name-input'),
  };
  form.style.display = 'none';
  loading.style.display = 'block';

  fetch('/messages', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'content-type': 'application/json' },
  }).then(res => res.json())
    .then(() => {
      form.reset();
      form.style.display = '';
      messages.innerHTML = '';
      init();
    }).catch(() => {
      // eslint-disable-next-line no-undef
      swal('Too many requests!');
      form.style.display = '';
      messages.innerHTML = '';
      init();
    });
});
