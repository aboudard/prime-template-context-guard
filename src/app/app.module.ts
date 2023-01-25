import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './comp/todos/todos.component';

import { TableModule } from 'primeng/table';
import { TableRowDirective } from './directives/table-row.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TableRowDirective
  ],
  imports: [
    TableModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
