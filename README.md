# 🧪 Projeto-Testes-E2E

Projeto desenvolvido para estudos e demonstrações práticas de automação de testes em uma aplicação Flask simples.

O ambiente foi estruturado para separar claramente:

- Backend
- Frontend
- Projetos de automação

Cada ferramenta de automação possui sua própria documentação e configuração independente e estará dentro de sua pasta. As ferramentas de testes utilizadas serão:

- Cypress
- Playwright
- Selenium

---

## 🏗️ Estrutura do Projeto

```text
Projeto-Testes-E2E/
├── Back/
├── Front/
├── Tests/
│   ├── Cypress/
│   ├── Selenium/
│   └── Playwright/
├── requirements.txt
└── README.md
```

---

## ⚙️ Requisitos

- Python 3.10+
- pip

---

## 🚀 Executando a Aplicação

Instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie o backend Flask:

```bash
cd Back
python app.py
```

A aplicação ficará disponível em:

```text
http://127.0.0.1:5000
```

---

## 📚 Documentação dos Testes

Cada framework possui sua própria documentação dentro da respectiva pasta.

```text
Tests/Cypress/cypress.md
Tests/Selenium/selenium.md
Tests/Playwright/playwright.md
```

---

## 📌 Objetivo

Este projeto foi criado com foco educacional para prática e comparação entre diferentes abordagens de automação de testes.
