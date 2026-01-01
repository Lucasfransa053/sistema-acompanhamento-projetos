import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ProjetosFormComponent } from './pages/projetos-form/projetos-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projetos', component: ProjetosComponent},
    { path: 'novo-projeto', component: ProjetosFormComponent },
    { path: 'editar-projeto/:id', component: ProjetosFormComponent }
];
