function voltar() {
    window.location.href = "Monitoramento.html";
}

function buscarDados() {
    fetch("http://10.110.12.13:1880/ler")
        .then(res => res.json())
        .then(data => {

            let tabela = document.getElementById("tabela");
            tabela.innerHTML = "";

            data.reverse().forEach(d => {
                tabela.innerHTML += `
                    <tr>
                        <td>${new Date(d.data).toLocaleString()}</td>
                        <td>${d.temperatura} °C</td>
                        <td>${d.umidade} %</td>
                    </tr>
                `;
            });

        });
}

buscarDados();