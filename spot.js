class Spot{
    constructor(x,y){
        
        this.x = x;
        this.y = y;
        this.d = 20;
        this.speedx = 2;
        this.speedy = 1;
        print(this.x,this.y)
    }

    move(){
        this.x+=random(-this.speedx,this.speedx);
        this.y+=random(-this.speedy,this.speedy);
        
    }
    display(){
        
        //fill(0,0,255)
        fill(0)
        ellipse(this.x,this.y,this.d,this.d);
    }
}