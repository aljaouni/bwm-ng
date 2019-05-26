import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapModule } from './common/map/map.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TempComponent } from './temp/temp.component';

import { RentalModule } from './rental/rental.module';

const router: Routes = [
  {path: '' , redirectTo: '/rentals',pathMatch: 'full'},
  {path: 'temp' , component: TempComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    RentalModule,
    MapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
