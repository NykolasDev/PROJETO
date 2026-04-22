let dados = [];

function buscarDados() {
    fetch("http://localhost:1880/leituras")
        .then(res => res.json())
        .then(data => {

            let valores = data.reverse();

            let ultimo = valores[valores.length - 1];

          
            document.getElementById("temperatura").innerText = ultimo.temperatura + " °C";

            
            document.getElementById("umidade").innerText = ultimo.umidade + " %";

           
            if (ultimo.temperatura > 30) {
                document.getElementById("temperatura").style.color = "red";
            } else {
                document.getElementById("temperatura").style.color = "#00c3ff";
            }

            
            let tabela = document.getElementById("tabela");
            tabela.innerHTML = "";

            valores.forEach(d => {
                tabela.innerHTML += `
                    <tr>
                        <td>${new Date(d.data).toLocaleString()}</td>
                        <td>${d.temperatura} °C</td>
                        <td>${d.umidade} %</td>
                    </tr>
                `;
            });

        })
        .catch(err => console.error("Erro:", err));
}


setInterval(buscarDados, 2000);


buscarDados();
