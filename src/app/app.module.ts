import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { TramiteComponent } from './pages/tramite/tramite.component';
import {MatCardModule} from '@angular/material/card';
import { NewTramiteComponent } from './pages/tramite/new-tramite/new-tramite.component';
import {MatDialogModule} from '@angular/material/dialog';

import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { AreasComponent } from './pages/areas/areas.component';
import { NewAreaComponent } from './pages/areas/new-area/new-area.component';
import { EditAreaComponent } from './pages/areas/edit-area/edit-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NopagefoundComponent,
    LoginComponent,
    TramiteComponent,
    NewTramiteComponent,
    AreasComponent,
    NewAreaComponent,
    EditAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
