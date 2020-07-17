const form = document.querySelector('form');
const loading = document.querySelector('.loading');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const message = {
    message: formData.get('message'),
    name: formData.get('name'),
  };
  form.style.display = 'none';
  loading.style.display = 'block';

  fetch('http://localhost:5000', { method: 'POST', body: JSON.stringify(message), headers: { 'content-type': 'application/json' } });
});
