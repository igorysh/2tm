$(function(){
    function QuestionList(){
        let item = $(document).find('.js--rud__question--block');
        let itemTitle = item.find('.js--rud__question--title');
        let itemSubTitle = item.find('.js--rud__question--sub_title');

        console.log(item);
        itemTitle.on('click', function(){
            let $this = $(this);
            let thisItem = $this.closest(item);
            let thisItemSubTitle = thisItem.find(itemSubTitle);

            if (thisItem.hasClass('open')){
                thisItem.removeClass('open');
                thisItemSubTitle.slideUp();
            } else {
                item.removeClass('open');
                thisItem.addClass('open');
                itemSubTitle.slideUp();
                thisItemSubTitle.slideDown();
            }
        });
    }

    QuestionList();

    let carousel = new Swiper('.reviews-slider-single', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
            nextEl: '.rud--slider__next',
            prevEl: '.rud--slider__prev',
        },
    });

    var $page = $('html, body');
    $('a[href*="#list"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
});
});