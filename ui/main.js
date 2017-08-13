console.log('Loaded!');
//Change the text of the index.html
var element = document.getElementById('main-text');
element.innerHTML="New Value";
//Move the Image On Click
var img = document.getElementById('madi');
var marginLeft = 0;
function(moveRight)
{
    marginLeft= marginLeft +10;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick= function()
{
    var interval = setInterval(moveRight,20);
}