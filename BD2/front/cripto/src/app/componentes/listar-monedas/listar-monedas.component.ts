import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MonedasService } from '../../servicios/monedas.service';
import { Moneda } from '../../modelos/moneda';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-monedas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-monedas.component.html',
  styleUrl: './listar-monedas.component.css'
})
export class ListarMonedasComponent implements OnInit{
  listMonedas:Moneda[]=[]

  constructor (private _monedaService:MonedasService, private toastr:ToastrService){

  }

  ngOnInit(): void {
      this.obtenerMonedas()
  }

  obtenerMonedas(){
    this._monedaService.getMonedas().subscribe(data =>{
      console.log(data)
    this.listMonedas=data},error=>{console.log(error)})
  }

  eliminarMoneda(id:any){
    this._monedaService.eliminarMoneda(id).subscribe(data=>{
      this.toastr.error('La moneda fue eliminada con exito','Moneda #Eliminada')
      this.obtenerMonedas()
    }, error => {console.log(error)})
  }
  
}
