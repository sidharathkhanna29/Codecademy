function main() {
  var $skillset = $('.skillset');
  alert($skillset)
  //$('.skillset').hide();
  //$('.skillset').fadeIn(1000);
  
  //$('.projects').hide();
     $('.projects-button').on('click', function() {
		//$('.projects').show();
		//$('.projects').toggle();
    $(this).next().toggle();
    //$(this).next().slideToggle(400);
    //$(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
}

$(document).ready(main);