// import Swal from 'sweetalert2.js'
// import 'sweetalert2.scss'
document.addEventListener('DOMContentLoaded', () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycby7pvJgynRHwIphSQy3ioRyQWY2zV0_rT2fXmhYvYDIKdEiUS2jXO6npokxa0IQD-HiNA/exec';
    const form = document.forms['product'];

    form.addEventListener('submit', e => {
      e.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to retract this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Submit it!',
        cancelButtonText: 'I\'ll recheck it once'
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
      text: "You won't be able to undo this change!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reset the form',
      cancelButtonText:'No! This was a mistake!'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();

      }
    })
  });
  });
