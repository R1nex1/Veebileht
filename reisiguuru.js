document.addEventListener('DOMContentLoaded', () => {
    const svgPaths = document.querySelectorAll('svg path');
    const countryNameDisplay = document.getElementById('riigiNimi');
    const infoLeht = document.getElementById('infoleht');
    const menuToggleContainer = document.getElementById('menu-toggle-container');
    const nav = document.getElementById('nav');
    let countryData = {};

    fetch('info.json')
        .then(response => response.json())
        .then(data => countryData = data)
        .catch(error => console.error('Error loading JSON:', error));

    svgPaths.forEach(path => {
        path.addEventListener('mouseover', () => handleMouseOver(path.id));
        path.addEventListener('mouseout', handleMouseOut);
        path.addEventListener('click', () => handleClick(path.id));
    });

    function handleMouseOver(countryId) {
        const info = countryData[countryId];
        if (info) {
            countryNameDisplay.textContent = info.Riiginimi;
            countryNameDisplay.style.opacity = 1;

            infoLeht.querySelector('#Pealinn').textContent = `Pealinn: ${info.Pealinn}`;
            infoLeht.querySelector('#Rahvaarv').textContent = `Rahvaarv: ${info.Rahvaarv}`;
            infoLeht.querySelector('#Valuuta').textContent = `Valuuta: ${info.Valuuta}`;
            infoLeht.querySelector('#Keel').textContent = `Keel: ${info.Keel}`;
            
            const videoElement = infoLeht.querySelector('#video');
            videoElement.querySelector('source').src = info.video;
            videoElement.load();
            videoElement.play();

            infoLeht.style.opacity = 1;
        }
    }

    function handleMouseOut() {
        countryNameDisplay.textContent = 'Nimi';
        countryNameDisplay.style.opacity = 0;
        infoLeht.style.opacity = 0;
    }

    function handleClick(countryId) {
        const info = countryData[countryId];
        if (info) {
            window.location.href = info.alaleht;
        }
    }

    document.addEventListener('mousemove', (event) => {
        menuToggleContainer.style.opacity = event.clientY < 50 ? 0 : 1;
        nav.classList.toggle('show', event.clientY < 50);
    });
});
