$(document).ready(function(){

    $('video')[0].removeAttribute("controls");
        
    $('video').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls");
            $('#airpodsDiv')[0].display = 'none';
        } else {
            this.setAttribute("controls", "controls");
            $('#airpodsDiv')[0].display = '';
        }
    });


    

    // $('input[type=submit]').click(function() {

        
    //     $('input').each(function(){

    //         var isValid = true;
    //         var content = this.value;

    //         if (content == "" || content = "Send") {
    //             alert( "Message sent." );
    //         }
            
    //     });

    //     alert(content);
    // });

    $('.slick').slick({
        fade: true,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        centerMode: true
      });
});