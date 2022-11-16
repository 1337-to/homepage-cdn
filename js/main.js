var tablet_width = 768;

function list_box(){
  if ($(window).width() < tablet_width) {
    $('.list-box h2').addClass('mobile');
  } else {
    $('.list-box h2').removeClass('mobile');
  }
}
$(window).resize(function() {
  list_box();
});

$(document).ready(function() {
  list_box();
  var top_bar = $('.top-bar .container').html();
  var navigation_html = $('nav').html();
  $('.mobile-menu').html(navigation_html + top_bar);
  $('.top-bar-left').html(navigation_html);
  
  $('.navbar-menu').click(function(){
    $('.mobile-menu').fadeToggle();
    return false;
  });
  
  $('.list-box').on('click', 'h2.mobile', function(){
//    $('.list-box h2').removeClass('active');
//    $(this).addClass('active');
    $(this).toggleClass('active');
    $(this).next('ul').slideToggle();
    return false;
  });
  
  // Calculating Comment Box width
  $('.table-list td.name').each(function(){
    comments_width = $(this).find('.comments').width();
    $(this).find('.comments').parent('td.name').css('padding-right', 50 + comments_width);
  });
  
  // SCROLL TOP
  $('a.scroll-top').click(function() {
    $('html,body').stop(true, true).animate({ scrollTop: $('html,body').offset().top - 50}, 550);
    return false;
  });

  $('a[data-toggle="dropdown"]').click(function(){
    $(this).next('.dropdown-menu').slideToggle("slow", function() {
      $(this).parents('.torrent-category-detail').toggleClass('js-active-button');
    });
    return false;
  });
  
	//default validate action
	$('form').attr('novalidate',true);

	$("a.print").click(function(){
		window.print();
		return false;
	});
});
