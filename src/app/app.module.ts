import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CdkDrag, DragDropModule} from "@angular/cdk/drag-drop";
import { HomeComponent } from './home/home.component';
import { PostitComponent } from './postit/postit.component';
import { Page404Component } from './page404/page404.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    AppComponent,
    PostitComponent,
    HomeComponent,
    HeaderComponent,
    Page404Component,
    LoginComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CdkDrag,
        ReactiveFormsModule,
        DragDropModule

    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
