import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-gps-data',
  templateUrl: './gps-data.component.html',
  styleUrls: ['./gps-data.component.css', '../../../../node_modules/leaflet/dist/leaflet.css']
})
export class GpsDataComponent implements OnInit, AfterViewInit {

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  map;

  private streetMaps = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  private wMaps = L.tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    }, 
    overlays: {}
  };

  options = {
    layers: [
      this.streetMaps,
      this.wMaps
    ],
    zoom: 17,
    center: L.latLng(55.742, 37.527)
  };

  value = '100';

  renderData = async () => {
    const container = document.querySelector('.container');
    container!.innerHTML = `<p>Data is loading, please wait.</p>`;
    let data = "";

    try {
      let res = await fetch(`/api/gps/${this.value}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin'
      });
      data = await res.text();
    } catch (err) {
      console.log(err);
    }

    if(data != "") {
      container!.innerHTML = `<p style="white-space: pre-wrap;">${data}</p>`;

      let latlng: [number, number] = [0,0];
      let line: [number, number][] = [];
      let lines: [number, number][][] = [];

      data.split('\n').slice(2).forEach(row => {
        let cells = row.split(',');
        if (cells[1] != '-' && parseInt(cells[1])) {
          cells[2] == 'N' ? latlng[0] = parseInt(cells[1]) : latlng[0] = -parseInt(cells[1]); // if !N then lat = -lat
          cells[4] == 'E' ? latlng[1] = parseInt(cells[3]) : latlng[1] = -parseInt(cells[3]); // if !E then lng = -lng
          // console.log('latlng: ', latlng, '\ntypeof(parseInt(cells[1])): ', typeof(parseInt(cells[1])), '\ncells[1]: ', cells[1]);
          line.push(latlng);
        } else if (line.length > 0) { // a break indicates that we have a new line
          console.log('pushed ', line);
          lines.push(line);
          line = []; // clear array
        }
      });

      console.log('line: ', line, '\nlines: ', lines);
      if (line.length > 0) { lines.push(line) }; // in case there are no breaks after the last line

      if (lines.length > 0) {
          lines.forEach(poly => {
            try {
              console.log('added ', poly, 'to map');
              L.polyline(poly, {color: 'red'}).addTo(this.map);
            } catch (err) {
              console.log(err);
            }
          });

      } else {
        container!.innerHTML = `<p>No valid data in the top ${this.value} lines.</p>`;
      }

    } else {
      container!.innerHTML = `<p>Data is empty, check server logs and data source.</p>`;
    }   
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
