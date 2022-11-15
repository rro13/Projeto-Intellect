async function getCourses() {
    const response = await fetch('../pagina-cursos/cursos.json');
    if(response.status === 200) {
        const courses = await response.json();
        courses.map(renderCourses)
    }
}

function renderCourses(course) {
    const containerCourses = document.getElementsByClassName('cards-courses')[0];
    const cardCourse = `
    <div class="col-sm-6 col-lg-4 p-2">
        <div class="card">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${course.name}</h5>
                <p class="card-text">${course.description}</p>
                <a href="#" class="card-link align-self-center">Acessar</a>
            </div>
        </div>
    </div>`;

    containerCourses.innerHTML += cardCourse;
}

async function getExperts() {
    const response = await fetch('../experts/experts.json');
    if(response.status === 200) {
        const experts = await response.json();
        experts.map(renderExperts)
    }
}

function renderExperts(expert) {
    const containerExperts = document.getElementById('experts-container');
    const cardExpert = `
    <div class="col">
        <img src="${expert.avatar}" class="card-img-top w-40" style="max-width: 10rem;" alt="Foto de perfil de ${expert.name}">
        <div class="card-body">
            <h5 class="expert-name pt-2">${expert.name}</h5>
            <p class="expert-description">${expert.description}</p>
        </div>
    </div>`

    containerExperts.innerHTML += cardExpert;
}

window.addEventListener("load", getCourses);
window.addEventListener("load", getExperts);