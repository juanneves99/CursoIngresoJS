function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var edad;
	var numeroMaximo;
	var numeroMinimo;
	var nombre;
	var nombreDelMayor;
	var sexo;
	var nota;
	var notaMinima;
	var aprobado;
	var desaprobado;
	var promedioDeNotas;
	var acumuladorDeNotas;

	while(respuesta!='no')
	{
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}
			
			sexo=prompt("Ingrese sexo");
			while(sexo!="f" && sexo!="m")
			{
				sexo=prompt("Ingrese sexo");
			} 
			
			nota=prompt("Ingrese nota");
			nota=parseInt(nota);
			while(nota<0 || nota>11)
			{
				nota=prompt("Ingrese nota");
				nota=parseInt(nota);
			}

			//cantidad de personas aprobadas



			contador=contador+1;
			
			
			if(contador==1)
		{
			numeroMaximo=edad;
			numeroMinimo=edad;
			nombre=nombreDelMayor;

		}
		else
		{
			if(numeroMaximo<edad)
			{
				edad=numeroMaximo;
				nombre=nombreDelMayor;
			}
				if(numeroMinimo>edad)
			{
				edad=numeroMinimo;
			}

				if(sexo)

		}
		
		
		respuesta=prompt("Para salir teclee no");
	
	}




}//FIN DE LA FUNCIÓN
