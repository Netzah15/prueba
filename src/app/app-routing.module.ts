import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { CrudComponent } from './components/crud/crud.component';
import { EditArtComponent } from './components/edit-art/edit-art.component';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'edit', component: EditCatComponent},
  {path: 'art', component: ArticuloComponent},
  {path: 'edita', component: EditArtComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
