function Cadastrar(){
    let usuario = document.getElementById("novoUsuario").value;
    let senha = document.getElementById("novaSenha").value;

    if(usuario == "" || senha == ""){
        document.getElementById("msg").innerText = "Preencha todos os campos";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let existe = usuarios.find(u => u.usuario === usuario );

    if (existe){
        document.getElementById("msg").innerText = "Usuário já existe!"
        return;
    }

    usuarios.push({ usuario, senha });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementeById("msg").innerText = "Conta criada com sucesso!";
}
