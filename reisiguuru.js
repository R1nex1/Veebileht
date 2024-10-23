document.querySelectorAll('.allPaths').forEach(e => {
    e.addEventListener('mouseover', function() {
        e.style.fill = 'red'; // Change fill color on mouseover
        document.getElementById('riigiNimi-p').innerText = e.getAttribute('name');
        document.getElementById('riigiNimi').style.opacity = 1;
    });

    e.addEventListener('mouseleave', function() {
        e.style.fill = '#ececec'; // Revert fill color on mouseleave
        document.getElementById('riigiNimi').style.opacity = 0;
    });
});