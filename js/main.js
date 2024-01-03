$(function ($) {
    "use strict";

    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function (event) {
        event.preventDefault();

        var username = $('[name="username"]').val().trim();
        var password = $('[name="pass"]').val().trim();

        if (username === 'admin1234' && password === 'adm123') {
            window.location.href = 'pages/Deanship.html';
        } else if (username === 'shd0203129' && password === 'vol123') {
            window.location.href = 'pages/Volunteer.html';
        } else if (username === 'mhm0203128' && password === 'std123') {
            window.location.href = 'pages/student.html';
        } else {
            var check = true;

            for (var i = 0; i < input.length; i++) {
                if (validate(input[i]) === false) {
                    showValidate(input[i]);
                    check = false;
                }
            }

            return check;
        }
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
                return false;
            }
        } else {
            if ($(input).val().trim() === '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);