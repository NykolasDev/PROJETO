# 📊 Sistema de Monitoramento de Dados Industriais

## 📌 Descrição do Projeto

Este projeto tem como objetivo desenvolver um sistema de monitoramento de dados em tempo real, utilizando sensores conectados a um microcontrolador, com envio, processamento e visualização das informações.

O sistema permite acompanhar variáveis como **temperatura e umidade**, auxiliando na prevenção de falhas e na tomada de decisões.

---

## 🎯 Objetivo

* Coletar dados de sensores
* Enviar os dados para o backend
* Armazenar em banco de dados
* Exibir os dados em uma interface web

---

## 🏗️ Estrutura do Projeto

```
PROJETO/
│
├── CSS/
│   ├── cadastro.css
│   ├── login.css
│   └── monitoramento.css
│
├── HTML/
│   ├── cadastro.html
│   ├── login.html
│   └── Monitoramento.html
│
├── JS/
│   ├── cadastro.js
│   ├── login.js
│   └── monitoramento.js
```

---

## ⚙️ Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Node-RED
* Banco de Dados (MySQL)
* Arduino (para coleta de dados)

---

## 🔌 Funcionamento do Sistema

1. O sensor coleta dados (temperatura e/ou umidade)
2. O Arduino envia os dados para o Node-RED
3. O Node-RED:

   * Processa os dados
   * Armazena no banco de dados
   * Disponibiliza via endpoint
4. O frontend consome os dados usando `fetch()`
5. Os dados são exibidos na tela em tempo real

---

## 🌐 Endpoint

O sistema utiliza um endpoint para comunicação com o backend:

```
http://localhost:1880/ui
```

(ou IP da máquina, caso esteja em rede)

---

## 💻 Funcionalidades

* Tela de login
* Cadastro de usuário
* Monitoramento em tempo real
* Exibição de:

  * Temperatura
  * Umidade
* Histórico de leituras

---

## 🔐 Autenticação

O sistema possui autenticação simples utilizando **localStorage**, permitindo:

* Cadastro de usuários
* Login
* Controle de acesso básico

---

## 📊 Interface

A interface apresenta:

* Valor atual de temperatura
* Valor atual de umidade
* Tabela com histórico de dados

---

## 🚀 Como Executar

1. Iniciar o Node-RED
2. Configurar o fluxo com endpoint `/ui`
3. Rodar o backend
4. Abrir o arquivo `login.html`
5. Criar um usuário
6. Acessar o sistema

---

## 📚 Observações

* O sistema pode ser integrado com sensores reais
* A autenticação pode ser evoluída para backend
* Pode ser expandido com gráficos e alertas

---

## 👥 Integrantes

* Nykolas Guimarães
* Otávio Pinheiro
* Victor Hugo

---

## 📌 Conclusão

O projeto demonstra a integração entre hardware, backend e frontend, permitindo o monitoramento eficiente de dados industriais em tempo real.
