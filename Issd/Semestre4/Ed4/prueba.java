public class prueba {

    public void insertar (int x){
        if (x%3==0 && x%2!=0)
        System.out.println(x+"-inicio");
        else
        System.out.println(x+"-final");
    }
    public static void main(String[] args) {
        prueba a=new prueba();
        a.insertar(2);
        a.insertar(3);
        a.insertar(4);
        a.insertar(6);
        a.insertar(8);
        a.insertar(9);
        a.insertar(11);
        a.insertar(12);
        


    }
}