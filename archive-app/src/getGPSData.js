const map = L.map('map').setView([55.742, 37.527], 17);

const openmapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
useCache: true,
crossOrigin: true
})

// const yandexLayer = L.tileLayer('https://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU', {
// attribution: '<a href="https://yandex.ru/" target="_blank">Яндекс</a>',
// maxZoom: 19,
// useCache: true,
// crossOrigin: true
// })

openmapLayer.addTo(map);
// yandexLayer.addTo(map); TODO: Yandex does not work, it seems it needs an API key, see https://github.com/shramov/leaflet-plugins/blob/master/examples/yandex.html

async function getData(n) {
    let url = `/api/gps/${n}`;
    try {
        let res = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        });
        return await res.text();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    const n = document.querySelector('.numberBox').value;
    const container = document.querySelector('.container');
    container.innerHTML = `<p>Data is loading, please wait.</p>`;
    const data = await getData(n);
    container.innerHTML = `<p style="white-space: pre-wrap;">${data}</p>`;

    const markers = [];
    data.split('\n').slice(2).forEach(row => {
        cells = row.split(',');
        const marker = [];
        if (typeof(cells[1]) != 'Number') {
            cells[2] == 'N' ? marker.push(cells[1]) : marker.push(-cells[1]); // if !N then lat = -lat
            cells[4] == 'E' ? marker.push(cells[3]) : marker.push(-cells[3]); // if !E then lon = -lon
            markers.push(marker);
        }
    });

    for(let i = 0; i < markers.length; i++)
    {
        try {
            mark1 = markers[i];
            mark2 = markers[i+1]
            if(mark1[0] && mark2[0]) L.polyline([mark1, mark2], {color: 'red'}).addTo(map);
        } catch (error) {};
    }
}