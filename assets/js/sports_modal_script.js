"use strict";
(function() {
    // Global variables 
    let userAgent = navigator.userAgent.toLowerCase(),
        initialDate = new Date(),
        plugins = {
            modalSport: $('.modal-sport')
        };


    // Initialize scripts that require a finished document
    $(function() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (plugins.modalSport.length) {
            var teamName = $('[data-team-name]').text();
            $('.sport-table-wager-button').each(function() {
                var teamName = $(this).data('team-name'),
                    confrontation = $(this).data('confrontation'),
                    vager = $(this).data('wager-count'),
                    score = $(this).data('score'),
                    betting = $(this).data('betting');

                $(this).on('click', function() {
                    $('.modal-sport-wager').html(teamName);
                    $('.modal-sport-wager-count').html(vager);
                    $('.modal-sport-confrontation').html(confrontation);
                    $('.modal-sport-live-count').html('[' + score + ']');
                    $('.modal-sport-bets-right').html(getRandomInt(1, 100));
                    $('.modal-sport-stake-right').html(getRandomInt(1, 100));
                    $('.modal-sport-win-right').html(getRandomInt(1, 32));
                    $('.modal-sport-live-betting').html(betting);
                })
            })
        }
    });
}());

$(document).on('click', '.up, .down', function(e) {
    e.preventDefault();
    var parent = $(this).parents('.stepper');
    var sport_bet_nos = parent.find('[name="sport_bet"]');
    var val = sport_bet_nos.val();
    if ($(this).hasClass('down')) {
        val = parseInt(val) + 1;
    } else {
        if (val == 1) {
            val = 1;
        } else {
            val = val >= 1 ? parseInt(val) - 1 : 0;
        }
    }
    sport_bet_nos.val(val);
    sport_bet_nos.trigger("change");
    return false;
});