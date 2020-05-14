// document.getElementById(creepyFont);
var word = ("Im Moshie Seidenfeld I am a web developer, im here to help with all your web development needs whatever it is ill do it,    with over 0 years of experience always here to help you");
// var ar = [];
// var i;
// ar = word.split();
var i = 0;

function dothis() {


  if (i < word.length) {
  document.querySelector("#creepyFont").innerHTML += word[i];
  i++;
  setTimeout(function(){ dothis(); }, 80);


}
else {
  document.querySelector("#creepyFont").innerHTML += (".");
}
}

window.onload = dothis();


// function start(counter){
//   if(counter < 10){
//     setTimeout(function(){
//       counter++;
//       console.log(counter);
//       start(counter);
//     }, 1000);
//   }
// }
// start(0);
