import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    AboutComponent,
    CharactersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
