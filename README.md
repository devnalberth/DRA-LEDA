# Landing Page · Dra. Leda

Landing page institucional/de conversão da **Dra. Leda**, desenvolvida a partir de um
wireframe pronto no Figma e implementada **pixel-perfect** com o design.

- **Stack:** HTML + CSS puro (sem framework, sem build).
- **Fonte:** [Sora](https://fonts.google.com/specimen/Sora) — importada **localmente** (`assets/fonte/`).
- **Design System :** [LANDING PAGE - DRA LEDA](/css/globals/base.css)

---

## 🎨 Design System

Importado do Figma (apenas **cores** e **tipografia**) para os tokens em
[`css/globals/variables.css`](css/globals/variables.css).

### Cores

| Token              | Hex       | Uso                |
| ------------------ | --------- | ------------------ |
| `--brand-primary`  | `#EFE1D5` | Creme              |
| `--brand-secondary`| `#804A08` | Caramelo escuro    |
| `--brand-third`    | `#9F7659` | Marrom suave       |
| `--brand-four`     | `#F0F0F0` | Off-white          |
| `--brand-five`     | `#4D3A19` | Marrom profundo    |
| `--black`          | `#000000` | —                  |
| `--white`          | `#FFFFFF` | —                  |
| `--color-white`    | `#F2F2F2` | Branco suave       |
| `--gray-200`       | `#121214` | Quase preto        |
| `--gray-900`       | `#C4C4CC` | Cinza claro        |
| `--gray-950`       | `#E1E1E6` | Cinza muito claro  |

### Tipografia — Sora

| Estilo     | Desktop      | Mobile | Peso          |
| ---------- | ------------ | ------ | ------------- |
| H1         | 64px         | 40px   | Bold (700)    |
| H2         | 48px         | 24px   | Bold (700)    |
| H3         | 32px         | 20px   | Bold (700)    |
| H4         | 26px         | —      | Bold (700)    |
| Paragraph  | 16px / 160%  | —      | Regular (400) |
| Span       | 14px / 100%  | —      | Medium (500)  |
| Button     | 18px / 100%  | —      | SemiBold (600)|

> Altura de linha dos títulos: `1.2`. Breakpoint mobile da tipografia: `max-width: 768px`.

---

## 📁 Estrutura

```
DRA LEDA/
├── README.md
├── index.html                  ← (a criar) marcação da página
├── assets/
│   ├── bg-hero.png
│   ├── fonte/                  ← Sora (woff2/woff/ttf/eot/svg) + stylesheet original
│   ├── hero/                   ← imagens do hero por breakpoint (Desktop/Notebook/iPad/Mobile)
│   ├── icons/                  ← faq, plus, arrow, star, one–six (passos numerados)
│   ├── images/
│   │   ├── sobre/
│   │   ├── acompanhamento/
│   │   ├── comofunciona/
│   │   └── depoimentos/
│   └── logo/
├── css/
│   ├── style.css               ← PONTO DE ENTRADA (somente @imports)
│   ├── globals/
│   │   ├── fonts.css           ← @font-face Sora (local, pesos 100–800)
│   │   ├── variables.css       ← design tokens (cores + tipografia)
│   │   ├── reset.css           ← reset moderno
│   │   └── base.css            ← tipografia nos elementos + .container + .sr-only
│   └── sections/               ← (a criar) 1 arquivo CSS por seção
└── editáveis/                  ← arquivos-fonte (.psd)
```

### Seções previstas (inferidas pelos assets)

`Header → Hero → Sobre → Acompanhamento → Como Funciona → Depoimentos → FAQ → Footer`

---

## 🏗️ Arquitetura CSS & convenções

1. **Ponto de entrada único:** [`css/style.css`](css/style.css) contém **apenas `@import`**,
   na ordem fixa: **fontes → tokens → reset → base → seções**.
2. **Um arquivo CSS por seção** em `css/sections/`, ativado por um `@import` em `style.css`
   (já deixados comentados, prontos para descomentar).
3. **Tokens primeiro:** sempre usar as variáveis de `variables.css` — nunca hex/px soltos.
4. **Mínimo de classes no HTML:** a tipografia é aplicada nos próprios elementos
   (`h1`–`h4`, `p`, `small`) em `base.css`. Criar classe só quando houver ganho real de clareza.
5. **Responsivo e mobile-first** onde fizer sentido; tipografia já alterna em `768px`.

---

## 🔌 Acesso ao Figma (Dev Mode MCP)

O design é puxado pelo **Figma Dev Mode MCP Server** (app desktop do Figma → Preferences →
*Enable Dev Mode MCP Server*), que sobe em `http://127.0.0.1:3845/mcp`.

Ferramentas usadas: `get_variable_defs` (tokens), `get_screenshot`, `get_metadata`,
`get_design_context`. Os IDs de node vêm da URL do Figma (`node-id=3-2939` → `3:2939`).

---

## ▶️ Como visualizar

Projeto estático — basta abrir o `index.html` no navegador (ou usar um servidor local,
ex.: extensão *Live Server* do VS Code).

---

## 🗺️ Fluxo de desenvolvimento

A página é construída **seção por seção**, sempre seguindo o wireframe:

1. Puxar o node da seção no Figma (MCP).
2. Implementar o HTML em `index.html` (poucas classes).
3. Criar `css/sections/<nome>.css` usando os tokens.
4. Descomentar o `@import` correspondente em `style.css`.
5. Validar pixel-perfect contra o Figma e a responsividade.

**Status atual:** fundação pronta (cores, tipografia, reset, base). Próximo: **Header + Hero**.
