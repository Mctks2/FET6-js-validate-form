// Selecionando os elementos no DOM
const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]'); 
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviar = document.querySelector('[data-enviar]');

// utilizou async para aguardar o usuario aceitar a notificação de camera
botaoIniciarCamera.addEventListener("click", async function() {
  const iniciarVideo = await navigator.mediaDevices. // solicita permissão ao usuário para acessar a câmera do dispositivo
  getUserMedia({video: true, audio: false});
  
  botaoIniciarCamera.computedStyleMap.display = 'none'; // esconde o botão de iniciar a camera
  campoCamera.style.display = 'block'; // exibe o campo de camera

  video.srcObject = iniciarVideo; // o vídeo capturado pela câmera seja exibido no elemento de vídeo na página. 
})

botaoTirarFoto.addEventListener("click", function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); // customização para tirar a imagem
  
  imagemURL = canvas.toDataURL('image/jpeg'); // converte a imagem capturada para o formato jpeg, o resultado é uma string que contém o caminho da imagem

  campoCamera.style.display = 'none';
  mensagem.style.display = 'block'; // exibe o elemento de mensagem na página
})

botaoEnviar.addEventListener("click", () => {
  const receberDadosExistente = localStorage.getItem("cadastro"); // obtem os dados do localStorage previamente armazenados na chave "cadastro"
  const converteRetorno = JSON.parse(receberDadosExistente); // converte os dados para o formato JSON

  converteRetorno.imagem = imagemURL; // adiciona a imagem capturada na chave "imagem" no objeto "converteRetorno" 

  localStorage.setItem("cadastro", JSON.stringify(converteRetorno)); //  adiciona a imagem no localStorage e converte para formato JSON

  window.location.href = "./abrir-conta-form-3.html"; 
})