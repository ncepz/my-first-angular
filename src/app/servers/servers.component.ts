import { Component, OnInit } from '@angular/core';

@Component({
    //selector :'[app-servers]',
    //selector : '.app-servers',
    selector: 'app-servers',
  template: `<app-server></app-server><app-server></app-server>`,
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //serverId: number=10;
  //serverStatus: string='offline';

  //getServerStatus(){
    //return this.serverStatus;
  //}

  constructor() { }

  ngOnInit() {
  }

}
