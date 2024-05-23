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

document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.querySelector('.nav-button');
    const navList = document.querySelector('.nav-list');
    
 // Скрипт для открытия и закрытия навигационного меню с анимацией
    navButton.addEventListener('click', function() {
        if (navList.style.display === 'block') {
            navList.style.animation = 'slideUp 0.3s forwards';
            setTimeout(() => {
                navList.style.display = 'none';
            }, 300);
        } else {
            navList.style.display = 'block';
            navList.style.animation = 'slideDown 0.3s forwards';
        }
    });

    // Скрипт для закрытия навигационного меню при уходе мыши с его области
    navList.addEventListener('mouseleave', function() {
        navList.style.animation = 'slideUp 0.3s forwards';
        setTimeout(() => {
            navList.style.display = 'none';
        }, 300);
    });
});
