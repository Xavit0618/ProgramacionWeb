let Formulario=document.getElementById("Form1")
let Buscar=document.getElementById("Form2")
let Arreglo=[]

Formulario.addEventListener('submit',function(event){
  event.preventDefault();
  let FData=new FormData(Formulario)
  let d1=FData.get("dato1")

  Arreglo.push(d1)
  console.log(Arreglo)
})
Buscar.addEventListener('submit',function(event){
    event.preventDefault();
    let FData=new FormData(Buscar)
    let d2=FData.get("dato2")

        if (Arreglo.includes(d2)) {
            console.log("Aparece")
        } else {
            console.log("No aparece")
        }
})