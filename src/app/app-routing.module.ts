import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscription',
    pathMatch: 'full',
  },
  {
    path: 'inscription',
    loadChildren: () =>
      import('./modules/inscription/inscription-routing.module').then(
        (mod) => mod.InscriptionRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
