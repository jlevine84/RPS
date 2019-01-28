var config = {
    apiKey: "AIzaSyBiVJN6P7baMD2cRXaGhyRS4Vv0wju5vjA",
    authDomain: "rpsls-1b10e.firebaseapp.com",
    databaseURL: "https://rpsls-1b10e.firebaseio.com",
    projectId: "rpsls-1b10e",
    storageBucket: "",
    messagingSenderId: "5634337018"
};
firebase.initializeApp(config);
var database = firebase.database();
var game = false


$(document).ready(function(){
    //Two users log their name

    //Update UI
    //Display users name in player tabs while active
    //Create user's data fields while active

    //Game Loop
    //if  two players = logged in
    //Prompt player 1 for a selection
    //Prompt player 2 for a selection
    //Resolve players selection and display results on game-display
    //Update player data
    //Game loop continues as long as two users are active.


    //Chat Window functionality
    $("#chatinput").submit(function(event){
        event.preventDefault();
        var message = $("#input-chat").val();
        $("#input-chat").val("")
        database.ref("/messages").push({
            //TODO: Capture User
            message: message
        })

    //End of chat window function
    });

    //Propogate chat table 
    database.ref("/messages").on("child_added", function(snapshot){
        var newMessage = snapshot.val()
        var newTR = $("<tr>")
        //TODO: Add User Name
        var newTDMessage = $("<td>").text(newMessage.message).addClass("text-left")
        newTR.append(newTDMessage)
        $("tbody").append(newTR)

    //End of chat table propogation
    });


//End of document ready function
});