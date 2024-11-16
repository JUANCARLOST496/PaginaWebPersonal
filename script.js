function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Quitar la clase 'active' de todos los enlaces
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Agregar la clase 'active' al enlace correspondiente
    const activeLink = document.querySelector(`.navbar a[href='#${sectionId}']`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}


window.onload = function() {
    showSection('home');
};

