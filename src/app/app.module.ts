import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';

import { SidebarComponent } from './page/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './page/content/home/home.component';
import { HeaderComponent } from './page/header/header.component';
import { UploadComponent } from './page/content/upload/upload.component';
import { PageComponent } from './page/page.component';
import { RegisterComponent } from './auth/register/register.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { AnalyzeComponent } from './page/content/analyze/analyze.component';
import { CardComponent } from './page/content/analyze/card/card.component';
import { PopupComponent } from './common/popup/popup.component';
import { AnalyzeExerciseComponent } from './page/content/analyze/analyze-exercise/analyze-exercise.component';
import { UploadExercisesComponent } from './page/content/upload-exercises/upload-exercises.component';
import { UploadExercisesPreviewComponent } from './page/content/upload-exercises/upload-exercises-preview/upload-exercises-preview.component';
import { ExerciseTypePipe } from './pipe/exercise-type.pipe';
import { ExerciseTypeComponent } from './page/common/exercise-type/exercise-type.component';
import { ChooseTypeComponent } from './page/content/analyze/choose-type/choose-type.component';
import { ExerciseTooltipComponent } from './page/common/exercise-tooltip/exercise-tooltip.component';
import { ExerciseDescriptionComponent } from './page/content/home/exercise-description/exercise-description.component';
import { ImageViewerComponent } from './common/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UploadComponent,
    PageComponent,
    RegisterComponent,
    AnalyzeComponent,
    CardComponent,
    PopupComponent,
    AnalyzeExerciseComponent,
    UploadExercisesComponent,
    UploadExercisesPreviewComponent,
    ExerciseTypePipe,
    ExerciseTypeComponent,
    ChooseTypeComponent,
    ExerciseTooltipComponent,
    ExerciseDescriptionComponent,
    ImageViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    MatSidenavModule,
    MatInputModule,
    MatSliderModule,
    MatStepperModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,

    NgxDropzoneModule,
    MtxTooltipModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 7000 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
