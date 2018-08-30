$('.navbar-nav>li>a').on('click', function(){
    $('#bodyClick').remove();
    $('html').removeClass('nav-open');
    //$('.navbar-collapse').collapse('hide');
});