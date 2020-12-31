import { Component, OnInit, ElementRef, AfterViewInit,Renderer2 } from '@angular/core';
import { HttpService} from './http.service';
import * as L from "leaflet";
import 'leaflet-polylinedecorator';


@Component({
    selector: 'map-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/style.css'],
    providers: [HttpService]
})
export class MapComponent implements OnInit {

    arr = [];
    done: boolean = false;
    map;
      markerIcon = {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40],
          iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"

        })
      };


    constructor(private httpService: HttpService, private renderer: Renderer2) { }


    ngOnInit() {

      this.map = L.map("map").setView([50.45, 30.5], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);


      var polyline = new L.Polyline([]).addTo(this.map);
      // var decorator = new L.polylineDecorator(polyline, {patterns: [{offset: 0, repeat: 20, symbol: L.Symbol.dash({pixelSize: 10})}]}).addTo(map);


      this.map.on("click", e => {

        var marker = L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon).addTo(this.map)

        .bindPopup("<div>"+e.latlng.lat+"</div>" + "<div>"+e.latlng.lng+"</div>");

        polyline.addLatLng(e.latlng);

        var json = marker.toGeoJSON();

        this.arr.push(json);

        marker.on("dblclick", e => {
          this.map.removeLayer(marker);
        });


      });

    }


    submit(){
        this.httpService.postData()
                .subscribe(
                    (data:any) => {this.arr=data; this.done=true;},
                    error => console.log(error)
                );
    }



}
