function Mostrar()
{	
	var mascota;
	var cont=0;
	var respuesta="si";
	var contMascotaSi=0;
	var contMascotaNo=0;
	var tipoDeMascota;
	var edad;
	var edadMayor;

	for( ;cont<100 ; ) 
	{
		mascota=prompt("Tiene mascota ?"+cont);
		while(respuesta!="si" && respuesta!="no")
		{
			mascota=prompt("Eso no viene al caso!!, ¿ tiene mascota ?");
		}

		if(respuesta="si")
		{
			contMascotaSi++;
			tipoDeMascota=prompt("Que tipo de mascota es ?");

			while(tipoDeMascota!="perro" && tipoDeMascota!="gato")
			{
				tipoDeMascota=prompt("Tipo de mascota incorrecto, que tipo de mascota es ?");

			}

		}
		else
		{
						
			if(respuesta="no")
			{
				contMascotaNo++;
				edad=prompt("Que edad tiene ?");
			}

			

			while(edadMayor)
			{
				edad=prompt("Usted es viejo/a");
			}
		}

		cont++;
	}

}