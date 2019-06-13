import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import {FormsModule} from '@angular/forms';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import {TodoService} from './services/todo.service';
import { LineThroughDirective } from './directives/line-through/line-through.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    IconButtonComponent,
    InputComponent,
    TextButtonComponent,
    TodoHeaderComponent,
    ItemComponent,
    ListComponent,
    LineThroughDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
