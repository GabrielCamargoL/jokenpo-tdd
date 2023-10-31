# TDD - Jokenpô

<b>Nome:</b> Gabriel Camargo Leite<br>
<b>RA:</b> 1461392111029<br>
<b>Disciplina:</b> Qualidade e Testes de Software<br>
<b>Docente:</b> LUCAS GONCALVES NADALETE<br>

## Descrição

Este projeto é uma implementação TDD do jogo Jokenpô do site [dojopuzzles](https://dojopuzzles.com/problems/jokenpo/), um jogo simples de pedra, papel e tesoura.

## Requisitos

- [Node.js e NPM](https://nodejs.org/en/download)
- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) (opcional)

### Estrutura do projeto

| Pasta | Definição |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| :open_file_folder: src/ | Arquivos com o código fonte do projeto |
| :open_file_folder: src/utils | Arquivos com funções criadas afim de facilitar operações | |
| :page_facing_up: src/jokenpo.ts | Arquivo principal do jogo jokenpo | |
| :open_file_folder: test/ | Arquivos com testes unitários do projeto |
| :page_facing_up: .editorConfig | Arquivo usado para padronizar a codificação do projeto como espaços em identações, pontuações etc | |
| :page_facing_up: jest.config.mjs | Arquivo usado configurar o Jest | |
| :page_facing_up: tsconfig.json | Arquivo usado configurar o Typescript | |
| :page_facing_up: package.json | Arquivo com informações, dependencias e scripts do projeto | |

## Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/GabrielCamargoL/jokenpo-tdd.git

# Entrar no diretório do projeto
$ cd jokenpo-tdd

# Instalar as dependências
$ npm install
     ou
$ yarn install
```

## Exemplo de execução do jogo

```bash
$ npm run dev
    ou
$ yarn dev
```

## Executar testes cobertura de código

```bash
$ npm run test
    ou
$ yarn test
```

# Resultados Obtidos
## Print do Jokenpô
![Print Jokenpô](/doc/jokenpo.png)

## Print dos testes executados
![Print do Jest](/doc/yarn_jest.png)
