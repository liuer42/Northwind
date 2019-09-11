$(function(){
    //alert("Hello World");
    //$('.toast').toast('show');

    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    $('.form-check-input').on('change', function () {
        $('#' + this.id + 'Img').css('visibility', 'visible');

        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated slideInUp') :
            $('#' + this.id + 'Img').addClass('animated slideOutDown');
    });
});
