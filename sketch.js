let spots=[];
let ssn = 136;
let sundata;
let date;  // global as because it it used by different function


function setup() {
  createCanvas(800, 800);
  background(0)
  input = select('#input');
  input.value('1968-04-30');
  button = select('#btn');
  makeSunSpots(ssn);
  print(spots)
  button.mousePressed(getdate)

}




function draw() {
  background(0);
  textSize(40)
  fill(0,255,0)
  text(ssn,40,40)
  translate(width/2,height/2)
  fill(255,255,0)
  ellipse(0,0,width,height)
  
  for(let i =0;i<spots.length;i++){
    spots[i].move();
    spots[i].display();
    //print(spots[0].x,spots[0].y)
  }
}

function getdate(){
  date = input.value().trim();
  print(date)
  let link = "https://data.smartidf.services/api/records/1.0/search/?dataset=daily-sunspot-number&q=&sort=-column_4&facet=year_month_day&facet=column_5&facet=column_6&facet=column_7&refine.year_month_day="+date
  sundata = loadJSON(link, showData,);
}
function showData(){
  ssn = sundata.records[0].fields.column_5
  print(ssn) // puls out just the sunspot number from the date
  if(ssn => 0){
     makeSunSpots(ssn);
  }
  createP(date+" Number: "+str(ssn))
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