$(()=>{
    let km = $('#km');
    let min = $('#min');
    let fareDiv = $('#fare-div')
    $('#btn').click(()=>{
        $.post('/calcfare', {km: km.val(), min: min.val()}, function(fare){
            $('#div').text(fare.fare);
        })
    })
    $('#rateBtn').click(() =>{
        $.get('/rate', function(data){
            let prettyRateData = `
             Fixed Rate = Rs. ${data.fixed} <br>
             Cost per min = Rs. ${data.perKm} /km <br>
             Free min = ${data.freeMin} min <br>
             Cost per min = Rs. ${data.perMin} /Min <br>
             `
            $('#rate').html(prettyRateData);
        })
    })
})