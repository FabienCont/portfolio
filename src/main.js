import './scss/style.scss';

(function() {
var speed=10;
var addSpan= function(container,letter){
  if(letter==="\n"){
    var node = document.createElement("br");
  }else {
    var node = document.createElement("span");
    var textnode = document.createTextNode(letter);
    node.appendChild(textnode);
  }
  container.appendChild(node);
}

var asyncAddSpan=function(container,text,iterator){
  setTimeout(()=> {
    addSpan(container,text[iterator])
    if(iterator<text.length-1){
      asyncAddSpan(container,text,iterator+1)
    }
    else{
      showButtonStartServer()
    }
  }, getRandomTimer());
}

var showAWordLikeItIsWritingByAHuman = function (container,text){
  var iterator=0;
  asyncAddSpan(container,text,iterator);
}

var getRandomTimer=function(){
  return getRandomArbitrary(50,150)/speed;
}

var getRandomArbitrary=function(min, max) {
  return Math.random() * (max - min) + min;
}

var container =document.querySelector(".container-title-prompt");
var butttonContainer = document.querySelector(".button-start-server-container");
var butttonCircle = document.querySelector(".button-start-server-circle");

var showButtonStartServer= function(){
    setTimeout(function(){
      butttonContainer.classList.add("button-start-server-container-show");
      butttonCircle.classList.add("button-start-server-color");
  },500/speed);

}

var text ="\nHello newcomer \nLet's start the server?";

setTimeout(()=> {
  showAWordLikeItIsWritingByAHuman(container,text);
}, 1000);

})();
