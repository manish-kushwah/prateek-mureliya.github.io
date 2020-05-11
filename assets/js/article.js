$(()=>{
    $.each($('h1[id]'), function(){
        $(this).addClass('scrollspy');
        $('.post-aside > .table-of-contents').append('<li><a href="#'+$(this).attr('id')+'">'+$(this).text()+'</a></li>');
    });

    $('.scrollspy').scrollSpy();

    $('#share').click(function(){
        clickNavBarOption($(this), 'share', '.post-share');
    });
});