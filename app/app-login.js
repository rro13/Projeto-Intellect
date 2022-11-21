function saveUserName(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('name',name);
    window.location.href = "pagina-inicial/pagina-inicial.html";
    var url_atual = window.location.href;
    console.log(url_atual)
}

function getUserName() {
    const userName = document.getElementById('user-name');
    userName.textContent = localStorage.getItem('name');
}

document.addEventListener('submit', saveUserName);

window.onload = getUserName;

