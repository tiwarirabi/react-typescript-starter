import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './HomeView';

const defaultConfig = {
  customerSupportConfig: {
    fridayFrom: 50400000,
    fridayTo: 93600000,
    mondayFrom: 50400000,
    mondayTo: 93600000,
    saturdayFrom: 61200000,
    saturdayTo: 3600000,
    sundayFrom: 61200000,
    sundayTo: 3600000,
    thursdayFrom: 50400000,
    thursdayTo: 93600000,
    tuesdayFrom: 50400000,
    tuesdayTo: 93600000,
    wednesdayFrom: 50400000,
    wednesdayTo: 93600000,
  },
  globalPromo: null,
  id: null,
  outboundNumberMap: null,
  partnerManufacturers: null,
  paymentProvider: null,
  statesWithPartnerPharmacies: null,
  supportedStates: null,
  twoDayMailCharge: null
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    config: defaultConfig
  }

  ReactDOM.render(<HomeView {...props} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
