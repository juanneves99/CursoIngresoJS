function Mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
		alert("Si tiene 28 dias");
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Si tiene 31 dias");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Si tiene 30 dias");
		break;
	}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN