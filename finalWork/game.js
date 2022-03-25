'use strict';

(() => {
  // запрашиваем число
  const ask = (balls) => {
    const stakeBalls = +prompt(`Загадайте число от 1 до ${balls}`);
    // небольшая валидация
    if (stakeBalls === 0) return false;
    else if (!stakeBalls >= 1 && !stakeBalls <= balls) {
      ask(balls);
    }
    return stakeBalls;
  };

  // генерируем число
  const generateEvenOdd = () => {
    const gen = Math.round(Math.random());
    console.log(gen);
    if (gen === 0) return 'even';
    else return 'odd';
  };

  // проверка на чётность
  const isEvenOdd = (num) => {
    if (num % 2 === 0) return 'even';
    else return 'odd';
  };

  const game = () => {
    const balls = {
      player: 5,
      bot: 5,
    };
    let stakeBalls;
    let numType;
    console.log('Начало игры');
    console.log(`

          количество шаров у игрока: ${balls.player}
          количество шаров у бота  : ${balls.bot}`);

    return function start() {
      if (balls.player > 0 && balls.bot > 0) {
        stakeBalls = ask(balls.player);
        numType = generateEvenOdd();
        if (stakeBalls === false) {
          console.log('Конец игры!');
          return false;
        }
        if (isEvenOdd(stakeBalls) === numType) {
          balls.player -= stakeBalls;
          balls.bot += stakeBalls;
          console.log(`
                  Бот угадал!
          количество шаров у игрока: ${balls.player}
          количество шаров у бота  : ${balls.bot}`);
          start();
        } else {
          balls.player += stakeBalls;
          balls.bot -= stakeBalls;
          console.log(`
                  Бот не угадал!
          количество шаров у игрока: ${balls.player}
          количество шаров у бота  : ${balls.bot}`);
          start();
        }
      } else {
        if (balls.player < 1) {
          console.log('Бот победил!');
        } else {
          console.log('Вы победили!');
        }
      }
    };
  };
  window.gg = game;
})();
