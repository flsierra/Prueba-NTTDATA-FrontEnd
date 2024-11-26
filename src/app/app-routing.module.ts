import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resumen', component: ResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}
