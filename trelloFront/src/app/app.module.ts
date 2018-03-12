import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ListService} from './services/list.service';
import {CardService} from './services/card.service';
import {HttpModule} from '@angular/http'; 

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

//font awesome
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { CardComponent } from './card/card.component'


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [ListService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
