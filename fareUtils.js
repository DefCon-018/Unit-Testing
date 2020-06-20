let rate = {
    fixed: 50,
    minKm: 5,
    perKm: 10, 
    freeMin: 15,
    perMin: 2
}

function calcfare(km, min){
    let fare = rate.fixed;
    fare += (km > 5) ? ((km - 5)*10) : 0;
    fare += (min > 15) ? ((min - 15)*2): 0;
    return fare;
}

exports = module.exports = { calcfare, rate };