function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	if(edad>17)
	{
		alert("Mayor de edad");
	}
	if(edad>12&&edad<18)
	{
		alert("Adolescente");
	}
	if(edad<12)
	{
		alert("Niño");
	}

}//FIN DE LA FUNCIÓN