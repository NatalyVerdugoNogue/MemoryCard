import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TableComponent } from './card/tableOfCards/table.component';
import { EndComponent } from './endGame/end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'end', component: EndComponent },
      { path: 'game', component: TableComponent },
      { path: '', redirectTo: 'game', pathMatch: 'full' },
      { path: '**', redirectTo: 'game', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
