$('#loginForm').on('submit', function (e) {
    e.preventDefault();

    const login = $('#login').val().trim();
    const password = $('#password').val().trim();
    const $message = $('#message');

    $message.text('Checking...').css('color', '#888');
    setTimeout(() => {
        if (login === '242143' && password === '687') {
            $message.text('Access granted ✅').css('color', 'green');
            setTimeout(() => {
                window.location.href = 'home/index.html';
            }, 1000);
        } else {
            $message.text('Invalid login or password').css('color', 'red');
        }
    }, 1500);
});