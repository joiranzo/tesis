
    
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;


public class cliente {
    //private List<String>tarjeta=new ArrayList<>();
    //private String marca;
    //private String codigo;
    //private List<String>vencimiento=new ArrayList<>();
    private List<String>formas=new ArrayList<>();
    private Scanner input=new Scanner(System.in);
    //private List<String>efectivo=new ArrayList<>();
    private Map<String,Integer> clavelimitebocha=new HashMap<>();
    private Map<Integer,String>gustos=new HashMap<>();
    private List<List<String>>sabores=new ArrayList<>();


    public cliente(){
      
    }

    public void setlimite(Map limite){
        this.clavelimitebocha=limite; 
        
    }

        public void setsabores(Map gustos){
            this.gustos=gustos;
        }

        public List pedido(){
        System.out.println("ingrese cuantos productos quiere comprar");
        int cantidad=input.nextInt();
        
        for (int i = 0; i < cantidad; i++) {
        
        
            System.out.println("ingrese un producto a la vez: ");
            
            String forma=input.next();
            formas.add(forma);
            for (int j = 1; j < clavelimitebocha.get(forma); j++) {
                
                System.out.println("ESTOS SON LOS SABORES:");
                
                //for (int clave:gustos.keySet()){
                    //System.out.println("\n\n\t"+clave+"-"+gustos.get(clave)+"\t\t"+clave+1+"-"+gustos.get(clave+1)+clave+"\t\t"+clave+2+"-"+gustos.get(clave+2));
                    //System.out.println(forma);
                //}

                for (int g=1;g<gustos.size();g=g+3){
                    System.out.print(g+"-"+gustos.get(g)+"\t\t");
                    System.out.print((g+1)+"-"+gustos.get(g+1)+"\t\t");
                    System.out.println((g+2)+"-"+gustos.get(g+2)+"\t\t");
                }
                
                    
                
                
                    sabores.add(new ArrayList<>(clavelimitebocha.get(forma)));
                
                System.out.println("elija un sabor a la vez");
                if (j!=0) {
                    System.out.println("Maximo: "+clavelimitebocha.get(forma)+")");
                }
                
                System.out.println(j+1+" de "+clavelimitebocha.get(forma));
                String sabor=input.next();
                sabores.get(i).add(j,sabor);
                
                
            }
    
        
        }
    
    
   return formas;
   
    }

    public List sabores(){
        return sabores;
    }

    // public void pago(){
    //     int continuar=2;
    //     while(continuar==2){
    //         if(continuar==2){
    //             System.out.println("Ingrese codigo de tarjeta: ");
    //             codigo=input.next();
    //             System.out.println("ingrese marca:(ejemplo: mastercard....) " );
    //             marca=input.next();
    //             System.out.println("ingrese vencimiento: MM/AA");
    //             System.out.println("MM: ");
    //             String mm=input.next();
    //             System.out.println("AA: ");   
    //             System.out.print(mm+"/");String aa=input.next();
    //             System.out.println(mm+"/"+aa);
    //         }
    //     }
    // }
}

