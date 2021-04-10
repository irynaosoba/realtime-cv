$(document).ready(function() {
    const inputs = $('input.text-input')
    inputs.focus(function () {
        $(this).css('background', '#d9ffff')
    })

    inputs.blur(function () {
        $(this).css('background', '')
    })

    inputs.keyup(function () {
        let value = $(this).val();
        const targetId = $(this).data('target');
        $('#' + targetId).text(value);

        showCv();
    })

    $("#photo").change(function (event) {
        let newImg = URL.createObjectURL(event.target.files[0]);
        $('#profileImg1').attr('src', newImg);

        showCv();
    });
});

function showCv() {
    const finalCvDiv = $('.finalCv')
    if (finalCvDiv.css('display') === 'none'){
        finalCvDiv.css('display', 'block');
        finalCvDiv.css('width', '60%');
        $('.inputCvData').css('width', '40%');
    }
}
