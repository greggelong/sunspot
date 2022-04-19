class Spot{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.d = 20;
        this.speed = 1;
    }

    move(){
        this.x+=random(-this.speed,this.speed);
        this.y+=random(-this.speed,this.speed);
        
    }
    display(){
        ellipse(this.x,this.y,this.d,this.d)
    }
}