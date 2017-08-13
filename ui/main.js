console.log('Loaded!');
//Change the text of the index.html
var element = document.getElementById('main-text');
element.innerHTML="New Value";
//Move the Image On Click
var img = document.getElementById('madi');
img.onclick= function()
{
    img.style.marginLeft="50px";
}