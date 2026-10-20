
const formulario = document.getElementById("formRCalculo")
formulario.addEventListener("submit", function (event) {
    //Evitar recargar la pagina
    event.preventDefault();

    //Capturamos cada uno de los valores del formulario
    let primer= Number(document.getElementById("primer").value);
    let segundo= Number(document.getElementById("segundo").value);
    var esPrimo;
    function esCalc(n) 
    {
        //Comprobamos si es menor que 1 
        if (n <= 1) return "NO PRIMO";

        // El 2 es el único primo par
        if (n === 2) return "PRIMO";

        // Descartamos todos los demás números pares
        if (n % 2 === 0) return "NO PRIMO";

        // Divisible para impares de 3 en adelante, no es primo
        const limite = Math.floor(Math.sqrt(n)); //Calcula la raiz y lo aproxima al entero de menor valor
        for (let i = 3; i <= limite; i += 2) { // itera desde 3 y suma 2 en cada iteracion
            if (n % i === 0) {
                return "NO PRIMO";  //Residuo 0, es divisible para otro numero
            }
        }
        // Divisible unicamente para 1 y el mismo numero, es primo
        return "PRIMO"; 
    }
    function esComp(a,b)
    {
        if (a == b) return " es igual que ";

        if (a < b) return " es menor que ";

        if (a > b) return " es mayor que ";
    }
    // Mostramos en consola
    console.log("El primer numero es:" + primer);
    console.log("El segundo numero es:" + segundo);
    
    //mostrar el resultado en html
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = primer+": Es un numero " + esCalc(primer) +
    "<br>" + segundo +": Es un numero " + esCalc(segundo) +
    "<br>" + "Comparacion: " + primer + esComp(primer,segundo) + segundo;
})