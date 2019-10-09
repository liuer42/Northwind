$(function(){
    //alert("Hello World");
    //$('.toast').toast('show');


    //random animate
    var rand = 1 + Math.floor(Math.random() * 8);

    if (rand == 1) {
        $('#hbd').addClass('animated slideInUp');
    } else if (rand == 2) {
        $('#hbd').addClass('animated flip');
    } else if (rand == 3) {
        $('#hbd').addClass('animated bounceIn');
    } else if (rand == 4) {
        $('#hbd').addClass('animated jello');
    } else if (rand == 5) {
        $('#hbd').addClass('animated tada');
    } else if (rand == 6) {
        $('#hbd').addClass('animated shake');
    } else if (rand == 7) {
        $('#hbd').addClass('animated wobble');
    } else if (rand == 8) {
        $('#hbd').addClass('animated flash');
    }


    //check/uncheck all
    var clicked = false;

    $('#checkAll').on('click', function () {
        $('.form-check-input').prop('checked', !clicked);
        clicked = !clicked;
    });

    // toast on submit - none checked
    $('#submit').on('click', function () {
        if ($('.form-check-input').is(':checked')) {
            //while something is checked
        } else {
            //none
            $('#toastBalloon').toast({ autohide: false }).toast('show');
        }                   
    });

    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') {
            $('#toastBalloon').toast('hide');
        }
    })
    

    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    //balloon fx
    $('.form-check-input').on('change', function () {
        $('#' + this.id + 'Img').css('visibility', 'visible');

        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated slideInUp') :
            $('#' + this.id + 'Img').addClass('animated slideOutDown');
    });

    // css hover color
    $('.form-check-input').on('mouseenter', function () {
        $('#hbd').css('color', this.id);
    });
    $('.form-check-input').on('mouseleave', function () {
        $('#hbd').css('color', '#ffffff');
    });

});
