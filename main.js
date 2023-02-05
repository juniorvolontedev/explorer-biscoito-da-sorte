const cookieFortune = document.querySelector(".screen1 img");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phrase = document.querySelector(".screen2 p");

const motivation = [
  "A vida é 10% do que acontece com você e 90% de como você reage a ela.",
  "Não desista dos seus sonhos, mantenha a cabeça erguida e siga em frente.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Não importa o quanto você cai, o importante é levantar-se a cada vez.",
  "Não há limites para o que você pode alcançar, exceto aqueles que você estabelece para si mesmo.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "A vida é curta para se preocupar com coisas pequenas, sorria e seja feliz.",
  "Não há nada mais poderoso do que a determinação de uma pessoa em mudar sua vida.",
  "Nunca é tarde demais para ser o que você sempre quis ser.",
  "O sucesso é uma jornada, não um destino. Mantenha-se motivado e continue caminhando.",
];

function openCookie() {
  let index = Math.floor(Math.random() * 10);
  phrase.innerText = motivation[index];
  phrase.classList.add("show");

  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function newCookie() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

cookieFortune.addEventListener("click", openCookie);
resetCookie.addEventListener("click", newCookie);
