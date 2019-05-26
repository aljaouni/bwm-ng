import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import {CamelizePipe} from 'ngx-pipes';
@Injectable()
export class MapService{
  private geoCoder;
  private locationCash: any = {};
  constructor(private camelizePipe: CamelizePipe){}
  private camelize(value: string){
    return  this.camelizePipe.transform(value);
  }
  private cachLocation(location: string, coordinates: any){
    this.locationCash[this.camelize(location)]= coordinates;
  }
  private isCashed(location: string): boolean {
    return this.locationCash[this.camelize(location)];
  }

  public getCodeLocation(location:string): Observable<any>{
    if(!this.geoCoder) {this.geoCoder = new (<any>window).google.maps.Geocoder();}
    return new Observable((observer)=>{
      this.geoCoder.geocode({address: location},(result,status)=>{
        if(status=='OK'){
          const geometry =result[0].geometry.location;
          const coordinates={lat: geometry.lat(),lng: geometry.lng()};
          this.cachLocation(location,coordinates);
          observer.next(coordinates)
        }else{
          observer.error('Error in get location in line 14 from map service')
        }
      });
    });
  }
  public getGeoLocation(location:string): Observable<any>{
      if(this.isCashed(location)){
          return of(this.locationCash[this.camelize(location)]);
      }else{
          return this.getCodeLocation(location);
      }
  }
}
