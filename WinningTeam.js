$(document).ready(function() {
    jQuery('.button a').click(function() {
        var homeScore = jQuery('#firstHomeScore').val() + jQuery('#secondAwayScore').val();
        var awayScore = jQuery('#firstAwayScore').val() + jQuery('#secondHomeScore').val();
        if (homeScore > awayScore) {
            winningTeam = "Home Team";
            jQuery('.output label').text(winningTeam);
            jQuery('.output').show();
            
        } else if (homeScore < awayScore) {
            winningTeam = "Away Team";
            jQuery('.output label').text(winningTeam);
            jQuery('.output').show();
        } else {
            if (jQuery('#firstAwayScore').val() > jQuery('#secondAwayScore').val()) {
                winningTeam = "Away Team";
                jQuery('.output label').text(winningTeam);
                jQuery('.output').show();
            } else if (jQuery('#firstAwayScore').val() < jQuery('#secondAwayScore').val()) {
                winningTeam = "Home Team";
                jQuery('.output label').text(winningTeam);
                jQuery('.output').show();
            } else {
                winningTeam = "Winner will announce after Penalties.";
                jQuery('.output label').text(winningTeam);
                jQuery('.output').show();
            }
        }
        
        
    });

});
