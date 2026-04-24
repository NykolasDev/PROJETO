# 🌡️ Sistema de Monitoramento de Temperatura e Umidade

## 📌 Descrição

Este projeto consiste em um sistema de monitoramento em tempo real de temperatura e umidade, utilizando Arduino, Node-RED e uma interface web desenvolvida com HTML, CSS e JavaScript.

O sistema coleta dados de sensores, processa essas informações e exibe os resultados em uma dashboard interativa, além de disponibilizar um histórico das leituras.

---

## ⚙️ Tecnologias Utilizadas

* 🟢 Arduino
* 🟠 Node-RED
* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript
* 💾 LocalStorage (simulação de banco de dados)

---

## 🚀 Funcionalidades

* 📡 Monitoramento em tempo real
* 🔄 Atualização automática dos dados (a cada 2 segundos)
* 📊 Exibição de temperatura e umidade
* 📋 Histórico de leituras
* 🔐 Sistema de login e cadastro
* 👨‍💻 Acesso administrativo

---

## 🖥️ Como Executar o Projeto

### 1. Configurar o Node-RED

* Inicie o Node-RED
* Configure o endpoint da API:

```
http://SEU_IP:1880/ler
```

### 2. Configurar o Arduino

* Conecte o sensor ao Arduino
* Envie os dados para o Node-RED

### 3. Executar o Frontend

* Abra o arquivo `login.html` no navegador

---

## 🔑 Acesso ao Sistema

### 👤 Usuário comum

* Crie uma conta na tela de cadastro

### 👑 Administrador

* **Usuário:** admin
* **Senha:** VON

---

## 🌐 Estrutura do Projeto

```
📁 projeto
 ├── 📁 HTML
 │   ├── login.html
 │   ├── cadastro.html
 │   ├── Monitoramento.html
 │   └── historico.html
 │
 ├── 📁 CSS
 │   ├── login.css
 │   ├── cadastro.css
 │   └── monitoramento.css
 │
 ├── 📁 JS
 │   ├── login.js
 │   ├── cadastro.js
 │   ├── monitoramento.js
 │   └── historico.js
```

---

## 🔄 Funcionamento do Sistema

1. O sensor coleta os dados de temperatura e umidade
2. O Arduino envia esses dados
3. O Node-RED processa e cria uma API
4. O frontend consome essa API com `fetch`
5. Os dados são exibidos na dashboard em tempo real

---

## ⚠️ Observações

* O sistema utiliza **localStorage**, sendo indicado apenas para testes
* Para uso real, recomenda-se um banco de dados e autenticação no backend

---

## 🧪 Testes

O sistema foi testado nos seguintes cenários:

* ✔ Login válido e inválido
* ✔ Consumo da API
* ✔ Atualização em tempo real
* ✔ Exibição da dashboard
* ✔ Funcionamento do histórico
* ✔ Comportamento com API desligada

---

## 📚 Referências

* Arduino Documentation
* Node-RED Documentation
* MDN Web Docs (Fetch API e LocalStorage)

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos.
