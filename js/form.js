$(document).ready(function() {
  /* Hacemos un array de objetos para acceder más rapido a la data */
  paises = [
    {pais: 'Perú'},
    {pais: 'México'},
    {pais: 'USA'},
    {pais: 'Colombia'},
  ];

  /* Usaremos esta funcion para arrojar numeros aleatorios */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  /* Al hacer click en el dropdown se mostrarán las banderas */
  $('.button-flags').click(function(event) {
    /* Validamos el texto y mostramos las imagenes */
    for (var i = 0; i <= paises.length; i++) {
      var country = paises[i].pais;    
    
      var $img = $('.img-flags');
              
      /* Cambiamos el atributo src y agregamos los otros atributos a las imagenes */
      $img.eq(i).attr('src', data[country]['image']);
      $img.eq(i).attr('data-postal', data[country]['postal code']);
    }
  });

  /* Cuando se haga click a una de las banderas se mostrará en el dropdown y su codigo
  postal se mostrará en el input */
  $('.img-flags').click(function() {
    $('#flags-button').attr('src', $(this).attr('src'));

    var dataPostal = $(this).attr('data-postal');

    $('#input-form')
      .val(dataPostal)
      .keyup(function() {
        var valNum = $(this).val().length - dataPostal.length;

        /* Verificamos si se ingreso un número de 10 digitos sin contar el codigo postal */
        if (valNum === 10) {
          $('.button-next')
            .removeAttr('disabled')
            /* Al hacer click en el boton se le enviará un codigo random */
            .click(function() {
              var random1 = getRandomInt(0, 9);
              var random2 = getRandomInt(0, 9);
              var random3 = getRandomInt(0, 9);

              data['random'] = [random1, random2, random3];

              alert('Tu código: LAB-' + random1 + random2 + random3);
              window.location.assign('code.html');
            });
        }
      });
  });
});