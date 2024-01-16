$('.openNav').click(function(){
$('#leftMenu').animate({width:'250px'},50)
$('#home-content').animate({marginLeft:'250px'},50)
})
$('.closeBtn').click(function(){
    $('#leftMenu').animate({width:'0px'},50)
    $('#home-content').animate({marginLeft:'0px'},50)
})

$('#leftMenu a').click(function(){
    let secSrc=$(this).attr('href')
    let position=$(secSrc).offset().top
    $('html , body').animate({scrollTop:position},2000)
})

// option sec
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500)
    $(this).next().slideToggle(500)
})

// counter

window.onload=function(){
countDown("25 october 2023 10:00:00")
}
function countDown(counter) {
    let futureDate= new Date(counter)
    futureDate=(futureDate.getTime()/1000)

    let now =new Date()
    now =(now.getTime()/1000)
    let timeDiff=(futureDate - now)

    let day =Math.floor(timeDiff / (24*60*60))
    let hour =Math.floor((timeDiff -(day *(24*60*60))) /3600)
    let min =Math.floor((timeDiff - (day * (24*60*60)) - (hour * 3600)) /60)
    let sec =Math.floor((timeDiff - (day * (24*60*60)) - (hour * 3600) -(min *60)))

$('.days').html(`${day} D`)
$('.hours').html(`${hour} h`)
$('.minutes').html(`${min} m`)
$('.seconds').html(`${sec} s`)

setInterval(() => {
    countDown(counter)
}, 1000);
}
// textarea
var max=100;
$('textarea').keyup(function(){
    let length= $(this).val().length
    let remain=max-length
    if(remain <=0)
    $("#chars").text('your available character finished')
else
$('#chars').text(remain)
})