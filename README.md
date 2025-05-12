# DESAFIO ANGULAR 📍🔥

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de estágio frontend Angular. O objetivo principal era validar conhecimentos em HTML/CSS, Angular e integrações com APIs.

## ✅Etapas Concluídas

As seguintes etapas do desafio foram concluídas:

- [x] 1ª Etapa: HTML/CSS estático e responsivo 
- [x] 2ª Etapa: Criação de projeto Angular e listagem dos posts (notícias) consumindo a WebAPI (GET).
- [x] 3ª Etapa: Criação de página para cadastrar novos posts (notícias) e página de detalhe ("Ler Mais"). (Observação: A funcionalidade "Ler Mais" foi adaptada devido à natureza dos dados da API).
- [x] Funcionalidade de busca de notícias (filtragem na listagem).
- [x] Paginação da listagem de notícias ("Ver Mais" para carregar mais itens).
- [x] Formulário de cadastro de novas notícias (envio local)
- [x] Estilização básica dos componentes para apresentar o layout e a funcionalidade.
- [x] Responsividade básica para diferentes tamanhos de tela.


## 🔴Observações e Dificuldades

Durante a integração com a API fornecida (`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post`), foi identificado que o endpoint de detalhe (`/post/:id`) não retornava informações distintas para cada post, consistindo principalmente em texto aleatório. Devido a essa limitação, a funcionalidade "Ler Mais" foi implementada para expandir o texto completo do post na mesma tela, ao invés de buscar detalhes adicionais.

Também tive dificuldades durante o consertos dos erros que acabava gerando outros erros, no inicio as novas noticias estavam aparecendo na pagina de busca mas após alguns ajustes ela cadastra mas não retorna na pagina inicial

Este foi meu primeiro contato prático com o framework Angular, iniciado no dia 05/05/2025 e finalizado no dia 07/05/2025 com ajustes feitos no dias 10, 11 e 12/05. Foi um projeto desafiador mas que gostei bastante de realizar,depois entendi porque o Angular possui muitas pastas pois na hora de fazer alterações ficou mais facil. 

##   ✅Aprendizados

- Instalção do Angular pelo cmd 
- Utilização do cmd com atualizaçãoes em tempo real (achei muito interessante isso no Angular porque me ajudou bastante a detectar os erros de forma rapida sem o console na maioria das vezes) 
- Quebrar o codigo ajuda a entender melhor onde estamos errando
- Os imports são essencias pra ligar um componente no outro 
- Cada componente tem uma função, o style.css é como se fosse o universal aplicado em toda a pagina ja os componentes aplicam o style 
e o HMTL juntamnete com o ts nos seus respectivos componentes 
- Consegui entender um pouco mais sobre como uma API funciona
- O CTRL + C não serve só pra copiar mas no cmd ele também faz a aplicação parar de rodar



## 🛠️ Tecnologias Utilizadas

-   Angular (versão utilizada: 19)
-   TypeScript
-   HTML
-   CSS
-   Angular CLI
- ChatGPT
- GEMINI
- YOUTUBE (tutoriais)
- Documentação Angular

## 🟢 Atualizações 12/05

- Exibição de imagens aleatorias nos cards, 6 imagens que se repetem
- Centralização do botão "Ler mais"
- Background com opacidade no hover dos cards
- Background com opacidade na barra de pesquisa 
- Mensagem de min 10 caracteres na pagina de cadstro 
- Mensagem de titulo obrigatorio 


## Link para a API

https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post



## 📸 Preview

![preview](https://cdn.prod.website-files.com/62876589ec366575fa309b1e/65d65a2a9abbec35593a1394_Angular%20NES%20Announcement.png)

## 💡 Autora

Feito por [@Naty-Ruols](https://github.com/Naty-Ruols)
