document.addEventListener('DOMContentLoaded', () => {
    const svgPaths = document.querySelectorAll('svg path');
    const countryNameDisplay = document.getElementById('riigiNimi');
    const infoLeht = document.getElementById('infoleht');
    let countryData = {};

    fetch('info.json')
        .then(response => response.json())
        .then(data => countryData = data)
        .catch(error => console.error('Error loading JSON:', error));

    svgPaths.forEach(path => {
        path.addEventListener('mouseover', handleMouseOver);
        path.addEventListener('mouseout', handleMouseOut);
        path.addEventListener('click', handleClick);
    });

    function handleMouseOver(event) {
        const countryId = event.target.id;
        if (countryData[countryId]) {
            const info = countryData[countryId];
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

    function handleClick(event) {
        const countryId = event.target.id;
        if (countryData[countryId]) {
            window.location.href = countryData[countryId].alaleht;
        }
    }
});

document.addEventListener('mousemove', function(event) {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show', event.clientY < 50);
});
