window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener("scroll", aboutAmin);
function aboutAmin() {
    var aboutAmins = document.querySelectorAll('.aboutAmin');
    for (var i = 0; i < aboutAmins.length; i++) {
        var windowHeight = window.innerHeight;
        var aboutAminTop = aboutAmins[i].getBoundingClientRect().top;
        var aboutAminPoint = 150;

        if (aboutAminTop < windowHeight - aboutAminPoint) {
            aboutAmins[i].classList.add('active');
        } else {
            aboutAmins[i].classList.remove('active');
        }
    }
}