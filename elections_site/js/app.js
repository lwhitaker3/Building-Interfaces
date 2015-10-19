// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$('#years').on('change.fndtn.slider', function(){
  var year = Number(this.dataset.slider);
  year.toFixed(0);
  var file_name = "img/electoral_votes_" + year + ".png";

  $('#sliderOutput').text(year);
  $('#maps').attr("src", file_name);

});

//http://codepen.io/seanmccaffery/pen/waxkj
jQuery('.wrapper').mousemove(function(e) {
  console.log(this);
		jQuery('.then').css('width', e.pageX - $(this).offset().left);
	});

window.addEventListener('scroll', function(e) {
  var scroll = e.target.scrollingElement.scrollTop;
  console.log(scroll);
  if(scroll > 2000){
    document.getElementById('obama').classList.add("fly_in");
  }
  if(scroll > 2500){
    document.getElementsByClassName('wrapper')[0].classList.add("fly_in");
  }
  if(scroll > 2800){
    document.getElementById('debate').classList.add("fly_in");
  }
});

$(".fixHeight").each(function() {
    $(this).parent().css("height",$(this).height());
});
