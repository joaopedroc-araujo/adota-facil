# Plataforma White-Label para ONGs de Animais

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License: GPLv3](https://img.shields.io/badge/license-GPLv3-blue)
![Commercial License](https://img.shields.io/badge/license-commercial-important)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange)

> **Licencça:**  
> Este projeto adota modelo de licenciamento duplo:  

> - GPLv3 para ONGs e uso open source  
> - Licença comercial para uso empresarial/petshops  
> Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades do MVP](#funcionalidades-do-mvp)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Funciona](#como-funciona)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação-e-uso)
- [Contribuindo](#contribuindo)
- [Roadmap](#roadmap)
<!-- - [Licença](#licença) -->
- [Contato](#contato)
- [Créditos e Reconhecimentos](#créditos-e-reconhecimentos)
- [Screenshots](#screenshots)
- [FAQ](#faq)

---

## Visão Geral

Este projeto oferece uma solução gratuita e personalizável para ONGs de cuidado e adoção de animais, permitindo que cada ONG tenha seu próprio site gerenciável, com cadastro de animais, eventos e páginas institucionais.

---

## Funcionalidades do MVP

- Cadastro e aprovação de ONGs
- Personalização visual (logo, cores, nome)
- Cadastro e listagem de animais para adoção
- Cadastro e listagem de eventos
- Edição de páginas institucionais (Sobre, Contato)
- Painel administrativo para cada ONG
- Site público individualizado para cada ONG

---

## Tecnologias Utilizadas

- **Frontend:** Next.js
- **Backend/API:** NestJS
- **Banco de Dados:** Supabase (PostgreSQL)
- **Armazenamento de Imagens:** Supabase Storage
- **CMS:** Strapi
- **Hospedagem:** Vercel (frontend), Railway ou Render (backend/CMS)

---

## Como Funciona

1. ONG solicita cadastro via contato.
2. Admin aprova o cadastro e gera ambiente exclusivo.
3. ONG recebe acesso ao painel administrativo.
4. ONG cadastra animais, eventos e personaliza seu site.
5. Visitantes acessam o site público da ONG para ver animais, eventos e informações.

---

## Estrutura do Projeto

/frontend # Next.js (site público e painel admin ONG)
/backend # NestJS (API multi-tenant)
/cms # Strapi (gestão de conteúdo)
/docs # Documentação e wireframes

---

## Instalação e Uso

1. **Clone o repositório:**
git clone https://github.com/seu-usuario/seu-repo.git

2. **Configure as variáveis de ambiente:**  
Copie `.env.example` para `.env` em cada pasta e preencha com suas credenciais.

3. **Instale as dependências:**
cd frontend && npm install
cd ../backend && npm install
cd ../cms && npm install

4. **Inicie os serviços:**
Em terminais separados
cd frontend && npm run dev
cd backend && npm run start:dev
cd cms && npm run develop


---

## Contribuindo

Contribuições são bem-vindas!

Para contribuir, por favor:

- Faça um fork do projeto
- Crie uma branch para sua feature/correção (`git checkout -b minha-feature`)
- Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
- Faça push para a branch (`git push origin minha-feature`)
- Abra um Pull Request

Confira o arquivo [CONTRIBUTING.md](docs/CONTRIBUTING.md) para mais detalhes.

---

## Roadmap

### ~~Fase 1: Estruturação e Setup Inicial (2 a 4 semanas)~~

- [x] ~~Definir arquitetura do monorepo~~
- [x] ~~Criar estrutura de pastas (frontend, backend, strapi-template, scripts, docs)~~
- [x] ~~Inicializar repositório Git na raiz~~
- [x] ~~Configurar Yarn Workspaces~~
- [x] ~~Adicionar e configurar ESLint, Prettier e outras ferramentas de padronização~~
- [x] ~~Instalar bibliotecas essenciais em cada subprojeto~~

### Fase 2: Configuração dos Ambientes e Templates (3 a 5 semanas)

- [ ] Criar template base do Strapi para instanciar ambientes das ONGs
- [ ] Configurar Next.js (frontend) com estrutura multi-tenant
- [ ] Criar scripts de automação para instanciar novos ambientes Strapi
- [ ] Configurar variáveis de ambiente e arquivos `.env` para cada serviço

### Fase 3: Desenvolvimento do MVP (6 a 10 semanas)

- [ ] Implementar layout básico do frontend (páginas públicas e painel admin ONG)
- [ ] Implementar integração frontend <-> Strapi para CRUD de animais, eventos e páginas institucionais
- [ ] Implementar personalização visual (logo, cores, nome da ONG)
- [ ] Criar endpoints e lógica no backend para automação/orquestração (ex: criação de instância Strapi)
- [ ] Testar fluxo multi-tenant (cada ONG com seu ambiente isolado)
- [ ] Documentar endpoints, scripts e processos internos

### Fase 4: Testes, Ajustes e Deploy Inicial (2 a 4 semanas)

- [ ] Testar fluxo completo de uso (admin, ONG, visitante)
- [ ] Corrigir bugs e ajustar UX/UI conforme necessário
- [ ] Preparar ambiente de deploy (Vercel, Railway, Supabase, etc.)
- [ ] Realizar deploy inicial dos serviços
- [ ] Documentar processo de deploy e onboarding de novas ONGs

### Fase 5: Pós-MVP e Melhorias Futuras (contínuo)

- [ ] Adicionar autenticação avançada (login social, permissões)
- [ ] Implementar notificações (e-mail, alertas)
- [ ] Criar painel de métricas e analytics
- [ ] Adicionar sistema de voluntários
- [ ] Integração com petshops para venda/distribuição ❓ (a definir)

---

### Resumo Visual

| Etapa                              | Duração Estimada   | Status Inicial         |
|-------------------------------------|--------------------|-----------------------|
| Estruturação e Setup                | 2-4 semanas        | 🚧 Em andamento       |
| Configuração de Ambientes/Templates | 3-5 semanas        | ⏳ Próxima etapa      |
| Desenvolvimento do MVP              | 6-10 semanas       | ⏳ Planejado          |
| Testes e Deploy Inicial             | 2-4 semanas        | ⏳ Planejado          |
| Pós-MVP/Melhorias                   | Contínuo           | ⏳ Planejado          |

---

#### Observações

- Os prazos são estimativas para dedicação parcial (apenas algumas horas por semana).
- O cadastro de ONGs e onboarding de parceiros só será aberto após o MVP estar estável.
- O roadmap pode ser ajustado conforme disponibilidade e prioridades.

---

## Contato

Dúvidas, sugestões ou interesse em parceria/comercialização?  
Entre em contato: [jpcosta.araujo@outlook.com](mailto:jpcosta.araujo@outlook.com)

---

## Créditos e Reconhecimentos

- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)
- [Strapi](https://strapi.io/)
- [Railway](https://railway.app/)
- [Next.js](https://nextjs.org/)
- [NestJS](https://nestjs.com/)

---

## Screenshots

>

---

## FAQ

**Como cadastrar minha ONG?**  
Basta preencher o formulário de contato e aguardar aprovação.

**Preciso pagar para usar?**  
Não! O uso é gratuito para ONGs.

**Posso usar para meu petshop?**  
Sim, mas é necessário adquirir uma licença comercial. Entre em contato para mais informações.

---
