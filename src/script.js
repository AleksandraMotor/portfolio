    // Menu główne 
            //sposób łopatologiczny xd
           $('.home').on('click', function(){
               $('body, html').animate({
                   scrollTop: $('.s1').offset().top, // po przecinku mozemy wypisac kolejne animacje, nie używamy średnika
               }, 500) //czas animacji
           })

           $('.projects').on('click', function(){
               $('body, html').animate({
                   scrollTop: $('.s2').offset().top
               }, 500)
           })

           $('.skills').on('click', function(){
               $('body, html').animate({
                   scrollTop: $('.s3').offset().top
               }, 500)
           })

           $('.contact').on('click', function(){
               $('body, html').animate({
                   scrollTop: $('.s4').offset().top
               }, 500)
           })

        //Menu boczne
           function active() {
            const wielkoscScrolla = $(document).scrollTop();
            const wysokoscSekcji1 = $('.s1').outerHeight(true);
            const wysokoscSekcji2 = $('.s2').outerHeight(true);
            const wysokoscSekcji3 = $('.s3').outerHeight(true);
            const wysokoscSekcji4 = $('.s4').outerHeight(true); 
            // height - tylko wysokość elementu
            // innerHeight - z paddingiem
            // outerHeight - z  border, padding
            // outerHeigth(truee) - obejmuje wszystko margin też

            const odlegloscOdPoczatkuSekcji1 = $('.s1').offset().top;
            const odlegloscOdPoczatkuSekcji2 = $('.s2').offset().top;
            const odlegloscOdPoczatkuSekcji3 = $('.s3').offset().top;
            const odlegloscOdPoczatkuSekcji4 = $('.s4').offset().top;

            if(wielkoscScrolla < wysokoscSekcji1) {
                $('.fa-home').css('color', 'yellow');
                $('.fa-folder').css('color', 'white');
                $('.fa-address-card').css('color', 'white');
                $('.fa-phone-alt').css('color', 'white');
            }
            else if (wielkoscScrolla < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
                $('.fa-home').css('color', 'white');
                $('.fa-folder').css('color', 'yellow');
                $('.fa-address-card').css('color', 'white');
                $('.fa-phone-alt').css('color', 'white');
            } 
            else if (wielkoscScrolla < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
                $('.fa-home').css('color', 'white');
                $('.fa-folder').css('color', 'white');
                $('.fa-address-card').css('color', 'yellow');
                $('.fa-phone-alt').css('color', 'white');
            } 
            else {
                $('.fa-home').css('color', 'white');
                $('.fa-folder').css('color', 'white');
                $('.fa-address-card').css('color', 'white');
                $('.fa-phone-alt').css('color', 'yellow');
            } 
        }   
           $(document).on('scroll', active)

    // Menu boczne
    // $(document).on('scroll', function() {
    //     const windowHeight = $(window).height();// bez $ przy zmiennej, ponieważ pobieramy wartość liczbową a nie element
    //     const scrolValue = $(this).scrolTop();//scrollTop wyświetla informację o tym gdzie jest aktualcnie scroll

    //     const $faHome = $('.fa-home');
    //     const $faProjects = $('.fa-folder');
    //     const $faSkills = $('.fa-address-card');
    //     const $faContact = $('.fa-phone-alt');


    //     const $s2 = $('.s2');
    //     const s2FromTop = $s2.offset().top;
    //     const s2Height = $s2.outerHeight();

    //     const $s3 = $('.s3');
    //     const s3FromTop = $s3.offset().top;
    //     const s3Height = $s3.outerHeight();

    //     const $s4 = $('.s4');
    //     const s4FromTop = $s4.offset().top;
    //     const s4Height = $s4.outerHeight();

    //     if (scrolValue < 100) {
    //         $faHome.css('color', 'yellow'); 
    //     }
    //     if (scrolValue > s2FromTop + s2Height - windowHeight) {
    //         $faProjects.css('color', 'yellow'); 
    //     }

    //     if (scrolValue > s3FromTop + s3Height - windowHeight) {
    //         $faSkills.css('color', 'yellow'); 
    //     }
    
    //     if (scrolValue > s4FromTop + s4Height - windowHeight) {
    //         $faContact.css('color', 'yellow'); 
    //     }
    // })