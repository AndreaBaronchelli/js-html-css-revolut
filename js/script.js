$(document).ready(function(){
    //DROPDOWN
    //Refs
    var dropDown = $(".with-dropdown");
    var dropLink = dropDown.children("a");
    var dropElement = dropDown.children(".dropdown")

    dropLink.click(function() {
        var openMenu = $(this).next(dropElement);
        //console.log(openMenu);
        // Reset
        dropElement.not(openMenu).hide();

        openMenu.toggle();
    });


//End doc ready
});