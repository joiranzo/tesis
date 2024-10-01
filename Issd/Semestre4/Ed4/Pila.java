    

public class Pila{
    
    class Nodo{
        int info;
        Nodo sig;
    }

    private Nodo raiz; 
    
    Pila(){
        raiz=null;
    }

    public boolean vacia(){
        if (raiz==null)
            return true;
        else    
            return false;    
    }

    public void insertar(int x){
        Nodo nuevo= new Nodo();
        nuevo.info=x;
        if (raiz==null){
            raiz=nuevo;
            nuevo.sig=null;
        } 
        else{
            nuevo.sig=raiz;
            raiz=nuevo;
        }
    }

    public void imprimir(){
        Nodo reco =raiz;
        System.out.println("Listado de todos los elementos de la Lista");
        while (reco !=null){
            System.out.print(reco.info + "-");
            reco=reco.sig;
        }
        System.out.println();
    }

    public int extraer(){
        if (!vacia()){
            int informacion=raiz.info;
            raiz=raiz.sig;
            return informacion;
        }   
        else
            return Integer.MAX_VALUE;
    }
  
}

