let spots=[];
let ssn = 120

function setup() {
  createCanvas(800, 800);
  background(0)
  makeSunSpots(ssn);
  print(spots)

}

function draw() {
  background(0);
  //translate(width/2,height/2)
  fill(255,255,0)
  ellipse(0,0,width,height)
  fill(0,0,255)
  for(let i =0;i<spots.length;i++){
    spots[i].move;
    spots[i].display;
    print(spots[0].x,spots[0].y)
  }
}


function makeSunSpots(num){
  spots =[];
  for(let i =0;i<num;i++){
    spots[i] = new Spot();
  }
}