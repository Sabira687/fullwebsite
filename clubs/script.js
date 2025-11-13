$(document).ready(function () {
    let selectedClub = '';

    $('.details-btn').on('click', function () {
        const title = $(this).data('title');
        const desc = $(this).data('desc');
        $('#clubModalTitle').text(title);
        $('#clubModalDesc').text(desc);
        $('#clubModal').modal('show');
    });

    $('.join-btn').on('click', function () {
        selectedClub = $(this).data('title');
        $('#joinModalTitle').text(`Join ${selectedClub}`);
        $('#telegramTag').val('');
        $('#joinModal').modal('show');
    });

    $('#confirmJoin').on('click', function () {
        const telegramTag = $('#telegramTag').val().trim();
        if (!telegramTag.startsWith('@')) {
            alert('Please enter a valid Telegram tag starting with @');
            return;
        }

        let joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];

        if (joinedClubs.some(c => c.club === selectedClub)) {
            alert('You have already joined this club.');
            $('#joinModal').modal('hide');
            return;
        }

        joinedClubs.push({
            club: selectedClub,
            telegram: telegramTag
        });

        localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));

        displayJoinedClubs();

        $('#joinModal').modal('hide');
        alert(`You successfully joined ${selectedClub}!`);
    });

    function displayJoinedClubs() {
        const list = $('#joinedClubsList');
        list.empty();

        let joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];

        if (joinedClubs.length === 0) {
            list.append('<li class="list-group-item text-secondary">No clubs joined yet.</li>');
            return;
        }

        joinedClubs.forEach((item, index) => {
            list.append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span><strong>${item.club}</strong> — ${item.telegram}</span>
          <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${index}">Remove</button>
        </li>
      `);
        });
    }

    $(document).on('click', '.remove-btn', function () {
        let index = $(this).data('index');
        let joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
        joinedClubs.splice(index, 1);
        localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
        displayJoinedClubs();
    });

    displayJoinedClubs();
});