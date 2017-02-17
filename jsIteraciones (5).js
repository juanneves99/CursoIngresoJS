function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo!= "f" && "m")
	{
		sexo = prompt("reingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;
	alert("El sexo es "+sexo);

}//FIN DE LA FUNCIÓN