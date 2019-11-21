import {Component, OnInit} from '@angular/core';
import {FetchDataService} from '../fetch-data.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-weahter-info',
  templateUrl: './weahter-info.component.html',
  styleUrls: ['./weahter-info.component.scss']
})
export class WeahterInfoComponent implements OnInit {
  weatherData: object;
  img = '';
  name = 'New York';
  constructor(private fetch: FetchDataService , private noty: NotifierService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.fetch.getTempByCoords(position.coords.latitude, position.coords.longitude).subscribe(data => {
        if (data) {
          this.weatherData = data;
        }
      });
    }, () => {
        this.fethByName();
        this.noty.notify('error', 'We couldn\'t define your current position');
    });
  }

  fethByName() {
    this.fetch.getTempByName(this.name).subscribe(data => {
      if (data) {
        this.weatherData = data;
      } else {
        this.noty.notify('error', 'The city name you entered is incorrect');
      }});
  }
}
