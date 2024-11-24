
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Moneda } from '../../modelos/moneda';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-moneda',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './crear-moneda.component.html',
  styleUrl: './crear-moneda.component.css'
})
export class CrearMonedaComponent {
  monedaForm:FormGroup
  nombre  :FormControl
  simbolo :FormControl
  precio :FormControl
  var24 :FormControl
  var7d :FormControl
  
  constructor(private router:Router,private toastr:ToastrService){
    this.nombre= new FormControl('',[Validators.required]),
    this.simbolo=new FormControl('',[Validators.required]),
    this.precio=new FormControl('',[Validators.required]),
    this.var24=new FormControl('',[Validators.required]),
    this.var7d=new FormControl('',[Validators.required])
    
    this.monedaForm=new FormGroup({
    nombre:this.nombre,
    simbolo :this.simbolo,
    precio :this.precio,
    var24 :this.var24,
    var7d :this.var7d,
    })
  } 

  alEnviar(){
    const MONEDA:Moneda={
      nombre:this.monedaForm.get('nombre')?.value,
      simbolo:this.monedaForm.get('simbolo')?.value,
      precio:this.monedaForm.get('precio')?.value,
      var24:this.monedaForm.get('var24')?.value,
      var7d:this.monedaForm.get('var7d')?.value,
    }
    this.toastr.success('La nueva moneda con exito', 'Moneda Registrada');
    this.router.navigate(['/'])
    
  }
  
  
}
