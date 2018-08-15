import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListBeerComponent } from './list-beer/list-beer.component';
import { SearchBeerService } from './search-beer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchBeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }