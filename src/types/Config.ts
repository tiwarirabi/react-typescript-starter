export interface CustomerSupportConfig{
    fridayFrom:  Number;
    fridayTo: Number;
    mondayFrom: Number;
    mondayTo: Number;
    saturdayFrom: Number;
    saturdayTo: Number;
    sundayFrom: Number;
    sundayTo: Number;
    thursdayFrom: Number;
    thursdayTo: Number;
    tuesdayFrom: Number;
    tuesdayTo: Number;
    wednesdayFrom: Number;
    wednesdayTo: Number;
}

export default interface Config {
    id?: string | undefined | null;
    globalPromo?: string | undefined | null;
    paymentProvider?: string | undefined | null;
    supportedStates?: string | undefined | null;
    twoDayMailCharge?: string | undefined | null;
    outboundNumberMap?: string | undefined | null;
    partnerManufacturers?: string | undefined | null;
    statesWithPartnerPharmacies?: string | undefined | null;
    customerSupportConfig: CustomerSupportConfig;
}