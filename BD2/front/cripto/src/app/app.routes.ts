import { Routes } from '@angular/router';
import { ListarMonedasComponent } from './componentes/listar-monedas/listar-monedas.component';
import { CrearMonedaComponent } from './componentes/crear-moneda/crear-moneda.component';

export const routes: Routes = [
    {path:'', component:ListarMonedasComponent},
    {path:'crear', component:CrearMonedaComponent},
    {path:'editar/:id', component:CrearMonedaComponent},
    {path:'**', redirectTo:'', pathMatch:'full' }

];
