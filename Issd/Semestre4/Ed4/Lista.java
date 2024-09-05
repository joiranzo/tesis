 

public class Lista {


    public static void main(String[] args) {
        System.out.println("Prueba de pilas");
        Pila pila1= new Pila();
        pila1.insertar(123);
        pila1.insertar(456);
        pila1.insertar(789);
        pila1.imprimir();
        System.out.println("Extraemos uno de la pila:"+pila1.extraer());
        pila1.imprimir();
    
        System.out.println("Prueba de colas");
        Cola cola1=new Cola();
        cola1.insertar(5);
        cola1.insertar(10);
        cola1.insertar(50);
        cola1.imprimir();
        System.out.println("Extraemos uno de la cola:"+cola1.extraer());
        cola1.imprimir();
    }
}