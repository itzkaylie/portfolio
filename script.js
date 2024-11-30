function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');

    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.style.display = 'none';
        }
    });
});
