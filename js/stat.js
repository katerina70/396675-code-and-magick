'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var n = 0; n < times.length; n++) {
    var time = times[n];
    if (time > max) {
      max = time;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);

  function getRandom(min, maxi) {
    return Math.random() * (maxi - min) + min;
  }

  function getColorColumn(name) {
    return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'blue';
  }

  function getOpacityColumn(name) {
    return name === 'Вы' ? 1 : getRandom(0.1, 1);
  }

  var barWidth = 40; // px; 
  var indent = 90; // px;
  var windowHeight = 300; // px;
  var initialX = 165; // px;
  var lineHeight = 15; // px;

  for (var i = 0; i < names.length; i++) {
    var initialY = windowHeight - 50 - (times[i] * step); // px;

    ctx.fillStyle = getColorColumn(names[i]);
    ctx.globalAlpha = getOpacityColumn(names[i]);

    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);

    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;

    ctx.fillText(names[i], initialX + indent * i, windowHeight - lineHeight * 2);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - lineHeight);

  }
};
