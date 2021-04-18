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

        // showCv();
    })

    $("#photo").change(function (event) {
        let newImg = URL.createObjectURL(event.target.files[0]);
        $('#profileImg1').attr('src', newImg);

        // showCv();
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
        });

        $('#photo').each(function () {
            $(this).val('');
            $('#profileImg1').attr('src', 'prof_pic.png');
        });

        $('.leftCvPart .cvSection').each(function () {
            $(this).css('display', 'none');
        });

        $('.rightCvPart .cvSection').each(function () {
            $(this).css('display', 'none');
        });
    })
});

function addNewRow(input, section){
    const parentTable = $(input).parents('.tables');
    const parentTr = $(input).parents('tr');
    const tableTrs = parentTable.find('tr');
    const trIndex = tableTrs.index(parentTr);
    const trLength = tableTrs.length;

    if (trIndex === trLength - 1){
        switch (section){
            case 'education':
                const newTrEducation = $('<tr>\n' +
                    `            <td><input class="text-input" type="text" data-target="filledEducationYear${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledUniversity${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledSpeciality${trIndex}"></td>\n` +
                    '        </tr>');
                newTrEducation.find('.text-input').keyup(function (){
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'education')
                });

                parentTable.append(newTrEducation);

                const newDivEducation = $('<div>\n' +
                    `                <div id="filledUniversity${trIndex}" class="sectionTitle"></div>\n` +
                    `                <div id="filledEducationYear${trIndex}" class="yearOfActivity"></div>\n` +
                    `                <div  id="filledSpeciality${trIndex}" class="sectionInfo"></div>\n` +
                    '            </div>');

                $('#education').append(newDivEducation);

                showCvSection('education')
                break;

            case 'job':
                const newTrJob = $('<tr>\n' +
                    `            <td><input class="text-input" type="text" data-target="filledJobYear${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledJobCompany${trIndex}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="filledJobTitle${trIndex}"></td>\n` +
                    '        </tr>');
                newTrJob.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'job')
                });

                parentTable.append(newTrJob);

                const newDivJob = $('<div>\n' +
                    `                <div id="filledJobCompany${trIndex}" class="sectionTitle"></div>\n` +
                    `                <div id="filledJobYear${trIndex}" class="yearOfActivity"></div>\n` +
                    `                <div  id="filledJobTitle${trIndex}" class="sectionInfo"></div>\n` +
                    '            </div>');

                $('#job').append(newDivJob);

                showCvSection('job')
                break;

            case 'course':
                const newTrCourse = $('<tr>\n' +
                        `            <td><input class="text-input" type="text" data-target="filledCourseYear${trIndex}"></td>\n` +
                        `            <td><input class="text-input" type="text" data-target="filledCourseCompany${trIndex}"></td>\n` +
                        `            <td><input class="text-input" type="text" data-target="filledCourseName${trIndex}"></td>\n` +
                        '        </tr>');
                newTrCourse.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'course')
                });

                parentTable.append(newTrCourse);

                const newDivCourse = $('<div>\n' +
                    `                <div id="filledCourseCompany${trIndex}" class="sectionTitle"></div>\n` +
                    `                <div id="filledCourseYear${trIndex}" class="yearOfActivity"></div>\n` +
                    `                <div  id="filledCourseName0${trIndex}" class="sectionInfo"></div>\n` +
                    '            </div>');

                $('#course').append(newDivCourse)
                showCvSection('course')
                break;

            case 'language':
                const newTrLanguage = $('<tr>\n' +
                    `            <td></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="language${trIndex +1}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="languageLevel${trIndex +1}"></td>\n` +
                    '        </tr>');
                newTrLanguage.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'language')
                });

                parentTable.append(newTrLanguage);

                const newDivLanguage = $('<tr>\n' +
                    `            <td></td>\n` +
                    `            <td id="language${trIndex + 1}"></td>\n` +
                    `            <td id="languageLevel${trIndex + 1}"></td>\n` +
                    '        </tr>');

                $('#language').append(newDivLanguage)
                showCvSection('language')
                break;

            case 'certificate':
                const newTrCertificate = $('<tr>\n' +
                    '            <td></td>\n' +
                    `            <td><input class="text-input" type="text" data-target="certificate${trIndex + 1}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="certificateLevel${trIndex + 1}"></td>\n` +
                    '        </tr>');
                newTrCertificate.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'certificate')
                });
                parentTable.append(newTrCertificate);

                const newDivCertificate = $('<tr>\n' +
                    `            <td></td>\n` +
                    `            <td id="certificate${trIndex + 1}"></td>\n` +
                    `            <td id="certificateLevel${trIndex + 1}"></td>\n` +
                    '        </tr>');

                $('#certificate').append(newDivCertificate)
                showCvSection('language')
                break;
            case 'hobby':
                const newTrHobby = $('<tr>\n' +
                    '            <td></td>\n' +
                    `            <td><input class="text-input" type="text" data-target="hobby${trIndex + 1}"></td>\n` +
                    `            <td><input class="text-input" type="text" data-target="anotherHobby${trIndex + 1}"></td>\n` +
                    '        </tr>');
                newTrHobby.find('.text-input').keyup(function () {
                    let value = $(this).val();
                    const targetId = $(this).data('target');
                    $('#' + targetId).text(value);
                    addNewRow($(this), 'hobby')
                });

                parentTable.append(newTrHobby);

                const newDivHobby = $('<tr>\n' +
                    `            <td></td>\n` +
                    `            <td id="hobby${trIndex + 1}"></td>\n` +
                    `            <td id="anotherHobby${trIndex + 1}"></td>\n` +
                    '        </tr>');

                $('#hobby').append(newDivHobby)
                showCvSection('language')
                break;
                    }
                }


    }

function showCvSection(section) {
    const finalCvSections = $('.' + section + 'CvSection');
    if (finalCvSections.css('display') === 'none'){
        finalCvSections.css('display', 'block');
    }
}

//
// function showCv() {
//     const finalCvDiv = $('.finalCv')
//     if (finalCvDiv.css('display') === 'none'){
//         finalCvDiv.css('display', 'block');
//         finalCvDiv.css('width', '60%');
//         $('.inputCvData').css('width', '40%');
//     }
// }
