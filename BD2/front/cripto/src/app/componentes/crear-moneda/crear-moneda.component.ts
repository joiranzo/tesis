
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Moneda } from '../../modelos/moneda';
import { ToastrService } from 'ngx-toastr';
import { MonedasService } from '../../servicios/monedas.service';

@Component({
  selector: 'app-crear-moneda',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './crear-moneda.component.html',
  styleUrl: './crear-moneda.component.css'
})
export class CrearMonedaComponent implements OnInit {
  monedaForm:FormGroup
  nombre  :FormControl
  simbolo :FormControl
  precio :FormControl
  var24 :FormControl
  var7d :FormControl
  titulo='CREAR CRIPTOMONEDA'
  id:String | null

  constructor(private router:Router,private toastr:ToastrService,
    private _monedaService:MonedasService, private aRouter:ActivatedRoute){

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
    this.id=this.aRouter.snapshot.paramMap.get('id')
  } 

  ngOnInit(): void {
    this.esEditar()    
  }
  
  alEnviar(){
    const MONEDA:Moneda={
      nombre:this.monedaForm.get('nombre')?.value,
      simbolo:this.monedaForm.get('simbolo')?.value,
      precio:this.monedaForm.get('precio')?.value,
      var24:this.monedaForm.get('var24')?.value,
      var7d:this.monedaForm.get('var7d')?.value,
    }

    if(this.id!==null){
      this._monedaService.editarMoneda(this.id,MONEDA).subscribe(data=>{
        this.toastr.success('La criptomoneda se actualizo correctamente', 'Criptomoneda Atualizada');
      this.router.navigate(['/'])
      },error=>{
        console.log(error)
        this.monedaForm.reset()
        })
    }
    else {
    this._monedaService.guardarMoneda(MONEDA).subscribe(data=>{
      this.toastr.success('La nueva criptomoneda con exito', 'Criptomoneda Registrada');
      this.router.navigate(['/'])
    },error=>{
      console.log(error)
      this.monedaForm.reset()
      })
    }
    
  }
  esEditar(){
    if (this.id!==null){
    this.titulo="EDITAR CRIPTOMONEDA"
    this._monedaService.obtenerMoneda(this.id).subscribe(data=>{
      this.monedaForm.setValue({
        nombre:data.nombre,
        simbolo :data.simbolo,
        precio :data.precio,
        var24 :data.var24,
        var7d :data.var7d,
      })
    })
    }
  }
  
}
