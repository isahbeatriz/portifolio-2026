// Efeito sonoro estilo jogo ao clicar nos links
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    const audio = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
    audio.play();
  });
});