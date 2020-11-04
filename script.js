
$("#A").mouseenter(function(){
  alert("you are in A");
})

$("#B").click(function(){
  $("#B").fadeOut().delay(200)
  $("#B").fadeIn();
})

$("#C").click(function(){
  let a = $("#C").text();
  alert(a)
})

$('#D').mouseenter(function(){
  $('#D').animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'})
});

$('#D').mouseleave(function(){
  $('#D').animate({
    left: '250px',
    height: '-=150px',
    width: '-=150px'})
});

let s = $("#E").children().text()
console.log(s)








