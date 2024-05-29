function somarNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultado = numero1 + numero2
    alert (resultado)
    var teste = document.getElementById("resultado")
    teste.innerHTML=resultado
}
function subtrairNumeros(){
    var numero3 = parseInt(document.getElementById("num3").value);
    var numero4 = parseInt(document.getElementById("num4").value);
    var resultado = numero3 - numero4
    alert (resultado)
    var teste = document.getElementById("resultadoSubtrair")
    teste.innerHTML=resultado
}
function multiplicarNumeros(){
    var numero5 = parseInt(document.getElementById("num5").value);
    var numero6 = parseInt(document.getElementById("num6").value);
    var resultado = numero5 * numero6
    alert (resultado)
    var teste = document.getElementById("resultadoMultiplicar")
    teste.innerHTML=resultado
}
function dividirNumeros(){
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    var resultado = numero7 / numero8
    alert (resultado)
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultado
}

function converterTemperatura1(){
    var numero9 = parseInt(document.getElementById("num9").value);
    var resultado = (numero9 - 32) * (5/9)
    alert (resultado)
    var teste = document.getElementById("resultadocelsius")
    teste.innerHTML=resultado
}
function converterTemperatura2(){
    var numero10 = parseInt(document.getElementById("num10").value);
    var resultado = numero10 * 1.8 + 32
    alert (resultado)
    var teste = document.getElementById("resultadofareneith")
    teste.innerHTML=resultado
}
function areaNumeros1(){
    var numero11 = parseInt(document.getElementById("num11").value);
    var numero12 = parseInt(document.getElementById("num12").value);
    var resultado = numero11 * numero12
    alert (resultado)
    var teste = document.getElementById("resultadoarea1")
    teste.innerHTML=resultado
}
function areaNumeros2(){
    var numero13 = parseInt(document.getElementById("num13").value);
    var resultado = Math.pow(numero13,2) * 3.14
    alert (resultado)
    var teste = document.getElementById("resultadoarea2")
    teste.innerHTML=resultado
}


