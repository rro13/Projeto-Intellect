function saveUserName(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('name',name);
    window.location.href = "pagina-inicial/pagina-inicial.html";
}

function getUserName() {
    const userName = document.getElementById('user-name');
    userName.textContent = localStorage.getItem('name');
}

document.addEventListener('submit', saveUserName);

window.onload = getUserName;

