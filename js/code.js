$(document).ready(function() {
  var $inputRandom = $('#input-random');
  var $resendCode = $('#resend-code');
  var $redirectorButton = $('#redirector-button');

  /* Agregamos el código postal del país seleccionado y el numero telefonico al span */
  var phoneNum = window.localStorage.getItem('phoneNum')
  $('.postal-code').text('+' + phoneNum);

  /* Usaremos esta funcion para arrojar numeros aleatorios */
  function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min)) * 99) + min;
  }  
  
  $inputRandom
    .focus()
    .on('keyup', function() {
      var code = window.localStorage.getItem('code');
      var newCode = window.localStorage.getItem('new-code');

      /* Verificamos si se ingreso correctamente el codigo  */
      if (code === $(this).val() || newCode === $(this).val()) {
        $('#next-button')
          .attr('disabled', false)
          .on('click', function() {
            window.location.assign('info-user.html');
          });
      }
    });

  /* Al darle click al botón resend code se enviará otro codigo random */
  $resendCode.on('click', function() {
    $('#next-button').attr('disabled', true);
    var newCode = getRandomInt(0, 9);  
    localStorage.setItem('new-code', newCode);  
                
    alert('Tu código: LAB-' + newCode);
  }); 

  /* Al hacer click en este botón se regresará a la vista anterior */
  $redirectorButton.on('click', function() {
    window.location.assign('phone.html');
  });
});