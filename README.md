
# Jogo da Velha - Documentação do Projeto

## Visão Geral do Projeto

Este projeto consiste em um **Jogo da Velha (Tic Tac Toe)** desenvolvido com **React puro (JavaScript)** e **Styled-components**, com funcionalidades modernas como:

- Alternância entre jogadores com contagem regressiva automática.
- Contador de rodadas e placar persistido via `localStorage`.
- Sistema de personalização de cores (X, O, texto, tabuleiro, fundo).
- Componente de feedback com `Toast` para ações de salvar/carregar.
- Design responsivo e estilização via `styled-components`.
- Estruturação modularizada para facilitar manutenção e escalabilidade.

---

## Estrutura de Pastas

```
src/
├── assets/                # Recursos estáticos (ícones, imagens)
├── components/
│   ├── Board/            # Componente principal do jogo
│   │   ├── index.jsx        # Lógica e interface do tabuleiro
│   │   └── styles.js        # Estilos do tabuleiro
│   ├── Footer/           # Rodapé do projeto com botões de salvar/carregar
│   ├── Header/           # Cabeçalho com título e componente de personalização de cores no projeto
│   └── Toast/            # Componente de notificação visual (popup)
├── hooks/
│   └── useGameLogic.js     # Hook customizado com a lógica principal do jogo
├── styles/
│   ├── defaultTheme.js     # Cores padrões do board
│   └── GlobalStyle.js      # Estilos globais do app
├── utils/
│   ├── menuItems.js        # Lista de opções para o menu de personalização
│   └── storage.js          # Funções de persistência utilizando localStorage
├── App.jsx                 # Componente raiz que monta o app
├── index.css               # Estilos base do projeto
├── main.jsx
```

---

## Justificativa das Decisões Técnicas

- **Styled-components:** Permite estilização dinâmica com acesso direto a propriedades como `colors`, facilitando a personalização de temas e escopo de estilo local.
- **Persistência com localStorage:** Simples de implementar e suficiente para armazenar dados de jogo (placar).
- **Modularização dos componentes:** Componentes foram divididos em pastas específicas (Board, Footer, Header, Toast) para garantir clareza e escalabilidade.
- **Hook personalizado:** `useGameLogic.js` concentra toda a lógica de verificação e alternância de turnos, mantendo o componente Board limpo e focado na interface.
- **Sem uso de bibliotecas de UI:** Toda a estilização foi feita de forma personalizada, para manter controle total sobre a identidade visual e simplificar o bundle final.

---

## Instruções de Build e Execução

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** instalado globalmente

### Instalação

```bash
npm install
```

### Execução do Projeto

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173)

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

---
