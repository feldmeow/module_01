'use strict';

(() => {
  const FIGURES_RU = ['камень', 'ножницы', 'бумага'];
  const FIGURES_EN = ['rock', 'scissors', 'paper'];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getFigure = (lang) => {
    let figure = prompt(`${lang.join(', ')} ?`);
    if (figure === null) {
      return null;
    }
    figure = figure.trim().toLowerCase();
    if (
      figure === '' ||
      !lang.some((el, index) => {
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

  const game = (language) => {
    const result = {
      computer: 0,
      player: 0,
    };
    const lang =
      language === 'EN' || language === 'ENG' ? FIGURES_EN : FIGURES_RU;

    return function start() {
      const playerFigure = getFigure(lang);
      const computerFigure = getRandomInt(0, 3);
      if (playerFigure === null) {
        if (lang === FIGURES_EN) {
          alert(`Game results:
          You: ${result.player}
          Computer: ${result.computer}`);
          if (confirm('Do you want to quit?')) {
            return false;
          } else start();
        } else {
          alert(`Результат игры:
          Вы: ${result.player}
          Компьютер: ${result.computer}`);
          if (confirm('Вы точно хотите выйти?')) {
            return false;
          } else start();
        }
      } else if (playerFigure === false || playerFigure === '') {
        start();
        return false;
      } else {
        const win = checkResult(playerFigure, computerFigure);
        switch (win) {
          case 0:
            lang === FIGURES_EN
              ? alert(`
            You: ${lang[playerFigure]}
            Computer: ${lang[computerFigure]}
          
            Tie`)
              : alert(`
            Вы: ${lang[playerFigure]}
            Компьютер: ${lang[computerFigure]}
          
            Ничья`);
            break;
          case 1:
            lang === FIGURES_EN
              ? alert(`
            You: ${lang[playerFigure]}
            Computer: ${lang[computerFigure]}
          
            You Win`)
              : alert(`
            Вы: ${lang[playerFigure]}
            Компьютер: ${lang[computerFigure]}
          
            Победили Вы`);
            result.player += 1;
            break;
          case 2:
            lang === FIGURES_EN
              ? alert(`
            You: ${lang[playerFigure]}
            Computer: ${lang[computerFigure]}
          
            Computer Win`)
              : alert(`
            Вы: ${lang[playerFigure]}
            Компьютер: ${lang[computerFigure]}
          
            Победил Компьютер`);
            result.computer += 1;
            break;
        }
        if (confirm(`${lang === FIGURES_EN ? 'again' : 'ещё'}?`)) {
          start();
        } else {
          if (lang === FIGURES_EN) {
            alert(`Game results:
          You: ${result.player}
          Computer: ${result.computer}`);
            if (confirm('Do you want to quit?')) {
              return false;
            } else start();
          } else {
            alert(`Результат игры:
          Вы: ${result.player}
          Компьютер: ${result.computer}`);
            if (confirm('Вы точно хотите выйти?')) {
              return false;
            } else start();
          }
        }
      }
    };
  };
  window.RPS = game;
})();
