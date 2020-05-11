$(() => {
    typewriter($('.brand-logo'));

    $('#menu').click(function(){
        clickNavBarOption($(this), 'short_text', '.side-nav');
    });

    $('#search').click(function(){
        $('input#query').val('');
        $('.search-container .search-post').empty();
        clickNavBarOption($(this), 'search', '.search-pane');
        $('input#query').focus();
    });

    // Set up search  
    $.getJSON('/feed.json', function (response) {
        const options = {
            // isCaseSensitive: false,
            // includeScore: false,
            // shouldSort: true,
            // includeMatches: false,
            // findAllMatches: false,
            // minMatchCharLength: 1,
            // location: 0,
            // threshold: 0.6,
            // distance: 100,
            // useExtendedSearch: false,
            keys: [
                "title",
                "content"
            ]
        };

        const fuse = new Fuse(response, options);

        $('input#query').on('keyup', function () {
            var result = fuse.search($(this).val());

            $('.search-container .search-post').empty();

            $.each(result, function(i, obj){
                let url = obj.item.url;
                let title = obj.item.title;
                let excerpt =  obj.item.excerpt;
                $('.search-container .search-post').append('<li><a href="'+url+'"><div class="title">'+title+'</div><div class="desc">'+excerpt+'</div></a></li>');
            });
        });
    });

    // $('#theme-btn').click(function(){
    //     if($(this).prop('checked')){
    //         setCookie('theme', 'dark', 2);
    //     } else {
    //         setCookie('theme', 'light', 2);
    //     }
        
    //     $('body').attr('class', getCookie('theme')+' lock-body');
    // });

    // if(getCookie('theme')=='dark'){
    //     $('#theme-btn').prop('checked', true);
    // }
});

function typewriter(element){
    let brand_text = element.text();
    let i=0;
    element.text('');
    var interval = setInterval(() => {
        if (i < brand_text.length) {
            element.append(brand_text[i])
            i++;
        } else {
            clearInterval(interval);
        }
    }, 140);
}

function clickNavBarOption(element, icon, panel) {
    if(element.hasClass('lock-body')){
        element.find('i').text(icon);
        $('.container .overlay').remove();
        $('.nav-wrapper button').prop('disabled', false);
    } else {
        element.find('i').text('close');
        $('.container').append('<div class="overlay"></div>');
        $('.nav-wrapper button').prop('disabled', true);
        element.prop('disabled', false);
    }
    element.toggleClass('lock-body');
    $('body').toggleClass('lock-body');
    $(panel).toggleClass('open');
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}