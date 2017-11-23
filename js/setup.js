'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', ' rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', ' rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandom = function (n) {
  return Math.floor(Math.random() * n);
};

var getWizardProperties = function (name, surname, coat, eyes) {
  var wizard = {
    name: wizardNames[getRandom(name)] + ' ' + wizardSurnames[getRandom(surname)],
    coatColor: coatColors[getRandom(coat)],
    eyesColor: eyesColors[getRandom(eyes)]
  };
  return wizard;
};

var wizards = [];

for (var j = 1; j <= 4; j++) {
  wizards.push(getWizardProperties(wizardNames.length, wizardSurnames.length, coatColors.length, eyesColors.length));
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
