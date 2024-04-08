// Carrossel página do ínicio
let currentIndex = 0;
// Número total de imagens no carrossel
const totalImages = 5;

// Intervalo de tempo em milissegundos para o slide automático
const intervalo = 2000; // 2 segundos (ajuste conforme necessário)

// Função para mudar a imagem com base no incremento fornecido
function mudarImagem(incremento) {
    // Calcula o novo índice da imagem considerando o número total de imagens
    currentIndex = (currentIndex + incremento + totalImages) % totalImages;

    // Calcula a nova posição para o efeito de slide, considerando a largura da imagem
    const novaPosicao = -currentIndex * 400;

    // Aplica a transformação no estilo para deslocar as imagens horizontalmente
    document.getElementById('imagens').style.transform = `translateX(${novaPosicao}px)`;
}

// Função para avançar automaticamente para a próxima imagem
function slideAutomatico() {
    mudarImagem(1); // Mudança para a próxima imagem
}

// Inicia o slide automático em intervalos regulares
setInterval(slideAutomatico, intervalo);
// Carrossel página do ínicio


btn = document.getElementById("btnfale");

btn.addEventListener("click",function(){
    alert("Solicitação enviada");
});
