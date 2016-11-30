function anim(){
	$('#almafa').animate({width: '400px', height: '400px', backgroundColor: 'blue'}, 400);
}

function animBack(){
	$('#almafa').animate({width: '200px', height: '200px', backgroundColor: 'yellow'}, 400);
}

var p = 0;
function prog(){
	p += 5;
	$( "#progressbar" ).progressbar({
      value: p
    });
}

$( function() {
    $( "#datepicker" ).datepicker({
		dateFormat: "yy.mm.dd."
	});
	
	$( "#progressbar" ).progressbar({
      value: 0
    });
  } 
);

(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
