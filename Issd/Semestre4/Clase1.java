package Issd.Semestre4;

public class Clase1{
    
    class Nodo{
        int info;
        Nodo sig;
    }

    private Nodo raiz; 
    
    Clase1(){
        raiz=null;
    }

    public void insertarPila(int x){
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

    public void insertarCola(int x){
        Nodo nuevo= new Nodo();
        nuevo.info=x;
        nuevo.sig=null;
        if (raiz==null){
            raiz=nuevo;
        } 
        else{
            Nodo reco=raiz;          
            while ( reco.sig!=null) {
                reco=reco.sig;}
            reco.sig=nuevo;
            
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

    public static void main(String[] args) {
        Clase1 listaP= new Clase1();
        Clase1 listaC= new Clase1();

        listaP.insertarPila(123);
        listaP.insertarPila(456);
        listaP.imprimir();

        listaC.insertarCola(123);
        listaC.insertarCola(456);
        listaC.imprimir();
    }
}
