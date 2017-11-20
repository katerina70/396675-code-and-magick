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

  function getOpacityColumn(min, maxi) {
    return Math.random() * (maxi - min) + min;
  }

  for (var i = 0; i < names.length; i++) {

    for (i = 0; i < times.length; i++) {
      var colorColumn = 'blue';


      var opacityColumn = getOpacityColumn(0.1, 1);

      if (names[i] === 'Вы') {
        colorColumn = 'rgba(255, 0, 0, 1)';
        opacityColumn = 1;
      }
      var barWidth = 40; // px; 
      var indent = 50; // px;
      var windowHeight = 300; // px;
      var initialX = 200; // px;
      var initialY = windowHeight - 50 - (times[i] * step); // px;
      var lineHeight = 15; // px;

      ctx.fillStyle = colorColumn;
      ctx.globalAlpha = opacityColumn;

      ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);

      ctx.fillStyle = '#000000';
      ctx.globalAlpha = 1;

      ctx.fillText(names[i], initialX + indent * i, windowHeight - lineHeight * 2);
      ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - lineHeight);

    }
  }


};
