function Mostrar()
{
	//var cont=0;

	/*for(;;)
	{
		console.log(cont);
		cont++;

		if(cont==5)
		{
			break;
		}
	}*/

	var cont=0;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;


	var numero;


	for(;cont<10000;cont++)
	{
		
		var numero=Math.floor((Math.random() * 10) + 1);
		
		
		

		switch(numero)
		{
			case 1:
			cont1++;
			break;			
			case 2:
			cont2++;
			break;			
			case 3:
			cont3++;
			break;			
			case 4:
			cont4++;
			break;			
			case 5:
			cont5++;
			break;			
			case 6:
			cont6++;
			break;			
			case 7:
			if(cont7==7)
			{
				continue;
			}
			cont7++;
			break;			
			case 8:
			cont8++;
			break;			
			case 9:
			cont9++;
			break;			
			case 10:
			cont10++;
			break;
		}

		cont++;
	}

	console.log("La cantidad de unos es "+((cont1/cont)*100)+"%");
	console.log("La cantidad de dos es "+((cont2/cont)*100)+"%");
	console.log("La cantidad de tres es "+((cont3/cont)*100)+"%");
	console.log("La cantidad de cuatros es "+((cont4/cont)*100)+"%");
	console.log("La cantidad de cincos es "+((cont5/cont)*100)+"%");
	console.log("La cantidad de seis es "+((cont6/cont)*100)+"%");
	console.log("La cantidad de sietes es "+((cont7/cont)*100)+"%");
	console.log("La cantidad de ochos es "+((cont8/cont)*100)+"%");
	console.log("La cantidad de nueves es "+((cont9/cont)*100)+"%");
	console.log("La cantidad de diez es "+((cont10/cont)*100)+"%");

	console.log(cont);


}