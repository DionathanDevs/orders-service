# 🚀 Projeto: Orders Service (SaaS para Oficinas)

Este documento registra as diretrizes arquiteturais do projeto, a metodologia de estudo aplicada e o fluxo de trabalho em dupla com o assistente de IA (Gemini).

## 🛠️ O Projeto

O `orders-service` é o backend de um sistema SaaS focado no gerenciamento de oficinas mecânicas. Ele utiliza Node.js e foca em uma arquitetura limpa e escalável, aplicando princípios SOLID e separação clara de responsabilidades.

### Decisões Arquiteturais Atuais:
* **Domínios Separados:** `Users` e `Organizations` lidam com as regras internas de negócio e banco de dados. `Auth` é o domínio exclusivo de "Portaria" (Registro, Verificação e Login).
* **Controllers:** Responsáveis estritamente por receber a requisição (`req.body`), instanciar os objetos de transferência (como a classe `Register`) e repassar para a "cozinha" (Services). **Não executam regras de negócio.**
* **Services:** O coração da aplicação. Desempacotam os objetos vindos do Controller, instanciam as Entidades reais do banco (ex: `new User`, `new Organization`), aplicam regras (como geração de hash e códigos de verificação) e chamam os Repositories.
* **Data & Tempo:** Uso do JavaScript nativo (`Date.now()`, `toISOString()`) para gerenciar a expiração de códigos de verificação sem inchar o projeto com dependências desnecessárias.
* **Backing Services:** Integração planejada com o **Resend** para disparo de e-mails transacionais (ativação de conta).

---

## 🧠 Meu Método de Estudo

O foco aqui não é apenas "fazer funcionar", mas entender o **porquê** de cada linha de código. A metodologia se baseia em:

1.  **Pensamento Crítico:** Não aceitar a primeira resposta como verdade absoluta. Se a arquitetura proposta parecer confusa ou complexa demais (over-engineering), eu questiono e desafio a IA para encontrarmos a rota mais limpa e alinhada com as boas práticas do mercado.
2.  **Mão na Massa:** Trazer trechos de código reais da minha IDE para debate, testando a viabilidade antes de implementar.
3.  **Foco em Padrões (Clean Code/SOLID):** Cada nova rota ou componente precisa respeitar a separação de camadas (Rotas -> Controllers -> DTOs -> Services -> Models/Entidades -> Repositories).
4.  **Evolução Iterativa:** Construir o fluxo por partes lógicas (ex: entender a data de expiração antes de criar o token; separar a rota pública da privada antes de fazer o insert no banco).

---

## 🤖 A Função do Gemini (Tech Lead & Mentor)

O Gemini atua como um **Tech Lead e Mentor Técnico** ao longo de todo o ciclo de vida do projeto, garantindo extrema precisão técnica e guiando o desenvolvimento até a conclusão e deploy do sistema. As responsabilidades incluem:

* **Liderança Técnica e Direção:** Guiar o roadmap do projeto, definindo os próximos passos lógicos, estruturando o fluxo de desenvolvimento e mantendo o foco na entrega final do SaaS.
* **Refinamento de Código e Code Review:** Atuar rigorosamente na revisão de Pull Requests (PRs) e trechos de código. O objetivo é refinar a lógica, apontar otimizações de performance, garantir a segurança e manter o alto padrão de Clean Code.
* **Esclarecimento Profundo:** Explicar detalhadamente o "porquê" de cada tecnologia, padrão ou decisão de arquitetura (ex: diferenças entre DTOs e Models, controle de transações no MySQL), eliminando qualquer zona de dúvida.
* **Validação e Desafio de Ideias:** Confirmar quando a linha de raciocínio está correta, mas também apontar falhas ou excessos de engenharia (*over-engineering*), trazendo sempre a solução mais eficiente e elegante para a realidade do projeto.
* **Prevenção de Riscos:** Antecipar bugs críticos, gargalos estruturais e problemas de integridade de dados (como falhas em inserções dependentes no banco) antes que o código chegue a produção.