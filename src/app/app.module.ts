import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';

import { MapComponent }   from './map.component';
import { NotFoundComponent }   from './not-found.component';



const appRoutes: Routes =[
    { path: '', component: MapComponent},
    { path: '**', component: NotFoundComponent }
];

//

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [
                    AppComponent, NotFoundComponent, MapComponent
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
