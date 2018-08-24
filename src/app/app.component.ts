import { Component } from '@angular/core';
// import { SettingsService } from './services/settings/settings.service';
import { SettingsService, SidebarService, SharedService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  constructor(public _ajustes:SettingsService){

  }
}
