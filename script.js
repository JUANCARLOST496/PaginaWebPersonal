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

// Función que se ejecuta al hacer clic o escribir en el campo de búsqueda
function goToHome() {
    // Mostrar la sección de "Inicio"
    showSection('home');
}

// Cuando la página se cargue, mostrar la sección de inicio por defecto
window.onload = function() {
    showSection('home');
};


$(document).ready(function() {
    // Al escribir en el campo de búsqueda
    $('#search').on('input', function() {
        var searchText = $(this).val().toLowerCase();  // Obtener el texto ingresado y convertirlo a minúsculas
        
        // Si el campo de búsqueda está vacío, solo mostrar la sección de inicio
        if (searchText === '') {
            $('.section').hide();      // Ocultar todas las secciones
            $('#home').show();         // Mostrar solo la sección de inicio
        } else {
            // Filtrar las secciones (divs con clase 'section')
            $('.section').each(function() {
                var sectionText = $(this).text().toLowerCase();  // Obtener el texto de cada sección y convertirlo a minúsculas
                
                // Si el texto de la sección contiene el texto de búsqueda
                if (sectionText.indexOf(searchText) !== -1) {
                    $(this).show();  // Mostrar la sección si hay coincidencia
                } else {
                    $(this).hide();  // Ocultar la sección si no hay coincidencia
                }
            });
        }
    });

    // Inicialmente mostrar solo la página de inicio
    $('.section').hide();
    $('#home').show();
});