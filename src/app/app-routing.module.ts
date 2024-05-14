import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageGuard } from './auth/login-page.guard';
import { LoginGuard } from './auth/login.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AnalyzeExerciseComponent } from './page/content/analyze/analyze-exercise/analyze-exercise.component';
import { AnalyzeComponent } from './page/content/analyze/analyze.component';
import { HomeComponent } from './page/content/home/home.component';
import { PageComponent } from './page/page.component';
import { UploadExercisesComponent } from './page/content/upload-exercises/upload-exercises.component';
import { ExerciseDescriptionComponent } from './page/content/home/exercise-description/exercise-description.component';
import { LeavePageGuard } from './page/content/upload-exercises/leave-page.guard';

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
      {
        path: 'exercise/:exerciseType',
        component: ExerciseDescriptionComponent,
      },
      {
        path: 'upload',
        component: UploadExercisesComponent,
        canDeactivate: [LeavePageGuard],
      },
      {
        path: 'analysis',
        component: AnalyzeComponent,
      },
      {
        path: 'analysis/:id',
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
