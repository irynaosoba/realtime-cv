$(document).ready(function() {
    $('input').focus(function () {
        $(this).css('background', '#d9ffff')
    })

    $('input').blur(function () {
        $(this).css('background', '')
    })

    $('input').keyup(function () {
        let value = $(this).val();
        const targetId = $(this).data('target');
        $('#' + targetId).text(value);
    })

    $("#imageUpload").change(function (event) {
        let newImg = URL.createObjectURL(event.target.files[0]);
        $('#profileImg1').attr('src', newImg)
    });
})
