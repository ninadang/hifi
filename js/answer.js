
$(function() {
    $("#answer").click(function(event) {
        alert('That is correct! Proceed to the next page.');
    });    

    $(".wrong").click(function(event) {
        alert('Sorry, that is incorrect. Please try again.');
    });  

});
