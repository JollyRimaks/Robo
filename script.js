$(document).ready(function() {
    // Скрипт для открытия и закрытия навигационного меню
    $('.nav-button').on('click', function() {
        $('.nav-list').toggleClass('open');
    });

    // Скрипт для отправки формы и показа сообщения о подтверждении
    $('.form').on('submit', function(e) {
        e.preventDefault();
        alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        $(this).trigger('reset');
    });

    // Скрипт для прокрутки к секциям при клике на навигационные ссылки
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Скрипт для добавления активного класса к ссылкам меню
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('.nav-list a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-list a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
});

