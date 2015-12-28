/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xml/test.xml",
        dataType: "xml",
        success: function (xml) {
            var input;
            setInterval(function(){
                input = $("#input").val();
                var tempInput;
                var tempMatch;
                var tempOutput;
                var tempRand;
                var xmlCont = $.parseXML(xml);
                $("#output").empty();
                $(xml).find("row").children().each(function(){                    
                    tempRand =getRandomInRange(1,999);
                    $("#output").append("<div id=" + tempRand + " class='element'></div>");
                    tempInput = $(this).text();
                    if(input == tempInput){
                        
                        $(this).parent().children().each(function(){
                            tempOutput = $(this).text();
                         //   $("#output").append("<div id='match'></div>");
                            $("#"+ tempRand).append(tempOutput);  
                        });
                    }
                });
            }, 2000);    
            function getRandomInRange(min, max){ 
                return Math.floor(Math.random()*(max-min)+min);
            }
//            $(xml).find('row').each(function(){
////                $(this).find("prid").each(function(){
////                    $('#content').append("<tr>");
////                    $("#content").append("<td>" + $(this).text() +"</td>");
////                });
////                $(this).find("product").each(function(){
////                    $("#content").append("<td>" + $(this).text() +"</td>");
////                });
//               
//            });            
        }    
    });
});