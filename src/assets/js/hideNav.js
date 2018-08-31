$('.navbar-nav>li>a>span').on('click', function(){
    $('#bodyClick').remove();
    $('html').removeClass('nav-open');
    //$('.navbar-collapse').collapse('hide');
});