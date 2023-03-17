import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { SidebarComponent } from './page/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './page/content/home/home.component';
import { HeaderComponent } from './page/header/header.component';
import { UploadComponent } from './page/content/upload/upload.component';
import { PageComponent } from './page/page.component';
import { RegisterComponent } from './auth/register/register.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { AnalyzeComponent } from './page/content/analyze/analyze.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatSidenavModule,
    MatInputModule,
    MatSliderModule,

    NgxDropzoneModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
