document.addEventListener('DOMContentLoaded', () => {
    // Vajalikud elemendid
    const svgPaths = document.querySelectorAll('svg path');
    const countryNameDisplay = document.getElementById('riigiNimi');
    const infoLeht = document.getElementById('infoleht');
    const menuToggleContainer = document.getElementById('menu-toggle-container');
    const nav = document.getElementById('nav');
    let countryData = {};

    // Lae riikide info JSON failist
    fetch('info.json')
        .then(response => response.json())
        .then(data => countryData = data)
        .catch(error => console.error('Error loading JSON:', error));

    // Lisa sündmuste kuulajad SVG kaardi elementidele
    svgPaths.forEach(path => {
        path.addEventListener('mouseover', () => handleMouseOver(path.id));
        path.addEventListener('mouseout', handleMouseOut);
        path.addEventListener('click', () => handleClick(path.id));
    });

    // Mis juhtub, kui hiir liigub riigi kohale
    function handleMouseOver(countryId) {
        const info = countryData[countryId];
        if (info) {
            // Kuva riigi info ja video
            countryNameDisplay.textContent = info.Riiginimi;
            countryNameDisplay.style.opacity = 1;

            infoLeht.querySelector('#Pealinn').textContent = `Pealinn: ${info.Pealinn}`;
            infoLeht.querySelector('#Rahvaarv').textContent = `Rahvaarv: ${info.Rahvaarv}`;
            infoLeht.querySelector('#Valuuta').textContent = `Valuuta: ${info.Valuuta}`;
            infoLeht.querySelector('#Keel').textContent = `Keel: ${info.Keel}`;
            
            // Käivita riigi video
            const videoElement = infoLeht.querySelector('#video');
            videoElement.querySelector('source').src = info.video;
            videoElement.load();
            videoElement.play();

            infoLeht.style.opacity = 1;
        }
    }

    // Mis juhtub, kui hiir liigub riigilt välja
    function handleMouseOut() {
        countryNameDisplay.textContent = 'Nimi';
        countryNameDisplay.style.opacity = 0;
        infoLeht.style.opacity = 0;
    }

    // Mis juhtub, kui kasutaja klõpsab riigi alamlehele
    function handleClick(countryId) {
        const info = countryData[countryId];
        if (info) {
            window.location.href = info.alaleht;
        }
    }

    // Näita/peida navigatsioonimenüü hiire asukoha põhjal
    document.addEventListener('mousemove', (event) => {
        menuToggleContainer.style.opacity = event.clientY < 50 ? 0 : 1;
        nav.classList.toggle('show', event.clientY < 50);
    });
});
