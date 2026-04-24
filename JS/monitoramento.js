let dados = [];

function buscarDados() {
    fetch("http://10.110.12.13:1880/ler")
        .then(res => {
            if (!res.ok) {
                throw new Error("Erro HTTP: " + res.status);
            }
            return res.json();
        })
        .then(data => {

            let valores = data.dados.reverse();

            let ultimo = valores[0];

            document.getElementById("temperatura").innerText =
                ultimo.temperatura + " °C";

            document.getElementById("umidade").innerText =
                ultimo.umidade + " %";

            if (ultimo.temperatura > 30) {
                document.getElementById("temperatura").style.color = "red";
            } else {
                document.getElementById("temperatura").style.color = "#00c3ff";
            }

        })
        .catch(err => console.error("Erro:", err));
}

setInterval(buscarDados, 2000);
buscarDados();

function irHistorico() {
    window.location.href = "historico.html";
}

