


# 🧪 Projeto E2E – Flask + Cypress

## Sumário

- [Objetivo](#objetivo)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Requisitos do Ambiente](#requisitos-do-ambiente)
- [Passo 1 — Clonar o Repositório](#passo-1--clonar-o-repositório)
- [Passo 2 — Instalar Dependências do Python (Backend)](#passo-2--instalar-dependências-do-python-backend)
- [Passo 3 — Instalar Dependências do Cypress (Testes)](#passo-3--instalar-dependências-do-cypress-testes)
- [Passo 4 — Executar o Backend Flask](#passo-4--executar-o-backend-flask)
- [Passo 5 — Rodar os Testes E2E](#passo-5--rodar-os-testes-e2e)
- [Casos de Teste Contemplados](#casos-de-teste-contemplados)
- [Dicas e Troubleshooting](#dicas-troubleshooting-e-melhorias)

> Aplicação Flask com testes End-to-End utilizando Cypress.
>
> **Objetivo:** Fornecer um ambiente didático, limpo e direto ao ponto, permitindo que qualquer pessoa (iniciante em QA, desenvolvedores ou estudantes) consiga:
> - Clonar o repositório
> - Instalar dependências (Python e Node)
> - Executar a aplicação localmente
> - Rodar a suíte de testes E2E com poucos comandos

> A estrutura é modular, separando backend e testes para facilitar o entendimento e futuras expansões.


## Estrutura do Projeto

```
Projeto-Testes-E2E/
├── Back/
│   ├── app.py
│   ├── auth_service.py
│   ├── routes.py
│   ├── user_repository.py
│   ├── database/
│   │   └── users.csv
│   └── utils/
│       └── hash_password.py
├── Front/
│   ├── static/
│   │   └── css/
│   │       └── style.css
│   └── templates/
│       ├── home.html
│       └── login.html
├── Tests/
│   └── Cypress/
│       ├── cypress/
│       │   ├── e2e/
│       │   │   └── login.cy.js
│       │   ├── fixtures/
│       │   │   ├── users.json
│       │   │   └── example.json
│       │   └── support/
│       │       ├── commands.js
│       │       └── e2e.js
│       ├── cypress.config.js
│       ├── package.json
│       ├── package-lock.json
│       └── node_modules/
├── requirements.txt
└── venv/
```
## Casos de Teste Contemplados


### Login

1. **Login com sucesso (credenciais válidas)**
	- Usuário e senha corretos, deve acessar a área logada.
2. **Login com email correto e senha incorreta**
	- Mensagem de erro exibida, acesso negado.
3. **Login com email incorreto e senha correta**
	- Mensagem de erro exibida, acesso negado.
4. **Login com ambos email e senha incorretos**
	- Mensagem de erro exibida, acesso negado.
5. **Login com campos vazios**
	- Mensagem de obrigatoriedade exibida, acesso negado.

Os testes utilizam fixture (users.json) e comandos customizados (login) para garantir clareza e reuso.




## Requisitos do Ambiente

Antes de iniciar, certifique-se de possuir instalado:
- **Python** (3.10 ou superior)
- **pip** (gerenciador de pacotes Python)
- **Node.js & npm** (para instalar e rodar o Cypress)

---


## Passo 1 — Clonar o Repositório

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```



## Passo 2 — Instalar Dependências do Python (Backend)

No diretório raiz do projeto, instale as dependências do backend:

```bash
pip install -r requirements.txt
```


## Passo 3 — Instalar Dependências do Cypress (Testes)

Garanta que **Node.js** e **npm** estão instalados:

```bash
node -v
npm -v
```

Depois, vá para a pasta de testes e instale as dependências do Cypress:

```bash
cd Tests/Cypress
npm install
```

Verifique se o Cypress foi instalado:

```bash
npx cypress -v
```

---

## Passo 4 — Executar o Backend Flask

Em outro terminal, na pasta `Back/`, inicie a aplicação Flask:

```bash
cd Back
python app.py
```

---

## Passo 5 — Rodar os Testes E2E

Com o backend rodando, execute os testes Cypress (em outro terminal, dentro de `Tests/Cypress`):


#### Para abrir a interface do Cypress:

```bash
npx cypress open
```

#### Para rodar os testes em modo headless:

```bash
npx cypress run
```

---


## Dicas e Troubleshooting


> **Dicas:**
> - Certifique-se de que o backend Flask está rodando **antes** de executar os testes.
> - Se algum comando não funcionar, confira se está na pasta correta.
> - Se der erro de porta ocupada, pare outros servidores Flask que possam estar rodando.
> - Para dúvidas sobre Cypress: https://docs.cypress.io/

---


---


## Referências Externas

- [Documentação Flask](https://flask.palletsprojects.com/)
- [Documentação Cypress](https://docs.cypress.io/)
- [Boas Práticas de Testes E2E (Cypress)](https://docs.cypress.io/guides/references/best-practices)
- [Guia de Boas Práticas de Testes Automatizados (QA)](https://martinfowler.com/bliki/TestPyramid.html)

Sinta-se à vontade para contribuir ou sugerir melhorias!

