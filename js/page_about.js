$(document).ready(function(){

// card hover event

$('#card').mouseenter(function(){

    $('#front').transition({
        rotateY : 180,
        opacity : 0,
    },800);
    $('#back').transition({
        rotateY : 0,
        opacity : 1,
    },800);
});

$('#card').mouseleave(function(){

    $('#front').transition({
        rotateY : 0,
        opacity : 1,
    },800);
    $('#back').transition({
        rotateY : -180,
        opacity : 0,
    },800);
});

















});//end