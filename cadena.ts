export class cadena{

   
   cadena:string;
   cont:number=0;
   cont2:number=1;
   pos:number;
    
    constructor(cadena:string){
        this.cadena=cadena;
    }//constructor


    get cadenaPalindromo():boolean{
        
        return this.cadena.split('').reverse().join('')===this.cadena;

    }//cadenaPalindromo

    get cadenaVocales():number{
        
        for(let x=0; x<this.cadena.length;x++)
        {
    
            if((this.cadena.charAt(x)=='a') || (this.cadena.charAt(x)=='e') || (this.cadena.charAt(x)=='i') || (this.cadena.charAt(x)=='o') || (this.cadena.charAt(x)=='u'))
            {
                this.cont++;
            }//if
        }//for
        return this.cont;

    }//cadenaVocales

    get cadenaLetras():number{

        return this.cadena.length;

    }//cadenaLetras

    get cadenaPalabras():number{

        let cadena = this.cadena.trim();
        let pos = cadena.indexOf(" ");
    
            while (pos!=-1) 
            { 
                this.cont2++;
                pos = cadena.indexOf(" ", pos + 1);
            }//while

            return this.cont2;               

    }//cadenaLetras

}//class