import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilerPipe } from './filer.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'music',
    pathMatch: 'full'
  },
  {
    path: 'music',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
