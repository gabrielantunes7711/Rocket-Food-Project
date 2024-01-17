# 🍔 Projeto Rocket Food

Rocket Food é um projeto para colocar em prática todos os conceitos desenvolvidos durante o curso Explorer da RocketSeat. Esta aplicação visa criar um sistema onde usuários podem consultar um cardápio de um estabelecimento podendo favoritar seus pratos, assim como o administrador pode adicionar novos pratos.

</br>

![Banner do projeto](/readme-assets/banner.jpg)

# 📑 Sumário

<!--ts-->

- [🍔 Projeto Rocket Food](#-projeto-rocket-food)
- [📑 Sumário](#-sumário)
- [🌐 Status do Projeto](#-status-do-projeto)
- [� Tecnologias usadas](#-tecnologias-usadas)
- [📝 Sobre](#-sobre)
- [🔥 Features](#-features)
  - [🖥️ Front-End](#️-front-end)
  - [⚙️ Back-End](#️-back-end)
- [🛠️ Instalação](#️-instalação)
  - [📥 Baixando o repositório](#-baixando-o-repositório)
  - [🚀 Iniciando o projeto](#-iniciando-o-projeto)
- [👨‍💻 Autor](#-autor)

</br>

# 🌐 Status do Projeto

🚀 Concluído

</br>

# 💻 Tecnologias usadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

</br>

# 📝 Sobre

Bem-vindo ao FoodExplorer, meu projeto final do curso Explorer da Rocketseat!

O FoodExplorer é uma aplicação completa que abrange tanto o front-end quanto o back-end. No front-end, utilizo React, explorando o Vite para criar uma interface responsiva e intuitiva, proporcionando uma experiência agradável ao usuário. Do layout ao consumo da API, cada detalhe é cuidadosamente planejado e implementado.

No back-end, utilizei Node.js para construir a API do FoodExplorer. Usando Express, SQLite, e JWT, crio rotas e funcionalidades essenciais para a gestão de pratos e usuários. Desde a autenticação até a manipulação de dados.

Já no front-end utilizo do React para criar o SPA e do Redux para persistir informações como pratos favoritos.

O projeto abrange o levantamento de requisitos, criação de repositórios no GitHub, configuração do ambiente, desenvolvimento da interface, criação da API, até o deployment usando Netlify e Render.

Este desafio não é apenas técnico,mas também uma celebração do conhecimento adquirido nesta jornada. Estou animado para compartilhar o FoodExplorer!

</br>

# 🔥 Features

Aqui irei expor o que o projeto abranje até o momento, tanto na parte de back-end quanto front-end.

</br>

## 🖥️ Front-End

- [x] Implementação das telas de login, página principal, página de detalhes do prato, e outras conforme o layout disponibilizado no Figma.
- [x] Funcionalidades para visualização de pratos, busca por nome e ingredientes, e interação com os pratos.
- [x] Suporte para upload de imagens durante o cadastro dos pratos.
  - [x] Interface de usuário responsiva de acordo com o conceito Mobile First.
- [x] Implementação de animações e transições para melhorar a experiência do usuário.
- [x] Cadastro de pratos favoritos.
- [x] Integração com a API do back-end para o consumo de dados.

</br>

## ⚙️ Back-End

- [x] Desenvolvimento de uma API que suporte as operações de CRUD (criar, ler, atualizar, e apagar) para os pratos do restaurante.
- [x] Implementação de autenticação JWT para usuários e admin.
- [x] Armazenamento de dados do admin, do restaurante e dos usuários em um banco de dados.
- [x] Implementação de funcionalidades de busca por nome e ingredientes para pratos.
- [x] Desenvolvimento de _endpoints_ para manipulação de pratos, autenticação e outras operações necessárias.
- [x] Implementação de validações de entrada e saída de dados.

</br>

# 🛠️ Instalação

## 📥 Baixando o repositório

1. **Obtenha o URL do Repositório:**

   - Vá até a página principal do [repositório](https://github.com/gabrielantunes7711/Rocket-Food-Project) no GitHub.
   - Clique no botão verde "Code".
   - Copie o URL fornecido.

2. **Abra o Terminal (Linux/Mac) ou Command Prompt (Windows):**

   - No Linux/Mac, use o atalho de teclado `Ctrl + Alt + T`.
   - No Windows, pressione `Win + R`, digite `cmd` e pressione Enter.

3. **Navegue até o Diretório de Destino:**

   Use o comando `cd` para navegar até o diretório onde deseja clonar o repositório. Por exemplo:

   ```bash
   cd caminho/do/seu/diretorio
   ```

4. **Clone o Repositório:**

   Use o comando `git clone` seguido do URL que você copiou anteriormente. Por exemplo:

   ```bash
   git clone https://github.com/gabrielantunes7711/Rocket-Food-Project.git
   ```

5. **Acesse o Diretório Clonado:**

   Navegue para o diretório recém-clonado usando o comando `cd`. Por exemplo:

   ```bash
   cd nome-do-repositorio
   ```

</br>

## 🚀 Iniciando o projeto

1. **Executando Migrations e Seeders**

No diretório da api execute o comando para gerar as migrations:

```bash
npx knex migrate:latest
```

Após gerar as tabelas iremos rodar a seed que irá gerar um usuário administrador e um usuário comum por padrão.

---

**Usuário Adminstrador**  
**Login:** admin@email.com  
**Senha:** 123456

**Usuário Adminstrador**  
**Login:** user@email.com  
**Senha:** 123456

---

Aqui temos duas opções caso queira popular as tabelas com conteúdos de exemplo como categorias e pratos já registrados deverá rodar o seguinte comando:

```bash
npx knex seed:run
```

Caso queira apenas gerar os usuários deverá rodar este comando:

```bash
knex seed:run --specific=01_seedUsers.js
```

2. **Rodando o Back-End**

A partir do diretório da api execute o seguinte script:

```bash
npm run dev
```

3. **Rodando o Front-End**

A partir do diretório da api execute o seguinte script:

```bash
npm run dev
```

A partir de agora a aplicação já está pronta para ser usada.

</br>

# 👨‍💻 Autor

Autor - Gabriel F. Antunes

**Links úteis**

- [Linkedin](https://www.linkedin.com/in/gabriel-antunes-967ba9207/)
- [GitHub](https://github.com/gabrielantunes7711)
- [Whatsapp](https://whatsa.me/5553991785596)

Telefone para contato: +55 53 99178-5596
