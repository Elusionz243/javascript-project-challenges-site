const isWeekend = day => {
    return day % 7 === 6 || day & 7 === 0 ? true : false;
}

module.exports = {isWeekend};