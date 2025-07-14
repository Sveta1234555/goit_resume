// JavaScript для автоматического заполнения

//  <!-- Пример2 реализации с расчетом кол-ва символов js -->
//           <p>
//             ---Код от примера2 chatgpt c js расчет кол-ва символов (+fill.js)
//             <span style="color: blue">Но одна строка обрабаывается</span>
//           </p>
function fillWithDashes() {
  const fillerDiv = document.querySelector(".filler2");
  const containerWidth = document.querySelector(".container2").offsetWidth;
  const firstElementWidth = document.querySelector(
    ".container2 > div:first-child"
  ).offsetWidth;
  const thirdElementWidth = document.querySelector(
    ".container2 > div:last-child"
  ).offsetWidth;

  const availableWidth = containerWidth - firstElementWidth - thirdElementWidth;
  let numDashes = Math.floor(availableWidth / 6); // 6 - приблизительная ширина одного тире

  fillerDiv.textContent = "-".repeat(numDashes);
  console.log(numDashes);
  console.log(containerWidth);
}

// <!-- Пример2.1 реализации с расчетом кол-ва символов js  - списком (+fill.js)  div:first-child-->
// <p>
//   <br />
//   ---Код от примера2.1 chatgpt - списком (+fill.js) вариант<br />
//   <span style="color: blue">
//     container.querySelector("div:first-child").offsetWidth;</span
//   >
// </p>
function fillWithDashes3() {
  const containers = document.querySelectorAll(".container3"); // Выбираем ВСЕ элементы с классом container3

  containers.forEach((container) => {
    // Перебираем каждый найденный элемент
    const fillerDiv = container.querySelector(".filler");
    const containerWidth = container.offsetWidth;
    //не сработал. из-за пробелов в исходнике html (они тоже считаются)  -chatgpt
    //     const firstElementWidth =
    //       container.querySelector("> div:first-child").offsetWidth;
    const firstElementWidth =
      container.querySelector("div:first-child").offsetWidth;
    const thirdElementWidth =
      container.querySelector("div:last-child").offsetWidth;

    const availableWidth =
      containerWidth - firstElementWidth - thirdElementWidth;
    let numDashes = Math.floor(availableWidth / 6);

    if (fillerDiv) {
      // Проверка на существование fillerDiv внутри container3
      fillerDiv.textContent = "-".repeat(numDashes);
    } else {
      console.warn(`Элемент .filler не найден внутри .container3`);
    }
    console.log(numDashes);
    console.log(containerWidth);
  });
}

// <!-- Пример2.2 реализации с расчетом кол-ва символов js  - списком (+fill.js)-->
// <p>
//   <br />
//   ---Код от примера2.2 chatgpt - списком (+fill.js) вариант<br />
//   <span style="color: blue"> container.children[0].offsetWidth;</span>
// </p>
function fillWithDashes4() {
  const containers4 = document.querySelectorAll(".container4"); // Выбираем ВСЕ элементы с классом container3

  containers4.forEach((container4) => {
    // Перебираем каждый найденный элемент
    const fillerDiv4 = container4.querySelector(".filler4");
    const containerWidth4 = container4.offsetWidth;
    //не сработал. из-за пробелов в исходнике html (они тоже считаются)  -chatgpt
    //     const firstElementWidth =
    //       container.querySelector("> div:first-child").offsetWidth;
    // так работает:
    // const firstElementWidth =
    //   container.querySelector("div:first-child").offsetWidth;
    // const thirdElementWidth =
    //   container.querySelector("div:last-child").offsetWidth;
    // Вариант реализации более гарантированный

    const firstElementWidth4 = container4.children[0].offsetWidth;
    const thirdElementWidth4 = container4.children[2].offsetWidth;

    const availableWidth4 =
      containerWidth4 - firstElementWidth4 - thirdElementWidth4;
    let numDashes4 = Math.floor(availableWidth4 / 6);

    if (fillerDiv4) {
      // Проверка на существование fillerDiv внутри container3
      fillerDiv4.textContent = "-".repeat(numDashes4);
      fillerDiv4.style.backgroundColor = "yellow"; // Добавили стиль через JavaScript
    } else {
      console.warn(`Элемент .filler не найден внутри .container4`);
    }
    console.log(numDashes4);
    console.log(containerWidth4);
  });
}

window.addEventListener("resize", fillWithDashes);
fillWithDashes();

window.addEventListener("resize", fillWithDashes3);
fillWithDashes3();

window.addEventListener("resize", fillWithDashes4);
fillWithDashes4();
