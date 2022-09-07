import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '/mail', component: MailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
