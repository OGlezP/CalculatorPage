$(document).ready(function() {
var valor1=0, tmp=0, resultadoFinal, val;
var indicaOperacion='', indicador=0;

  $(".tecla-num").on('click', function() {
    tmp += $(this).val();
    $(".resultado").val(tmp.substr(1,tmp.length));
    $(".ac").html('C');
  });

  $(".tecla-operacion").on('click', function() {
    indicaOperacion = $(this).val();
    if(indicador == 0){
        valor1 = $(".resultado").val();
        indicador =1;
    } else if (indicador != 0){
        switch (indicaOperacion) {
          case 'X':
            resultadoFinal = parseFloat(valor1) * parseFloat($(".resultado").val());
            valor1 =  resultadoFinal;
            $(".resultado").val(resultadoFinal);
          break;
          case '+':
            resultadoFinal = parseFloat(valor1) + parseFloat($(".resultado").val());
            valor1 =  resultadoFinal;
            $(".resultado").val(resultadoFinal);
          break;
          case '-':
            resultadoFinal = parseFloat(valor1) - parseFloat($(".resultado").val());
            valor1 =  resultadoFinal;
            $(".resultado").val(resultadoFinal);
          break;
          case '/':
            resultadoFinal = parseFloat(valor1) / parseFloat($(".resultado").val());
            valor1 =  resultadoFinal;
            $(".resultado").val(resultadoFinal);
          break;
        }
      }
    tmp = 0;
  });

  $(".igual").on('click', function() {
   if (indicaOperacion != ''){
      switch (indicaOperacion) {
        case 'X':
          $(".resultado").val(parseFloat(valor1) * parseFloat($(".resultado").val()));
        break;
        case '+':
          $(".resultado").val(parseFloat(valor1) + parseFloat($(".resultado").val()));
        break;
        case '-':
          $(".resultado").val(parseFloat(valor1) - parseFloat($(".resultado").val()));
        break;
        case '/':
          $(".resultado").val(parseFloat(valor1) / parseFloat($(".resultado").val()));
        break;
      }
   }
 indicador = 0;
 tmp = 0;
  });

  $(".ac").on('click', function() {
    $(".resultado").val(0);
    $(".ac").html('AC');
    tmp=0;
    valor1=0;
    resultadoFinal = 0;
    indicador = 0;
    indicaOperacion = '';
  });

  $(".del").on('click', function() {
    $(".resultado").val(0);
    $(".ac").html('AC');
    tmp=0;
    valor1=0;
    resultadoFinal = 0;
    indicador = 0;
    indicaOperacion = '';
  });
});
