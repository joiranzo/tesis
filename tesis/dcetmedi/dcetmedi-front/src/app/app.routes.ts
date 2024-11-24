import { Routes } from '@angular/router';
import { FormAjustesComponent } from './form-ajustes/form-ajustes.component';
import { PagnoencontradaComponent } from './pagnoencontrada/pagnoencontrada.component';


export const routes: Routes = [
    {
        path:'ajustes',
        component:FormAjustesComponent
    },
    {
        path:'**',
        component:PagnoencontradaComponent
    }
];
