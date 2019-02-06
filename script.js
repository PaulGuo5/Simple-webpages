/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

function button_detail1_function(){
  console.log("Button three clicked!");
// Your code here
  //insert a new element named "Super big Big Mac"
  var get_ul = document.getElementsByTagName("ul")[0];
  var new_li = document.createElement("li");
  var new_text = document.createTextNode("Super big Big Mac");
  new_li.appendChild(new_text);
  get_ul.appendChild(new_li);
}
const button_detail1 = document.getElementById("detail1");
button_detail1.addEventListener('click', button_detail1_function);