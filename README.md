# 📊 Monitoramento de Dados Industriais

## 📌 Descrição

Este projeto tem como objetivo desenvolver um sistema completo de **monitoramento de dados industriais em tempo real**, permitindo a coleta, armazenamento, processamento e visualização das informações.

A solução simula a leitura de sensores (via backend) e exibe os dados em um dashboard interativo.

---

## 🎯 Objetivo

* Monitorar dados de sensores em tempo real
* Armazenar informações em banco de dados
* Exibir dados em uma interface web
* Auxiliar na tomada de decisão com base em dados

---

## 🧩 Tecnologias Utilizadas

### 🔹 Backend

* Node-RED (processamento e API)
* MySQL (armazenamento de dados)

### 🔹 Frontend

* HTML
* CSS
* JavaScript
* Chart.js (gráficos)

### 🔹 Prototipação

* Figma

---

## ⚙️ Funcionamento do Sistema

1. O sistema simula dados de sensores no backend
2. Os dados são processados pelo Node-RED
3. As informações são armazenadas no banco de dados
4. O frontend consome os dados via API
5. Os dados são exibidos em tempo real no dashboard

---

## 📊 Funcionalidades

* 📡 Exibição de dados em tempo real
* 📈 Gráfico de monitoramento
* 📋 Histórico de leituras
* 🧠 Cálculo de média, máximo e mínimo
* 🚨 Sistema de alerta (valores críticos)

---

## 🌐 Estrutura do Projeto

```
/frontend
 ├── index.html
 ├── style.css
 └── script.js
```

---

## 🔌 API

O frontend consome dados do backend através do endpoint:

```
http://localhost:1880/dados
```

---

## 🗄️ Banco de Dados

Tabela utilizada:

* **leituras**

  * id
  * valor
  * data

---

## 👥 Equipe

Projeto desenvolvido em trio com divisão de responsabilidades:

* Backend e Banco de Dados (Victor Hugo)
* Frontend e Dashboard (Nykolas Guimarães)
* Documentação e Diagramas (Otávio Pinheiro)

---

## 🚀 Status do Projeto

✔ Em desenvolvimento
✔ Funcional com simulação de dados
✔ Interface web completa

---

## 📌 Melhorias Futuras

* Integração com ESP32/Arduino
* Filtro por período de dados
* Sistema de login
* Notificações avançadas

---

## 📷 Interface

Dashboard com:

* Valor em tempo real
* Gráfico de dados
* Histórico em tabela
* Estatísticas e alertas

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.
