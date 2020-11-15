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
    function validate(evt) {
        var theEvent = evt || window.event;
      
        // Handle paste
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
        // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
      }
});
