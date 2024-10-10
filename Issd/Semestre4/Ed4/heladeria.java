import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class heladeria {
   
    String []con={"1: 1kilo de helado",
                  "2: 1/2kilo de helado",
                  "3: 1/4 kilo de helado",
                  "4: un cono de una bocha",
                  "5: Un cono de 2 bochas",
                  "6: un cono de 3 bochas"};
      
    cliente cliente=new cliente();
    int []pre={5000,3500,1400,800,1000,1200};
    Map<Integer,String>clavesabor=new HashMap<>();
    Map<String,String>clavecono=new HashMap<>();
    Map<String,Integer>clavelimitebocha=new HashMap<>();
    Map<String,Integer>claveprecio=new HashMap<>();
  //   private Scanner input=new Scanner(System.in);
  //   List<String>formas=new ArrayList<>();
  //   List<String>sabores=new ArrayList<>();
  //   int preciototal=0;
  //   List<String>tarjeta=new ArrayList<>();
     
    
      
    
    public heladeria(){ }
    
    public void oferta(){
      //   List<String>sabores=new ArrayList<>();
      List<String>conos=new ArrayList<>();
      List<Integer>precios=new ArrayList<>();
           
     
      for(String elemento:con){ conos.add(elemento); }
      for( int elemento:pre){ precios.add(elemento); }

      System.out.println("hola.Bienvenido a heladeria ELA2");
      System.out.println("estos son los prductos que tenemos");
      System.out.println("elija algunas de las opciones para que luego pasemos a elegir los sabores: "); 
          
      
      for (int i = 0; i < conos.size(); i=i+3) {
        System.out.println("\n\n\f"+conos.get(i)+" > "+precios.get(i)+"$"+"\t\t\f"+ conos.get(i+1)+" > "+precios.get(i+1)+"$"+"\t\t\f"+conos.get(i+2)+" > "+precios.get(i+2)+"$");
      
      }
  }

  public void sabores (){
  
      clavesabor.put(1,"chocolate");
      clavesabor.put(2,"vainilla");
      clavesabor.put(3,"frutilla");
      clavesabor.put(4,"cereza");
      clavesabor.put(5 ,"banana");
      clavesabor.put(6 ,"frutos del bosque");
      clavesabor.put(7 ,"anana" );
      clavesabor.put(8 ,"pomelo" );
      clavecono.put("1", "1 KILO DE HELADO");
        clavecono.put("2", "1/2 KILO DE HELADO");
         clavecono.put("3", "1/4 KILO DE HELADO");
          clavecono.put("4", "UN CONO CON 1 BOCHA");
           clavecono.put("5", "UN CONO DE 2 BOCHA");
            clavecono.put("6", "UN CONO DE 3 BOCHA");
             clavelimitebocha.put("1",4);
               clavelimitebocha.put("2",2);
                 clavelimitebocha.put("3",1);
                   clavelimitebocha.put("4",1);
                     clavelimitebocha.put("5",2);
                       clavelimitebocha.put("6",3);
                       claveprecio.put("1",5000 );
                        claveprecio.put("2", 3500);
                        claveprecio.put("3",1400 );
                        claveprecio.put("4",800 );
                        claveprecio.put("5",1000 );
                        claveprecio.put("6",1200 );
                        
  cliente.setlimite(clavelimitebocha);
  cliente.setsabores(clavesabor);
  cliente.pedido();
     
     
  }
  
  
   
  //  public void total(){
  //      formas=cliente.pedido();
  //      sabores=cliente.sabores();
  //      System.out.println("total a pagar: ");
  //      System.out.println("PRODUCTO / PRECIO");
  //         for (int i = 0; i < formas.size()-1; i++) {
        
  //         String ordenforma=formas.get(i);
  //          System.out.println(clavecono.get(ordenforma)+" / "+claveprecio.get(ordenforma));
              
  //                   preciototal=preciototal+claveprecio.get(ordenforma);   
                    
              
  //         }
  //           System.out.println("TOTAL: "+preciototal);
  //   }
   
   
   
   
  //  public void ticket(){
  //      System.out.println("NRO DE CUENTA: ");
  //      System.out.println("NOMBRE:");
  //      System.out.println("APELLIDO: ");
       
  //      for (int i = 0; i < formas.size()-1; i++) {
  //           System.out.println("\n\nCOMPRA: ");
  //         String ordenforma=formas.get(i);
  //          System.out.println(clavecono.get(ordenforma));
         
          
  //          for (int j = 0; j < clavelimitebocha.get(ordenforma)-1; j++) {
  //              System.out.println("SABORES: "+clavesabor.get(sabores.get(j))+" / "+clavesabor.get(sabores.get(j+1))+" / "+clavesabor.get(sabores.get(j+2)));
               
               
  //          }
  //               int precio=claveprecio.get(ordenforma);
  //          System.out.println("PRECIO($): "+precio);
           
           
           
         
                        
        
  //                  }
  //      System.out.println("TOTAL: "+preciototal);
       
  //  }
       
   
   
   
   
   
   
   
   
   
       public static void main(String[] args) {
        heladeria hela= new heladeria();
       
        hela.oferta();
        hela.sabores();
       } 
}       
      

   
   
   