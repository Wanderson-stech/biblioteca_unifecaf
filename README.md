# 📚 Biblioteca UniFECAF

Um sistema web desenvolvido para gerenciamento de biblioteca, com interface moderna, responsiva e escalável.
O projeto foi pensado para oferecer uma experiência de navegação clara, com identidade visual consistente e código organizado, aplicando **boas práticas de desenvolvimento front-end**.

---

## 🚀 Tecnologias Utilizadas

* **Next.js** – framework React para aplicações modernas
* **TypeScript** – tipagem estática e maior robustez
* **Tailwind CSS** – estilização rápida e responsiva
* **ShadCN/UI** – componentes pré-construídos e customizáveis
* **Node.js** – ambiente de execução do back-end
* **MySQL** – banco de dados relacional

---

## ✨ Funcionalidades

* 📖 **Gestão de livros** – cadastro, edição, exclusão e listagem
* 👤 **Gestão de usuários** – registro e autenticação
* 🔐 **Login seguro** – controle de acesso por usuário
* 🔄 **Controle de empréstimos** – empréstimo e devolução de livros
* 📊 **Relatórios de uso** – visão sobre movimentações da biblioteca

---

## 📂 Estrutura do Projeto

```
/app
  ├── globals.css      # Estilos globais
  ├── layout.tsx       # Layout principal
  └── page.tsx         # Página inicial
/components            # Componentes reutilizáveis
/hooks                 # Hooks customizados
/lib                   # Funções utilitárias
/public                # Imagens e ícones
/styles                # Estilos adicionais
```

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

* Node.js 18+
* MySQL instalado e configurado
* Gerenciador de pacotes (npm, yarn ou pnpm)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Wanderson-stech/biblioteca_unifecaf.git

# Acesse a pasta do projeto
cd biblioteca_unifecaf

# Instale as dependências
npm install
# ou
pnpm install

# Configure as variáveis de ambiente no arquivo .env
DATABASE_URL="mysql://usuario:senha@localhost:3306/biblioteca"

# Execute as migrations do banco
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em:
👉 `http://localhost:3000`

---

## 📌 Diferenciais do Projeto

* Estrutura modular e escalável
* Responsividade completa (mobile-first)
* Uso de **Tailwind + ShadCN/UI** para consistência visual
* Organização de código conforme boas práticas do mercado
* Preparado para expansão futura (novas funcionalidades e integrações)


---

## 👨‍💻 Autor

**Francisco Wanderson Silva Miranda**
Estudante de **Análise e Desenvolvimento de Sistemas**

💻 [GitHub](https://github.com/Wanderson-stech)

---
