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
                $('.fa-home').css('color', '#f1b24a');
                $('.fa-folder').css('color', 'white');
                $('.fa-address-card').css('color', 'white');
                $('.fa-phone-alt').css('color', 'white');
            }
            else if (wielkoscScrolla < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
                $('.fa-home').css('color', 'white');
                $('.fa-folder').css('color', '#f1b24a');
                $('.fa-address-card').css('color', 'white');
                $('.fa-phone-alt').css('color', 'white');
            } 
            else if (wielkoscScrolla < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
                $('.fa-home').css('color', 'white');
                $('.fa-folder').css('color', 'white');
                $('.fa-address-card').css('color', '#f1b24a');
                $('.fa-phone-alt').css('color', 'white');
            } 
            else {
                $('.fa-home').css('color', 'white');
                $('.fa-folder').css('color', 'white');
                $('.fa-address-card').css('color', 'white');
                $('.fa-phone-alt').css('color', '#f1b24a');
            } 
        }   
           $(document).on('scroll', active)