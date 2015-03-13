//acceder y modificar a el modelo de objetos del documento DOM
//iniciar el documento
$(document).on("ready",function() {
    $('div .rojo').show();//seleccionar el div con clase rojo y mostrar 
});

//iniciar el documento
$(document).on("ready",function() {
    $('div .rojo').hide();//seleccionar el div con clase rojo y esconder 
});


//el siguiente ejemplo es aplicar un efecto slided Down con parametro lento 
//al div con clase rojo 
$(document).ready(function() {
    $('div .rojo').slideDown('slow');
});

//evento on click y animate

//al hacer click sobre la clase arrow el elemento con clase contenido
//se animara hacia la izquierda 10px durante un tiempo de 600ms
$('.arrow').on("click",function(){
  $('.contenido').animate({

		left:'10px'
	
}, 600);
//evento dentro de mouse o fuera del mouse aplicando efecto fade to con paremetro fast

$('div').on("click",function(){
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1);
    });
    
    
      $('div').mouseleave(function() {
        $('div').fadeTo('fast',0.5);
    });
    
    
});

//seleccionar li(lista de elemento) y guardarla en una variable llamada
//blanco y despues usarla y aplicarle hide.

$('div').on("ready",function(){
    var $blanco = $('div li');
    $blanco.hide();
    
});

//uso del evento slide toggle para deslizar al elemento con la clase 
//panel al hacer click sobre .paneldeslizar
$(document).on("ready",function(){


$('.paneldeslizar').on("click",function(){
    
    $('.panel').slideToggle('slow');
    });
    
    });