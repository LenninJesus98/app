import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksPrivadasComponent } from './components/tasks-privadas/tasks-privadas.component';
import { AccountComponent } from './components/account/account.component';

import { AuthGuard } from "./auth.guard";




const routes: Routes = [
  /*routing aqui se puede cambiar lo que sea para acceder el link
  path: 'first'
   */

  { path: 'login', component: LoginComponent },
  { path: 'tasksprivadas', component: TasksPrivadasComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent/* , canActivate: [AuthGuard] */},
  { path: 'home', component: HomeComponent/* , canActivate: [AuthGuard] */ },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
