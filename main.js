//Build the html elements
//create div
var content=document.createElement("div");

//place content div in the body
document.body.appendChild(content);

//Put some words inside the content div
content.innerHTML="Hello World!";

//increase text size 
content.style.fontSize="50px";
//change background
content.style.background="teal";
//half screen width
content.style.width="50%";
//center the div
content.style.textAlign="center";
//center the content div
content.style.margin="10% auto";