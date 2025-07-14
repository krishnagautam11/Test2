
$('.nav-btn').hover(function () {
    $('.nav-btn').removeClass('active');
    $(this).addClass('active');

    const target = $(this).data('target');
    $('.card-section').removeClass('active');
    $(target).addClass('active');
});
