import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
import {CamelizePipe} from 'ngx-pipes';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    MapComponent,
  ],
  exports:[
    MapComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTDtvCGyMFuEiN2DqTmoKPN1H4L6iF6ek'
    }),
    CommonModule,
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
})
export class MapModule { }
//AIzaSyDc4mziYa6GW8kmAM3An7oDaBdIxYy5zZ0
// AIzaSyBGaZAxVbSk6B3e0NQGKgipJPeCfjRhu4U

