let spots=[];
let ssn = 2;
let sundata;

function preload(){
  let link = "https://data.smartidf.services/api/records/1.0/search/?dataset=daily-sunspot-number&q=&sort=-column_4&facet=year_month_day&facet=column_5&facet=column_6&facet=column_7&refine.year_month_day=1968-04-30"
  sundata = loadJSON(link, showData,);
}
function showData(){
  ssn = sundata.records[0].fields.column_5
  print(ssn) // puls out just the sunspot number from the date
}
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
    let r = random((width/2)-10);

    let x = r*cos(theta);
    let y = r*sin(theta);

    spots[i] = new Spot(x,y);
  }
}