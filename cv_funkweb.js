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

        deleteRow($(this));
    })

    $("#photo").change(function (event) {
        const newImg = URL.createObjectURL(event.target.files[0]);
        $('#profileImg1').attr('src', newImg);
    });

    $('.education .text-input').keyup(function (){
        addNewRow($(this), 'education')
    });

    $('.job .text-input').keyup(function (){
        addNewRow($(this), 'job')
    });

    $('.course .text-input').keyup(function (){
        addNewRow($(this), 'course')
    });

    $('.language .text-input').keyup(function (){
        addNewRow($(this), 'language')
    });

    $('.certificate .text-input').keyup(function (){
        addNewRow($(this), 'certificate')
    });

    $('.hobby .text-input').keyup(function (){
        addNewRow($(this), 'hobby')
    });

    $('#reset').click(function () {
        const inputs = $('input.text-input')
        inputs.each(function () {
            $(this).val('');
            let targetId = $(this).data('target');
            const target = $('#' + targetId);
            let defaultValue = target.data('default');
            if (!defaultValue){
                defaultValue = "";
            }
            target.text(defaultValue);

            $('.tables tr:nth-of-type(n+3)').remove();
            $('.otherInfoTable tr:nth-of-type(n+2)').remove();
        });

        $('textarea#competence').each(function () {
            $(this).val('');
            let targetId = $(this).data('target');
            const target = $('#' + targetId);
            let defaultValue = target.data('default');
            if (!defaultValue){
                defaultValue = "";
            }
            target.text(defaultValue);
        });
    })

    $('textarea#competence').keyup(function () {
        let message = $(this).val();
        let targetId = $(this).data('target');
        $('#' + targetId).text(message);
    })
});

function addNewRow(input, section) {
    const parentTable = $(input).parents('.tables');
    const parentTr = $(input).parents('tr');
    const tableTrs = parentTable.find('tr');
    const trIndex = tableTrs.index(parentTr);
    const trLength = tableTrs.length;

    let allInputsFilled = true;
    parentTr.find('.text-input').each(function () {
        if (!$(this).val()) {
            allInputsFilled = false;
        }
    });

    if ((trIndex === trLength - 1) && allInputsFilled) {
        switch (section) {
            case 'education':
                const newTrEducation = $('<tr>\n' +
                    `            <td><input class="text-input" type="text" maxlength="11" data-target="filledEducationYear${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledUniversity${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledSpeciality${trIndex}"></td>\n` +
                    `            <td><input type="button" class="resetButton" data-target="educationButton${trIndex}" onclick="deleteRowWithButton()"></td>\n` +
                    '        </tr>');
                newTrEducation.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'education')
                    deleteRow($(this));
                });
                parentTable.append(newTrEducation);

                const newDivEducation = $('<tr class="finalCvItemsTr">\n' +
                    `                <td id="filledEducationYear${trIndex}" class="finalCvSectionsTitle finalCvItemsTd"></td>\n` +
                    `                <td id="filledUniversity${trIndex}" class="infoItems finalCvItemsTd"></td>\n` +
                    `                <td id="filledSpeciality${trIndex}" class="infoItems finalCvItemsTd"></td>\n` +
                    '            </tr>');

                $('#education .finalCvSections').append(newDivEducation);
                break;

            case 'job':
                const newTrJob = $('<tr>\n' +
                    `            <td><input class="text-input" type="text" maxlength="11" data-target="filledJobYear${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledJobCompany${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledJobTitle${trIndex}"></td>\n` +
                    `            <td><input type="button" class="resetButton" data-target="jobButton${trIndex}" onclick="deleteRowWithButton()"></td>\n` +
                    '        </tr>');
                newTrJob.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'job');
                    deleteRow($(this));
                });

                parentTable.append(newTrJob);

                const newDivJob = $('<tr>\n' +
                    `                <td id="filledJobYear${trIndex}" class="finalCvSectionsTitle"></td>\n` +
                    `                <td id="filledJobCompany${trIndex}" class="infoItems"></td>\n` +
                    `                <td  id="filledJobTitle${trIndex}" class="infoItems"></td>\n` +
                    '            </tr>');

                $('#job .finalCvSections').append(newDivJob);
                break;

            case 'course':
                const newTrCourse = $('<tr>\n' +
                    `            <td><input class="text-input" type="text" maxlength="11" data-target="filledCourseYear${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledCourseCompany${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledCourseName${trIndex}"></td>\n` +
                    `            <td><input type="button" class="resetButton" data-target="courseButton${trIndex}" onclick="deleteRowWithButton()"></td>\n` +
                    '        </tr>');
                newTrCourse.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'course');
                    deleteRow($(this));
                });

                parentTable.append(newTrCourse);

                const newDivCourse = $('<tr>\n' +
                    `                <td id="filledCourseYear${trIndex}" class="finalCvSectionsTitle"></td>\n` +
                    `                <td id="filledCourseCompany${trIndex}" class="infoItems"></td>\n` +
                    `                <td  id="filledCourseName0${trIndex}" class="infoItems"></td>\n` +
                    '            </tr>');

                $('#course .finalCvSections').append(newDivCourse)
                break;

            case 'language':
                const newTrLanguage = $('<tr>\n' +
                    `            <td><input value="Språk" readonly></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="language${trIndex + 1}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="languageLevel${trIndex + 1}"></td>\n` +
                    `            <td><input type="button" class="resetButton" data-target="languageButton${trIndex}" onclick="deleteRowWithButton()"></td>\n` +
                    '        </tr>');
                newTrLanguage.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'language');
                    deleteRow($(this));
                });

                parentTable.append(newTrLanguage);

                const newDivLanguage = $('<tr>\n' +
                    `            <td class="finalCvSectionsTitle"></td>\n` +
                    `            <td id="language${trIndex + 1}" class="infoItems"></td>\n` +
                    `            <td id="languageLevel${trIndex + 1}" class="infoItems"></td>\n` +
                    '        </tr>');

                $('#language').append(newDivLanguage)
                break;

            case 'certificate':
                const newTrCertificate = $('<tr>\n' +
                    '            <td><input value="Sertifikat" readonly></td>\n' +
                    `            <td><input class="text-input" type="text" data-target="certificate${trIndex + 1}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="certificateLevel${trIndex + 1}"></td>\n` +
                    `            <td><input type="button" class="resetButton" data-target="certificateButton${trIndex}" onclick="deleteRowWithButton()"></td>\n` +

                    '        </tr>');
                newTrCertificate.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'certificate');
                    deleteRow($(this));
                });
                parentTable.append(newTrCertificate);

                const newDivCertificate = $('<tr>\n' +
                    `            <td></td>\n` +
                    `            <td id="certificate${trIndex + 1}"></td>\n` +
                    `            <td id="certificateLevel${trIndex + 1}"></td>\n` +
                    '        </tr>');

                $('#certificate').append(newDivCertificate)
                break;
            case 'hobby':
                const newTrHobby = $('<tr>\n' +
                    '            <td><input value="Interesser" readonly></td>\n' +
                    `            <td><input class="text-input" type="text" data-target="hobby${trIndex + 1}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="anotherHobby${trIndex + 1}"></td>\n` +
                    `            <td><input type="button" class="resetButton" data-target="hobbyButton${trIndex}" onclick="deleteRowWithButton()"></td>\n` +
                    '        </tr>');
                newTrHobby.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'hobby');
                    deleteRow($(this));
                });

                parentTable.append(newTrHobby);

                const newDivHobby = $('<tr>\n' +
                    `            <td></td>\n` +
                    `            <td id="hobby${trIndex + 1}"></td>\n` +
                    `            <td id="anotherHobby${trIndex + 1}"></td>\n` +
                    '        </tr>');

                $('#hobby .finalCvSections').append(newDivHobby)
                break;
        }
    }
}

function deleteRow(input){
    const parentTable = $(input).parents('.tables');
    const tableChildren = parentTable.find('tr').length;
    if (tableChildren > (parentTable.hasClass('otherInfoTable') ? 1 : 2)){
        const parentTr = $(input).parents('tr');
        let allInputsEmpty = true;
        parentTr.find('.text-input').each(function(){
            if ($(this).val()){
                allInputsEmpty = false;
            }
        });

        if (allInputsEmpty){
            let targetId = $(input).closest('tr').find('input:eq(1)');
            let tdTarget = targetId.data('target');
            $('#' + tdTarget).closest('tr').remove();
            parentTr.remove();
        }
    }
}

function deleteRowWithButton(){

    $('.tables').on('click', 'input[type="button"]', function(e){
        let closestTable = $(this).closest('table').find('tr').length;
        let targetId = $(this).closest('tr').find('input:eq(1)');
        let tdTarget = targetId.data('target');
        if (closestTable > 2) {
            $('#' + tdTarget).parents('tr').remove();
            $(this).closest('tr').remove();
        } else {
            $(this).closest('tr').find('input.text-input').val('');
            $('#' + tdTarget).closest('tr').find('td').empty();
        }
    })
}

function checkEmail() {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let emailValue = $("#email").val();
    if (!emailReg.test(emailValue)){
        $("#email").val('try again');
        $('#email').css( "color", "#FF5F6D");
        let emailTarget = $('#email').data('target');
        $('#' + emailTarget).empty();
    } else {
        $('#email').css( "color", "#000000");
    }
}
