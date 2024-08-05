document.addEventListener('DOMContentLoaded', function () {
    const downloadLink = document.getElementById('downloadCV');
    
    downloadLink.addEventListener('click', function (event) {
        console.log('CV download link clicked');
    });
});
