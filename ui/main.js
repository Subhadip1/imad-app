//counter

var button= document.getElementById("counter");
var counter= 0;
button.onclick = function(){
    
    //Make a response to the server on our click request
    
    //Store response in a variable
    
    //Render the variable in correct Span
    
    counter = counter+1;
    var span= document.getElementById("count");
    span.innerHTML = counter.toString(); 
}