/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var importe;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	importe=prompt(importe);
	resultado=parseInt(resultado);
	resultado=importe*0.21;

}

