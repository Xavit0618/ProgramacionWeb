function Calculando(){
        let num1 =parseFloat(document.getElementById("num1").value);
        let num2 =parseFloat(document.getElementById("num2").value);
        let operacion = document.querySelector('input[name="operacion"]:checked');

    if (operacion.value=='suma') {
        resultado = num1+num2;
    } else if (operacion.value=='resta') {
        resultado = num1-num2;
    } else if (operacion.value=='multiplicacion') {
        resultado = num1*num2;
    } else if (operacion.value=='division') {
        if(num2==0){
            alert("¡ERROR! No se puede dividir por 0");
            return;
        }
        resultado = num1/num2;
    }
        alert("Resultado: " + resultado);
}