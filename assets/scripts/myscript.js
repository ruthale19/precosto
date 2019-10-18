//smooth scroll
$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});


//Filtro
(function(){
	$(document).ready(function(){
		$(".btn-menu").click(function(e){
			e.preventDefault();
			var filtro = $(this).attr("data-filter");

			if (filtro == "all") {
				$(".gallery__img").show(500);
			} else {
				$(".gallery__img").not("."+filtro).hide(500);
				$(".gallery__img").filter("."+filtro).show(500);
			}
		});

		$("button").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
	});
}())

//Animación de elementos
