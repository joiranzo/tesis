public class DesemListas {
    
    class Nodo{
        Integer info;
        Nodo ant, sig=null;
    }
    
    private Nodo raiz;

    DesemListas(){
        raiz=null;
    }

    

    public void insertar(int val1,int val2){
        Nodo nuevo1=new Nodo();
        Nodo nuevo2=new Nodo();
        
        nuevo1.info=val1;
        nuevo2.info=val2;

        nuevo1.sig=nuevo2;
        nuevo2.ant=nuevo1;

        if (contar()==4){
            Nodo reco=raiz;
            while (reco.sig != null) {
                
                reco=reco.sig;
            }
            reco.sig=nuevo1;
            nuevo1.ant=reco;
        }
        else{
            if (raiz==null) raiz=nuevo1;
             else{
                nuevo2.sig=raiz;
                raiz.ant=nuevo2;
                raiz=nuevo1;
            }
        }
    }

    public int sumarImpares(){
        int suma=0;
        int cont=0;
        if (raiz!=null){ 
            Nodo reco=raiz;
            while (reco != null) {
                if (cont % 2==0) suma=suma+reco.info;
                cont++;
                reco=reco.sig;
            }
    }
        return suma;
    }

    public void borraExtremos(){
        Nodo reco=raiz;
        
        if (contar()<=2) raiz=null;
        else{ 
            while (reco.sig != null) reco=reco.sig;
            Nodo ant=reco.ant;
            ant.sig=null;
            raiz=raiz.sig;
            raiz.ant=null;
        } 

    }

    public void invertir(){
              
        Nodo reco=raiz;
        while (reco.sig!=null) 
            reco=reco.sig;
        
        Nodo anterior=reco.ant;
        Nodo siguiente=raiz.sig;
        
        reco.sig=raiz.sig;
        reco.ant=null;
        siguiente.ant=reco;
        
        anterior.sig=raiz;
        raiz.ant=anterior;
        raiz.sig=null;
    }

    public void borrarDuplicados(){
        if (raiz!=null){
            Nodo reco=raiz.sig;
            while (reco!=null){
                if (reco.info==raiz.info){
                    Nodo anterior=reco.ant;
                    Nodo siguiente=reco.sig;

                    anterior.sig=reco.sig;
                    if (siguiente!=null) siguiente.ant=reco.ant;
                }
                reco=reco.sig;
            }
            
        }
    }

    public void imprimir(boolean directa){

        Nodo reco=raiz;
        while (reco!=null){
            System.out.print(reco.info+";");
            if (directa) reco=reco.sig;
                else reco=reco.ant;
        }

    }
    
    public int contar(){
        
        int cont=0;
        
        if (raiz==null) return cont;
        else {
            Nodo reco=raiz;
            while (reco != null) {
                cont++;
                reco=reco.sig;
            }    
            return cont;    
        } 

    }

    public static void main(String[] args) {
        DesemListas miLista=new DesemListas();
        miLista.insertar(10,20);
        miLista.insertar(5,8);
        miLista.insertar(200,4);
        miLista.insertar(1,2);
        miLista.imprimir(true);
        
        System.out.println("\nLa suma de los elementos impares es: "+miLista.sumarImpares());
        
        /* ELIMINAR PARA PROBAR
        System.out.println("\nLa lista sin los extremos: ");
        miLista.borraExtremos();
        miLista.imprimir(true);*/

        /* ELIMINAR COMENTARIOS PARA PROBAR
        miLista.invertir();
        System.out.println("\nLa lista con los extremos invertidos es:");
        miLista.imprimir(false); */

        /*Se tiene en cuenta la lista original, sin cambios */
        miLista.borrarDuplicados();
        miLista.imprimir(true);

    }    
}
