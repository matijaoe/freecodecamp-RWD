// function toggleTheme() {
//     var element = document.body 
//     element.classList.toggle("dark-theme");
// }

const toggle = document.getElementById('theme-toggle');
var element = document.body;

const theme = localStorage.getItem('theme');

// if (theme) {
//     body.classList.add(theme);
// }

toggle.onclick = () => {
    if (element.classList.contains("light-theme")) {
        element.classList.replace('light-theme', 'dark-theme');
        // localStorage.setItem('theme', 'dark-theme');
    } else {
        element.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
}


