$(function ($) {
    "use strict";

    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function (event) {
        event.preventDefault();

        var username = $('[name="username"]').val().trim();
        var password = $('[name="pass"]').val().trim();

        var redirectToPage = '';

        if (username === 'admin1234' && password === 'adm123') {
            redirectToPage = 'pages/Deanship.html';
        } else if (username === 'shd0203129' && password === 'vol123') {
            redirectToPage = 'pages/Volunteer.html';
        } else if (username === 'mhm0203128' && password === 'std123') {
            redirectToPage = 'pages/student.html';
        }

        if (redirectToPage !== '') {
            window.location.href = redirectToPage;
        } else {
            var usernameCorrect = false;
            var passwordCorrect = false;

            if (username === 'admin1234' || username === 'shd0203129' || username === 'mhm0203128') {
                usernameCorrect = true;
            }

            if ((username === 'admin1234' && password === 'adm123') ||
                (username === 'shd0203129' && password === 'vol123') ||
                (username === 'mhm0203128' && password === 'std123')) {
                passwordCorrect = true;
            }

            if (!usernameCorrect) {
                // Username does not match
                // Display an error message for incorrect username
                $('[name="username"]').siblings('.error-message').text('Invalid username').show();
            } else {
                // Hide the username error message if the username is correct
                $('[name="username"]').siblings('.error-message').hide();
            }
            
            if (!passwordCorrect) {
                // Password does not match
                // Display an error message for incorrect password
                $('[name="pass"]').siblings('.error-message').text('Invalid password').show();
            } else {
                // Hide the password error message if the password is correct
                $('[name="pass"]').siblings('.error-message').hide();
            }
        }
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') === 'username' || $(input).attr('name') === 'username') {
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