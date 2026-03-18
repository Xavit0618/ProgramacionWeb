let Formulario=document.getElementById("Form1");

Formulario.addEventListener('submit',function(event){
    event.preventDefault();
    let FData=new FormData(Formulario);
    let d1 = parseInt(FData.get("dato1"));
    let d2 = parseInt(FData.get("dato2"));
    let d3 = parseInt(FData.get("dato3"));
    let suma=d1+d2+d3;

    console.log("La suma en total es:" +suma);

    if (suma>10) {
        alert("La suma es mayor que 10")
    } else{
        alert("La suma es menor que 10")
    }
})