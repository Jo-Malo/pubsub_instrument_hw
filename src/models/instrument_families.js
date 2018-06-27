const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function() {
  this.instrumentFamilies = [
    {
      name: 'Brass',
      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\'s lips',
      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle'], image: 'images/brass.jpg'
    },
    {
      name: 'Strings',
      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',
      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy'], image: 'images/strings.jpg'
    },
    {
      name: 'Wind',
      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',
      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe'], image: 'images/wind.jpg'
    },
    {
      name: 'Percussion',
      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',
      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine'], image: 'images/percussion.jpg'
    },
    {
      name: 'Keyboard',
      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',
      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer'], image: 'images/keyboard.jpeg'
    }
  ];
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('InstrumentFamilies:all-instrument-families-ready', this.instrumentFamilies);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentFamilyDetail = function(instrumentFamilyIndex) {
  const selectedInstrumentFamily = this.instrumentFamilies[instrumentFamilyIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument-families-ready', selectedInstrumentFamily)
  // console.log(selectedInstrumentFamily)
};

module.exports = InstrumentFamilies;
