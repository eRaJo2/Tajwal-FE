import { getNumberOfTotalNights } from '../utils/dates'
import { sortHotelsByName, sortHotelsByPrice } from '../utils/sorting'
import mockData from './mockData.json'


const ascNameResults = [
    {
        "name": "Address Dubai Mall",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-10-15"
    },
    {
        "name": "Emirates Grand Hotel Apartments",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-10-27"
    },
    {
        "name": "Hilton Dubai Al Habtoor City",
        "price": "275",
        "city": "dubai",
        "available_on": "2020-10-25"
    },
    {
        "name": "JW Marriott Marquis Hotel Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-21"
    },
    {
        "name": "Kempinski Hotel Mall of the Emirates",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-21"
    },
    {
        "name": "Ramada Downtown Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-25"
    },
    {
        "name": "Renaissance Downtown Hotel",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-23"
    },
    {
        "name": "Sheraton Mall of the Emirates Hotel",
        "price": "325",
        "city": "dubai",
        "available_on": "2020-10-24"
    },
    {
        "name": "Sofitel Dubai Downtown",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Sofitel Dubai Jumeirah Beach",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-09-20"
    }
]

const descNameResults = [
    {
        "name": "Sofitel Dubai Jumeirah Beach",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Sofitel Dubai Downtown",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Sheraton Mall of the Emirates Hotel",
        "price": "325",
        "city": "dubai",
        "available_on": "2020-10-24"
    },
    {
        "name": "Renaissance Downtown Hotel",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-23"
    },
    {
        "name": "Ramada Downtown Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-25"
    },
    {
        "name": "Kempinski Hotel Mall of the Emirates",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-21"
    },
    {
        "name": "JW Marriott Marquis Hotel Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-21"
    },
    {
        "name": "Hilton Dubai Al Habtoor City",
        "price": "275",
        "city": "dubai",
        "available_on": "2020-10-25"
    },
    {
        "name": "Emirates Grand Hotel Apartments",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-10-27"
    },
    {
        "name": "Address Dubai Mall",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-10-15"
    }
]

const priceASC = [
    {
        "name": "Renaissance Downtown Hotel",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-23"
    },
    {
        "name": "Kempinski Hotel Mall of the Emirates",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-21"
    },
    {
        "name": "Ramada Downtown Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-25"
    },
    {
        "name": "JW Marriott Marquis Hotel Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-21"
    },
    {
        "name": "Sofitel Dubai Jumeirah Beach",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Address Dubai Mall",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-10-15"
    },
    {
        "name": "Hilton Dubai Al Habtoor City",
        "price": "275",
        "city": "dubai",
        "available_on": "2020-10-25"
    },
    {
        "name": "Sofitel Dubai Downtown",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Emirates Grand Hotel Apartments",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-10-27"
    },
    {
        "name": "Sheraton Mall of the Emirates Hotel",
        "price": "325",
        "city": "dubai",
        "available_on": "2020-10-24"
    }
]

const priceDESC = [
    {
        "name": "Sheraton Mall of the Emirates Hotel",
        "price": "325",
        "city": "dubai",
        "available_on": "2020-10-24"
    },
    {
        "name": "Sofitel Dubai Downtown",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Emirates Grand Hotel Apartments",
        "price": "300",
        "city": "dubai",
        "available_on": "2020-10-27"
    },
    {
        "name": "Hilton Dubai Al Habtoor City",
        "price": "275",
        "city": "dubai",
        "available_on": "2020-10-25"
    },
    {
        "name": "Sofitel Dubai Jumeirah Beach",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-09-20"
    },
    {
        "name": "Address Dubai Mall",
        "price": "250",
        "city": "dubai",
        "available_on": "2020-10-15"
    },
    {
        "name": "Ramada Downtown Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-25"
    },
    {
        "name": "JW Marriott Marquis Hotel Dubai",
        "price": "225",
        "city": "dubai",
        "available_on": "2020-09-21"
    },
    {
        "name": "Renaissance Downtown Hotel",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-23"
    },
    {
        "name": "Kempinski Hotel Mall of the Emirates",
        "price": "200",
        "city": "dubai",
        "available_on": "2020-10-21"
    }
]

it('sorts hotels in ascending order based on name', () => {
    expect(sortHotelsByName(mockData, true )).toEqual(ascNameResults)
})


it('sorts hotels in descending order based on name', () => {
    expect(sortHotelsByName(mockData, false)).toEqual(descNameResults)
})

it('sorts hotels in ascending order based on price', () => {
    expect(sortHotelsByPrice(mockData, true)).toEqual(priceASC)
})

it('sorts hotels in descending order based on price', () => {
    expect(sortHotelsByPrice(mockData, false)).toEqual(priceDESC)
})

it('gets number of total nights between two dates', () => {
    expect(getNumberOfTotalNights(new Date('2010/10/10'), new Date('2010/10/1'))).toEqual(9)
})