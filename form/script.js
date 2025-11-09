$(document).ready(function () {
    $('#suggestionForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const type = $('#type').val();
        const message = $('#message').val().trim();
        const formMessage = $('#formMessage');

        if (!name || !email || !type || !message) {
            formMessage.text('Please fill in all fields.').css('color', 'red');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            formMessage.text('Please enter a valid email address.').css('color', 'red');
            return;
        }

        formMessage.text('Sending...').css('color', '#888');

        setTimeout(() => {
            formMessage.text('Thank you! Your suggestion has been submitted ✅').css('color', 'green');
            $('#suggestionForm')[0].reset();
        }, 1500);
    });
});