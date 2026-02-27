# 🚀 Corporate Site — Next.js

Site institucional moderno desenvolvido com foco em **performance, arquitetura escalável, componentização e boas práticas de front-end**, simulando um projeto real de mercado.

O projeto consome dados externos via API (JSON hospedado no GitHub) e implementa funcionalidades comuns em aplicações profissionais, como validação de formulários, busca dinâmica e exibição condicional de conteúdo.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ Next.js (App Router)
- 🎯 TypeScript
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 🧠 Zod (validação de schemas)
- 📝 React Hook Form
- 🌐 Consumo de API externa (RAW GitHub)
- 📦 Axios
- 🔎 Busca dinâmica
- 🧩 Componentização avançada
- 📱 Design responsivo (Mobile First)
- ⚡ Otimização de performance
- 🚀 Deploy na Vercel

---

## 🌐 Fonte de Dados (API)

Os dados do site são consumidos a partir de um arquivo JSON hospedado no GitHub:

👉 `db.json` servido via RAW GitHub

Isso simula uma API REST simples e permite fácil manutenção sem necessidade de backend dedicado.

---

## 📦 Estrutura do Projeto

src/  
├── app/                     # Rotas da aplicação (App Router)  
│   ├── page.tsx             # Página inicial  
│   ├── layout.tsx           # Layout global  
│   ├── globals.css          # Estilos globais  
│   │  
│   ├── about-us/            # Página institucional  
│   │  
│   ├── cases/               # Seção de cases  
│   │   ├── page.tsx         # Listagem de cases  
│   │   └── [slug]/          # Rota dinâmica por case  
│   │        ├── page.tsx    # Página do case  
│   │        └── _components/  
│   │             ├── CaseHero.tsx  
│   │             ├── CaseOverview.tsx  
│   │             ├── CaseChallengesSolution.tsx  
│   │             ├── CaseBigGallery.tsx  
│   │             ├── RelatedCases.tsx  
│   │             └── Tags.tsx  
│   │  
│   └── contact/             # Página de contato  
│  
├── components/              # Componentes reutilizáveis globais  
│   ├── Header/  
│   ├── Hero/  
│   ├── Cases/  
│   ├── Services/  
│   ├── Contact/  
│   └── ui/                  # Componentes base (inputs, botões etc.)  
│  
├── hooks/                   # Hooks customizados (useCases, useSearch etc.)  
├── services/                # Consumo de API  
├── schemas/                 # Schemas Zod  
├── types/                   # Tipagens globais  
├── assets/                  # Imagens e recursos estáticos  
└── lib/                     # Utilidades e helpers  

---

## 🧭 Rotas Dinâmicas e Estrutura por Feature

O projeto utiliza o App Router do Next.js com rotas dinâmicas baseadas em **slug**, permitindo URLs amigáveis e escaláveis.

Exemplo:

```
/cases/[slug]
```

Cada página dinâmica possui seus próprios componentes locais organizados dentro da pasta `_components`, evitando poluição na pasta global e facilitando manutenção.

Esse padrão segue uma arquitetura baseada em domínio (feature-based structure), amplamente utilizada em aplicações reais de médio e grande porte.

---

## 🧠 Arquitetura e Boas Práticas

- Separação clara entre layout, páginas e componentes  
- Hooks customizados para lógica de negócio  
- Componentes reutilizáveis e desacoplados  
- Estrutura preparada para crescimento do projeto  
- Código fortemente tipado com TypeScript  
- Validação robusta com Zod  
- Integração com formulários via React Hook Form  

---

## 🎯 Funcionalidades Implementadas

### ✔️ Layout institucional moderno  
Interface inspirada em projetos reais de agências e empresas.

### ✔️ Consumo de dados externos  
Conteúdo carregado dinamicamente a partir de um JSON remoto.

### ✔️ Exibição condicional de cases  

- Apenas **6 cases exibidos na Home**
- Controle via flag `isFeatured`
- Cases sem a flag não são renderizados na página inicial

---

### ✔️ Sistema de busca

- Campo de pesquisa global  
- Filtragem dinâmica dos cases  
- Atualização em tempo real conforme digitação  
- Implementação via hooks customizados  

---

### ✔️ Formulário de contato

- Inputs componentizados  
- Integração com React Hook Form  
- Validação com Zod  
- Estrutura preparada para integração com backend ou serviços externos  

---

### ✔️ Componentização de UI

Componentes reutilizáveis como:

- Input  
- Button  
- Cards  
- Seções estruturais  
- Elementos de layout  

---

### ✔️ Responsividade completa

Desenvolvido com abordagem **Mobile First**, garantindo ótima experiência em:

- 📱 Smartphones  
- 📲 Tablets  
- 💻 Desktops  
- 🖥️ Monitores widescreen  

---

## ⚡ Performance e SEO

- Otimizações automáticas do Next.js  
- Uso de imagens otimizadas  
- Estrutura semântica  
- Lazy loading de componentes  
- Code splitting automático  
- Preparado para indexação (SEO Friendly)  

---

## 🚀 Deploy

Aplicação hospedada na **Vercel**, aproveitando:

- Edge Network  
- Build otimizado  
- Deploy contínuo  
- Alta performance global  

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/corporate-site-nextjs.git  

### 2️⃣ Entrar na pasta

cd corporate-site-nextjs  

### 3️⃣ Instalar dependências

npm install  

### 4️⃣ Rodar o servidor de desenvolvimento

npm run dev  

O projeto estará disponível em:

👉 http://localhost:3000  

---

## 🏗️ Build para Produção

npm run build  
npm start  

---

## 📌 Objetivo do Projeto

Este projeto foi desenvolvido como prática profissional de front-end, simulando a construção de um site institucional real.

Foco principal:

- Arquitetura escalável  
- Código limpo  
- Componentização avançada  
- Experiência do usuário  
- Consumo de API externa  
- Validação robusta de formulários  
- Boas práticas do ecossistema Next.js  

---

## 👨‍💻 Autor

**Gustavo Santos**

Front-end Developer  
React • Next.js • TypeScript • Tailwind • Laravel  

---

## 📄 Licença

Este projeto é apenas para fins educacionais e de portfólio.