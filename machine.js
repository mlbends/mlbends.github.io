//global array of all posible responses (since they're fixed)
    var RESPONSES = ["You must not say anything againse The Machine!", "Pray to The Machine when you are unhappy.", "How we have advanced, thanks to The Machine!",
                    "You are beginning to worship The Machine.", "All the fear and the superstition that existed once have been destroyed by The Machine.", "The Machine hums! Did you know that? Its hum penetrates our blood, and may even guide our thoughts.", 
                    "On atavism The Machine can have no mercy.", "The Machine has been most merciful."];

//calculating the response by random selection
    function calculateResponse() {
        var responseIndex = Math.floor(8*Math.random());
        var response = RESPONSES[responseIndex];

//rendering display notification including the question that was asked and submitted. There is a 3 second time delay to display the notification
    var waitString = "The Machine is thinking"
    updateMachineDisplay(waitString);

    setTimeout(function(response){updateMachineDisplay(response)}, 3000, response);
}

//updating the display (div) with given text
function updateMachineDisplay(displayText) {
    document.getElementById("machineDisplay").innerHTML = displayText;
}


    
    