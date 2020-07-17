const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const messages = document.querySelector('.messages');

const init = () => {
  fetch('/messages')
    .then(res => res.json())
    .then(res => {
      res.forEach(e => {
        messages.innerHTML += `
        <div class="message">
        <p>${e.name}</p>
        <p>${e.message}</p>
        <p>${(new Date(e.createdAt)).toLocaleString('en-GB', { hour12: false })}</p>
        `;
      });
      loading.style.display = 'none';
    });
};

init();

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const message = {
    message: formData.get('message-input'),
    name: formData.get('name'),
  };
  form.style.display = 'none';
  loading.style.display = 'block';

  fetch('/messages', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'content-type': 'application/json' }
  }).then(res => res.json())
    .then(message => {
      form.reset();
      setTimeout(() => {
        form.style.display = '';
      }, 30000);
      messages.innerHTML = '';
      init();
    });
});

