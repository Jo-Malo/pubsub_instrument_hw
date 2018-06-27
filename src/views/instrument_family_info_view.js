const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyInfoView = function(container){
  this.container = container;
};

InstrumentFamilyInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-families-ready', (evt) =>{
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

InstrumentFamilyInfoView.prototype.render = function(instrumentFamily) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${instrumentFamily.name} family: ${instrumentFamily.description}. Examples:${instrumentFamily.instruments}`;

  const familyPicture = document.createElement('img');
  familyPicture.src = instrumentFamily.image;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  this.container.appendChild(familyPicture);
};

module.exports = InstrumentFamilyInfoView;
