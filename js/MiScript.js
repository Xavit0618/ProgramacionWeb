function Calculando(){
            let cliente=document.getElementById("cliente");
            let cantidad=document.getElementById("cantidad");
            let entrega= document.querySelector('input[name="entrega"]:checked');
            let total=0;

            const postres= document.querySelectorAll('input[name="postre"]:checked');          
                postres.forEach(postre=>{
                    total +=Number(postre.value);
                });
            const extras= document.querySelectorAll('input[name="extra"]:checked');
                extras.forEach(extra=>{
                    total+=Number(extra.value);
                });

                alert('Cliente:' + cliente.value + ' Cantidad: ' + cantidad.value + ' Total a pagar: '+ (total * Number(cantidad.value)) + ' Tipo: ' + (entrega ? entrega.value: "No has seleccionado una opción"));
        }

        let Boton2 = document.getElementById("Boton2")

        Boton2.addEventListener('click',function(event){
            event.preventDefault();
            alert("Opción 2 seleccionada...")

        })