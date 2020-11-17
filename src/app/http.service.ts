import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    postData(){
                const body = {};
                return this.http.post('http://localhost:4200/', body);
    }
}
