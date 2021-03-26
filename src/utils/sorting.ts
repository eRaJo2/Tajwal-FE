export const sortHotelsByPrice = (data, sortASC = true) => {
    return data.sort((a,b) => sortASC ? a.price - b.price : b.price - a.price)
}

export const sortHotelsByName = (data, sortASC = true) => {
    return data.sort((a, b) => sortASC ?  a.name.localeCompare(b.name) : b.name.localeCompare(a.name) );
}