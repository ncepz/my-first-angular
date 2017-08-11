import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssestComponent } from './assest/assest.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        WarningAlertComponent,
        ServerComponent,
        ServersComponent,
        AssestComponent,
        SuccesAlertComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
