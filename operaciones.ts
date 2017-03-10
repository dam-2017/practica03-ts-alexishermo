export class operaciones{

    numero:number;

    constructor(numero:number){
        this.numero = numero;
    }//constructor

    numerosSuma(num:number):number{

        return this.numero+num;
    }//numerosSuma

    numerosResta(num:number):number{

        return this.numero-num;
    }//numerosResta

    numerosFactorial(num:number):number{
        let res=1;
            
            for(var i=1; i<=num; i++) {
                res*= i;
            }//for

        return res;
    }//numerosFactorial

    numerosPrimos(num:number):string{
    
        let valor=num;
		let NumeroPrimo=true;
 
		for(let i=1;i<valor;i++)
		{
			// If factor
			if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
			{
				NumeroPrimo=false;
				break;
			};
		};
 
		if(NumeroPrimo){
            return "El numero es primo";
        }
			
		else{
            return "El numero NO es primo";
        }
			
    
    }//numerosPrimos


}//class