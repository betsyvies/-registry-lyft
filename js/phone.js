$(document).ready(function form() {
  /* Hacemos un array de objetos para acceder más rapido a la data */
  paises = [
    {pais: 'Perú'},
    {pais: 'México'},
    {pais: 'USA'},
    {pais: 'Colombia'},
  ];

  /* Usaremos esta funcion para arrojar numeros aleatorios */
  function getRandomInt(min, max) {
    return Math.floor(10 + (Math.random() * (max - min)) * 99) + min;
  }

  var $buttonDropdown = $('#button-dropdown');
  var $imgFlags = $('.img-flags');
  var $redirectorButton = $('#redirector-button');

  /* Al hacer click en el dropdown se mostrarán las banderas */
  $buttonDropdown.on('click', function(event) {
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
  $imgFlags.on('click', function() {
    $('#flags-button').attr('src', $(this).attr('src'));

    var dataPostal = $(this).attr('data-postal');

    /* Guardamos el codigo postal del país para mostrarlo en la siguiente vista */
    localStorage.setItem('postalCode', dataPostal);

    $('#input-form')
      .val(dataPostal)
      .focus()
      .on('keyup', function() {
        var valNum = $(this).val().length - dataPostal.length;

        /* Verificamos si se ingreso un número de 10 digitos sin contar el codigo postal */
        if (valNum === 10) {
          $('#next-button')
            .attr('disabled', false)
            /* Al hacer click en el boton se le enviará un codigo random */
            .on('click', function() {
              var random = getRandomInt(0, 9);

              /* Utilizamos este metodo por que nos permite almacenar el valor localmente */
              localStorage.setItem('code', random);
              
              alert('Tu código: LAB-' + random);
              window.location.assign('code.html');
            });
        } else if (valNum > 10 || valNum < 10) {
          $('#next-button')
            .attr('disabled', true);
        }
      });
  });

  /* Al hacer click en este botón se regresará a la vista anterior */
  $redirectorButton.on('click', function() {
    window.location.assign('start.html');
  });
});