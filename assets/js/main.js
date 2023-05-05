document.addEventListener('DOMContentLoaded', function () {

    // ТАБЫ
    // кнопки
    const tabButtons = document.querySelectorAll('.tab__nav-button');
    // ссылки в хедере
    const tabBlocks = document.querySelectorAll('.tab__block');
    // обход коллекции кнопок через forEach
    tabButtons.forEach(function(item) {
        // для каждой кнопки запускаем прослушку события клик
        item.addEventListener('click', function() {
            const currentButton = item; // кнопка по которой кликнули
            const blockIdSelector = currentButton.getAttribute('data-tab');
            const currentBlock = document.querySelector(blockIdSelector);

            // снимаем активный класс со всех кнопок
            tabButtons.forEach(function (item) {
                item.classList.remove('tab__nav-button-active');
            });
            // снимаем активный класс со всех блоков
            tabBlocks.forEach(function (item) {
                item.classList.remove('tab__block-active');
            });

            // добавляем активный класс кнопке, по которой кликнули
            currentButton.classList.add('tab__nav-button-active');
            // добавляем активный класс к блоку, который нужно показать
            currentBlock.classList.add('tab__block-active');
        });
    });
    const dataOpen = document.querySelectorAll('[data-open]');
    dataOpen.forEach(function(i) {
    i.addEventListener('click', function() {
        const thisData =  this.getAttribute('data-open')
        
        // обходим контент табов и находим нужный, делаем его активным
        tabBlocks.forEach(function (item) {
            item.classList.remove('tab__block-active');
            const itemData =  item.getAttribute('id');
            if(thisData == itemData){
                item.classList.add('tab__block-active');
            }
        });
        
        // обходим кнопки табов и находим нужную, делаем ее активным
        tabButtons.forEach(function (item) {
            item.classList.remove('tab__nav-button-active');
            const btnData = item.getAttribute('data-tab');
            console.log(btnData); 
            if('#'+ thisData ==  btnData){
                item.classList.add('tab__nav-button-active');
            }

        });
        
        console.log( thisData);
        
    }); /* end click*/
    });

    // POPUP
    // навигация
    document.querySelector('.nav__contacts-button').addEventListener('click', function(){
        document.querySelector('.popup-call-nav').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-nav__close').addEventListener('click', function(){
        document.querySelector('.popup-call-nav').classList.remove('popup-call-active');
    });
    // хедер
    document.querySelector('#button-header').addEventListener('click', function(){
        document.querySelector('.popup-call-header').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-header__close').addEventListener('click', function(){
        document.querySelector('.popup-call-header').classList.remove('popup-call-active');
    });
    // Информация о документе
    document.querySelector('#information__button').addEventListener('click', function(){
        document.querySelector('.popup-call-original').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-original__close').addEventListener('click', function(){
        document.querySelector('.popup-call-original').classList.remove('popup-call-active');
    });
    // оригинальные документы
    document.querySelector('#button-original').addEventListener('click', function(){
        document.querySelector('.popup-call-original').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-original__close').addEventListener('click', function(){
        document.querySelector('.popup-call-original').classList.remove('popup-call-active');
    });
    // часто запрашиваемые
    document.querySelector('#button-documents').addEventListener('click', function(){
        document.querySelector('.popup-call-documents').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-documents__close').addEventListener('click', function(){
        document.querySelector('.popup-call-documents').classList.remove('popup-call-active');
    });
    // доставка 
    document.querySelector('#button-delivery').addEventListener('click', function(){
        document.querySelector('.popup-call-delivery').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-delivery__close').addEventListener('click', function(){
        document.querySelector('.popup-call-delivery').classList.remove('popup-call-active');
    });
    // специалисты
    document.querySelector('#button-staff').addEventListener('click', function(){
        document.querySelector('.popup-call-staff').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-staff__close').addEventListener('click', function(){
        document.querySelector('.popup-call-staff').classList.remove('popup-call-active');
    });
    // footer
    document.querySelector('#button-footer').addEventListener('click', function(){
        document.querySelector('.popup-call-footer').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-footer__close').addEventListener('click', function(){
        document.querySelector('.popup-call-footer').classList.remove('popup-call-active');
    });
    // мобильная навигация
    document.querySelector('#button-nav-mobile').addEventListener('click', function(){
        document.querySelector('.popup-call-nav-mobile').classList.add('popup-call-active');
    });
    document.querySelector('.popup-call-nav-mobile__close').addEventListener('click', function(){
        document.querySelector('.popup-call-nav-mobile').classList.remove('popup-call-active');
    });

    // КАРУСЕЛЬ
    // Часто запрашиваемые документы
    $(document).ready(function(){

        const owl = $('#carousel-documents');
        owl.owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 2000,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                
                },
                600: {
                    items: 1,
                    
                },
                900: {
                    items: 2,
                    
                },
                1200: {
                    item: 3
                }
            }
            
        });
    
        const prev = $('.sliderPrev-projects');
        const next = $('.sliderNext-projects');
    
        prev.click(function() {
            owl.trigger('prev.owl.carousel');
        })
    
        next.click(function() {
            owl.trigger('next.owl.carousel');
        })
    });
    $(document).ready(function(){

        const owl = $('#order_carousel-documents');
        owl.owlCarousel({
            items: 3,
            nav: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 2000,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                
                },
                600: {
                    items: 1,
                    
                },
                900: {
                    items: 2,
                    
                },
                1200: {
                    item: 3
                }
            }
            
        });
    
        const prev = $('.sliderPrev-projects');
        const next = $('.sliderNext-projects');
    
        prev.click(function() {
            owl.trigger('prev.owl.carousel');
        })
    
        next.click(function() {
            owl.trigger('next.owl.carousel');
        })
    });
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

    // Лицензии
    $(document).ready(function(){

        const owl = $('#carousel-licenses');
        owl.owlCarousel({
            items: 4,
            nav: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 2000,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                
                },
                600: {
                    items: 1,
                    
                },
                900: {
                    items: 2,
                    
                },
                1200: {
                    item: 4
                }
            }
            
        });
    
        const prev = $('.sliderPrev-projects');
        const next = $('.sliderNext-projects');
    
        prev.click(function() {
            owl.trigger('prev.owl.carousel');
        })
    
        next.click(function() {
            owl.trigger('next.owl.carousel');
        })
    });


    // сотрудники
    $(document).ready(function(){

        const owl = $('#carousel-staff');
        owl.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 2000,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                
                },
                600: {
                    items: 1,
                    
                }
            }
            
        });
    
        const prev = $('.sliderPrev-projects');
        const next = $('.sliderNext-projects');
    
        prev.click(function() {
            owl.trigger('prev.owl.carousel');
        })
    
        next.click(function() {
            owl.trigger('next.owl.carousel');
        })
    });

    // МОБИЛЬНАЯ НАВИГАЦИЯ
    document.querySelector('.nav-icon').addEventListener('click', function(){
        this.classList.toggle('nav-icon--active');
        document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active')
    });

    // МАСКА ТЕЛЕФОН
    [].forEach.call( document.querySelectorAll('.input-tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
})