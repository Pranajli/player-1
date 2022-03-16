class Form {
  constructor() {
    this.input=createInput("").attribute("placehloder","Enter your name");
    this.playButton=createButton("play");
    this.titleImg=createImg("./assets/title.png","game title");
    this.greeting=createElement("h2");
  }
setElementsPositions(){
  this.titleImg.position(120,60);
  this.input.position(width/2-110,height/2-80);
  this.playButton.position(width/2-90,height/2-20);
  this.greeting.position(width/2-300,height/2-100);
}
display(){
  this.setElementsPositions();
  this.handleMousePressed();
}
hide(){
  this.greeting.hide()
  this.playButton.hide();
  this.input.hide();
}
handleMousePressed(){
  this.playButton.mousePressed(() =>{
    this.input.hide();
    this.playButton.hide();
    var message=`
    hello ${this.input.value()}
    </br>wait for another player to join...`;
    this.greeting.html(message);

  })
}
}
