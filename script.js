do {var opcionCajero = parseInt(prompt("Elija la opción: 1.Consultar saldo; 2. Extraer; 3. Depositar"))
var saldoUsuario = 9000

switch(opcionCajero){
  //Consulta saldo
  case 1:
        alert("Su saldo es: " + saldoUsuario)
        console.log("Consulta saldo")
        break
  //Extraer
  case 2: 
        var extraer = parseInt(prompt("Indique la suma a extraer"))
        console.log("Extraer")
        if (extraer > saldoUsuario) {
          alert("No puede realizar la extracción: fondos insuficientes");
        } else if (extraer < saldoUsuario) {
          alert("Puede realizar la extracción, su saldo luego de la extracción es de " + (saldoUsuario - extraer));
        }
        break

  //Depositar
  case 3: 
        var depositar = parseInt(prompt("Indique la suma a depositar"))
        console.log("Depositar")
        if( depositar < 0) {
          alert("Indique la suma nuevamente")
        } else if (depositar > 0) {
          alert("La suma indicada se ha depositado correctamentem su saldo luego del depósito es de " + (saldoUsuario + depositar))
        }
        break;

  default: 
        console.log("Elija una de las opciones para continuar")

}

} while (confirm("¿Desea realizar otra operación?"))


alert("Muchas gracias, vuelva pronto")