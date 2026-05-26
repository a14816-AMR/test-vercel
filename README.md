# 💧 AquaWash — Site de Lavagem Automóvel Premium

Site moderno e responsivo para lavagem de carro com sistema de mensalidade em planos.

## Tecnologias

- **React 18** + **Vite 5**
- **CSS Modules** (estilos encapsulados por componente)
- **Google Fonts** — Barlow + Barlow Condensed

---

## Estrutura do projeto

```
aquawash/
├── index.html                  # Entry point HTML
├── vite.config.js              # Configuração Vite
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # Montagem React
    ├── App.jsx                 # Composição de secções
    ├── styles/
    │   └── global.css          # Variáveis CSS, classes utilitárias, resets
    ├── data/
    │   └── index.js            # Dados: planos, serviços, stats, FAQs, localizações
    └── components/
        ├── Navbar.jsx          # Navbar fixa + menu mobile
        ├── Navbar.module.css
        ├── Hero.jsx            # Secção hero com card flutuante
        ├── Hero.module.css
        ├── Stats.jsx           # Barra de estatísticas
        ├── Stats.module.css
        ├── Services.jsx        # Grid de serviços
        ├── Services.module.css
        ├── Plans.jsx           # Planos de mensalidade (interativo)
        ├── Plans.module.css
        ├── About.jsx           # Sobre a empresa
        ├── About.module.css
        ├── FAQ.jsx             # Accordion de perguntas frequentes
        ├── FAQ.module.css
        ├── Contact.jsx         # Formulário de contacto com validação
        ├── Contact.module.css
        ├── Footer.jsx          # Rodapé completo
        └── Footer.module.css
```

---

## Como correr

### Pré-requisitos
- Node.js 18+ instalado

### Passos

```bash
# 1. Entrar na pasta
cd aquawash

# 2. Instalar dependências
npm install

# 3. Arrancar servidor de desenvolvimento
npm run dev
```

Abrir no browser: **http://localhost:5173**

### Build para produção

```bash
npm run build     # gera pasta dist/
npm run preview   # pré-visualizar build
```

---

## Planos incluídos

| Plano   | Preço    | Lavagens  |
|---------|----------|-----------|
| Básico  | €19,90/mês | 2/mês   |
| Plus ⭐ | €39,90/mês | 4/mês   |
| Premium | €69,90/mês | Ilimitadas |

---

## Personalização

- **Preços e planos** → `src/data/index.js` → `plans[]`
- **Serviços** → `src/data/index.js` → `services[]`
- **Cores globais** → `src/styles/global.css` → `:root { ... }`
- **Cores por componente** → cada `*.module.css`
