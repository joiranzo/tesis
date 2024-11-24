export class Moneda {
    _id?: number;
    nombre:String;
    simbolo: String;
    precio:number;
    var24:number;
    var7d:number;


    constructor(nombre: String, simbolo: String, precio:number, var24:number, var7d:number ) {
        this.nombre=nombre
        this.simbolo=simbolo
        this.precio=precio
        this.var24=var24
        this.var7d=var7d
    }
}