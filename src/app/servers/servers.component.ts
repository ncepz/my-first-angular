import { Component, OnInit } from '@angular/core';

@Component({
    //selector :'[app-servers]',
    //selector : '.app-servers',
    selector: 'app-servers',
 // template: `<app-server></app-server><app-server></app-server>`,
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus='NO server was create';
  serverName='';

  constructor() {
    setTimeout(() =>{
      this.allowServer = true;
    },2000);
  }

  ngOnInit() {
  }
onCreateServer(){
      this.serverCreationStatus='Server was create';

}
onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
}

}
