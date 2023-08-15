
// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”

let button = document.createElement("button");
document.body.append(button);
button.innerText = "Ckick on me and open console";
button.addEventListener("click", message);
function message(){
  console.log("Hello world");
}

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно.


let increaseButton = document.createElement("button");
document.body.append(increaseButton);
increaseButton.innerText = "Ckick on me to increase the value";
let counter = document.querySelector('p');
counter.style.fontSize = '20px';
counter.style.border = '1px solid black';
counter.style.width = '200px';
increaseButton.style.margin = "20px";

// Функция для обновления значения в параграфе
function updateCounter() {
  count = Number(counter.innerText);
  count++;
  counter.textContent = count;
}
// Привязываем обработчик события "click" к кнопке
increaseButton.addEventListener('click', updateCounter);

// Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет , а при покидании поменять обратно на белый (все шаги  сделать с помощью JS).
let block = document.createElement('div');
block.style.width = '100px';
block.style.height = '100px';
block.style.border = '1px solid black';
block.style.margin = '20px';

document.body.append(block);

block.addEventListener('mouseover', changeColor);
block.addEventListener('mouseout', changeColor1);

function changeColor(){
    block.style.backgroundColor = prompt("type the color");
}

function changeColor1(){
    block.style.backgroundColor = 'white';
}


// Задание1: Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.
// Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.
// Задание3: Попробовать так же изменить значение параграфа


let button1 = document.createElement("button");
let button2 = document.createElement("button");
button1.style.margin = "20px";

let num = 5;
console.log(num);


let paragraph = document.getElementById("minus_plus");
let num_paragraph = Number(paragraph.innerText);


document.body.append(button1);
document.body.append(button2);

button1.innerText = "Minus";
button2.innerText = "Plus";


button1.addEventListener("click", minus);
button2.addEventListener("click", plus);

function minus() {
  console.log('Minus');
  console.log(--num);
  paragraph.innerText = --num_paragraph;
}

function plus() {
  console.log('plus');
  console.log(++num);
  paragraph.innerText = ++num_paragraph;
}
// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.
const textArray = ["Hello", "World", "JavaScript", "HTML", "CSS"];

let paragraphsContainer = document.createElement("paragraphsContainer");
document.body.append(paragraphsContainer);

for (let text of textArray) {
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraphsContainer.append(paragraph);

  paragraph.addEventListener("click", function () {
    paragraph.textContent = "*".repeat(text.length);
  });
}


// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
const cardContainer = document.createElement("cardContainer");
document.body.append(cardContainer);

for (let i = 0; i < 10; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerText = i;
  cardContainer.append(card);

  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
}