document.addEventListener('DOMContentLoaded', () => {
    const svgPaths = document.querySelectorAll('svg path');
    const countryNameDisplay = document.getElementById('riigiNimi');
    const infoLeht = document.getElementById('infoleht');
    let countryData = {};

    fetch('info.json')
        .then(response => response.json())
        .then(data => {
            countryData = data;
        })
        .catch(error => console.error('Error loading JSON:', error));

        svgPaths.forEach(path => {
            path.addEventListener('mouseover', (event) => {
                const countryId = event.target.id;
    
                if (countryData[countryId]) {
                    const info = countryData[countryId];
                    countryNameDisplay.textContent = info.Riiginimi; 
                    countryNameDisplay.style.opacity = 1;
    
                    
                    infoLeht.querySelector('#Pealinn').textContent = `Pealinn: ${info.Pealinn}`;
                    infoLeht.querySelector('#Rahvaarv').textContent = `Rahvaarv: ${info.Rahvaarv}`;
                    infoLeht.querySelector('#Valuuta').textContent = `Valuuta: ${info.Valuuta}`;
                    infoLeht.querySelector('#Keel').textContent = `Keel: ${info.Keel}`;
                    infoLeht.style.opacity = 1;
                }
            });
    
            path.addEventListener('mouseout', () => {
                countryNameDisplay.textContent = 'Nimi';
                countryNameDisplay.style.opacity = 0;
                infoLeht.style.opacity = 0;
            });
        });
    });

document.addEventListener('mousemove', function(event) {
    const nav = document.getElementById('nav');
    if (event.clientY < 50) {
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
    }
});