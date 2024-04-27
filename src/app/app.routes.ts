// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';

// export const routes: Routes = [
//     {
//         path: "",
//         component: HomeComponent
//     }
// ];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { RecursosComponent } from './recursos/recursos.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'depoimentos', component: DepoimentosComponent },
  {path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
