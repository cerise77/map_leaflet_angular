import { Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';



@Component({
    selector: 'purchase-app',
    template: `
                    <nav [ngClass]="{header:true}">
                      <ul>
                        <li><a routerLink=""></a></li>
                      </ul>
                    </nav>
                    <router-outlet></router-outlet>
               `,
    styleUrls: ['./css/style.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
