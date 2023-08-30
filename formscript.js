// import Swal from 'sweetalert2.js'
// import 'sweetalert2.scss'
document.addEventListener('DOMContentLoaded', () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxcr0g0uFZKtp08FeWA9EEoJ5WHYFK5uJ6fGh9yajfFNaE4jcmG8lr-qisth-6Aflbc1A/exec'; // Replace SCRIPT_ID with your Google Apps Script ID
    const form = document.forms['product'];

    form.addEventListener('submit', e => {
      e.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Submit it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
              if (response.ok) {
                // alert("Thank you! Your form has been submitted successfully.");
                Swal.fire(
                  'Success!',
                  'Your application has been submitted!',
                  'success'
                ).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                   {

                    window.location.reload();
                  }
                })

              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',

                })
              }
            })
            .catch(error => {
              console.error('Error!', error.message);
              // alert('An error occurred while submitting the form. Please try again later.\n' + error.message);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while submitting the form. Please try again later.',
                footer: error.message
              })
            });
        }
      })
      
    });
  form.addEventListener('reset', e => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reset the form'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();

      }
    })
  });
  });
