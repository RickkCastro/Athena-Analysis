<h1 align='center'> 
  Athena Analysis, O poder da IA para otimizar seu currículo. :bulb::blue_heart:
</h1>


<p align='center'>
  <image src="https://github.com/RickkCastro/Athena-Analysis/assets/75331070/dfdd2e9d-eb79-491f-8969-6f1a057ff6db" width="70%"/>
</p>

<h2>
  🧐 O que é?
</h2>
<p>
  Desenvolvido para auxiliar na jornada profissional, o projeto Athena Analysis utiliza o poder da inteligência artificial para analisar e aprimorar currículos. Através da avançada API do Google Gemini, a plataforma identifica os pontos fortes do seu currículo e sugere   melhorias, potencializando suas chances de sucesso. </br>

  Com uma interface intuitiva, construída com tecnologias como React e NodeJS, Athena torna o processo de otimização do currículo eficiente e acessível. Carregue seu currículo em PDF e receba insights valiosos para se destacar na busca pelo emprego dos seus sonhos. </br>

  Descubra o potencial do seu currículo com Athena e dê um passo decisivo rumo ao futuro profissional que você deseja </br>

  <a href='https://rickkcastro-athena-analysis.vercel.app'>FAÇA UMA ANÁLISE DO SEU CURRÍCULO AGORA MESMO! 🤖</a>
</p>

<h2>⚒️ Recursos </h2>
<p>
  <h3>Simplificando a otimização do seu currículo :wink:</h3>

  Com foco na experiência do usuário, Athena oferece uma interface intuitiva e de fácil navegação. Carregue seu currículo em PDF e receba insights acionáveis para aprimorar seu perfil profissional sem complicações.

  <h3>Uma abordagem inovadora para análise de currículos :rocket:</h3>

  Impulsionado pela API do Google Gemini, Athena utiliza inteligência artificial para oferecer uma perspectiva única sobre o seu currículo, revelando insights poderosos e oportunidades de destaque. </br>

  <h3>Resultados concretos na otimização do seu currículo :page_facing_up:</h3>

  A precisão da API do Google Gemini, integrada ao Athena, assegura a identificação precisa dos seus pontos fortes e áreas de aprimoramento, fornecendo insights direcionados para maximizar suas chances de sucesso em processos seletivos. </br>
</p>

<h2>💪 proposito</h2>
<p>
  Olá, eu sou o Henrique Castro, criador da Athena Analysis. Sempre tive dificuldade em escrever currículos. Nunca sabia se estava destacando minhas habilidades da maneira certa. Então, participando da Imersão Inteligência Artificial 2ª Edição da Alura e em um   momento onde estava atualizando meu currículo, tive essa ideia. 
  <br><br>
  Eu queria criar uma ferramenta que pudesse ajudar outras pessoas que estão passando pela mesma frustração que passei, uma ferramente que mostrasse os pontos fortes e onde poderia melhorar.
  <br><br>
  Esse projeto me ajudou de verdade e espero que consiga ajudar outras pessoas da mesma forma. 💜
</p>

<h2>⚙️ Funcionamento</h2>
<p>
  A Athena Analysis funciona via 2 aplicações, Athena-analysis-API e o athena-analysis. <br>
  As duas aplicações estão nesse repositório em suas respectivas pastas e estão hospedadas na plataforma Vercel.
  <h3>Athena-analysis-API</h3>
  <p>
    É um API desenvolvida em nodeJS e express que possui apenas uma rota /sendCV, ele foi desenvolvida com o intuito de receber um arquivo .pdf e retornar a resposta do Gemini sobre o currículo.
  </p>
  <ul>
    <li>
      <h4>Recepção do Currículo em PDF:</h4>
      <p>Ao acessar a rota /sendCV, os usuários podem enviar seus currículos em formato PDF. A API processa essa requisição, identificando-a como uma submissão de arquivo PDF no formato application/pdf</p>
    </li>
    <li>
      <h4>Extração de Dados:</h4>
      <p>Utilizando a biblioteca pdf-parse, a API extrai informações cruciais do currículo, como experiência profissional, habilidades, educação e detalhes de contato. Essa extração é essencial para a análise subsequente.</p>
    </li>
    <li>
      <h4>Chamada à IA Gemini:</h4>
      <p>Com o texto extraído, a API invoca a poderosa IA Gemini. Utilizando um prompt personalizado, a API fornece à IA todas as informações necessárias. Que, então, realiza uma análise completa do conteúdo do currículo.</p>
    </li>
    <li>
      <h4>Formatação:</h4>
      <p>Após receber a análise, a API a formata habilmente em HTML. Isso garante que a análise seja apresentada de forma legível e organizada. A análise formatada é então enviada como resposta à rota /sendCV.</p>
    </li>
  </ul>
  <h3>Athena-analysis</h3>
  <p>A parte “visual” deste projeto. Desenvolvido em React com o framework Vite. Ela desempenha um papel crucial ao oferecer aos usuários uma experiência intuitiva, que utiliza o funcionamento completo da API. O frontend apresenta um formulário com um campo de entrada para o envio do currículo. Após o envio, realiza uma chamada à API e, ao receber a resposta, exibe os resultados de forma clara e organizada na tela.
</p>
</p>

<h2>:space_invader: Tecnologias utilizadas</h3>

<p style="display: inline_block"><br>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="90"/>    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" width="90"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="90"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png" width="90"/>
</p><br>

<h2>📄 Política de Privacidade</h2>
<p>Ao utilizar nossa plataforma, você concorda com a <a href='https://support.google.com/gemini/answer/13594961?visit_id=638510543747647131-82631580&p=privacy_help&rd=1'>política de Privacidade</a> do Gemini</p>
