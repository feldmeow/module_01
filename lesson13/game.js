'use strict';

(() => {
  const FIGURES_RU = ['камень', 'ножницы', 'бумага'];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getFigure = () => {
    let figure = prompt(`${FIGURES_RU.join(', ')} ?`);
    if (figure === null) {
      return null;
    }
    figure = figure.trim().toLowerCase();
    if (
      figure === '' ||
      !FIGURES_RU.some((el, index) => {
        if (el.substring(0, figure.length).includes(figure)) {
          figure = index;
          return true;
        }
      })
    ) {
      return false;
    }
    return figure;
  };

  const checkResult = (res1, res2) => {
    if (res2 === res1) {
      return 0;
    }
    if (res1 === 0 && res2 === 1) {
      return 1;
    }
    if (res1 === 0 && res2 === 2) {
      return 2;
    }
    if (res1 === 1 && res2 === 2) {
      return 1;
    }
    if (res1 === 1 && res2 === 0) {
      return 2;
    }
    if (res1 === 2 && res2 === 0) {
      return 1;
    }
    if (res1 === 2 && res2 === 1) {
      return 2;
    }
  };

  const game = () => {
    const result = {
      computer: 0,
      player: 0,
    };

    return function start() {
      const playerFigure = getFigure();
      const computerFigure = getRandomInt(0, 3);
      if (playerFigure === null) {
        alert(`Результат игры:
          Вы: ${result.player}
          Компьютер: ${result.computer}`);
        if (confirm('Вы точно хотите выйти?')) {
          return false;
        } else start();
      } else if (playerFigure === false || playerFigure === '') {
        start();
        return false;
      } else {
        const win = checkResult(playerFigure, computerFigure);
        switch (win) {
          case 0:
            alert(`
            Вы: ${FIGURES_RU[playerFigure]}
            Компьютер: ${FIGURES_RU[computerFigure]}
          
            Ничья`);
            break;
          case 1:
            alert(`
            Вы: ${FIGURES_RU[playerFigure]}
            Компьютер: ${FIGURES_RU[computerFigure]}
          
            Победили Вы`);
            result.player += 1;
            break;
          case 2:
            alert(`
            Вы: ${FIGURES_RU[playerFigure]}
            Компьютер: ${FIGURES_RU[computerFigure]}
          
            Победил Компьютер`);
            result.computer += 1;
            break;
        }
        if (confirm('ещё ?')) {
          start();
        } else {
          alert(`Результат игры:
          Вы: ${result.player}
          Компьютер: ${result.computer}`);
          if (confirm('Вы точно хотите выйти?')) {
            return false;
          } else start();
        }
      }
    };
  };
  window.RPS = game;
})();
