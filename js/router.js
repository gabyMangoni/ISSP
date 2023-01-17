const urlPageTitle = 'ISSP'

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a") ) {
        return;
    }
    console.log(e.target.tagName)
    e.preventDefault();
    route();
});

const routes = {
    404: {
        template: "/templates/404.html",
        title: "404 |" + urlPageTitle,
        description: "Page not found",
    },
    "/": {
        template: "/templates/home.html",
        title: "Home | " + urlPageTitle,
        description: "Bienvenidos a ISSP",
    },
    "/sistemas-inscripciones": {
        template: "/templates/sistemas-inscripciones.html",
        title: "Sistema de inscripciones  | " + urlPageTitle,
        description: "Bienvenidos a ISSP",
    },
    "/solicitud-inscripcion": {
        template: "/templates/solicitud-inscripcion.html",
        title: "Solicitud de inscripción | " + urlPageTitle,
        description: "Bienvenidos a ISSP",
    },
    "/info": {
        template: "/templates/info.html",
        title: "Novedades | " + urlPageTitle,
        description: "Bienvenidos a ISSP",
    },
    "/inscripcion": {
        template: "/templates/inscripcion.html",
        title: "Inscripción | " + urlPageTitle,
        description: "Bienvenidos a ISSP",
    },
    "/novedades": {
        template: "/templates/novedades.html",
        title: "Novedades | " + urlPageTitle,
        description: "Bienvenidos a ISSP",
    },
    "/contacto": {
        template: "/templates/contacto.html",
        title: "Contacto | " + urlPageTitle,
        description: " ",
    },

};

//url
const route = (event) => {
    event = event || window.event; 
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();

};

//manejo de rutas
const locationHandler = async () => {
    const location = window.location.pathname; 
   //llamado a la función para el 1 ingreso
    if (location.length == 0) {
        location = "/"
        validation();
    }


    const route = routes[location] || routes[404];
    const html = await fetch(route.template)
    
    .then((response) => response.text());
    document.querySelector('main').innerHTML = html;
   
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


window.onpopstate = locationHandler;
window.route = route;
locationHandler();
