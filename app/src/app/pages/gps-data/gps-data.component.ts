import { Component, OnInit, AfterViewInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-gps-data',
  templateUrl: './gps-data.component.html',
  styleUrls: ['./gps-data.component.css', '../../../../node_modules/leaflet/dist/leaflet.css']
})
export class GpsDataComponent implements OnInit, AfterViewInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  value = '100';

//   getData(n: number) {
//     let url = `/api/gps/${n}`;
//     try {
//         let res = await fetch(url, {
//             method: 'GET',
//             mode: 'cors',
//             credentials: 'same-origin'
//         });
//         return await res.text();
//     } catch (error) {
//         console.log(error);
//         return(error);
//     }
// }

//   renderData() {
//     const n = document.querySelector('.numberBox')!.value;
//     const container = document.querySelector('.container');
//     container!.innerHTML = `<p>Data is loading, please wait.</p>`;
//     const data = (n: number) => new Promise (() => this.getData(n));
//     container.innerHTML = `<p style="white-space: pre-wrap;">${data}</p>`;

//     const markers = [];
//     data.split('\n').slice(2).forEach(row => {
//         cells = row.split(',');
//         const marker = [];
//         if (typeof(cells[1]) != 'Number') {
//             cells[2] == 'N' ? marker.push(cells[1]) : marker.push(-cells[1]); // if !N then lat = -lat
//             cells[4] == 'E' ? marker.push(cells[3]) : marker.push(-cells[3]); // if !E then lon = -lon
//             markers.push(marker);
//         }
//     });

//     for(let i = 0; i < markers.length; i++)
//     {
//         try {
//             mark1 = markers[i];
//             mark2 = markers[i+1]
//             if(mark1[0] && mark2[0]) L.polyline([mark1, mark2], {color: 'red'}).addTo(map);
//         } catch (error) {};
//     }
//   }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
