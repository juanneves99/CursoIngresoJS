/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	if(numeroUno==numeroDos)
	{
		numeroUno*numeroDos;
	}

	if(numeroUno>numeroDos)
	{
		numeroUno-numeroDos;
	}
	else
	{
		if(numeroUno<numeroDos)
		{
			numeroUno+numeroDos;
		}
	}
	document.write(resultado);
}

