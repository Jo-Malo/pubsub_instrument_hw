const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-instrument-families-ready', (evt) => {
    const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);
        // console.log(allInstrumentFamilies)
  });

  this.element.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentFamilyData){
  instrumentFamilyData.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamily.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
