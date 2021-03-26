export const getNumberOfTotalNights = (endDate, startDate) => {
    const timeDiff = endDate.getTime() - startDate.getTime()
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return Math.round(daysDiff);
}
