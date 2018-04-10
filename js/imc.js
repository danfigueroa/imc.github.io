function calcula_imc() {    
    var altura = (document.getElementById('altura').value)/100;
    var peso = parseInt(document.getElementById('peso').value);        
    var quadrado = (altura * altura);        
    var calculo = (peso/quadrado);
    calculo = Math.round(calculo*100)/100;

    if(calculo<18.5) {
      alert("Você está muito abaixo do seu peso ideal com esse indice: " + calculo);
    }

    else if(calculo>=18.5 && calculo<24.9) {
      alert("Você está dentro do limite recomendado com esse indice: " + calculo);
    }

    else if(calculo>=25 && calculo<29.9) {
      alert("Você está acima do peso recomendado com esse indice: " + calculo);
    }
    
    else if(calculo>=30 && calculo<39.9) {
      alert("Você está com obesidade com esse indice: " + calculo);
    }
    
    else if (calculo>40)
      alert("Você estácom obesidade grave com esse indice: " + calculo);
    }