

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable:');
function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(Swap)

  }


function draw()
{
}
function Swap(){
[a,b]=[b,a] ;
console.log("The value of a after Swaping is:",+a) 
console.log("The value of b after Swaping is :",+b) 
}
