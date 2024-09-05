public class Generica {
    
    class Nodo{
        int info;
        Nodo sig;
    }
    private Nodo raiz;

    public Generica(){
        raiz=null;
    }

    //Inserta un nodo en la posición (pos) y con la información que hay en el parámetro x.
    public void insertar(int pos, int x){
        
        Nodo nuevo=new Nodo();
        nuevo.info=x;
        
        if (pos<=cantidad()+1){ 
            if (pos==1){
                nuevo.sig=raiz;
                raiz=nuevo;
            }
        } 
        else{
            if (pos==cantidad()+1){
                Nodo reco=raiz;
                while (reco.sig != null){
                    reco=reco.sig;
                }
                reco.sig=nuevo;
                nuevo.sig=null;
            } else {
                Nodo reco = raiz;
                for (int f=1; f<=pos-2; f++)
                    reco=reco.sig;
                Nodo siguiente=reco.sig;
                reco.sig=nuevo;
                nuevo.sig=siguiente;    
            }
        }
    }

    //Extrae la información del nodo de la posición indicada (pos). Se debe eliminar el nodo.
    public int extraer(int pos){
        int cont=1;
        Nodo reco=raiz;
        if (pos<=cantidad()){
            while (cont!=(pos-1)){
                reco=reco.sig;
                cont++;
            }
    }

    //Borra el nodo de la posición (pos).
    public void borrar(int pos){}
    //Intercambia las informaciones de los nodos de las posiciones pos1 y pos2.
    public void intercambiar(int pos1,int pos2){}
    //Retorna el valor del nodo con mayor información.
    public int mayor() {
        return 0;
     }
    //Retorna la posición del nodo con mayor información.
    public int posMayor(){
        return 0;
    }
    
    //Retorna la cantidad de nodos de la lista.
    public int cantidad(){
        int cont=0;
        if  (raiz==null)
            return cont;
        else{
            while (! (raiz.sig==null)){ 
                cont++;
            }
            return cont;
        }        
    }
    
    //Debe retornar true si la lista está ordenada de menor a mayor, false en caso contrario.
    public boolean ordenada(){
        return false;
    }
    //Debe retornar true si existe la información que llega en el parámetro, false en caso contrario.
    public boolean existe(int info){
        return false;
    }    
    
    //El método vacía debe retornar true si está vacía y false si no lo está.
    public boolean vacia(){
        if (raiz==null) 
           return true;
        else
           return false;    
    }

    private boolean posok(int pos){
        if ((pos<=0) || (pos>cantidad())){
            System.out.println("La posición indicada es incorrecta");
            System.out.println("Debe estar entre 1 y "+cantidad());   
            return false;
        } 
        else
            return true;    
    }


}
