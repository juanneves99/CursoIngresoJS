/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}

function NumerosPrimos ()

{
	var numIngresado;
	var recorrido;
	var anteriores;
	var esPrimo;
	var noEsPrimo;

	numIngresado=document.getElementById('numIngresado').value;
	numIngresado=parseInt(numIngresado);


	for(recorrido=2; recorrido<=numIngresado; recorrido++)
	{
		noEsPrimo="no";

		for(anteriores=2; anteriores<recorrido; anteriores++;)
		{
			if(recorrido%anteriores==0)
			{
				noEsPrimo="si";
				break;
			}
		}

		if(noEsPrimo=="si")
		{

		}
		else
		{
			console.log("el "+recorrido+" es primo");
		}
	}
}
