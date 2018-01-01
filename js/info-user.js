function begin() {
  var $name = $('#name');
  var $lastName = $('#last-name');
  var $email = $('#email');
  var $checkbox = $('#checkbox');
  var $submit = $('#submit');
  var $redirectorButton = $('#redirector-button');

  function isNameValid() {
    /* Usaremos una expresion regular para validar que escriba bien su nombre */
    var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
    return PATERNNAME.test($name.val());
  }

  function isLastNameValid() {
    /* Usaremos una expresion regular para validar que escriba bien su apellido */
    var PATERNLASTNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
    return PATERNLASTNAME.test($lastName.val());
  }

  function isEmailValid() {
    /* Usaremos una expresion regular para validar que escriba bien su correo*/
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    return PATERNEMAIL.test($email.val());
  }

  function areAllValidationsPassing() {  
    return isNameValid() && isLastNameValid() && isEmailValid();
  }

  function formStateEvent() {
    $submit.prop('disabled', !areAllValidationsPassing());
  }

  function redirectSight() {
    window.location.assign('completed.html');
  }

  function redirectorButton() {
    window.location.assign('code.html');
  }

  /* Hacemos focus al input name */
  $name.focus();

  $name
    .focus(isNameValid)
    .on('keyup', isNameValid)
    .on('keyup', formStateEvent);

  $lastName
    .focus(isLastNameValid)
    .on('keyup', isLastNameValid)
    .on('keyup', formStateEvent);

  $email
    .focus(isEmailValid)
    .on('keyup', isEmailValid)
    .on('keyup', formStateEvent);
  
  $checkbox
    .on('click', formStateEvent);

  $submit
    .on('click', redirectSight);

  $redirectorButton
    .on('click', redirectorButton);

  formStateEvent();
}

$(document).ready(begin);