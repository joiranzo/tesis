import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moneda } from '../modelos/moneda';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {
  url='http://localhost:4000/api/monedas/'

  constructor(private http:HttpClient) { }

  getMonedas():Observable<any>{
    return this.http.get(this.url)
  }

  eliminarMoneda(id:string):Observable<any> {
    return this.http.delete(this.url + id)
  }

  guardarMoneda(moneda:Moneda): Observable<any>{
    return this.http.post(this.url,moneda)
  }

  obtenerMoneda(id:String): Observable<any>{
    return this.http.get(this.url + id)
  }

  editarMoneda(id:String, moneda:Moneda): Observable<any>{
    return this.http.put(this.url + id, moneda)
  }
}
