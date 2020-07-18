
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

    $(".example_contextobject").click(function(){
        $(this).slideUp()
    })

    $(".code1_output").click(function(){
        $(this).slideUp()
    })


    $(".upper_bar").click(function(){
        $(this).parent().children(".code1").slideDown()
        $(this).parent().children(".code1_output").slideDown()
        $(this).parent().children(".example_contextobject").slideDown()
    })



    $("#ajax1").click(function(e){
        e.stopPropagation()
        $.ajax({
            url: "http://rest-service.guides.spring.io/greeting"
        }).then(function(data) {
           $('#ajax1').append(data.id);
           $('#ajax1').append(data.content);
        })

    })
    $("#ajax2").click(function(e){
        e.stopPropagation()
    })
    $("#ajax3").click(function(e){
        e.stopPropagation()

    })




    $( window ).on( "load", function() {
        console.log("--- page has been loaded ---")

            // https://learn.jquery.com/using-jquery-core/document-ready/
    })


}
