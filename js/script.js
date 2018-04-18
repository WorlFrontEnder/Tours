
$(document).ready(function () {

$('.center').slick({
  centerMode: true,
  slidesToShow: 3,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
  centerPadding: '60px'

});
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
   arrows: true,
});

$('.container').carousel({
	num: 1,
	maxWidth: 607,
	maxHeight: 270,
	distance: 100,
	autoPlay:false,
 });
 

 $('.tour_3d_bolgar').carousel({
	num: 3,
	maxWidth: 664,
	maxHeight: 800,
	distance: 130,
	autoPlay:false
 });

  $('.tour_3d_ufa').carousel({
	num: 3,
	maxWidth: 664,
	maxHeight: 800,
	distance: 130,
	autoPlay:false
 });

   $('.tour_3d_kazan').carousel({
	num: 3,
	maxWidth: 664,
	maxHeight: 800,
	distance: 130,
	autoPlay:false
 });

  $('.tour_3d_vengria').carousel({
	num: 3,
	maxWidth: 664,
	maxHeight: 800,
	distance: 130,
	autoPlay:false
 });

   $('.tour_3d_nijni').carousel({
	num: 3,
	maxWidth: 664,
	maxHeight: 800,
	distance: 130,
	autoPlay:false
 });


$('.container').carousel({
	num: 3,
	maxWidth: 607,
	maxHeight: 270,
	distance: 100,
	autoPlay:false
 });

$('.type_3d_bolgar').carousel({
	num: 3,
	maxWidth: 549,
	maxHeight: 366,
	distance: 100,
	autoPlay:false
 });

$('.type_3d_ufa').carousel({
	num: 3,
	maxWidth: 612,
	maxHeight: 355,
	distance: 300,
	autoPlay:false
 });

$('.type_3d_kazan').carousel({
	num: 3,
	maxWidth: 610,
	maxHeight: 407,
	distance: 100,
	autoPlay:false
 });

$('.type_3d_vengria').carousel({
	num: 3,
	maxWidth: 610,
	maxHeight: 408,
	distance: 100,
	autoPlay:false
 });

$('.type_3d_nijni').carousel({
	num: 3,
	maxWidth: 610,
	maxHeight: 408,
	distance: 100,
	autoPlay:false
 });

 $(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

});
