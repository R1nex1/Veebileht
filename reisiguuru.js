document.addEventListener('DOMContentLoaded', () => {
    const svgPaths = document.querySelectorAll('svg path');
    const countryNameDisplay = document.getElementById('riigiNimi');

    svgPaths.forEach(path => {
        path.addEventListener('mouseover', (event) => {
            const countryName = event.target.getAttribute('name');
            countryNameDisplay.textContent = countryName;
            countryNameDisplay.style.opacity = 1;
        });

        path.addEventListener('mouseout', () => {
            countryNameDisplay.textContent = 'Nimi';
            countryNameDisplay.style.opacity = 0;
        });
    });
});