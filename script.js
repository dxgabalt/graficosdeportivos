const departmentsData = [
    {
        name: "Boaco",
        municipalities: ["Boaco", "Camoapa", "San Lorenzo"],
        offers: [
            "Descuento del 20% en entradas para partidos de fútbol local.",
            "2x1 en bebidas en todos los eventos deportivos."
        ]
    },
    {
        name: "Carazo",
        municipalities: ["Dolores", "Jinotepe", "San Marcos"]
    },
    {
        name: "Chinandega",
        municipalities: ["Chinandega", "Chichigalpa", "Corinto"]
    },
    {
        name: "Chontales",
        municipalities: ["Juigalpa", "Acoyapa", "Comalapa"]
    },
    {
        name: "Estelí",
        municipalities: ["Estelí", "Condega", "La Trinidad"]
    },
    {
        name: "Granada",
        municipalities: ["Granada", "Nandaime", "Diriá"]
    },
    {
        name: "Jinotega",
        municipalities: ["Jinotega", "La Concordia", "San Rafael del Norte"]
    },
    {
        name: "León",
        municipalities: ["León", "La Paz Centro", "Nagarote"]
    },
    {
        name: "Madriz",
        municipalities: ["Somoto", "San Lucas", "Las Sabanas"]
    },
    {
        name: "Managua",
        municipalities: ["Managua", "Ticuantepe", "Villa El Carmen"]
    },
    {
        name: "Masaya",
        municipalities: ["Masaya", "Catarina", "Nandasmo"]
    },
    {
        name: "Matagalpa",
        municipalities: ["Matagalpa", "Sébaco", "San Isidro"]
    },
    {
        name: "Nueva Segovia",
        municipalities: ["Ocotal", "Jalapa", "Mozonte"]
    },
    {
        name: "Rivas",
        municipalities: ["Rivas", "Potosí", "San Jorge"]
    },
    {
        name: "Río San Juan",
        municipalities: ["San Carlos", "El Castillo", "San Juan del Norte"]
    },
    {
        name: "RAAN",
        municipalities: ["Bilwi", "Waspam", "Prinzapolka"]
    },
    {
        name: "RAAS",
        municipalities: ["Bluefields", "Corn Island", "El Rama"]
    }
];

// Generar la lista de departamentos en la barra de navegación
const departmentsList = document.querySelector(".departments");

departmentsData.forEach((department, index) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = department.name;
    link.href = `#department${index}`;
    listItem.appendChild(link);
    departmentsList.appendChild(listItem);
});

// Generar la estructura de departamentos y municipios en el contenido
const mainContent = document.querySelector("main");

departmentsData.forEach((department, index) => {
    const departmentSection = document.createElement("section");
    departmentSection.id = `department${index}`;
    departmentSection.classList.add("department");

    const departmentTitle = document.createElement("h2");
    departmentTitle.textContent = department.name;
    departmentSection.appendChild(departmentTitle);

    const municipalitiesList = document.createElement("ul");
    municipalitiesList.classList.add("municipalities");

    department.municipalities.forEach(municipality => {
        const municipalityItem = document.createElement("li");
        const municipalityLink = document.createElement("a");
        municipalityLink.textContent = municipality;
        municipalityLink.href = `#${municipality.split(" ").join("-")}`;
        municipalityItem.appendChild(municipalityLink);
        municipalitiesList.appendChild(municipalityItem);
    });

    departmentSection.appendChild(municipalitiesList);

    // Agregar ofertas exclusivas y una pequeña imagen
    const offersSection = document.createElement("div");
    offersSection.classList.add("offers");

    const offerImage = document.createElement("img");
    offerImage.src = "GD.svg"; // Ruta de la imagen
    offerImage.alt = "Oferta Exclusiva";
    offerImage.classList.add("offer-image"); // Agregar clase para aplicar estilos

    const offerTitle = document.createElement("h3");
    offerTitle.textContent = "Oferta Exclusiva";

    const offerDescription = document.createElement("p");
    offerDescription.textContent = "¡Descuento especial para los residentes de este departamento!";

    offersSection.appendChild(offerImage);
    offersSection.appendChild(offerTitle);
    offersSection.appendChild(offerDescription);

    departmentSection.appendChild(offersSection);

    mainContent.appendChild(departmentSection);
});