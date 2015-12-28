/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xml/test.xml",
        dataType: "xml",
        success: function (xml) {
            var currentInput;
            var rowId;
            var currentOutput;
            var xmlCont = $.parseXML(xml);
            $(xml).find("row").each(function(){
                rowId = $(this).find(':first-child').html();
                $("#output").append('<div id='+ rowId + ' class="element"></div>');
//                $(xml).find("row").children().each(function(){
//                    console.log($(this).html());
//                    $("#" + rowId).append($(this).html());
//                });
                $(this).children().each(function(){                    
                    $("#" + rowId).append("<div><span>"+ $(this).prop("tagName") + ": "+ "</span><span>" + $(this).html() + "</span></div>");
                });
            });
            setInterval(function(){
                $(".element").css("display", "none");
                currentInput = $("#input").val();
                $(xml).find("row").each(function(){
                    rowId = $(this).find(':first-child').html();
                    $(this).children().each(function(){
                        currentOutput = $(this).html();
                        if(currentOutput == currentInput){
                            $("#" + rowId).css("display", "block");
                        }
                    });
                });
            }, 2000);
        }
    });
});