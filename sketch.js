let spots=[];
let ssn = 132

function setup() {
  createCanvas(800, 800);
  background(0)
  makeSunSpots(ssn);
  print(spots)

}

function draw() {
  background(0);
  
  translate(width/2,height/2)
  fill(255,255,0)
  ellipse(0,0,width,height)
  
  for(let i =0;i<spots.length;i++){
    spots[i].move();
    spots[i].display();
    //print(spots[0].x,spots[0].y)
  }
}


function makeSunSpots(num){
  // need to make them only on the disk of the sun
  // get position in polar and plot in cartesian 
  // the x and y cord
  spots =[];
  for(let i =0;i<num;i++){
    // pick a random angle and radius
    let theta = random(360);
    let r = random(width/2);

    let x = r*cos(theta);
    let y = r*sin(theta);

    spots[i] = new Spot(x,y);
  }
}