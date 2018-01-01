$(document).ready(function() {
  /* Agregamos el código postal del país seleccionado al span */
  var postalCode = window.localStorage.getItem('postalCode');
  $('.postal-code').text('+' + postalCode);

  $('#input-random').keyup(function() {
    var code = window.localStorage.getItem('code');

    /* Verificamos si se ingreso correctamente el codigo  */
    if (code === $(this).val()) {
      $('.button-next')
        .removeAttr('disabled')
        .click(function() {
          window.location.assign('info-user.html');
        });
    }
  });
});