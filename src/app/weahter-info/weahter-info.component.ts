import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../fetch-data.service';

@Component({
  selector: 'app-weahter-info',
  templateUrl: './weahter-info.component.html',
  styleUrls: ['./weahter-info.component.scss']
})
export class WeahterInfoComponent implements OnInit {
  weatherData: object;
  constructor(private fetch: FetchDataService) { }
  ngOnInit() {
   /*navigator.geolocation.getCurrentPosition(position => {
       this.fetch.getTemp(position.coords.latitude, position.coords.longitude).subscribe(data => {
       this.weatherData = data;
       console.log(data);
     });
   });*/
  }

}
