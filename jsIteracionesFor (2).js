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
		mascota=prompt("Tiene mascota ?" +cont);
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
			contMascotaNo++;
			edad=prompt("Que edad tiene ?");

			while(edadMayor)
			{
				edad=promp("Usted es viejo/a");
			}
		}

		cont++;
	}
	
    // necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 añios de edad */

}