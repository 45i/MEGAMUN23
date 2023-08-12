document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwph-i4-YnJHg2-sw4mAOjhucXEvY7CSyPtEQE84LvEzTbw059K5Ddrss3RHAnq3sJP/exec'; // Replace SCRIPT_ID with your Google Apps Script ID
    const form = document.forms['product'];

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          if (response.ok) {
            alert("Thank you! Your form has been submitted successfully.");
            window.location.reload();
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .catch(error => {
          console.error('Error!', error.message);
          alert('An error occurred while submitting the form. Please try again later.');
        });
    });
  });
