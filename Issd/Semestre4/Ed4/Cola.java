

public class Cola{

    class Nodo{
        int info;
        Nodo sig;
    }

    private Nodo raiz,fondo;

    Cola(){
        raiz=null;
        fondo=null;
    }


    public boolean vacia(){
        if (raiz==null)
            return true;
        else    
            return false;    
    }

    public void insertar (int info){
        Nodo nuevo;
        nuevo=new Nodo();
        nuevo.info=info;
        nuevo.sig=null;

        if(vacia()){
            raiz=nuevo;
            fondo=nuevo;
        }
        else {
            fondo.sig=nuevo;
            fondo=nuevo;
        }
    }

    public int extraer(){
        if (!vacia()){
            int informacion=raiz.info;
            if (raiz.sig==null){
                raiz=null;
                
            }
            else {
                raiz=raiz.sig;
            }
            return informacion;
        } 
        else{
            return Integer.MAX_VALUE;
        }
    }

    public void imprimir(){
        Nodo reco=raiz;
        System.out.println("Listado de los elementos de la cola.");
        while (reco!=null){
            System.out.print(reco.info+"-");
            reco=reco.sig;
        }
        System.out.println();
    }
}    
