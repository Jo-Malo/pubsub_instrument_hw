const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamilyInfoView = require('./views/instrument_family_info_view.js');

document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.querySelector('select#families-dropdown');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#family-info')
  const instrumentFamilyInfoDisplay = new InstrumentFamilyInfoView(infoDiv);
  instrumentFamilyInfoDisplay.bindEvents();

  const instrumentFamiliesDataSource = new InstrumentFamilies();
  instrumentFamiliesDataSource.bindEvents();
});
