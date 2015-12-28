/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
$(document).ready(main);
function main(){
    var input;
    var xhttp = createXmlHttpRequestObject();
    
    if((xhttp.readyState == 4) || (xhttp.readyState == 0)){
        input = $('#input').text();
        xhttp.open("GET", "php\index.php?val=" + input, true);
        xhttp.onreadystatechange = handleServerResponse;
        xhttp.send(null);
    }else{
        setTimeout($(document).ready(main), 1000);
    }
    
    function createXmlHttpRequestObject(){
        var xhttp;
        if(window.ActiveXObject){
            try{
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e){
                xhttp = false;
            }
        }
        else{
            try{
                xhttp = new XMLHttpRequest();
            }
            catch(e){
                xhttp = false;
            }
        }
        if(!xhttp){
            alert("Alert, can't load");
        }else{
            return xhttp;
        }
    }
    
    function handleServerResponse(){
        if(xhttp.readyState == 4){
            if(xhttp.status == 200){
                var xmlResponseVar = xhttp.responseXML;
                xmlDocumentElement = xmlResponseVar.documentElement;
                var message = xmlDocumentElement = xmlResponseVar.data;
                $("#output").html(message);
                setTimeout($(document).ready(main), 1000);

                }else{
                alert("Error with status");
            }
        }
    }
}
