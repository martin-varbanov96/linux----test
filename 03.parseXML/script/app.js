/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xml/test.xml",
        dataType: "xml",
        success: function (xml) {
            var xmlCont = $.parseXML(xml);
            $(xml).find('row').each(function(){
                $(this).find("prid").each(function(){
                    $('#content').append("<tr>");
                    $("#content").append("<td>" + $(this).text() +"</td>");
                });
                $(this).find("product").each(function(){
                    $("#content").append("<td>" + $(this).text() +"</td>");
                });
                $(this).find("category").each(function(){
                    $("#content").append("<td>" + $(this).text() +"</td>");
                });
                $(this).find("price").each(function(){
                    $("#content").append("<td>" + $(this).text() +"</td>");
                });
                $(this).find("qty").each(function(){
                    $("#content").append("<td>" + $(this).text() +"</td>");
                });
                $(this).find("sum").each(function(){
                    $("#content").append("<td>" + $(this).text() +"</td>");
                });
            });            
        }    
    });
});