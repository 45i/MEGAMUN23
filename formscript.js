document.addEventListener('DOMContentLoaded', () => {
  const recipient = 'sayakpalit61@gmail.com'; // Replace with your email address
  const form = document.forms['product'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const subject = 'New form submission';
    let body = '';

    for (const [key, value] of formData.entries()) {
      body += `${key}: ${value}\n`;
    }

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    const message = 'Please send the mail through your default mail app, which is going to open shortly..';
    alert(message);
  });

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to discard the form?';
  });
});
