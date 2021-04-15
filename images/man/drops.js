class Drops {
constructor(x,y,radius){

    this.body = Bodies.ellipse(x,y,5)
    World.add(world,this.body)
}
display(){
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,this.radius)
    if(this.body.position.y>400){
        this.body.position.y = 0;
    }
}



}