$(function(){
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e){
    e.addEventListener('submit', function(event){
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      
      if(!action){
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');


      let formData = $(this).serialize();
      //let formData = new FormData( thisForm );

      $.ajax({
        url: action,
        method: "POST",
        data: formData,
        dataType: "JSON",
        success: function(data){
          if(data.ok) {
            displaySucces(thisForm)
            thisForm.reset();
          }
          else{
            displayError(thisForm, data.message);
          }
        }
      });

    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

  function displaySucces(thisForm) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.sent-message').classList.add('d-block');
  }

});
