import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageGuard } from './auth/login-page.guard';
import { LoginGuard } from './auth/login.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AnalyzeExerciseComponent } from './page/content/analyze/analyze-exercise/analyze-exercise.component';
import { AnalyzeComponent } from './page/content/analyze/analyze.component';
import { HomeComponent } from './page/content/home/home.component';
import { UploadComponent } from './page/content/upload/upload.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginPageGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginPageGuard],
  },
  {
    path: '',
    component: PageComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'upload', component: UploadComponent },
      {
        path: 'analyze',
        component: AnalyzeComponent,
      },
      {
        path: 'analyze/:id',
        component: AnalyzeExerciseComponent,
      },
      { path: '*', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
