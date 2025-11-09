$(document).ready(function () {
    $('.details-btn').on('click', function () {
        const title = $(this).data('title');
        const desc = $(this).data('desc');

        $('#eventModalTitle').text(title);
        $('#eventModalDesc').text(desc);
        $('#eventModal').modal('show');
    });
});