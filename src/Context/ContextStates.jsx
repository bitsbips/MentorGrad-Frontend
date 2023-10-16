import { createContext, useContext } from 'react';

export const Context = createContext({
     // orderForm
     priceRangeValue: [0, 1000],
     setPriceRangeValue: (auth) => { },
     value: '0',
     setValue: (auth) => { },
     profilestep: '0',
     setProfileStep: (auth) => { },
     countryData:[], 
     setCountryData: (auth) => { },
     countryList:[], 
     setCountryList: (auth) => { },
     nationality:[], 
     setNationality: (auth) => { },
})