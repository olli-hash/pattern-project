
function call_ui() {
    // l($('form').length)
    var laststate = true

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    $('form').on("click", function() {
        var ui_ex3_state1 = {
            transition : "2s" ,
            width : "500px",
            backgroundColor : "#faa"
        }
        var ui_ex3_state2 = {
            transition : "2s" ,
            width : "500px",
            backgroundColor : "#faa"
        }
        $(this).css(ui_ex3_state1)
    })

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
    $('p').on("click", function() {

        if ($(this).hasClass("select1")) {
            $(this).removeClass("select1")
        } else {
            $(this).addClass("select1")
        }

    })

    $("p").dblclick(function(){
      $(this).hide();
    });

    // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

    $(".code1").click(function(){
        $(this).slideUp()
    })


    // $(".code1_output").click(function(){
    //     $(this).slideUp()
    // })


    $(".upper_bar").click(function(){
        $(this).parent().children(".code1").slideDown()
        $(this).parent().children(".code1_output").slideDown()
    })



    $( window ).on( "load", function() {
        console.log("--- page has been loaded ---")

            // https://learn.jquery.com/using-jquery-core/document-ready/
    })


}
