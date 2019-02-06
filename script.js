/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

function button_detail1_function(){
  console.log("Button detail1 clicked!");
  var get_ul = document.getElementsByTagName("ul")[1];
  get_ul.className = "display";
}
const button_detail1 = document.getElementById("detail1");
button_detail1.addEventListener('click', button_detail1_function);



function button_detail2_function(){
  console.log("Button detail2 clicked!");
  var get_ul = document.getElementsByTagName("ul")[2];
  get_ul.className = "display";
}
const button_detail2 = document.getElementById("detail2");
button_detail1.addEventListener('click', button_detail1_function);