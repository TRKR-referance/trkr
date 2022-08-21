import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRouting } from './app.routing';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouting),
    AgGridModule.withComponents([])
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule, NotFoundComponent]
})
export class AppModule {}
