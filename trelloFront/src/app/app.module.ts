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

//toastr
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//dragNdrop
import {DragulaModule} from 'ng2-dragula';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    DragulaModule
  ],
  providers: [ListService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
