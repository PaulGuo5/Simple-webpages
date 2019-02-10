function button_moreMovie_function(){
  console.log("Button moreMovie clicked!");
  var get_table = document.getElementById("movieTable");
  var new_tr = document.createElement("tr");
  var new_td1 = document.createElement("td");
  var new_td2 = document.createElement("td");
  var new_td3 = document.createElement("td");
  var new_td4 = document.createElement("td");
  var new_text1 = document.createTextNode("Harry Potter");
  var new_text2 = document.createTextNode("2001-2016");
  var new_text3 = document.createTextNode("Daniel Radcliff");
  var new_text4 = document.createTextNode("Harry Potter is a British-American film series based on the Harry Potter novels by author J. K. Rowling.");
  new_td1.appendChild(new_text1);
  new_td2.appendChild(new_text2);
  new_td3.appendChild(new_text3);
  new_td4.appendChild(new_text4);
  get_table.appendChild(new_td1);
  get_table.appendChild(new_td2);
  get_table.appendChild(new_td3);
  get_table.appendChild(new_td4);

}
const button_moreMovie = document.getElementById("moreMovie");
button_moreMovie.addEventListener('click', button_moreMovie_function);