document.addEventListener('DOMContentLoaded', function() {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 5000,
        refresh: true,
    });
});

document.querySelector('.Themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    AddDarkClassToHTML();
})

function AddDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            document.getElementById("LogoHead").src = "css/img/LogoDark.png";
            document.getElementById("ThemeIcon").src = "css/img/icons/LightButtton.png";
        } else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.Themetoggle image').src('css/img/icons/NightButton.png');
            document.getElementById("LogoHead").src = "css/img/Logo.png";
        }
    } catch (err) {}

}
AddDarkClassToHTML();