$(document).ready(function () {
    $('.details-btn').on('click', function () {
        const title = $(this).data('title');
        const desc = $(this).data('desc');

        $('#clubModalTitle').text(title);
        $('#clubModalDesc').text(desc);
        $('#clubModal').modal('show');
    });

    $('.join-btn').on('click', function () {
        const club = $(this).data('club');
        $('#joinClubName').text(`You are joining: ${club}`);
        $('#telegram').val('');
        $('#joinMessage').text('');

        const btn = $(this);
        btn.text('Loading...').prop('disabled', true);

        setTimeout(() => {
            btn.text('Join').prop('disabled', false);
            $('#joinModal').modal('show');
        }, 1500);
    });

    $('#submitJoin').on('click', function () {
        const telegram = $('#telegram').val().trim();
        const msg = $('#joinMessage');

        if (telegram === '' || !telegram.startsWith('@')) {
            msg.text('Please enter a valid Telegram tag (e.g., @username)').css('color', 'red');
            return;
        }

        msg.text('Submitting...').css('color', '#888');

        setTimeout(() => {
            msg.text('You have successfully joined the club ✅').css('color', 'green');
            $('#telegram').val('');
        }, 1500);
    });
});