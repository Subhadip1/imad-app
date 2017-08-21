//counter

var button= document.getElementById('counter');
button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture response and store it in a variable
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            
            //Take some action
            if(requeststatus=== 200){
                
                var counter = request.responseText;
                var span= document.getElementById('count');
                span.innerHTML = counter.toString(); 
            }
        }
    // Not done Yet
    };
    //Make Request
    request.open('GET',"http://subhadip1sc.imad.hasura-app.io/counter",true);
    request.send(null);
};