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
  serverName='Testserver';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(() =>{
      this.allowServer = true;
    },2000);
  }

  ngOnInit() {
  }
onCreateServer(){
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverCreationStatus='Server was create! Name is ' + this.serverName;

}
onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
}

}
