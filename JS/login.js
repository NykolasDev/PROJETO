function login() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (encontrado) {
        localStorage.setItem("logado", "true");
        window.location.href = "Monitoramento.html";
    } else {
        document.getElementById("erro").innerText = "Usuário ou senha incorretos";
    }
}

function logout() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}