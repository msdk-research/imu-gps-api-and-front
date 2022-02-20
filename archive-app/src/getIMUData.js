async function getData() {
    let url = '/api/imu';
    try {
        let res = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin'
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let container = document.querySelector('.container');
    container.innerHTML = `<p>Data is loading, please wait.</p>`;
    let data = await getData();
    container.innerHTML = `<p style="white-space: pre-wrap;">${data.message}</p>`;
}

renderData();